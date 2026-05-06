import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Franchise Benefits",
  description:
    "Benefits of joining Pool Pro&Lab franchise — trade name rights, special pricing, showroom design, staff training, marketing support, and a complete business support system.",
};

const franchiseeRights = [
  "The right to use our trade name, business format and logo which have already gained awareness and credibility",
  "The right to buy quality products from us at special price",
  "Assistance in the design and decoration of outlets according to our prototypes and standards",
  "Staff training",
  "Operations and management manuals provided",
];

const supportAreas = [
  "Outlet management",
  "Operations",
  "Marketing",
  "Procurement",
  "Accounting, auditing and legal matters",
  "Business consultation",
  "Research and development",
];

export default function BenefitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--navy)] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            Franchise Program
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-4">
            Benefits for Franchisees
          </h1>
          <p className="text-white/70 text-base md:text-lg">
            Everything you need to build a successful pool service business
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {/* Core Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
            <Image
              src="/assets/images/franchise-benefits-1.jpg"
              alt="Franchise benefits"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-4">
              What You Receive
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-[800] text-[var(--navy)] mb-6">
              Benefits for Franchisees
            </h2>
            <ul className="space-y-4">
              {franchiseeRights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[var(--navy)]/80">
                  <CheckCircle2 className="w-5 h-5 text-[var(--aqua)] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Support System */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
            <Image
              src="/assets/images/franchise-benefits-2.jpg"
              alt="Support system"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:order-1">
            <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-4">
              Ongoing Support
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-[800] text-[var(--navy)] mb-3">
              Superior Business System &amp; Support Program
            </h2>
            <p className="text-[var(--navy)]/70 mb-6 leading-relaxed">
              The franchisee will get comprehensive support in the following areas:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {supportAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2.5 bg-[oklch(0.97_0.005_220)] rounded-xl p-3 text-sm text-[var(--navy)]/80"
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--aqua)] shrink-0" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training Program */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
            <Image
              src="/assets/images/franchise-training.jpg"
              alt="Training program"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-4">
              Get Ready to Succeed
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-[800] text-[var(--navy)] mb-4">
              Training Program
            </h2>
            <p className="text-[var(--navy)]/70 leading-relaxed mb-6">
              The training program is carefully designed to help franchisees and their employees
              gain insights into our products and services and find the ways to attain continuous
              growth and prosperity. The training covers production processes, international
              standards, and business administration.
            </p>
            <div className="space-y-4">
              <div className="bg-[var(--aqua)]/10 border border-[var(--aqua)]/20 rounded-xl p-5">
                <p className="font-heading font-[700] text-[var(--navy)] mb-1">Phase 1</p>
                <p className="text-[var(--navy)]/70 text-sm">Training at head office</p>
              </div>
              <div className="bg-[var(--navy)]/5 border border-[var(--navy)]/10 rounded-xl p-5">
                <p className="font-heading font-[700] text-[var(--navy)] mb-1">Phase 2</p>
                <p className="text-[var(--navy)]/70 text-sm">On-site training in outlets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--navy)] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-[800] mb-4">
            Ready to Get Started?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href="/howtoapply"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
            >
              How to Apply <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-heading font-[600] rounded-full hover:bg-white/20 transition-colors border border-white/20"
            >
              Read FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
