import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FlaskConical, Wrench, Droplets, ChevronRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getServerT } from "@/lib/i18n/server";
import { CATEGORIES } from "@/lib/catalog";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerT();
  const desc = t("hero.subtitle");
  return {
    title: t("common.siteName") + " | " + t("hero.titleLine1") + " " + t("hero.titleLine2"),
    description: desc,
    openGraph: {
      title: t("common.siteName") + " | " + t("common.tagline"),
      description: desc,
    },
  };
}

export default async function HomePage() {
  const { t } = await getServerT();

  const services = [
    { icon: FlaskConical, key: "lab", href: "/lab", color: "var(--aqua)" as const },
    { icon: Droplets, key: "treatment", href: "/service", color: "var(--navy)" as const },
    { icon: Wrench, key: "care", href: "/service", color: "var(--coral)" as const },
  ];

  const stats = [
    { value: "20+", labelKey: "yearsExperience" },
    { value: "14,000+", labelKey: "poolsBuilt" },
    { value: "11", labelKey: "parametersTested" },
    { value: "11", labelKey: "branches" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--navy)] via-[#16263a] to-[#0e1a2a] text-white">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--aqua)] rounded-full opacity-10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                className="mb-6 bg-[var(--aqua)]/20 text-[var(--aqua)] border-[var(--aqua)]/30 font-heading text-xs tracking-widest uppercase"
                variant="outline"
              >
                {t("hero.badge")}
              </Badge>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-[800] leading-[1.05] mb-6">
                {t("hero.titleLine1")}
                <br />
                <span className="text-[var(--aqua)]">{t("hero.titleLine2")}</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
                >
                  {t("common.shopNow")} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/lab"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-heading font-[600] rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  {t("common.bookLabTest")}
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/products-hero.png"
                  alt="Pool equipment and supplies"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="600px"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white text-[var(--navy)] rounded-xl shadow-lg px-5 py-3">
                <div className="flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-[var(--aqua)]" />
                  <div>
                    <p className="font-heading font-[800] text-sm">{t("hero.labBadge")}</p>
                    <p className="text-xs text-[var(--navy)]/60">{t("hero.labBadgeSub")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 64L60 56C120 48 240 32 360 26.7C480 21.3 600 26.7 720 32C840 37.3 960 42.7 1080 40C1200 37.3 1320 26.7 1380 21.3L1440 16V64H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Water lab CTA banner */}
      <section className="bg-[#cdeef7] border-y border-[var(--aqua)]/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FlaskConical className="w-5 h-5 text-[var(--aqua)] shrink-0" />
            <p className="font-heading font-[700] text-[var(--navy)] text-sm sm:text-base">
              {t("labBanner.title")} —{" "}
              <span className="font-[400] text-[var(--navy)]/70">{t("labBanner.subtitle")}</span>
            </p>
          </div>
          <Link
            href="/lab"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            {t("common.bookNow")} <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Product Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            {t("categories.eyebrow")}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-[800] text-[var(--navy)]">
            {t("categories.title")}
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
          {CATEGORIES.slice(0, 7).map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop/category/${cat.slug}`}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-[var(--secondary)] hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-transparent hover:border-[var(--aqua)]/20"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white">
                {cat.img ? (
                  <Image
                    src={cat.img}
                    alt={t(`categories.names.${cat.slug}`)}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    sizes="150px"
                  />
                ) : null}
              </div>
              <span className="font-heading font-[700] text-xs text-center text-[var(--navy)] leading-tight">
                {t(`categories.names.${cat.slug}`)}
              </span>
            </Link>
          ))}
          <Link
            href="/shop/all"
            className="group flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border-2 border-dashed border-[var(--aqua)]/30 hover:border-[var(--aqua)] hover:bg-[var(--aqua)]/5 transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-full bg-[var(--aqua)]/10 flex items-center justify-center group-hover:bg-[var(--aqua)]/20 transition-colors">
              <ArrowRight className="w-5 h-5 text-[var(--aqua)]" />
            </div>
            <span className="font-heading font-[700] text-xs text-center text-[var(--aqua)] leading-tight whitespace-pre-line">
              {t("categories.viewAllProductsTile")}
            </span>
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[var(--navy)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.labelKey} className="text-center">
                <p className="font-heading text-4xl md:text-5xl font-[800] text-[var(--aqua)] mb-2">
                  {stat.value}
                </p>
                <p className="text-white/60 text-sm">{t(`stats.${stat.labelKey}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            {t("services.eyebrow")}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-[800] text-[var(--navy)]">
            {t("services.title")}
          </h2>
          <p className="text-[var(--navy)]/60 mt-4 max-w-xl mx-auto leading-relaxed">
            {t("services.intro")}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc) => (
            <Link
              key={svc.key}
              href={svc.href}
              className="group relative overflow-hidden rounded-2xl bg-white border border-[var(--border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `color-mix(in oklch, ${svc.color} 15%, transparent)` }}
              >
                <svc.icon className="w-6 h-6" style={{ color: svc.color }} />
              </div>
              <h3 className="font-heading font-[700] text-xl text-[var(--navy)] mb-3">
                {t(`services.${svc.key}.title`)}
              </h3>
              <p className="text-[var(--navy)]/60 text-sm leading-relaxed mb-5">
                {t(`services.${svc.key}.description`)}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-heading font-[700]"
                style={{ color: svc.color }}
              >
                {t("common.learnMore")} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Lab Feature */}
      <section className="bg-gradient-to-br from-[#e6f6fa] to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="/assets/images/lab-hero.jpg"
                alt="Pool Water Testing Laboratory"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--navy)]/20 to-transparent" />
            </div>
            <div>
              <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-4">
                {t("labFeature.eyebrow")}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-[800] text-[var(--navy)] mb-4">
                {t("labFeature.titleLine1")}
                <br />
                <span className="text-[var(--aqua)]">{t("labFeature.titleLine2")}</span>
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-6">{t("labFeature.body")}</p>
              <ul className="space-y-3 mb-8">
                {(["bullet1", "bullet2", "bullet3", "bullet4"] as const).map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-[var(--navy)]/80">
                    <CheckCircle2 className="w-5 h-5 text-[var(--aqua)] shrink-0" />
                    {t(`labFeature.${b}`)}
                  </li>
                ))}
              </ul>
              <Link
                href="/lab"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
              >
                {t("labFeature.cta")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise CTA */}
      <section className="relative overflow-hidden bg-[var(--navy)] text-white py-20">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[var(--aqua)]/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-4">
            {t("franchiseCta.eyebrow")}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-[800] mb-4">
            {t("franchiseCta.title")}
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            {t("franchiseCta.body")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/franchise-concept"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
            >
              {t("franchiseCta.primaryCta")} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/howtoapply"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-heading font-[600] rounded-full hover:bg-white/20 transition-colors border border-white/20"
            >
              {t("franchiseCta.secondaryCta")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
