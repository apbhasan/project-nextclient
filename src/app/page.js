import Link from "next/link";

const featureCards = [
  {
    title: "Curated Premium Tech",
    description: "Only hand-picked flagship gadgets that meet our performance and design standards.",
  },
  {
    title: "Next-day Delivery",
    description: "Fast, secure shipping with live tracking for all LuxeMart orders.",
  },
  {
    title: "Trusted Warranty",
    description: "All products come with verified warranty and dedicated support.",
  },
  {
    title: "Secure Payments",
    description: "Multiple trusted payment gateways with 3D secure checkout.",
  },
];

const collection = [
  {
    label: "Ultra Phones",
    desc: "4K displays, 120Hz refresh, pro-grade cameras.",
  },
  {
    label: "Studio Laptops",
    desc: "For creators, developers, and power users.",
  },
  {
    label: "Smart Audio",
    desc: "Immersive sound bars, headphones, and speakers.",
  },
  {
    label: "Home Essentials",
    desc: "Smart lights, security, and automation gear.",
  },
];

const testimonials = [
  {
    name: "Ayaan Rahman",
    role: "Product Designer",
    quote:
      "LuxeMart’s layout feels premium and smooth on every screen size. Love the focused product cards.",
  },
  {
    name: "Sara Khan",
    role: "Frontend Developer",
    quote:
      "Clean structure, responsive grid, and consistent components. Perfect starter for a full-stack project.",
  },
  {
    name: "Rohan Mehta",
    role: "Tech Enthusiast",
    quote:
      "The interface feels like a real e-commerce store. Simple, elegant, and fast.",
  },
];

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.15),_transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-20 md:flex-row md:items-center md:pb-20 md:pt-24">
          {/* Left */}
          <div className="flex-1">
            <p className="inline-flex items-center rounded-full border border-emerald-500/40 bg-slate-900/70 px-3 py-1 text-xs font-medium text-emerald-300 shadow shadow-emerald-500/20">
              Premium Gadget Hub
              <span className="ml-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
              Discover tech that{" "}
              <span className="bg-gradient-to-tr from-indigo-400 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
                feels luxurious
              </span>
              .
            </h1>

            <p className="mt-5 max-w-xl text-sm text-slate-300 sm:text-base">
              LuxeMart is your curated storefront for flagship devices. Smooth,
              responsive, and ready for full-stack integration with protected
              dashboards and MongoDB-backed data.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-500"
              >
                Browse Products
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-2.5 text-sm font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-300"
              >
                Explore Features
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-xs text-slate-400">
              <div>
                <div className="text-sm font-semibold text-emerald-300">
                  24/7
                </div>
                Support
              </div>
              <div>
                <div className="text-sm font-semibold text-emerald-300">
                  100%
                </div>
                Secure checkout
              </div>
              <div>
                <div className="text-sm font-semibold text-emerald-300">
                  +50
                </div>
                Curated devices
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1">
            <div className="mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-black/60 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Featured Drop
                </span>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[10px] font-medium text-emerald-300">
                  In stock
                </span>
              </div>

              <div className="mt-4 h-44 w-full overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
                <div className="flex h-full flex-col justify-between p-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      LuxeMart Signature
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-slate-50">
                      Aurora X Pro Headset
                    </h3>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-slate-400">
                        Spatial audio • Adaptive ANC
                      </p>
                      <p className="mt-1 text-sm font-semibold text-emerald-300">
                        $329.00
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <span className="h-7 w-7 rounded-full bg-gradient-to-tr from-indigo-500 via-blue-500 to-emerald-400 opacity-80" />
                      <span className="h-7 w-7 rounded-full bg-gradient-to-tr from-slate-700 to-slate-400 opacity-60" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-400">
                Built for this assignment: Next.js App Router, NextAuth, Express
                backend, MongoDB, and protected dashboards out of the box.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURES */}
      <section
        id="features"
        className="border-b border-slate-800 bg-slate-950/80"
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50">
                Why build with LuxeMart?
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                A clean structure you can extend into a real product catalog,
                admin panel, or course marketplace.
              </p>
            </div>
            <p className="text-xs text-slate-500">
              Next.js App Router • NextAuth • Express API • MongoDB
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:border-emerald-400/70 hover:shadow-emerald-500/20"
              >
                <div className="mb-3 h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-emerald-400 opacity-80 transition group-hover:opacity-100" />
                <h3 className="text-sm font-semibold text-slate-100">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: COLLECTION PREVIEW */}
      <section
        id="collection"
        className="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50">
                Curated collections
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Organize your product types or course categories into clean
                sections.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-1.5 text-xs font-medium text-slate-200 hover:border-emerald-400 hover:text-emerald-300"
            >
              View full catalog
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {collection.map((item) => (
              <div
                key={item.label}
                className="group flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:border-indigo-500/70 hover:shadow-indigo-500/20"
              >
                <div className="mt-1 h-9 w-9 rounded-2xl bg-slate-800 ring-1 ring-slate-700 group-hover:ring-indigo-400" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-100">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TESTIMONIALS */}
      <section
        id="testimonials"
        className="border-b border-slate-800 bg-slate-950/90"
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold text-slate-50">
            Loved by builders & learners
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Use this layout as a foundation for your assignment or your next
            real project.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm shadow-lg shadow-black/40"
              >
                <p className="text-xs text-slate-300">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400" />
                  <div>
                    <p className="text-xs font-semibold text-slate-100">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section
        id="cta"
        className="border-b border-slate-800 bg-gradient-to-br from-indigo-950 via-slate-950 to-emerald-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-indigo-600/40 bg-slate-950/60 px-6 py-10 shadow-xl shadow-indigo-800/40 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50">
                Ready to build the full experience?
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Add protected dashboards, product management, and live MongoDB
                data on top of this layout.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400"
              >
                Login to manage products
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-slate-300/40 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:border-emerald-200/60 hover:text-emerald-200"
              >
                Browse catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
