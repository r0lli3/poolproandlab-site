import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Franchise Benefits",
  description:
    "Benefits of joining Pool Pro&Lab franchise — trade name rights, special pricing, showroom design, staff training, marketing support, and a complete business support system.",
};

const franchiseeRights = [
  "Use of our trade name, business format, and logo — already established and trusted",
  "Special pricing on quality products direct from us",
  "Outlet design and decoration to our prototypes and standards",
  "Comprehensive staff training",
  "Operations and management manuals included",
];

const supportAreas = [
  "Outlet management",
  "Operations",
  "Marketing",
  "Procurement",
  "Accounting, auditing, legal",
  "Business consultation",
  "Research & development",
];

export default function BenefitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-10">
            Franchise — Benefits
          </p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-[var(--navy)]">
                Everything you need
                <br />
                to <span className="text-[var(--aqua)]">run a real business.</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed max-w-md">
                A franchise package built so the only thing you bring is the work — the rest is
                done for you, supported by people who&apos;ve done it before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[5/6] overflow-hidden bg-[oklch(0.96_0.01_220)]">
              <Image
                src="/assets/images/franchise-benefits-1.jpg"
                alt="Franchise benefits"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                001 — What you receive
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05] mb-8">
                Benefits for franchisees.
              </h2>
              <ul className="border-t border-black/[0.08]">
                {franchiseeRights.map((item, i) => (
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
            </div>
          </div>
        </div>
      </section>

      {/* Support system */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:order-2 relative aspect-[4/3] lg:aspect-[5/6] overflow-hidden bg-[oklch(0.96_0.01_220)]">
              <Image
                src="/assets/images/franchise-benefits-2.jpg"
                alt="Support system"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="lg:col-span-7 lg:order-1 lg:pt-8">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                002 — Ongoing support
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05] mb-6">
                A real support system. <span className="text-[var(--aqua)]">Not a brochure.</span>
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-10 max-w-2xl">
                Comprehensive, continuous support across the seven areas where most franchisees
                actually struggle.
              </p>
              <div className="grid grid-cols-2 border-l border-t border-black/[0.08]">
                {supportAreas.map((area) => (
                  <div
                    key={area}
                    className="border-r border-b border-black/[0.08] p-5 text-sm font-[500] text-[var(--navy)]"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[5/6] overflow-hidden bg-[oklch(0.96_0.01_220)]">
              <Image
                src="/assets/images/franchise-training.jpg"
                alt="Training program"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                003 — Training
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05] mb-6">
                Two phases. Both hands-on.
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-10 max-w-md">
                The training program covers production processes, international standards, and the
                business administration that keeps a real outlet running.
              </p>
              <div className="border-t border-black/[0.08]">
                <div className="border-b border-black/[0.08] py-6 flex items-start gap-6">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/40 pt-1 tabular-nums shrink-0">
                    01
                  </span>
                  <div>
                    <p className="font-heading font-[700] text-[var(--navy)] tracking-[-0.01em] mb-1">
                      At head office
                    </p>
                    <p className="text-sm text-[var(--navy)]/70 leading-relaxed">
                      Products, services, operations, brand standards.
                    </p>
                  </div>
                </div>
                <div className="border-b border-black/[0.08] py-6 flex items-start gap-6">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/40 pt-1 tabular-nums shrink-0">
                    02
                  </span>
                  <div>
                    <p className="font-heading font-[700] text-[var(--navy)] tracking-[-0.01em] mb-1">
                      On-site at your outlet
                    </p>
                    <p className="text-sm text-[var(--navy)]/70 leading-relaxed">
                      A Pool Pro&amp;Lab staffer coaches you through the start of operations.
                    </p>
                  </div>
                </div>
              </div>
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
                Ready to start?
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                Apply, or read the questions <span className="text-[var(--aqua)]">everyone asks.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-center gap-6">
              <Link
                href="/howtoapply"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
              >
                How to apply
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/faqs"
                className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
              >
                Read FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
