import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight, ChevronDown, ChevronLeft, ChevronRight, CircleUserRound,
  FileText, Mail, Menu, Phone, Search, ShoppingCart, X, CheckCircle2, MapPin,
} from "lucide-react";
import lockup from "@/assets/siddhi/siddhi-kabel-lockup.png.asset.json";
import lappLogo from "@/assets/siddhi/logo-lapp.png.asset.json";
import eatonLogo from "@/assets/siddhi/logo-eaton.png.asset.json";
import partexLogo from "@/assets/siddhi/logo-partex.png.asset.json";
import mennekesLogo from "@/assets/siddhi/logo-mennekes-clean.png.asset.json";
import promoLapp from "@/assets/siddhi/promo-lapp.jpg.asset.json";
import promoEaton from "@/assets/siddhi/promo-eaton.jpg.asset.json";
import promoPartex from "@/assets/siddhi/promo-partex.jpg.asset.json";
import promoMennekes from "@/assets/siddhi/promo-mennekes.jpg.asset.json";
import cardOlflex from "@/assets/siddhi/card-olflex.jpg.asset.json";
import cardUnitronic from "@/assets/siddhi/card-unitronic.jpg.asset.json";
import cardUniplus from "@/assets/siddhi/card-uniplus.jpg.asset.json";
import cardSkintop from "@/assets/siddhi/card-skintop.jpg.asset.json";
import cardConduit from "@/assets/siddhi/card-conduit.jpg.asset.json";
import cardInfra from "@/assets/siddhi/card-infra.jpg.asset.json";
import eatonPkzm from "@/assets/siddhi/eaton-pkzm0.jpg.asset.json";
import eatonDilm from "@/assets/siddhi/eaton-dilm.jpg.asset.json";
import eatonNzm from "@/assets/siddhi/eaton-nzm.jpg.asset.json";
import eatonFaz from "@/assets/siddhi/eaton-faz.jpg.asset.json";
import eatonRmq from "@/assets/siddhi/eaton-rmq.jpg.asset.json";
import eatonDrives from "@/assets/siddhi/eaton-drives.jpg.asset.json";
import partexPa from "@/assets/siddhi/partex-pa.jpg.asset.json";
import partexPo from "@/assets/siddhi/partex-po.jpg.asset.json";
import partexPc from "@/assets/siddhi/partex-pc.jpg.asset.json";
import partexPks from "@/assets/siddhi/partex-pks.jpg.asset.json";
import partexPromark from "@/assets/siddhi/partex-promark.jpg.asset.json";
import partexTies from "@/assets/siddhi/partex-ties.jpg.asset.json";
import mennDuo from "@/assets/siddhi/menn-duo.jpg.asset.json";
import mennPowertop from "@/assets/siddhi/menn-powertop.jpg.asset.json";
import mennPanel from "@/assets/siddhi/menn-panel.jpg.asset.json";
import mennPhase from "@/assets/siddhi/menn-phase.jpg.asset.json";
import mennEvergum from "@/assets/siddhi/menn-evergum.jpg.asset.json";
import mennAmaxx from "@/assets/siddhi/menn-amaxx.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Siddhi Eshop | Industrial Electrical Solutions" },
    { name: "description", content: "Industrial cables, switchgear, marking systems, plugs and sockets from LAPP, Eaton, Partex and MENNEKES." },
    { property: "og:title", content: "Siddhi Eshop | Industrial Electrical Solutions" },
    { property: "og:description", content: "Authorized industrial electrical products and bulk quotation support." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

type Product = { title: string; subtitle: string; tag: string; image: string };
type Brand = { id: string; name: string; logo: string; accent: string; description: string; products: Product[] };

const brands: Brand[] = [
  { id: "lapp", name: "LAPP", logo: lappLogo.url, accent: "brand-lapp", description: "World leader in integrated cable technology: flexible cables, data communication and connectivity.", products: [
    { title: "Power and Control Cables", subtitle: "ÖLFLEX® CLASSIC 110, 110 SY and 110 CY", tag: "ÖLFLEX®", image: cardOlflex.url },
    { title: "Data Communication Cables", subtitle: "Industrial data and signal transmission", tag: "UNITRONIC®", image: cardUnitronic.url },
    { title: "Control Cabinet Single Cores", subtitle: "Flexible FR and FRLS single cores", tag: "UNIPLUS®", image: cardUniplus.url },
    { title: "Cable Glands & Counter Nuts", subtitle: "Metric and PG cable entry systems", tag: "SKINTOP®", image: cardSkintop.url },
    { title: "Conduit & Connectors", subtitle: "Protective conduit systems and fittings", tag: "SILVYN®", image: cardConduit.url },
    { title: "Domestic House Wiring", subtitle: "Reliable building and infrastructure cables", tag: "LAPP INFRA", image: cardInfra.url },
  ]},
  { id: "eaton", name: "EATON", logo: eatonLogo.url, accent: "brand-eaton", description: "Powering business worldwide with dependable switchgear, protection and industrial control products.", products: [
    { title: "Motor-Protective Breakers", subtitle: "Compact motor protection and switching", tag: "PKZM0", image: eatonPkzm.url },
    { title: "Power Contactors & Relays", subtitle: "Reliable switching for industrial loads", tag: "DILM", image: eatonDilm.url },
    { title: "Molded Case Circuit Breakers", subtitle: "High-performance circuit protection", tag: "NZM", image: eatonNzm.url },
    { title: "Miniature Circuit Breakers", subtitle: "Safe final distribution protection", tag: "FAZ", image: eatonFaz.url },
    { title: "Push Buttons & Pilot Lights", subtitle: "Robust control and indication devices", tag: "RMQ", image: eatonRmq.url },
    { title: "Variable Speed Drives", subtitle: "Efficient motor speed control", tag: "POWERXL", image: eatonDrives.url },
  ]},
  { id: "partex", name: "PARTEX", logo: partexLogo.url, accent: "brand-partex", description: "Swedish identification systems for wires, cables, components and industrial installations.", products: [
    { title: "Closed Chevron Markers", subtitle: "Secure wire and cable identification", tag: "PA", image: partexPa.url },
    { title: "Snap-on Open Markers", subtitle: "Fast identification after termination", tag: "PO", image: partexPo.url },
    { title: "Printable Marker Tubing", subtitle: "Flexible custom-printed sleeves", tag: "PC", image: partexPc.url },
    { title: "Stainless Steel 316 Markers", subtitle: "Identification for harsh environments", tag: "PKS", image: partexPks.url },
    { title: "Thermal Printers", subtitle: "Professional on-demand marking systems", tag: "PROMARK", image: partexPromark.url },
    { title: "Cable Ties & Fasteners", subtitle: "Installation accessories for every panel", tag: "FIXING", image: partexTies.url },
  ]},
  { id: "mennekes", name: "MENNEKES", logo: mennekesLogo.url, accent: "brand-mennekes", description: "Heavy-duty CEE industrial plugs, sockets and power distribution systems made in Germany.", products: [
    { title: "Industrial CEE Plugs IP44/67", subtitle: "Safe connections for demanding sites", tag: "CEE", image: mennDuo.url },
    { title: "Switched Interlocked Sockets", subtitle: "Integrated switching and protection", tag: "DUO", image: mennPowertop.url },
    { title: "Panel Mounted Sockets", subtitle: "Compact industrial panel connections", tag: "PANEL", image: mennPanel.url },
    { title: "Phase Inverter Plugs", subtitle: "Fast phase sequence correction", tag: "PHASE", image: mennPhase.url },
    { title: "Solid Rubber Distro Units", subtitle: "Rugged mobile power distribution", tag: "EVERGUM", image: mennEvergum.url },
    { title: "Modular Combinations", subtitle: "Custom power distribution assemblies", tag: "AMAXX", image: mennAmaxx.url },
  ]},
];

const slides = [
  { eyebrow: "LAPP OEM BULK OFFER", title: "Up to 25% Off on ÖLFLEX® & UNITRONIC® Drums", text: "Special bulk OEM project discount on 500m and 1000m wooden drum orders.", image: promoLapp.url, brand: lappLogo.url },
  { eyebrow: "EATON PROJECT PRICING", title: "Flat 18% Off on PKZM0 Breakers & Contactors", text: "Reliable motor protection and switching for panels, OEMs and industrial projects.", image: promoEaton.url, brand: eatonLogo.url },
  { eyebrow: "PARTEX IDENTIFICATION", title: "Special Offer on Partex Markers & Printers", text: "Complete cable identification systems and thermal printing for bulk requirements.", image: promoPartex.url, brand: partexLogo.url },
  { eyebrow: "MENNEKES BOX RATES", title: "Direct OEM Rates on IP44 & IP67 Plugs", text: "Original heavy-duty plugs, sockets and combinations for demanding applications.", image: promoMennekes.url, brand: mennekesLogo.url },
];

function ActionButton({ children, type = "button", className = "", onClick }: { children: ReactNode; type?: "button" | "submit"; className?: string; onClick?: () => void }) {
  return <button type={type} onClick={onClick} className={`action-button ${className}`}>{children}</button>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [activeBrand, setActiveBrand] = useState("lapp");
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => setSlide((value) => (value + 1) % slides.length), 6000);
    return () => window.clearInterval(id);
  }, []);

  const brand = brands.find((item) => item.id === activeBrand) as Brand;
  const currentSlide = slides[slide] as (typeof slides)[number];
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return brand.products;
    return brand.products.filter((product) => `${product.title} ${product.subtitle} ${product.tag}`.toLowerCase().includes(term));
  }, [brand, query]);

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const submitRfq = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="top-strip">
        <div className="site-shell top-strip-inner">
          <p>Authorized Industrial Electrical Solutions</p>
          <div className="top-contacts"><a href="tel:09620000947"><Phone />096200 00947 / 098860 58511</a><a href="mailto:sales@siddhikabel.com"><Mail />sales@siddhikabel.com</a></div>
        </div>
      </div>

      <header className="main-header">
        <div className="site-shell header-grid">
          <a href="#top" aria-label="Siddhi Kabel home" className="logo-link"><img src={lockup.url} alt="Siddhi Kabel Corporation Private Limited" /></a>
          <div className="header-actions">
            <a href="#contact" className="header-tool"><CircleUserRound /><span><small>Welcome</small><strong>Customer</strong></span></a>
            <button className="header-tool" onClick={() => goTo("rfq")}><FileText /><span><small>Bulk Inquiry</small><strong>Quick RFQ</strong></span></button>
            <button className="header-tool" onClick={() => goTo("rfq")}><ShoppingCart /><span><small>Quotation Cart</small><strong>₹0.00</strong></span></button>
          </div>
          <div className="search-wrap">
            <label className="sr-only" htmlFor="productSearch">Search products</label>
            <Search className="search-icon" />
            <input id="productSearch" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search cables, switchgear, markers or plugs" />
          </div>
        </div>
      </header>

      <nav className="main-nav" aria-label="Primary navigation">
        <div className="site-shell nav-inner">
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}<span>Menu</span></button>
          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            <button onClick={() => goTo("top")}>Home</button>
            <button onClick={() => goTo("products")}>Products & Categories <ChevronDown /></button>
            <button onClick={() => goTo("about")}>About Us</button>
            <button onClick={() => goTo("contact")}>Contact Us</button>
          </div>
          <ActionButton onClick={() => goTo("rfq")} className="nav-rfq">Request Price List / RFQ <ArrowRight /></ActionButton>
        </div>
      </nav>

      <div id="top" className="brand-ticker" aria-label="Authorized brand partners">
        <div className="ticker-track">{[...brands, ...brands].map((item, index) => <div className="ticker-item" key={`${item.id}-${index}`}><img src={item.logo} alt="" /><span>Authorized partner for <strong>{item.name}</strong></span></div>)}</div>
      </div>

      <section className="hero-section" aria-label="Current offers">
        <div className="site-shell">
          <div className="hero-card">
            <img src={currentSlide.image} alt="" className="hero-bg" />
            <div className="hero-shade" />
            <div className="hero-copy">
              <img src={currentSlide.brand} alt="" className="hero-brand" />
              <p className="eyebrow">{currentSlide.eyebrow}</p>
              <h1>{currentSlide.title}</h1>
              <p className="hero-text">{currentSlide.text}</p>
              <ActionButton onClick={() => goTo("rfq")}>Claim offer <ArrowRight /></ActionButton>
            </div>
            <div className="slider-controls">
              <button onClick={() => setSlide((slide - 1 + slides.length) % slides.length)} aria-label="Previous offer"><ChevronLeft /></button>
              <div className="slider-dots">{slides.map((item, index) => <button key={item.eyebrow} className={index === slide ? "active" : ""} onClick={() => setSlide(index)} aria-label={`Show offer ${index + 1}`} />)}</div>
              <button onClick={() => setSlide((slide + 1) % slides.length)} aria-label="Next offer"><ChevronRight /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-strip" aria-label="Shop by brand">
        <div className="site-shell partner-grid">{brands.map((item) => <button key={item.id} className={`partner-card ${activeBrand === item.id ? "selected" : ""}`} onClick={() => { setActiveBrand(item.id); goTo("products"); }}><div className="partner-logo"><img src={item.logo} alt={`${item.name} logo`} /></div><p>{item.description.split(".")[0]}</p><span>Shop now <ArrowRight /></span></button>)}</div>
      </section>

      <section id="products" className="products-section">
        <div className="site-shell">
          <div className="section-heading">
            <div><p className="eyebrow">AUTHORIZED PRODUCT RANGE</p><div className="brand-title"><img src={brand.logo} alt={`${brand.name} logo`} /><h2>Products</h2></div><p>{brand.description}</p></div>
            <button className="about-brand" onClick={() => goTo("about")}>About {brand.name} <ArrowRight /></button>
          </div>
          <div className="brand-tabs" role="tablist" aria-label="Choose a brand">{brands.map((item) => <button role="tab" aria-selected={activeBrand === item.id} key={item.id} onClick={() => setActiveBrand(item.id)} className={activeBrand === item.id ? "active" : ""}>{item.name}</button>)}</div>
          {filtered.length ? <div className="product-grid">{filtered.map((product) => <article className="product-card" key={product.title}><div className="product-image"><img src={product.image} alt={product.title} loading="lazy" /></div><div className="product-copy"><span className="product-tag">{product.tag}</span><h3>{product.title}</h3><p>{product.subtitle}</p><button onClick={() => goTo("rfq")} aria-label={`Request quote for ${product.title}`}><span>Request quote</span><ArrowRight /></button></div></article>)}</div> : <div className="empty-results">No products match “{query}”. Try another search.</div>}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="site-shell about-grid">
          <div><p className="eyebrow">SIDDHI KABEL CORPORATION</p><h2>Dependable Industrial Electrical & Automation Solutions</h2><p>We support panel builders, OEMs, infrastructure teams and manufacturers with genuine industrial products, practical selection help and responsive commercial support.</p></div>
          <div className="stats-grid"><div><strong>4</strong><span>Global brand partners</span></div><div><strong>24</strong><span>Core product families</span></div><div><strong>OEM</strong><span>Bulk project pricing</span></div><div><strong>India</strong><span>Pan-India enquiries</span></div></div>
        </div>
      </section>

      <section id="rfq" className="rfq-section">
        <div className="site-shell rfq-grid">
          <div className="rfq-intro"><p className="eyebrow">FAST COMMERCIAL SUPPORT</p><h2>Request a Bulk Quotation</h2><p>Share your requirement and our team will help with product selection, availability and commercial pricing.</p><ul><li><CheckCircle2 /> Genuine authorized products</li><li><CheckCircle2 /> Project and OEM pricing</li><li><CheckCircle2 /> Technical selection support</li></ul></div>
          <form className="rfq-form" onSubmit={submitRfq}>
            <div className="form-grid"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Company<input required name="company" placeholder="Company name" /></label><label>Email<input required name="email" type="email" placeholder="name@company.com" /></label><label>Phone<input required name="phone" type="tel" placeholder="Mobile number" /></label></div>
            <label>Product requirement<textarea required name="requirement" rows={4} placeholder="Brand, part number, quantity and application" /></label>
            <ActionButton type="submit">Send quotation request <ArrowRight /></ActionButton>
            {submitted && <p className="form-success" role="status"><CheckCircle2 /> Thank you. Your request is ready for our sales team.</p>}
          </form>
        </div>
      </section>

      <section id="contact" className="contact-section"><div className="site-shell contact-grid"><div><Mail /><span>Email us</span><a href="mailto:sales@siddhikabel.com">sales@siddhikabel.com</a></div><div><Phone /><span>Call support</span><a href="tel:09620000947">096200 00947 / 098860 58511</a></div><div><MapPin /><span>Head office</span><p>Bengaluru, Karnataka, India</p></div></div></section>
      <footer className="main-footer"><div className="site-shell footer-grid"><div><img src={lockup.url} alt="Siddhi Kabel Corporation Private Limited" /><p>Industrial cables, control products, marking systems and heavy-duty power connections.</p></div><div><h3>Product lines</h3><button onClick={() => { setActiveBrand("lapp"); goTo("products"); }}>LAPP cables</button><button onClick={() => { setActiveBrand("eaton"); goTo("products"); }}>Eaton switchgear</button><button onClick={() => { setActiveBrand("partex"); goTo("products"); }}>Partex markers</button><button onClick={() => { setActiveBrand("mennekes"); goTo("products"); }}>MENNEKES plugs</button></div><div><h3>Quick contact</h3><a href="mailto:sales@siddhikabel.com">sales@siddhikabel.com</a><a href="tel:09620000947">096200 00947</a><ActionButton onClick={() => goTo("rfq")}>Request RFQ</ActionButton></div></div><div className="site-shell copyright">© 2026 Siddhi Kabel Corporation Private Limited. All rights reserved.</div></footer>
    </main>
  );
}
