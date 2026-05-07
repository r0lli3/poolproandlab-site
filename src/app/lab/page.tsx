import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getServerT } from "@/lib/i18n/server";

export const metadata: Metadata = {
  title: "Pool Water Testing Lab",
  description:
    "ASEAN's first computerized pool water analysis laboratory. We check 11 parameters of your pool's chemical balance. Bring your water sample or book a collection service.",
  openGraph: {
    title: "Pool Water Testing Lab | Pool Pro&Lab",
    description:
      "ASEAN's first computerized pool water analysis lab. 11 parameters tested. Results and recommendations within seven days.",
  },
};

export default async function LabPage() {
  const { t } = await getServerT();

  const parameters = [
    t("labPage.parameters.freeChlorine"),
    t("labPage.parameters.totalChlorine"),
    t("labPage.parameters.ph"),
    t("labPage.parameters.totalAlkalinity"),
    t("labPage.parameters.calcium"),
    t("labPage.parameters.cyanuric"),
    t("labPage.parameters.tds"),
    t("labPage.parameters.iron"),
    t("labPage.parameters.copper"),
    t("labPage.parameters.salt"),
    t("labPage.parameters.temp"),
  ];

  const risks = [
    t("labPage.risks.hair"),
    t("labPage.risks.skin"),
    t("labPage.risks.tooth"),
    t("labPage.risks.respiratory"),
    t("labPage.risks.pinkEye"),
  ];

  const steps = [
    { n: "01", title: t("labPage.step1Title"), desc: t("labPage.step1Desc") },
    { n: "02", title: t("labPage.step2Title"), desc: t("labPage.step2Desc") },
    { n: "03", title: t("labPage.step3Title"), desc: t("labPage.step3Desc") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-10">
            {t("labPage.eyebrow")}
          </p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-[var(--navy)]">
                {t("labPage.heroLine1")}
                <br />
                {t("labPage.heroLine2")}
                <br />
                <span className="text-[var(--aqua)]">{t("labPage.heroLine3")}</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed max-w-md">
                {t("labPage.heroSub")}
              </p>
              <div className="flex items-center gap-6 mt-8">
                <Link
                  href="/contactus"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                >
                  {t("labPage.ctaPrimary")}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#process"
                  className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
                >
                  {t("labPage.ctaSecondary")}
                </Link>
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/8] mt-16 md:mt-24 overflow-hidden bg-[oklch(0.96_0.01_220)]">
            <Image
              src="/assets/images/lab-hero.jpg"
              alt="Pool Water Testing Laboratory"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* Editorial pull quote */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p className="font-heading text-2xl md:text-4xl font-[500] text-[var(--navy)] leading-[1.2] tracking-[-0.01em]">
            {t("labPage.pullQuote")}
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                {t("labPage.whyEyebrow")}
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                {t("labPage.whyTitle")}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[var(--navy)]/70 leading-relaxed mb-10 max-w-2xl">
                {t("labPage.whyBody")}
              </p>
              <ul className="border-t border-black/[0.08]">
                {risks.map((item, i) => (
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

      {/* The 11 parameters */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-16">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
              {t("labPage.measureEyebrow")}
            </p>
            <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
              {t("labPage.measureTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-t border-black/[0.08]">
            {parameters.map((param, i) => (
              <div
                key={param}
                className="border-r border-b border-black/[0.08] p-6 flex items-start justify-between gap-4"
              >
                <span className="font-heading font-[600] text-base md:text-lg text-[var(--navy)] leading-tight tracking-[-0.01em]">
                  {param}
                </span>
                <span className="font-mono text-[11px] text-black/40 tabular-nums shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-16">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
              {t("labPage.processEyebrow")}
            </p>
            <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
              {t("labPage.processTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 border-t border-black/[0.08]">
            {steps.map((step) => (
              <div
                key={step.n}
                className="p-8 md:p-10 border-b md:border-b-0 md:border-r last:md:border-r-0 border-black/[0.08]"
              >
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/40 block mb-12">
                  {step.n}
                </span>
                <h3 className="font-heading font-[700] text-2xl text-[var(--navy)] mb-4 tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--navy)]/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA close */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                {t("labPage.closingEyebrow")}
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                {t("labPage.closingTitle1")} <span className="text-[var(--aqua)]">{t("labPage.closingTitle2")}</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 leading-relaxed mb-8 max-w-md">
                {t("labPage.closingBody")}
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/contactus"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                >
                  {t("labPage.closingCtaPrimary")}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/service"
                  className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
                >
                  {t("labPage.closingCtaSecondary")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
