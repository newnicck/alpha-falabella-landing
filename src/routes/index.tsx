import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Headphones, Cpu, Zap, Star, Check } from "lucide-react";
import heroLaptop from "@/assets/hero-laptop.jpg";

import productKeyboard from "@/assets/product-keyboard.jpg";
import productHeadset from "@/assets/product-headset.jpg";
import productMonitor from "@/assets/product-monitor.jpg";
import productBackpackDell from "@/assets/product-backpack-dell.jpg";
import productMouseLenovo from "@/assets/product-mouse-lenovo.jpg";
import productDockingAsus from "@/assets/product-docking-asus.jpg";
import productMicrosdSandisk from "@/assets/product-microsd-sandisk.jpg";
import productHeadsetPoly from "@/assets/product-headset-poly.jpg";
import productInkHp from "@/assets/product-ink-hp.jpg";
import productPendriveKingston from "@/assets/product-pendrive-kingston.jpg";
import productLockLenovo from "@/assets/product-lock-lenovo.jpg";
import logoAlpha from "@/assets/logo-alpha.png";

const FALABELLA_URL = "https://www.falabella.com/falabella-cl";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alpha Computer — Tecnología y Gaming en Falabella Chile" },
      { name: "description", content: "Alpha Computer: notebooks, periféricos gamer y accesorios tech con envío a todo Chile vía Falabella Seller Center." },
      { property: "og:title", content: "Alpha Computer — Tecnología que rinde" },
      { property: "og:description", content: "Compra notebooks, teclados, mouse y accesorios gamer en Falabella." },
    ],
  }),
  component: Index,
});

const products = [
  
  { name: "Teclado Mecánico RGB", price: "$49.990", img: productKeyboard, tag: "Nuevo", url: undefined },
  { name: "Audífonos Inalámbricos", price: "$59.990", img: productHeadset, tag: "Oferta", url: undefined },
  { name: "Monitor Curvo 34\"", price: "$299.990", img: productMonitor, tag: "Premium", url: undefined },
  {
    name: "Mochila Dell EcoLoop Essential 15\"",
    price: "$39.990",
    img: productBackpackDell,
    tag: "Eco",
    url: "https://www.falabella.com/falabella-cl/product/153714901/Mochila-Dell-EcoLoop-Essential-para-Notebook-15in-18-Litros/153714903",
  },
  {
    name: "Mouse Lenovo ThinkPad Essential Wireless",
    price: "$23.990",
    img: productMouseLenovo,
    tag: "Oficina",
    url: "https://www.falabella.com/falabella-cl/product/153490835/Mouse-inalambrico-Lenovo-ThinkPad-Essential-Wireless-Negro-1200-DPI/153490836",
  },
  {
    name: "Docking Station ASUS DC300 USB-C 3 Pantallas 4K",
    price: "$149.990",
    img: productDockingAsus,
    tag: "Pro",
    url: "https://www.falabella.com/falabella-cl/product/152515258/Docking-Station-ASUS-DC300-USB-C-Hasta-3-Pantallas-4K/152515259",
  },
  {
    name: "Memoria MicroSDXC 128GB Sandisk para Nintendo Switch",
    price: "$24.990",
    img: productMicrosdSandisk,
    tag: "Gamer",
    url: "https://www.falabella.com/falabella-cl/product/136517605/Memoria-MicroSDXC-128GB-Sandisk-para-Nintendo-Switch/136517606",
  },
  {
    name: "Auriculares On-Ear Alámbrico Poly Blackwire 3220",
    price: "$49.990",
    img: productHeadsetPoly,
    tag: "Audio",
    url: "https://www.falabella.com/falabella-cl/product/153354972/Auriculares-On-Ear-Alambrico-Poly-Blackwire-3220-Negro/153354973",
  },
  {
    name: "Pack 4x Botellas de Tinta HP GT53/GT52 Black/Cyan/Magenta/Yellow",
    price: "$39.990",
    img: productInkHp,
    tag: "Impresión",
    url: "https://www.falabella.com/falabella-cl/product/152363452/Pack-4x-Botellas-de-Tinta-HP-GT53GT52-BlackCyanMagentaYelloy/152363453",
  },
  {
    name: "Kingston DataTraveler Duo Pendrive 256GB USB Tipo A y C",
    price: "$29.990",
    img: productPendriveKingston,
    tag: "Almacenamiento",
    url: "https://www.falabella.com/falabella-cl/product/153151438/Kingston-Data-Traveler-Duo-Pendrive,-256GB,-DTDEG2,-USB,-Tipo-A-y-Tipo-C/153151439",
  },
  {
    name: "Candado de seguridad con llave Lenovo 57Y4303",
    price: "$19.990",
    img: productLockLenovo,
    tag: "Seguridad",
    url: "https://www.falabella.com/falabella-cl/product/153482822/Candado-de-seguridad-con-llave-Lenovo-57Y4303/153482823",
  },
];

const brands = ["LOGITECH", "HYPERX", "ASUS", "RAZER", "CORSAIR", "MSI", "REDRAGON"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-brand text-brand-foreground text-xs font-medium py-2 px-4 text-center">
        Despacho a todo Chile · Compra segura en Falabella · Garantía oficial
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2" aria-label="Alpha Computer">
            <img src={logoAlpha} alt="Alpha Computer" className="h-9 md:h-10 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#productos" className="hover:text-foreground transition-colors">Productos</a>
            <a href="#categorias" className="hover:text-foreground transition-colors">Categorías</a>
            <a href="#beneficios" className="hover:text-foreground transition-colors">Beneficios</a>
            <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
          </nav>
          <a
            href={FALABELLA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand text-brand-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Comprar <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,oklch(0.75_0.18_215_/_0.3)_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-brand mb-6">
              <Zap className="size-3.5" /> Vendedor oficial en Falabella Seller Center
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
              Tecnología <br />
              <span className="bg-gradient-to-r from-brand to-brand-glow bg-clip-text text-transparent">
                que rinde.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              Notebooks, periféricos gamer y accesorios premium. Envío rápido a todo Chile con la garantía y seguridad de Falabella.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={FALABELLA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand text-brand-foreground px-7 py-3.5 font-semibold hover:scale-105 transition-transform"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                Ver tienda en Falabella <ArrowRight className="size-4" />
              </a>
              <a
                href="#productos"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 font-semibold hover:bg-surface transition-colors"
              >
                Explorar productos
              </a>
            </div>
            <div className="flex items-center gap-6 mt-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-brand text-brand" />)}</div>
                <span>4.9 / 5</span>
              </div>
              <div>+10.000 clientes</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-brand/30 blur-3xl rounded-full animate-glow" />
            <img
              src={heroLaptop}
              alt="Notebook gamer Alpha Computer"
              width={1280}
              height={960}
              className="relative animate-float rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Brands marquee */}
      <section className="border-y border-border bg-surface/40 py-8 overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="font-display font-bold text-2xl text-muted-foreground/60 tracking-widest">
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categorias" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-2">Categorías</p>
            <h2 className="text-4xl md:text-5xl font-bold">Equipa tu setup</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Cpu, title: "Notebooks", desc: "Gaming y oficina" },
            { icon: Headphones, title: "Audio", desc: "Audífonos y parlantes" },
            { icon: Zap, title: "Periféricos", desc: "Teclados y mouse" },
            { icon: ShieldCheck, title: "Accesorios", desc: "Cables, hubs y más" },
          ].map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 hover:border-brand/50 transition-all"
              style={{ transition: "var(--transition-smooth)" }}
            >
              <div className="absolute -top-10 -right-10 size-32 rounded-full bg-brand/10 blur-2xl group-hover:bg-brand/20 transition-colors" />
              <c.icon className="size-8 text-brand mb-4" />
              <h3 className="font-semibold text-lg mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="productos" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-2">Destacados</p>
            <h2 className="text-4xl md:text-5xl font-bold">Lo más vendido</h2>
          </div>
          <a
            href={FALABELLA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all"
          >
            Ver todo en Falabella <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((p) => (
            <a
              key={p.name}
              href={p.url ?? FALABELLA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border border-border bg-surface overflow-hidden hover:border-brand/50 hover:-translate-y-1 transition-all"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="absolute top-3 left-3 z-10 rounded-full bg-brand text-brand-foreground text-xs font-semibold px-3 py-1">
                {p.tag}
              </div>
              <div className="aspect-square bg-white overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold mb-1 truncate">{p.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-brand font-display font-bold text-xl">{p.price}</span>
                  <ArrowRight className="size-4 text-muted-foreground group-hover:text-brand group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-2 p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-2">¿Por qué Alpha?</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Compra con la <span className="text-brand">confianza</span> de Falabella.
              </h2>
              <p className="text-muted-foreground mb-8">
                Somos vendedor oficial verificado en Falabella Seller Center. Toda compra cuenta con la protección, despacho y atención de la plataforma líder en Chile.
              </p>
              <ul className="space-y-3">
                {[
                  "Productos 100% originales con garantía",
                  "Despacho a todo Chile en 24-72 hrs",
                  "Pago seguro con CMR, débito y crédito",
                  "Cambios y devoluciones según política Falabella",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="mt-0.5 size-5 rounded-full bg-brand/20 grid place-items-center shrink-0">
                      <Check className="size-3 text-brand" />
                    </div>
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Truck, title: "Envío rápido", desc: "A todo Chile" },
                { icon: ShieldCheck, title: "Garantía", desc: "Productos originales" },
                { icon: Headphones, title: "Soporte", desc: "Atención dedicada" },
                { icon: Star, title: "Top vendedor", desc: "Calificación 4.9★" },
              ].map((f) => (
                <div key={f.title} className="rounded-2xl bg-background/50 border border-border p-6">
                  <f.icon className="size-7 text-brand mb-3" />
                  <h3 className="font-semibold mb-1">{f.title}</h3>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div
          className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
          style={{ background: "var(--gradient-brand)" }}
        >
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,oklch(0.1_0.03_250)_1px,transparent_0)] [background-size:24px_24px]" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-brand-foreground mb-4 max-w-2xl mx-auto">
              Listo para mejorar tu setup
            </h2>
            <p className="text-brand-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Visita nuestra tienda oficial en Falabella y descubre todas las ofertas disponibles.
            </p>
            <a
              href={FALABELLA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-foreground text-brand px-8 py-4 font-semibold hover:scale-105 transition-transform"
            >
              Ir a Falabella ahora <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="border-t border-border bg-surface/40 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src={logoAlpha} alt="Alpha Computer" className="h-12 w-auto bg-white/95 rounded-lg p-2" />
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Tecnología y gaming en Chile. Vendedor oficial en Falabella Seller Center.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Tienda</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href={FALABELLA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Ver en Falabella</a></li>
              <li><a href="#productos" className="hover:text-brand">Productos</a></li>
              <li><a href="#categorias" className="hover:text-brand">Categorías</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Av. Lib. Bernardo O'Higgins 1302, of. 70, Santiago</li>
              <li>
                <a
                  href="https://wa.me/56984283535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  WhatsApp Business: +56 9 8428 3535
                </a>
              </li>
              <li>Lun a Vie · 9:00 - 18:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Alpha Computer. Todos los derechos reservados.</p>
            <p>Vendedor oficial · Falabella Seller Center Chile</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/56984283535"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contáctanos por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-glow hover:scale-105 transition-transform"
      >
        <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden="true">
          <path d="M19.11 17.21c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.2-1.35-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32zM12.04 21.8h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.72.97.99-3.62-.23-.37a9.81 9.81 0 0 1-1.51-5.24c0-5.43 4.43-9.85 9.86-9.85 2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 0 1 2.89 6.97c0 5.43-4.43 9.84-9.86 9.84zm8.39-18.24A11.78 11.78 0 0 0 12.04 0C5.5 0 .17 5.32.16 11.86c0 2.09.55 4.13 1.59 5.93L.06 24l6.34-1.66a11.86 11.86 0 0 0 5.64 1.43h.01c6.54 0 11.87-5.32 11.87-11.86 0-3.17-1.23-6.15-3.49-8.39z"/>
        </svg>
        <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
      </a>
    </div>
  );
}
