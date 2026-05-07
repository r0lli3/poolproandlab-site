import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getServerT } from "@/lib/i18n/server";

export const metadata: Metadata = {
  title: "How to Apply",
  description:
    "Step-by-step guide to applying for a Pool Pro&Lab franchise. 6 steps: application form, initial meeting, financial verification, franchise agreement, training, and branch opening.",
};

export default async function HowToApplyPage() {
  const { t } = await getServerT();

  const steps = [
    { n: "01", title: t("howToApplyPage.step1Title"), desc: t("howToApplyPage.step1Desc"), detail: t("howToApplyPage.step1Detail") },
    { n: "02", title: t("howToApplyPage.step2Title"), desc: t("howToApplyPage.step2Desc"), detail: null as string | null },
    { n: "03", title: t("howToApplyPage.step3Title"), desc: t("howToApplyPage.step3Desc"), detail: null as string | null },
    { n: "04", title: t("howToApplyPage.step4Title"), desc: t("howToApplyPage.step4Desc"), detail: null as string | null },
    { n: "05", title: t("howToApplyPage.step5Title"), desc: t("howToApplyPage.step5Desc"), detail: null as string | null },
    { n: "06", title: t("howToApplyPage.step6Title"), desc: t("howToApplyPage.step6Desc"), detail: null as string | null },
  ];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-10">
            {t("howToApplyPage.eyebrow")}
          </p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-[var(--navy)]">
                {t("howToApplyPage.heroLine1")}
                <br />
                {t("howToApplyPage.heroLine2")} <span className="text-[var(--aqua)]">{t("howToApplyPage.heroLine3")}</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed max-w-md">
                {t("howToApplyPage.heroSub")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="border-t border-black/[0.08]">
            {steps.map((step) => (
              <div
                key={step.n}
                className="grid md:grid-cols-12 gap-6 md:gap-10 py-8 md:py-10 border-b border-black/[0.08] items-start"
              >
                <div className="md:col-span-2">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/40 tabular-nums">
                    {step.n}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <h2 className="font-heading font-[700] text-2xl md:text-3xl text-[var(--navy)] tracking-[-0.01em] leading-tight">
                    {step.title}
                  </h2>
                </div>
                <div className="md:col-span-5">
                  <p className="text-[var(--navy)]/70 leading-relaxed">{step.desc}</p>
                  {step.detail && (
                    <p className="mt-3 font-mono text-sm text-[var(--navy)]/80 break-all">
                      {step.detail}
                    </p>
                  )}
                </div>
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
                {t("howToApplyPage.closingEyebrow")}
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                {t("howToApplyPage.closingTitle1")} <span className="text-[var(--aqua)]">{t("howToApplyPage.closingTitle2")}</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 leading-relaxed mb-8 max-w-md">
                {t("howToApplyPage.closingBody")}
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                <Link
                  href="/business-contact"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                >
                  {t("howToApplyPage.closingCtaPrimary")}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:0818445564"
                  className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors tabular-nums"
                >
                  081-844-5564
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
