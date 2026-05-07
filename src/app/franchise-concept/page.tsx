import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Franchise Concept",
  description:
    "Join ASEAN's first pool service franchise. Pool Pro&Lab — 1st pool service franchise in Asia. Thailand has the highest pool ownership rate in Asia. Complete support structure.",
};

const highlights = [
  {
    n: "01",
    title: "Highest growth market",
    desc: "Thailand has the highest rate of pool ownership in Asia and the industry is still expanding.",
  },
  {
    n: "02",
    title: "Complete support structure",
    desc: "Showroom design template, operations and marketing support, brand and trademark name.",
  },
  {
    n: "03",
    title: "Proven business model",
    desc: "J.D. Pools — 20+ years, 14,000+ pools built, 20 showrooms across Thailand.",
  },
  {
    n: "04",
    title: "Retail + lab in one",
    desc: "A full pool retail and wholesale store combined with a water testing laboratory.",
  },
];

const stats = [
  { value: "20+", label: "Countries served" },
  { value: "14,000+", label: "Pools built" },
  { value: "20", label: "Showrooms in Thailand" },
];

export default function FranchisePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-10">
            Franchise — Asia&apos;s first pool service franchise
          </p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-[var(--navy)]">
                A real business
                <br />
                in <span className="text-[var(--aqua)]">a real market.</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed max-w-md">
                Pool ownership in Thailand is the highest in Asia and growing. The Pool Pro&amp;Lab
                franchise combines retail, service, and the only computerized water lab of its
                kind.
              </p>
              <div className="flex items-center gap-6 mt-8">
                <Link
                  href="/howtoapply"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                >
                  How to apply
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/benefits"
                  className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
                >
                  See the benefits
                </Link>
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/8] mt-16 md:mt-24 overflow-hidden bg-[oklch(0.96_0.01_220)]">
            <Image
              src="/assets/images/franchise-hero.jpg"
              alt="Pool Pro&Lab Franchise"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
              001 — Why this works
            </p>
            <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
              Four reasons it&apos;s the only pool franchise worth running.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 border-l border-t border-black/[0.08]">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="border-r border-b border-black/[0.08] p-8 flex flex-col"
              >
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/40 block mb-12">
                  {h.n}
                </span>
                <h3 className="font-heading font-[700] text-xl text-[var(--navy)] mb-3 tracking-[-0.01em]">
                  {h.title}
                </h3>
                <p className="text-sm text-[var(--navy)]/70 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company profile */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                002 — Company profile
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                Twenty years of pool expertise behind every outlet.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-6 text-[var(--navy)]/70 leading-relaxed">
                <p>
                  J.D. Pools has been in the swimming pool business for over twenty years, building
                  more than fourteen thousand pools in Thailand. We were the first Thai company to
                  export pools, and now ship a wide range of products to more than twenty
                  countries.
                </p>
                <p>
                  Twenty showrooms around the country provide construction, installation, and
                  maintenance services across every customer segment.
                </p>
                <p>
                  Our laboratory is equipped with high-technology water-testing devices and Smart
                  Scan kits — the first computerized pool water lab in ASEAN.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats inline */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-4 md:px-6 py-4 ${i !== 0 ? "border-l border-black/[0.08]" : ""}`}
              >
                <p className="font-heading font-[700] text-3xl md:text-5xl text-[var(--navy)] tracking-[-0.02em] tabular-nums mb-2">
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

      {/* Retail + lab feature */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[5/6] overflow-hidden bg-[oklch(0.96_0.01_220)]">
              <Image
                src="/assets/images/franchise-benefits-1.jpg"
                alt="Pool Pro&Lab franchise"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                003 — Retail + lab
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05] mb-6">
                Equipment store and water testing lab — same building.
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-6">
                More pools means more demand for accessories and maintenance. Pool Pro&amp;Lab
                combines a full retail and wholesale store with a state-of-the-art water analysis
                laboratory.
              </p>
              <p className="text-[var(--navy)]/70 leading-relaxed">
                Treatment recommendations are based on premium Australian imported pool care
                products — the most advanced available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA close */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                Join us
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                Ready to join the <span className="text-[var(--aqua)]">Pool Pro&amp;Lab family?</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-center gap-6 flex-wrap">
              <Link
                href="/howtoapply"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
              >
                How to apply
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/benefits"
                className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
              >
                View benefits
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
