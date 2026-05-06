import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, TrendingUp, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Franchise Concept",
  description:
    "Join ASEAN's first pool service franchise. Pool Pro&Lab — 1st pool service franchise in Asia. Thailand has the highest pool ownership rate in Asia. Complete support structure.",
};

const highlights = [
  {
    icon: TrendingUp,
    title: "Highest Growth Market",
    desc: "Thailand has the highest rate of pool ownership in Asia and the industry continues to grow.",
  },
  {
    icon: Building2,
    title: "Complete Support Structure",
    desc: "Showroom design template, operation & marketing support, brand & trademark name.",
  },
  {
    icon: Shield,
    title: "Proven Business Model",
    desc: "J.D. Pools: 20+ years in business, 14,000+ pools built, 20 showrooms across Thailand.",
  },
  {
    icon: Users,
    title: "Commercial & Retail Solution",
    desc: "Full pool retail & wholesale store combined with a water testing laboratory.",
  },
];

export default function FranchisePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-72 md:h-96">
          <Image
            src="/assets/images/franchise-hero.jpg"
            alt="Pool Pro&Lab Franchise"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/60 to-[var(--navy)]/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
              Business Opportunity
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-3">
              Franchise Concept
            </h1>
            <p className="text-white/80 text-base md:text-lg">
              Pool Water Testing Lab and Supplies
            </p>
          </div>
        </div>
      </section>

      {/* 1st in Asia badge */}
      <section className="bg-gradient-to-r from-[var(--aqua)] to-[oklch(0.65_0.16_210)] text-white py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-4xl font-[800]">
            1st Pool Service Franchise in Asia
          </h2>
          <p className="text-white/80 mt-3 text-base md:text-lg">
            A challenging and rewarding business with high profitability and freedom
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="bg-white rounded-2xl p-6 border border-[oklch(0.91_0.01_220)] hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--aqua)]/10 flex items-center justify-center mb-4">
                <h.icon className="w-5 h-5 text-[var(--aqua)]" />
              </div>
              <h3 className="font-heading font-[700] text-[var(--navy)] mb-2">{h.title}</h3>
              <p className="text-[var(--navy)]/60 text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Company Profile */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-4">
              Company Profile
            </p>
            <h2 className="font-heading text-3xl font-[800] text-[var(--navy)] mb-5">
              20 Years of Pool Expertise
            </h2>
            <div className="space-y-4 text-[var(--navy)]/70 leading-relaxed">
              <p>
                J.D. Pools has been in the swimming pool business for over 20 years, during which
                we have built more than 14,000 pools in Thailand. We are the first company in
                Thailand to export swimming pools, and now export a wide variety of products to
                more than 20 countries.
              </p>
              <p>
                We have 20 showrooms around the country, providing construction, installation, and
                maintenance services to all types of customers.
              </p>
              <p>
                We have set up our own laboratory which is fully equipped with high-technology
                devices for water testing. We collect samples of water and test them with Smart
                Scan kits to determine the quality of water.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
            <Image
              src="/assets/images/franchise-benefits-1.jpg"
              alt="Pool Pro&Lab franchise"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Shop & Products */}
        <div className="bg-[var(--navy)] rounded-3xl p-10 md:p-14 text-white">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-4">
                What You Get
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-[800] mb-5">
                Pool Equipment Store + Water Testing Lab
              </h2>
              <div className="space-y-4 text-white/70 text-sm leading-relaxed">
                <p>
                  The increasing number of swimming pools creates higher demand for pool accessories
                  and maintenance services. To satisfy this demand, Pool Pro&amp;Lab combines a full
                  retail/wholesale store with a state-of-the-art water analysis laboratory.
                </p>
                <p>
                  Our water treatment recommendations are based on premium Australian imported
                  water care products — the most advanced available.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[140px] bg-white/10 rounded-xl p-4 border border-white/10">
                <p className="font-heading text-3xl font-[800] text-[var(--aqua)]">20+</p>
                <p className="text-white/60 text-sm mt-1">Countries served</p>
              </div>
              <div className="flex-1 min-w-[140px] bg-white/10 rounded-xl p-4 border border-white/10">
                <p className="font-heading text-3xl font-[800] text-[var(--aqua)]">14K+</p>
                <p className="text-white/60 text-sm mt-1">Pools built</p>
              </div>
              <div className="flex-1 min-w-[140px] bg-white/10 rounded-xl p-4 border border-white/10">
                <p className="font-heading text-3xl font-[800] text-[var(--aqua)]">20</p>
                <p className="text-white/60 text-sm mt-1">Showrooms in Thailand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[oklch(0.97_0.02_198)] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-[800] text-[var(--navy)] mb-4">
            Ready to Join the Pool Pro&amp;Lab Family?
          </h2>
          <p className="text-[var(--navy)]/60 mb-8 leading-relaxed">
            Explore benefits, learn how to apply, and get your questions answered.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/benefits"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
            >
              View Benefits <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/howtoapply"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--navy)] text-white font-heading font-[600] rounded-full hover:opacity-90 transition-opacity"
            >
              How to Apply
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
