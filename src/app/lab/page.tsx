import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FlaskConical, CheckCircle2, ArrowRight, Beaker, Clock, MapPin } from "lucide-react";
import { getServerT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerT();
  return {
    title: t("labPage.heroTitle"),
    description: t("labPage.metaDesc"),
    openGraph: {
      title: t("labPage.heroTitle") + " | " + t("common.siteName"),
      description: t("labPage.heroSubtitle"),
    },
  };
}

const PARAMETER_KEYS = [
  "freeChlorine",
  "totalChlorine",
  "ph",
  "totalAlkalinity",
  "calcium",
  "cyanuric",
  "tds",
  "iron",
  "copper",
  "salt",
  "temp",
] as const;

const RISK_KEYS = ["hair", "skin", "tooth", "respiratory", "pinkEye"] as const;

export default async function LabPage() {
  const { t } = await getServerT();

  const steps = [
    { key: "step1", icon: Beaker },
    { key: "step2", icon: MapPin },
    { key: "step3", icon: Clock },
  ] as const;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-72 md:h-96">
          <Image
            src="/assets/images/lab-hero.jpg"
            alt="Pool Water Testing Lab"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/60 via-[var(--navy)]/40 to-[var(--navy)]/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <div className="inline-flex items-center gap-2 bg-[var(--aqua)]/20 border border-[var(--aqua)]/40 text-[var(--aqua)] rounded-full px-4 py-1.5 text-xs font-heading font-[700] uppercase tracking-widest mb-4">
              <FlaskConical className="w-3.5 h-3.5" />
              {t("labPage.heroBadge")}
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-3">
              {t("labPage.heroTitle")}
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-lg">
              {t("labPage.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="bg-[#e6f6fa] py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-heading text-xl md:text-2xl font-[700] text-[var(--navy)] leading-relaxed">
            {t("labPage.tagline")}
          </p>
        </div>
      </section>

      {/* Health section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-4">
              {t("labPage.whyEyebrow")}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-[800] text-[var(--navy)] mb-5">
              {t("labPage.whyTitle1")}
              <br />
              <span className="text-[var(--aqua)]">{t("labPage.whyTitle2")}</span>
            </h2>
            <p className="text-[var(--navy)]/70 leading-relaxed mb-6">{t("labPage.whyIntro")}</p>
            <ul className="space-y-3 mb-8">
              {RISK_KEYS.map((k) => (
                <li key={k} className="flex items-center gap-3 text-sm text-[var(--navy)]/80">
                  <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0" />
                  {t(`labPage.risks.${k}`)}
                </li>
              ))}
            </ul>
            <p className="text-[var(--navy)]/70 leading-relaxed">{t("labPage.whyOutro")}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg">
              <Image
                src="/assets/images/service-water-lab.jpg"
                alt="Water testing technician"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="flex flex-col gap-4 pt-8">
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg">
                <Image
                  src="/assets/images/service-water-treatment.jpg"
                  alt="Pool water treatment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="bg-[var(--navy)] rounded-2xl p-5 text-white">
                <FlaskConical className="w-8 h-8 text-[var(--aqua)] mb-3" />
                <p className="font-heading font-[800] text-2xl text-[var(--aqua)]">11</p>
                <p className="text-white/70 text-sm mt-1">{t("labPage.parametersLabel")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pool Water Check Up */}
      <section className="bg-[var(--navy)] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
              {t("labPage.checkupEyebrow")}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-[800] mb-4">
              {t("labPage.checkupTitle")}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              {t("labPage.checkupBody")}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
            {PARAMETER_KEYS.map((key, i) => (
              <div
                key={key}
                className="bg-white/10 rounded-xl p-3 text-center border border-white/10 hover:border-[var(--aqua)]/40 hover:bg-white/15 transition-colors"
              >
                <span className="block font-heading text-[var(--aqua)] text-xs font-[700] mb-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-white/80 text-xs leading-tight">{t(`labPage.parameters.${key}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Easy way to get tested */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            {t("labPage.stepsEyebrow")}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-[800] text-[var(--navy)]">
            {t("labPage.stepsTitle")}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.key}
              className="relative bg-white rounded-2xl p-8 border border-[var(--border)] hover:shadow-lg transition-shadow"
            >
              <span className="font-heading text-6xl font-[800] text-[var(--aqua)]/15 absolute top-4 right-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-12 h-12 rounded-xl bg-[var(--aqua)]/10 flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-[var(--aqua)]" />
              </div>
              <h3 className="font-heading font-[700] text-lg text-[var(--navy)] mb-3">
                {t(`labPage.${step.key}Title`)}
              </h3>
              <p className="text-[var(--navy)]/60 text-sm leading-relaxed">{t(`labPage.${step.key}Desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[var(--aqua)] to-[var(--aqua-dark)] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-[800] mb-4">
            {t("labPage.ctaTitle")}
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">{t("labPage.ctaBody")}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contactus"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--aqua)] font-heading font-[700] rounded-full hover:bg-white/90 transition-opacity"
            >
              {t("labPage.ctaPrimary")} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/service"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 text-white font-heading font-[600] rounded-full hover:bg-white/30 transition-colors border border-white/30"
            >
              {t("labPage.ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
