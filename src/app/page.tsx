import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pool Pro&Lab | Thailand's Premier Pool Equipment & Water Testing Lab",
  description:
    "Thailand's leading pool equipment supplier and ASEAN's first computerized water testing laboratory. Professional pool services across Bangkok, Chiang Mai, Chiang Rai, and Hua Hin.",
  openGraph: {
    title: "Pool Pro&Lab | Pool Equipment, Water Testing Lab & Services",
    description:
      "Thailand's leading pool equipment supplier and ASEAN's first computerized water testing laboratory.",
  },
};

const categories = [
  { name: "Cleaning Robots", img: "/assets/images/category-cleaning-robot.jpg", href: "/shop" },
  { name: "Cleaning Equipment", img: "/assets/images/category-cleaning-equipment.jpg", href: "/shop" },
  { name: "Pool Chemicals", img: "/assets/images/category-chemicals.png", href: "/shop" },
  { name: "Premium Chemicals", img: "/assets/images/category-chemicals-premium.png", href: "/shop" },
  { name: "Pool Pumps", img: "/assets/images/category-pump.png", href: "/shop" },
  { name: "Salt Chlorinators", img: "/assets/images/category-salt-chlorinator.png", href: "/shop" },
  { name: "Mineral Swim", img: "/assets/images/category-mineral-swim.png", href: "/shop" },
];

const services = [
  {
    n: "01",
    title: "Water Testing Lab",
    body:
      "ASEAN's first computerized water analysis lab. We measure 11 parameters and return expert recommendations within seven days.",
    href: "/lab",
  },
  {
    n: "02",
    title: "Water Treatment",
    body:
      "Premium Australian sanitizers, pH buffers, clarifiers, and protection — sized to the way your pool actually behaves.",
    href: "/service",
  },
  {
    n: "03",
    title: "Care & Cleaning",
    body:
      "Routine maintenance from trained technicians. Vacuum, balance, equipment checks, repair, and problem water — handled.",
    href: "/service",
  },
];

const stats = [
  { value: "20+", label: "Years in operation" },
  { value: "14,000+", label: "Pools built in Thailand" },
  { value: "11", label: "Water parameters tested" },
  { value: "4", label: "Branches nationwide" },
];

const labChecks = [
  "Eleven water parameters, measured precisely",
  "Computerized analysis, not eyeballed test strips",
  "First certified lab of its kind in ASEAN",
  "Written report and recommendations within seven days",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-10">
            Pool equipment · Water lab · Service — Since 2004
          </p>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-[var(--navy)]">
                Clean water.
                <br />
                Honest equipment.
                <br />
                <span className="text-[var(--aqua)]">Twenty years on it.</span>
              </h1>
            </div>

            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed max-w-md">
                Thailand&apos;s leading pool equipment supplier, certified water testing
                laboratory, and full-service maintenance team — under one roof.
              </p>
              <div className="flex items-center gap-6 mt-8">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                >
                  Shop equipment
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/lab"
                  className="inline-flex items-center gap-2 text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
                >
                  Book a lab test
                </Link>
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/8] mt-16 md:mt-24 overflow-hidden bg-[oklch(0.96_0.01_220)]">
            <Image
              src="/assets/images/products-hero.png"
              alt="Pool equipment and supplies"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* Quiet location strip */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] tracking-[0.18em] uppercase text-black/55">
          <span>Bangkok</span>
          <span className="hidden sm:inline">Chiang Mai</span>
          <span className="hidden sm:inline">Chiang Rai</span>
          <span>Hua Hin</span>
          <Link href="/contactus" className="text-[var(--navy)] hover:text-[var(--aqua)] transition-colors">
            Find a branch →
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="flex items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                001 — The shop
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] max-w-2xl leading-[1.05]">
                Equipment for every part of pool ownership.
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-[600] text-[var(--navy)] hover:text-[var(--aqua)] transition-colors shrink-0"
            >
              View all <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-t border-black/[0.08]">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group relative aspect-[4/5] border-r border-b border-black/[0.08] p-6 flex flex-col justify-between hover:bg-[oklch(0.97_0.01_220)] transition-colors"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    className="object-contain group-hover:scale-[1.04] transition-transform duration-500"
                    sizes="300px"
                  />
                </div>
                <div className="flex items-end justify-between">
                  <span className="font-heading font-[600] text-sm text-[var(--navy)] leading-tight">
                    {cat.name}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-black/30 group-hover:text-[var(--aqua)] transition-colors" />
                </div>
              </Link>
            ))}
            <Link
              href="/shop"
              className="group relative aspect-[4/5] border-r border-b border-black/[0.08] p-6 flex flex-col justify-between bg-[var(--navy)] text-white hover:bg-black transition-colors"
            >
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/60">
                Catalog
              </span>
              <div className="flex items-end justify-between">
                <span className="font-heading font-[600] text-2xl leading-tight">
                  See the full
                  <br />
                  range →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Lab editorial */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[5/6] overflow-hidden bg-[oklch(0.96_0.01_220)]">
              <Image
                src="/assets/images/lab-hero.jpg"
                alt="Pool Water Testing Laboratory"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                002 — The lab
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05] mb-6">
                Is your water actually safe to swim in?
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-10">
                You can&apos;t see what&apos;s in your pool — and bad water causes damaged hair,
                skin problems, tooth decay, and infections. Our lab gives you a real answer.
              </p>
              <ul className="border-t border-black/[0.08]">
                {labChecks.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-6 py-4 border-b border-black/[0.08] text-sm text-[var(--navy)]"
                  >
                    <span className="font-mono text-[11px] text-black/40 pt-0.5 tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/lab"
                className="inline-flex items-center gap-2 mt-10 px-5 py-3 bg-[var(--aqua)] text-white text-sm font-[600] hover:bg-[var(--navy)] transition-colors"
              >
                Book a water test
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-16">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
              003 — What we do
            </p>
            <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
              Three services. One team that owns the outcome.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 border-t border-black/[0.08]">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group p-8 md:p-10 border-b md:border-b-0 md:border-r last:md:border-r-0 border-black/[0.08] hover:bg-[oklch(0.97_0.01_220)] transition-colors flex flex-col"
              >
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/40 mb-12">
                  {svc.n}
                </span>
                <h3 className="font-heading font-[700] text-2xl text-[var(--navy)] mb-4 tracking-[-0.01em]">
                  {svc.title}
                </h3>
                <p className="text-sm text-[var(--navy)]/70 leading-relaxed mb-8 flex-1">
                  {svc.body}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-[600] text-[var(--navy)] group-hover:text-[var(--aqua)] transition-colors">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — inline, no dark slab */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-4 md:px-6 py-4 ${
                  i !== 0 ? "md:border-l border-black/[0.08]" : ""
                } ${i % 2 !== 0 ? "border-l border-black/[0.08] md:border-l" : ""}`}
              >
                <p className="font-heading font-[700] text-4xl md:text-5xl text-[var(--navy)] tracking-[-0.02em] tabular-nums mb-2">
                  {stat.value}
                </p>
                <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-black/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise — quiet, not dark slab */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                004 — Build with us
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                Asia&apos;s first pool service franchise — and it&apos;s still the only one
                worth running.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 leading-relaxed mb-8 max-w-md">
                Thailand has the highest rate of pool ownership in Asia and the industry keeps
                growing. Join the network and own a profitable, defensible service business.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/franchise-concept"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                >
                  Franchise concept
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/howtoapply"
                  className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
                >
                  How to apply
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
