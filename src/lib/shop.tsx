import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Customer = {
  id: string;
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  gstNo: string;
  state: string;
  city: string;
  password: string;
  address: string;
  createdAt: string;
};

export type CartItem = {
  id: string;
  name: string;
  brand: string;
  partNo: string;
  price: number;
  unit: string;
  qty: number;
  image?: string;
};

export type RfqPrefill = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  notes?: string;
};

type AuthTab = "login" | "register";

type ShopContextValue = {
  ready: boolean;
  user: Customer | null;
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (item: Omit<CartItem, "qty">, qty?: number) => void;
  updateQty: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  authTab: AuthTab | null;
  openAuth: (tab?: AuthTab) => void;
  closeAuth: () => void;
  accountOpen: boolean;
  setAccountOpen: (open: boolean) => void;
  handleAccountClick: () => void;
  register: (data: Omit<Customer, "id" | "createdAt">) => string | null;
  login: (identifier: string, password: string) => string | null;
  logout: () => void;
  rfqPrefill: RfqPrefill;
  setRfqPrefill: (value: RfqPrefill) => void;
  toast: (message: string) => void;
  toasts: { id: number; message: string }[];
};

const ShopContext = createContext<ShopContextValue | null>(null);

const CART_KEY = "siddhi_eshop_cart";
const CUSTOMERS_KEY = "siddhi_customers";
const CURRENT_KEY = "siddhi_current_user";

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<Customer | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [authTab, setAuthTab] = useState<AuthTab | null>(null);
  const [accountOpen, setAccountOpen] = useState(false);
  const [rfqPrefill, setRfqPrefill] = useState<RfqPrefill>({});
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);

  useEffect(() => {
    setCart(read<CartItem[]>(CART_KEY, []));
    setUser(read<Customer | null>(CURRENT_KEY, null));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, ready]);

  const toast = useCallback((message: string) => {
    const id = Date.now() + Math.random();
    setToasts((list) => [...list, { id, message }]);
    window.setTimeout(() => setToasts((list) => list.filter((item) => item.id !== id)), 4200);
  }, []);

  const addToCart = useCallback(
    (item: Omit<CartItem, "qty">, qty = 1) => {
      setCart((list) => {
        const existing = list.find((entry) => entry.id === item.id);
        if (existing) {
          return list.map((entry) => (entry.id === item.id ? { ...entry, qty: entry.qty + qty } : entry));
        }
        return [...list, { ...item, qty }];
      });
      setCartOpen(true);
      toast(`${item.name} added to your quotation cart.`);
    },
    [toast],
  );

  const updateQty = useCallback((id: string, delta: number) => {
    setCart((list) =>
      list
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0),
    );
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((list) => list.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const persistUser = useCallback((value: Customer | null) => {
    setUser(value);
    if (typeof window === "undefined") return;
    if (value) window.localStorage.setItem(CURRENT_KEY, JSON.stringify(value));
    else window.localStorage.removeItem(CURRENT_KEY);
  }, []);

  const register = useCallback<ShopContextValue["register"]>(
    (data) => {
      const password = data.password;
      if (password.length < 6) return "Password must be at least 6 characters long.";
      if (!/[!@#$%^&*(),.?":{}|<>_\-+=[\]\\/`~]/.test(password)) {
        return "Password must contain at least one special character (e.g. @, #, $, %, &, *).";
      }
      const customers = read<Customer[]>(CUSTOMERS_KEY, []);
      const digits = (value: string) => value.replace(/[^0-9]/g, "");
      if (customers.some((c) => digits(c.phone) === digits(data.phone))) {
        return `An account with Phone Number "${data.phone}" is already registered. Please Sign In.`;
      }
      if (customers.some((c) => c.email.toLowerCase() === data.email.toLowerCase())) {
        return `An account with Email "${data.email}" is already registered. Please Sign In.`;
      }
      const newCustomer: Customer = {
        ...data,
        email: data.email.toLowerCase(),
        gstNo: data.gstNo.toUpperCase(),
        id: `SK-CUST-${Date.now()}`,
        createdAt: new Date().toISOString(),
      };
      window.localStorage.setItem(CUSTOMERS_KEY, JSON.stringify([...customers, newCustomer]));
      persistUser(newCustomer);
      setAuthTab(null);
      setRfqPrefill({
        name: newCustomer.contactPerson,
        company: newCustomer.companyName,
        email: newCustomer.email,
        phone: newCustomer.phone,
      });
      toast(`Welcome, ${newCustomer.contactPerson}! Your account for ${newCustomer.companyName} has been created.`);
      return null;
    },
    [persistUser, toast],
  );

  const login = useCallback<ShopContextValue["login"]>(
    (identifier, password) => {
      if (!identifier || !password) return "Please enter your Phone No / Email and password.";
      const customers = read<Customer[]>(CUSTOMERS_KEY, []);
      const cleanId = identifier.replace(/[^0-9]/g, "");
      const match = customers.find((c) => {
        const phoneMatch = cleanId.length > 5 && c.phone.replace(/[^0-9]/g, "").endsWith(cleanId);
        const emailMatch = c.email.toLowerCase() === identifier.toLowerCase();
        return (phoneMatch || emailMatch) && c.password === password;
      });
      if (!match) return "Invalid credentials. No customer account matched this Phone/Email and password.";
      persistUser(match);
      setAuthTab(null);
      setRfqPrefill({
        name: match.contactPerson,
        company: match.companyName,
        email: match.email,
        phone: match.phone,
      });
      toast(`Welcome back, ${match.contactPerson} (${match.companyName})!`);
      return null;
    },
    [persistUser, toast],
  );

  const logout = useCallback(() => {
    persistUser(null);
    setAccountOpen(false);
    toast("You have been signed out.");
  }, [persistUser, toast]);

  const handleAccountClick = useCallback(() => {
    if (user) setAccountOpen(true);
    else setAuthTab("login");
  }, [user]);

  const value = useMemo<ShopContextValue>(
    () => ({
      ready,
      user,
      cart,
      cartCount: cart.reduce((sum, item) => sum + item.qty, 0),
      cartTotal: cart.reduce((sum, item) => sum + item.qty * item.price, 0),
      addToCart,
      updateQty,
      removeFromCart,
      clearCart,
      cartOpen,
      setCartOpen,
      authTab,
      openAuth: (tab: AuthTab = "login") => setAuthTab(tab),
      closeAuth: () => setAuthTab(null),
      accountOpen,
      setAccountOpen,
      handleAccountClick,
      register,
      login,
      logout,
      rfqPrefill,
      setRfqPrefill,
      toast,
      toasts,
    }),
    [
      ready, user, cart, addToCart, updateQty, removeFromCart, clearCart, cartOpen,
      authTab, accountOpen, handleAccountClick, register, login, logout, rfqPrefill, toast, toasts,
    ],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used inside ShopProvider");
  return context;
}

export const INDIAN_STATES = [
  "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
  "Odisha", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Uttar Pradesh", "Uttarakhand",
  "West Bengal",
];

export function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
