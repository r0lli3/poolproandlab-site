import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getServerT } from "@/lib/i18n/server";

export const metadata: Metadata = {
  title: "Franchise Concept",
  description:
    "Join ASEAN's first pool service franchise. Pool Pro&Lab — 1st pool service franchise in Asia. Thailand has the highest pool ownership rate in Asia. Complete support structure.",
};

export default async function FranchisePage() {
  const { t } = await getServerT();

  const highlights = [
    { n: "01", title: t("franchisePage.h1Title"), desc: t("franchisePage.h1Desc") },
    { n: "02", title: t("franchisePage.h2Title"), desc: t("franchisePage.h2Desc") },
    { n: "03", title: t("franchisePage.h3Title"), desc: t("franchisePage.h3Desc") },
    { n: "04", title: t("franchisePage.h4Title"), desc: t("franchisePage.h4Desc") },
  ];

  const stats = [
    { value: t("franchisePage.stat1Value"), label: t("franchisePage.stat1Label") },
    { value: t("franchisePage.stat2Value"), label: t("franchisePage.stat2Label") },
    { value: t("franchisePage.stat3Value"), label: t("franchisePage.stat3Label") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-10">
            {t("franchisePage.eyebrow")}
          </p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-[var(--navy)]">
                {t("franchisePage.heroLine1")}
                <br />
                {t("franchisePage.heroLine2")} <span className="text-[var(--aqua)]">{t("franchisePage.heroLine3")}</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed max-w-md">
                {t("franchisePage.heroSub")}
              </p>
              <div className="flex items-center gap-6 mt-8">
                <Link
                  href="/howtoapply"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                >
                  {t("franchisePage.ctaPrimary")}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/benefits"
                  className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
                >
                  {t("franchisePage.ctaSecondary")}
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
              {t("franchisePage.highlightsEyebrow")}
            </p>
            <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
              {t("franchisePage.highlightsTitle")}
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
                {t("franchisePage.profileEyebrow")}
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                {t("franchisePage.profileTitle")}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-6 text-[var(--navy)]/70 leading-relaxed">
                <p>{t("franchisePage.profileP1")}</p>
                <p>{t("franchisePage.profileP2")}</p>
                <p>{t("franchisePage.profileP3")}</p>
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
                {t("franchisePage.retailEyebrow")}
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05] mb-6">
                {t("franchisePage.retailTitle")}
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-6">
                {t("franchisePage.retailP1")}
              </p>
              <p className="text-[var(--navy)]/70 leading-relaxed">
                {t("franchisePage.retailP2")}
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
                {t("franchisePage.joinEyebrow")}
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                {t("franchisePage.joinTitle1")} <span className="text-[var(--aqua)]">{t("franchisePage.joinTitle2")}</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-center gap-6 flex-wrap">
              <Link
                href="/howtoapply"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
              >
                {t("franchisePage.joinCtaPrimary")}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/benefits"
                className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
              >
                {t("franchisePage.joinCtaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
