import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, TrendingUp, Shield, Users } from "lucide-react";
import { getServerT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerT();
  return {
    title: t("franchisePage.heroTitle"),
    description: t("franchisePage.metaDesc"),
  };
}

const HIGHLIGHTS = [
  { key: "growth", icon: TrendingUp },
  { key: "support", icon: Building2 },
  { key: "proven", icon: Shield },
  { key: "commercial", icon: Users },
] as const;

export default async function FranchisePage() {
  const { t } = await getServerT();

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
              {t("franchisePage.heroEyebrow")}
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-3">
              {t("franchisePage.heroTitle")}
            </h1>
            <p className="text-white/80 text-base md:text-lg">{t("franchisePage.heroSubtitle")}</p>
          </div>
        </div>
      </section>

      {/* 1st in Asia badge */}
      <section className="bg-gradient-to-r from-[var(--aqua)] to-[var(--aqua-dark)] text-white py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-4xl font-[800]">
            {t("franchisePage.badgeTitle")}
          </h2>
          <p className="text-white/80 mt-3 text-base md:text-lg">{t("franchisePage.badgeSubtitle")}</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.key}
              className="bg-white rounded-2xl p-6 border border-[var(--border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--aqua)]/10 flex items-center justify-center mb-4">
                <h.icon className="w-5 h-5 text-[var(--aqua)]" />
              </div>
              <h3 className="font-heading font-[700] text-[var(--navy)] mb-2">
                {t(`franchisePage.highlights.${h.key}.title`)}
              </h3>
              <p className="text-[var(--navy)]/60 text-sm leading-relaxed">
                {t(`franchisePage.highlights.${h.key}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* Company Profile */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-4">
              {t("franchisePage.profileEyebrow")}
            </p>
            <h2 className="font-heading text-3xl font-[800] text-[var(--navy)] mb-5">
              {t("franchisePage.profileTitle")}
            </h2>
            <div className="space-y-4 text-[var(--navy)]/70 leading-relaxed">
              <p>{t("franchisePage.profileP1")}</p>
              <p>{t("franchisePage.profileP2")}</p>
              <p>{t("franchisePage.profileP3")}</p>
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
                {t("franchisePage.shopEyebrow")}
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-[800] mb-5">
                {t("franchisePage.shopTitle")}
              </h2>
              <div className="space-y-4 text-white/70 text-sm leading-relaxed">
                <p>{t("franchisePage.shopP1")}</p>
                <p>{t("franchisePage.shopP2")}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[140px] bg-white/10 rounded-xl p-4 border border-white/10">
                <p className="font-heading text-3xl font-[800] text-[var(--aqua)]">20+</p>
                <p className="text-white/60 text-sm mt-1">{t("franchisePage.stat1")}</p>
              </div>
              <div className="flex-1 min-w-[140px] bg-white/10 rounded-xl p-4 border border-white/10">
                <p className="font-heading text-3xl font-[800] text-[var(--aqua)]">14K+</p>
                <p className="text-white/60 text-sm mt-1">{t("franchisePage.stat2")}</p>
              </div>
              <div className="flex-1 min-w-[140px] bg-white/10 rounded-xl p-4 border border-white/10">
                <p className="font-heading text-3xl font-[800] text-[var(--aqua)]">20</p>
                <p className="text-white/60 text-sm mt-1">{t("franchisePage.stat3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e6f6fa] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-[800] text-[var(--navy)] mb-4">
            {t("franchisePage.ctaTitle")}
          </h2>
          <p className="text-[var(--navy)]/60 mb-8 leading-relaxed">{t("franchisePage.ctaBody")}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/benefits"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
            >
              {t("franchisePage.ctaPrimary")} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/howtoapply"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--navy)] text-white font-heading font-[600] rounded-full hover:opacity-90 transition-opacity"
            >
              {t("franchisePage.ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
