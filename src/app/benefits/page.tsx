import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { getServerT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerT();
  return {
    title: t("benefitsPage.heroTitle"),
    description: t("benefitsPage.metaDesc"),
  };
}

const RIGHT_KEYS = ["right1", "right2", "right3", "right4", "right5"] as const;
const SUPPORT_KEYS = ["support1", "support2", "support3", "support4", "support5", "support6", "support7"] as const;

export default async function BenefitsPage() {
  const { t } = await getServerT();
  return (
    <>
      <section className="bg-[var(--navy)] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            {t("benefitsPage.heroEyebrow")}
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-4">
            {t("benefitsPage.heroTitle")}
          </h1>
          <p className="text-white/70 text-base md:text-lg">{t("benefitsPage.heroSubtitle")}</p>
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
              {t("benefitsPage.rightsEyebrow")}
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-[800] text-[var(--navy)] mb-6">
              {t("benefitsPage.rightsTitle")}
            </h2>
            <ul className="space-y-4">
              {RIGHT_KEYS.map((k) => (
                <li key={k} className="flex items-start gap-3 text-sm text-[var(--navy)]/80">
                  <CheckCircle2 className="w-5 h-5 text-[var(--aqua)] shrink-0 mt-0.5" />
                  {t(`benefitsPage.${k}`)}
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
              {t("benefitsPage.supportEyebrow")}
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-[800] text-[var(--navy)] mb-3">
              {t("benefitsPage.supportTitle")}
            </h2>
            <p className="text-[var(--navy)]/70 mb-6 leading-relaxed">
              {t("benefitsPage.supportIntro")}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {SUPPORT_KEYS.map((k) => (
                <div
                  key={k}
                  className="flex items-center gap-2.5 bg-[var(--secondary)] rounded-xl p-3 text-sm text-[var(--navy)]/80"
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--aqua)] shrink-0" />
                  {t(`benefitsPage.${k}`)}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training */}
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
              {t("benefitsPage.trainingEyebrow")}
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-[800] text-[var(--navy)] mb-4">
              {t("benefitsPage.trainingTitle")}
            </h2>
            <p className="text-[var(--navy)]/70 leading-relaxed mb-6">
              {t("benefitsPage.trainingBody")}
            </p>
            <div className="space-y-4">
              <div className="bg-[var(--aqua)]/10 border border-[var(--aqua)]/20 rounded-xl p-5">
                <p className="font-heading font-[700] text-[var(--navy)] mb-1">
                  {t("benefitsPage.phase1Label")}
                </p>
                <p className="text-[var(--navy)]/70 text-sm">{t("benefitsPage.phase1Desc")}</p>
              </div>
              <div className="bg-[var(--navy)]/5 border border-[var(--navy)]/10 rounded-xl p-5">
                <p className="font-heading font-[700] text-[var(--navy)] mb-1">
                  {t("benefitsPage.phase2Label")}
                </p>
                <p className="text-[var(--navy)]/70 text-sm">{t("benefitsPage.phase2Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy)] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-[800] mb-4">
            {t("benefitsPage.ctaTitle")}
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href="/howtoapply"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
            >
              {t("benefitsPage.ctaPrimary")} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-heading font-[600] rounded-full hover:bg-white/20 transition-colors border border-white/20"
            >
              {t("benefitsPage.ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
