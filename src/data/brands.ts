import lappLogo from "@/assets/siddhi/logo-lapp.png.asset.json";
import eatonLogo from "@/assets/siddhi/logo-eaton.png.asset.json";
import partexLogo from "@/assets/siddhi/logo-partex.png.asset.json";
import mennekesLogo from "@/assets/siddhi/logo-mennekes-clean.png.asset.json";
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
import partexPc from "@/assets/siddhi/partex-pc.jpg.asset.json";
import partexPo from "@/assets/siddhi/partex-po.jpg.asset.json";
import partexPks from "@/assets/siddhi/partex-pks.jpg.asset.json";
import partexPromark from "@/assets/siddhi/partex-promark.jpg.asset.json";
import partexTies from "@/assets/siddhi/partex-ties.jpg.asset.json";
import mennPowertop from "@/assets/siddhi/menn-powertop.jpg.asset.json";
import mennDuo from "@/assets/siddhi/menn-duo.jpg.asset.json";
import mennPanel from "@/assets/siddhi/menn-panel.jpg.asset.json";
import mennPhase from "@/assets/siddhi/menn-phase.jpg.asset.json";
import mennEvergum from "@/assets/siddhi/menn-evergum.jpg.asset.json";
import mennAmaxx from "@/assets/siddhi/menn-amaxx.jpg.asset.json";

export type BrandProduct = {
  badge: string;
  name: string;
  desc: string;
  image: string;
  href?: string;
  cta: string;
};

export type BrandSheet = {
  slug: string;
  name: string;
  logo: string;
  accentVar: string;
  pill: string;
  capsule: string;
  pageTitle: string;
  tagline: string;
  lead: string;
  sections: { title: string; body: string }[];
  stats: { title: string; sub: string }[];
  productsSub: string;
  products: BrandProduct[];
  footer: string;
};

export const BRAND_SHEETS: BrandSheet[] = [
  {
    slug: "lapp",
    name: "LAPP",
    logo: lappLogo.url,
    accentVar: "var(--brand-lapp)",
    pill: "Authorized Channel Partner",
    capsule: "100% Subsidiary of LAPP Germany",
    pageTitle: "About LAPP India",
    tagline: "Reliably Connecting the World • Precision German Engineering",
    lead:
      "LAPP India is a leading global supplier of integrated solutions in cable and connection technology. Producing 130,000 km of control, instrumentation, power, and data cables annually from world-class manufacturing facilities in Bangalore and Bhopal, backed by a nationwide network of 130+ authorized channel partners.",
    sections: [
      {
        title: "Integrated Cable & Connection Technology",
        body:
          "LAPP manufactures ÖLFLEX® power and control cables, UNITRONIC® data cables, ETHERLINE® industrial Ethernet, SKINTOP® cable glands and SILVYN® conduit systems — engineered in Germany and produced to identical standards in India.",
      },
      {
        title: "Ex-Stock Availability at Siddhi Kabel",
        body:
          "Siddhi Kabel holds ready Bangalore stock with cut-length service, wooden drum despatch for OEM bulk orders, and technical selection support for panel builders, machine tool makers and infrastructure contractors.",
      },
    ],
    stats: [
      { title: "130,000 km / yr", sub: "Annual Cable Production" },
      { title: "Jigani & Bhopal", sub: "Dual Manufacturing Plants" },
      { title: "100% German Tech", sub: "Direct Subsidiary" },
      { title: "130+ Partners", sub: "Direct Bangalore Stock" },
    ],
    productsSub: "Official Distributor • Ex-Stock Bangalore • Cut Lengths Available",
    products: [
      { badge: "ÖLFLEX®", name: "Power & Control Cables", desc: "Flexible CLASSIC 110, 110 SY, 110 CY, 100 I oil-resistant control cables.", image: cardOlflex.url, href: "/olflex-cables", cta: "View Products (113)" },
      { badge: "UNITRONIC®", name: "Data Communication", desc: "Shielded LiYY, LiYCY, and twisted pair LiYCY(TP) cables for clean signal transmission.", image: cardUnitronic.url, cta: "Request Quote" },
      { badge: "UNIPLUS®", name: "Cabinet Single Cores", desc: "UNIPLUS® FR & FRLS single-core copper wires for panel boards and switchboards.", image: cardUniplus.url, cta: "Request Quote" },
      { badge: "SKINTOP®", name: "Glands & Counter Nuts", desc: "SKINTOP® polyamide/brass strain-relief cable glands with IP68 seal and counter nuts.", image: cardSkintop.url, cta: "Request Quote" },
      { badge: "SILVYN®", name: "Rill, Conduit & Klick", desc: "Corrugated flexible conduits and KLICK fittings for mechanical and chemical protection.", image: cardConduit.url, cta: "Request Quote" },
      { badge: "LAPP INFRA", name: "Domestic / House Wiring", desc: "ISI-marked Flame Retardant (FR-LSH) building wires for commercial and residential safety.", image: cardInfra.url, cta: "Request Quote" },
    ],
    footer:
      "Authorized Lapp Channel Partner: Siddhi Kabel Corporation Private Limited • Banashankari 3rd Stage, Bangalore 560085 • Phone: 09620000947",
  },
  {
    slug: "eaton",
    name: "EATON",
    logo: eatonLogo.url,
    accentVar: "var(--brand-eaton)",
    pill: "Authorized Industrial Distributor",
    capsule: "Global Power Management • Moeller Series Switchgear",
    pageTitle: "About EATON Moeller Switchgear",
    tagline: "Powering Business Worldwide • Moeller Series",
    lead:
      "Eaton is a global intelligent power management company dedicated to improving the quality of life and protecting the environment for people everywhere. With over a century of electrical engineering innovation, Eaton's Electrical Sector is a worldwide benchmark in power distribution, circuit protection, motor control, industrial automation, and harsh environment solutions.",
    sections: [
      {
        title: "Global Power Management Leadership",
        body:
          "In India, Eaton operates state-of-the-art manufacturing and engineering development centers delivering certified, high-reliability switchgear designed for continuous industrial operation.",
      },
      {
        title: "Comprehensive Moeller Series Automation Portfolio",
        body:
          "Recognized across panel builders, machine tool manufacturers, and process industries, the world-famous Moeller series portfolio provides unmatched reliability. Key product families include PKZM0® & PKE motor-protective circuit breakers up to 65A, DILM® contactors and thermal overload relays up to 1000A, NZM® molded case circuit breakers up to 1600A, FAZ® miniature circuit breakers (up to 15kA breaking capacity), RMQ-Titan® pilot devices, and PowerXL® variable speed drives.",
      },
    ],
    stats: [
      { title: "100+ Years", sub: "Electrical Engineering" },
      { title: "Moeller Series", sub: "Industrial Switchgear" },
      { title: "Up to 1600A", sub: "NZM MCCB Range" },
      { title: "Bangalore Stock", sub: "Immediate Despatch" },
    ],
    productsSub: "Official Distributor • Immediate Bangalore Stock • Project Inquiries",
    products: [
      { badge: "PKZM0®", name: "Motor-Protective Breakers", desc: "PKZM0 & PKZM4 rotary motor starters up to 65A with short-circuit and thermal overload protection.", image: eatonPkzm.url, cta: "Request Quotation" },
      { badge: "DILM®", name: "Power Contactors & Relays", desc: "DILM 3-pole & 4-pole contactors from 7A to 1000A with electronic coils and wide voltage tolerance.", image: eatonDilm.url, cta: "Request Quotation" },
      { badge: "NZM®", name: "Molded Case Circuit Breakers", desc: "NZM1 to NZM4 compact MCCBs up to 1600A with thermomagnetic and digital electronic trip units.", image: eatonNzm.url, cta: "Request Quotation" },
      { badge: "FAZ®", name: "Miniature Circuit Breakers", desc: "FAZ industrial DIN-rail MCB 0.5A to 63A with 15kA breaking capacity and B, C, D trip curves.", image: eatonFaz.url, cta: "Request Quotation" },
      { badge: "RMQ-TITAN®", name: "Push Buttons & Pilot Lights", desc: "M22 22mm pilot lights, selector switches, and illuminated mushroom e-stops with IP67/IP69K protection.", image: eatonRmq.url, cta: "Request Quotation" },
      { badge: "POWERXL®", name: "Variable Speed Drives", desc: "DC1 & DA1 high-performance AC frequency inverters for motors up to 250 kW with Modbus / CANopen.", image: eatonDrives.url, cta: "Request Quotation" },
    ],
    footer:
      "Authorized Eaton Distributor: Siddhi Kabel Corporation Private Limited • Banashankari 3rd Stage, Bangalore 560085 • Phone: 09620000947",
  },
  {
    slug: "partex",
    name: "PARTEX",
    logo: partexLogo.url,
    accentVar: "var(--brand-partex)",
    pill: "Authorized Distributor",
    capsule: "Swedish Industrial Marking Systems • Wire & Cable ID",
    pageTitle: "About PARTEX Sweden Marking Systems",
    tagline: "Swedish Identification Systems Since 1948",
    lead:
      "Founded in Sweden in 1948, Partex Marking Systems is a world leader in high-durability industrial wire, cable, pipe, and component identification systems. With over 75 years of manufacturing expertise and operations in more than 60 countries, Partex supplies certified marking solutions engineered for electrical switchgear, rail, defense, marine, and energy automation.",
    sections: [
      {
        title: "World Pioneer in Cable & Wire Identification",
        body:
          "Partex marking profiles are cadmium and silicon free, UL94-V0 rated and resistant to oils, acids and UV — keeping panel wiring legible for the full life of the installation.",
      },
      {
        title: "Complete Marking Portfolio at Siddhi Kabel",
        body:
          "Siddhi Kabel maintains ex-stock availability in Bangalore for the complete Partex product line: PA® closed chevron-cut wire sleeves, PC® clip-on snap markers, PO/POZ® printable heat-shrink and oval tubing, PKS® acid-proof 316 stainless steel cable markers, high-speed ProMark T-1000 thermal transfer printing systems, and heavy-duty cable ties.",
      },
    ],
    stats: [
      { title: "Since 1948", sub: "Swedish Manufacturing" },
      { title: "60+ Countries", sub: "Global Supply Network" },
      { title: "0.2 – 70 mm²", sub: "Marker Size Coverage" },
      { title: "Custom Printing", sub: "In-House Service" },
    ],
    productsSub: "Official Distributor • Ex-Stock Bangalore • Custom Printing Services",
    products: [
      { badge: "PA®", name: "Closed Chevron Wire Markers", desc: "Interlocking chevron profile ensures straight, non-rotating legibility on wires from 0.2 to 70 mm².", image: partexPa.url, cta: "Request Quotation" },
      { badge: "PC®", name: "Snap-on Open Cable Markers", desc: "Open clip-on markers for post-termination retrofitting onto connected cables and patch panels.", image: partexPc.url, cta: "Request Quotation" },
      { badge: "PO / POZ®", name: "Printable Marker Profile & Tubing", desc: "Flexible oval profile PVC and zero-halogen POZ tubing for high-speed automated thermal printing.", image: partexPo.url, cta: "Request Quotation" },
      { badge: "PKS®", name: "Stainless Steel 316 Markers", desc: "Acid-proof AISI 316 stainless steel embossed markers for chemical plants, offshore, and harsh environments.", image: partexPks.url, cta: "Request Quotation" },
      { badge: "PROMARK®", name: "ProMark T-1000 Thermal Printers", desc: "Portable high-precision thermal transfer marker printers with USB and built-in QWERTY keyboard.", image: partexPromark.url, cta: "Request Quotation" },
      { badge: "PARTEX®", name: "Cable Ties & Fasteners", desc: "UV-resistant nylon 6.6 and ball-lock stainless steel cable ties for secure industrial bundling.", image: partexTies.url, cta: "Request Quotation" },
    ],
    footer:
      "Authorized Partex Distributor: Siddhi Kabel Corporation Private Limited • Banashankari 3rd Stage, Bangalore 560085 • Phone: 09620000947",
  },
  {
    slug: "mennekes",
    name: "MENNEKES",
    logo: mennekesLogo.url,
    accentVar: "var(--brand-mennekes)",
    pill: "Authorized Importer & Distributor",
    capsule: "German Industrial CEE Plugs & Sockets • MY POWER CONNECTION",
    pageTitle: "About MENNEKES Germany",
    tagline: "MY POWER CONNECTION • Made in Germany since 1935",
    lead:
      "Founded in 1935 in Kirchhundem, Germany, MENNEKES Elektrotechnik GmbH & Co. KG is globally acknowledged as the gold standard in industrial electrical plugs and sockets. With over 15,000 certified products sold in more than 90 countries, MENNEKES provides safe electrical power connections for demanding industrial environments including steel plants, mining, container ports, automotive factories, data centers, and construction sites.",
    sections: [
      {
        title: "World Pioneer in Industrial Plugs & Receptacles",
        body:
          "Every MENNEKES connection is built for continuous industrial duty — ErgoCONTACT cage terminals, impact-resistant enclosures and IP44 to IP67 sealing for indoor and outdoor service.",
      },
      {
        title: "Complete CEE Range Supplied by Siddhi Kabel",
        body:
          "Siddhi Kabel imports and distributes genuine MENNEKES Germany hardware: PowerTOP® Xtra 16A to 125A heavy-duty plugs & connectors (IP44 / IP67), DUO® mechanically interlocked switched socket outlets, panel-mounted straight & angled receptacles, Phase Inverter motor reversal plugs, EverGUM® solid vulcanized rubber power distribution units, and AMAXX® custom-configured socket combinations.",
      },
    ],
    stats: [
      { title: "Since 1935", sub: "Kirchhundem, Germany" },
      { title: "15,000+ Products", sub: "Certified CEE Range" },
      { title: "90+ Countries", sub: "Worldwide Supply" },
      { title: "IP44 / IP67", sub: "Protection Classes" },
    ],
    productsSub: "Authorized Distributor • Immediate Bangalore Stock • Project Inquiries",
    products: [
      { badge: "POWERTOP®", name: "PowerTOP® Xtra Plugs & Sockets", desc: "16A to 125A IP54/IP67 heavy-duty rubberized industrial CEE plugs with ErgoCONTACT cage terminals.", image: mennPowertop.url, cta: "Request Quotation" },
      { badge: "DUO®", name: "Switched Interlocked Sockets", desc: "DUO mechanical interlock prevents plugging in under load and switching on without plug inserted.", image: mennDuo.url, cta: "Request Quotation" },
      { badge: "MENNEKES®", name: "Panel Mounted Straight & Angled", desc: "Straight & 20° angled panel sockets for industrial machinery, OEM distribution panels, and gensets.", image: mennPanel.url, cta: "Request Quotation" },
      { badge: "PHASE INVERTER", name: "Phase Inverter Reversal Plugs", desc: "Instant 180° rotation of two phase pins to easily reverse 3-phase motor rotation without re-wiring.", image: mennPhase.url, cta: "Request Quotation" },
      { badge: "EVERGUM®", name: "EverGUM Solid Rubber Distro", desc: "Indestructible vulcanized rubber portable distribution boxes for construction, tunnels, and events.", image: mennEvergum.url, cta: "Request Quotation" },
      { badge: "AMAXX®", name: "AMAXX® Modular Combinations", desc: "Custom combinable industrial receptacle enclosures fitted with MCBs, RCDs, and CEE sockets.", image: mennAmaxx.url, cta: "Request Quotation" },
    ],
    footer:
      "Authorized Mennekes Importer: Siddhi Kabel Corporation Private Limited • Banashankari 3rd Stage, Bangalore 560085 • Phone: 09620000947",
  },
];

export function getBrandSheet(slug: string) {
  return BRAND_SHEETS.find((sheet) => sheet.slug === slug);
}
