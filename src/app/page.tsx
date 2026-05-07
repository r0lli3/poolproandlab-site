import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getServerT } from "@/lib/i18n/server";

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

export default async function HomePage() {
  const { t } = await getServerT();

  const categories = [
    { name: t("home.categoryShort.robot"), img: "/assets/images/category-cleaning-robot.jpg", href: "/shop" },
    { name: t("home.categoryShort.equipment"), img: "/assets/images/category-cleaning-equipment.jpg", href: "/shop" },
    { name: t("home.categoryShort.chemicals"), img: "/assets/images/category-chemicals.png", href: "/shop" },
    { name: t("home.categoryShort.premium"), img: "/assets/images/category-chemicals-premium.png", href: "/shop" },
    { name: t("home.categoryShort.pumps"), img: "/assets/images/category-pump.png", href: "/shop" },
    { name: t("home.categoryShort.salt"), img: "/assets/images/category-salt-chlorinator.png", href: "/shop" },
    { name: t("home.categoryShort.mineral"), img: "/assets/images/category-mineral-swim.png", href: "/shop" },
  ];

  const services = [
    { n: "01", title: t("home.svc01Title"), body: t("home.svc01Body"), href: "/lab" },
    { n: "02", title: t("home.svc02Title"), body: t("home.svc02Body"), href: "/service" },
    { n: "03", title: t("home.svc03Title"), body: t("home.svc03Body"), href: "/service" },
  ];

  const stats = [
    { value: t("home.stat1Value"), label: t("home.stat1Label") },
    { value: t("home.stat2Value"), label: t("home.stat2Label") },
    { value: t("home.stat3Value"), label: t("home.stat3Label") },
    { value: t("home.stat4Value"), label: t("home.stat4Label") },
  ];

  const labChecks = [
    t("home.labCheck1"),
    t("home.labCheck2"),
    t("home.labCheck3"),
    t("home.labCheck4"),
  ];

  return (
    <>
      {/* Hero — full-bleed image with text overlay */}
      <section className="relative border-b border-black/[0.08] h-[80vh] min-h-[560px] md:min-h-[640px] overflow-hidden">
        <Image
          src="/assets/images/products-hero.png"
          alt="Pool equipment and supplies"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        <div className="relative h-full max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24 flex flex-col justify-between">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/80">
            {t("home.eyebrow")}
          </p>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-white drop-shadow-sm">
                {t("home.heroLine1")}
                <br />
                {t("home.heroLine2")}
                <br />
                <span className="text-[var(--aqua)]">{t("home.heroLine3")}</span>
              </h1>
            </div>

            <div className="lg:col-span-5">
              <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-md">
                {t("home.heroSub")}
              </p>
              <div className="flex items-center gap-6 mt-8">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[var(--navy)] text-sm font-[600] hover:bg-[var(--aqua)] hover:text-white transition-colors"
                >
                  {t("home.ctaShop")}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/lab"
                  className="inline-flex items-center gap-2 text-sm font-[600] text-white underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-white transition-colors"
                >
                  {t("home.ctaBook")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet location strip */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] tracking-[0.18em] uppercase text-black/55">
          <span className="truncate">
            {t("home.locationStrip")}
          </span>
          <Link href="/contactus" className="text-[var(--navy)] hover:text-[var(--aqua)] transition-colors shrink-0">
            {t("home.findBranch")}
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="flex items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                {t("home.categoriesEyebrow")}
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] max-w-2xl leading-[1.05]">
                {t("home.categoriesTitle")}
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-[600] text-[var(--navy)] hover:text-[var(--aqua)] transition-colors shrink-0"
            >
              {t("home.viewAll")} <ArrowUpRight className="w-4 h-4" />
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
                {t("home.catalogLabel")}
              </span>
              <div className="flex items-end justify-between">
                <span className="font-heading font-[600] text-2xl leading-tight whitespace-pre-line">
                  {t("home.catalogTile")}
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
                {t("home.labEyebrow")}
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05] mb-6">
                {t("home.labTitle")}
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-10">
                {t("home.labBody")}
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
                {t("home.labCta")}
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
              {t("home.servicesEyebrow")}
            </p>
            <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
              {t("home.servicesTitle")}
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
                  {t("home.learnMore")} <ArrowUpRight className="w-4 h-4" />
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
                {t("home.franchiseEyebrow")}
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                {t("home.franchiseTitle")}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 leading-relaxed mb-8 max-w-md">
                {t("home.franchiseBody")}
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/franchise-concept"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                >
                  {t("home.franchiseCta1")}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/howtoapply"
                  className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
                >
                  {t("home.franchiseCta2")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
