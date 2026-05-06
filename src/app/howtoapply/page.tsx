import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { getServerT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerT();
  return {
    title: t("howToApplyPage.heroTitle"),
    description: t("howToApplyPage.metaDesc"),
  };
}

const STEPS = [
  { num: "01", key: "step1", hasDetail: true },
  { num: "02", key: "step2", hasDetail: false },
  { num: "03", key: "step3", hasDetail: false },
  { num: "04", key: "step4", hasDetail: false },
  { num: "05", key: "step5", hasDetail: false },
  { num: "06", key: "step6", hasDetail: false },
] as const;

export default async function HowToApplyPage() {
  const { t } = await getServerT();
  return (
    <>
      <section className="bg-[var(--navy)] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            {t("howToApplyPage.heroEyebrow")}
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-4">
            {t("howToApplyPage.heroTitle")}
          </h1>
          <p className="text-white/70 text-base md:text-lg">{t("howToApplyPage.heroSubtitle")}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--border)] hidden md:block" />
          <div className="space-y-8">
            {STEPS.map((step, i) => (
              <div key={step.key} className="relative flex gap-8 md:gap-12">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--aqua)] flex items-center justify-center text-white font-heading font-[800] text-sm shadow-lg shadow-[var(--aqua)]/30 z-10 relative">
                    {step.num}
                  </div>
                </div>
                <div
                  className={`flex-1 pb-8 ${i < STEPS.length - 1 ? "border-b border-[var(--border)]" : ""}`}
                >
                  <h2 className="font-heading text-xl font-[700] text-[var(--navy)] mb-3">
                    {t(`howToApplyPage.${step.key}Title`)}
                  </h2>
                  <p className="text-[var(--navy)]/70 leading-relaxed mb-3">
                    {t(`howToApplyPage.${step.key}Desc`)}
                  </p>
                  {step.hasDetail && (
                    <div className="bg-[var(--aqua)]/10 border border-[var(--aqua)]/20 rounded-xl px-4 py-3 text-sm text-[var(--navy)]/70">
                      {t(`howToApplyPage.${step.key}Detail`)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#e6f6fa] to-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl font-[800] text-[var(--navy)] mb-3">
            {t("howToApplyPage.applyTitle")}
          </h2>
          <p className="text-[var(--navy)]/60 mb-8 leading-relaxed">{t("howToApplyPage.applyBody")}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/business-contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              {t("howToApplyPage.applyCta")}
            </Link>
            <a
              href="tel:0818445564"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--navy)] text-white font-heading font-[600] rounded-full hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              {t("common.callUs")}
            </a>
          </div>
          <p className="mt-6 text-sm text-[var(--navy)]/50">{t("howToApplyPage.applyNote")}</p>
        </div>
      </section>
    </>
  );
}
