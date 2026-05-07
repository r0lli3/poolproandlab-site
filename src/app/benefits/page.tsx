import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getServerT } from "@/lib/i18n/server";

export const metadata: Metadata = {
  title: "Franchise Benefits",
  description:
    "Benefits of joining Pool Pro&Lab franchise — trade name rights, special pricing, showroom design, staff training, marketing support, and a complete business support system.",
};

export default async function BenefitsPage() {
  const { t } = await getServerT();

  const franchiseeRights = [
    t("benefitsPage.right1"),
    t("benefitsPage.right2"),
    t("benefitsPage.right3"),
    t("benefitsPage.right4"),
    t("benefitsPage.right5"),
  ];

  const supportAreas = [
    t("benefitsPage.support1"),
    t("benefitsPage.support2"),
    t("benefitsPage.support3"),
    t("benefitsPage.support4"),
    t("benefitsPage.support5"),
    t("benefitsPage.support6"),
    t("benefitsPage.support7"),
  ];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-10">
            {t("benefitsPage.eyebrow")}
          </p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-[var(--navy)]">
                {t("benefitsPage.heroLine1")}
                <br />
                {t("benefitsPage.heroLine2")} <span className="text-[var(--aqua)]">{t("benefitsPage.heroLine3")}</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed max-w-md">
                {t("benefitsPage.heroSub")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[5/6] overflow-hidden bg-[oklch(0.96_0.01_220)]">
              <Image
                src="/assets/images/franchise-benefits-1.jpg"
                alt="Franchise benefits"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                {t("benefitsPage.rightsEyebrow")}
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05] mb-8">
                {t("benefitsPage.rightsTitle")}
              </h2>
              <ul className="border-t border-black/[0.08]">
                {franchiseeRights.map((item, i) => (
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

      {/* Support system */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:order-2 relative aspect-[4/3] lg:aspect-[5/6] overflow-hidden bg-[oklch(0.96_0.01_220)]">
              <Image
                src="/assets/images/franchise-benefits-2.jpg"
                alt="Support system"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="lg:col-span-7 lg:order-1 lg:pt-8">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                {t("benefitsPage.supportEyebrow")}
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05] mb-6">
                {t("benefitsPage.supportTitle1")} <span className="text-[var(--aqua)]">{t("benefitsPage.supportTitle2")}</span>
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-10 max-w-2xl">
                {t("benefitsPage.supportBody")}
              </p>
              <div className="grid grid-cols-2 border-l border-t border-black/[0.08]">
                {supportAreas.map((area) => (
                  <div
                    key={area}
                    className="border-r border-b border-black/[0.08] p-5 text-sm font-[500] text-[var(--navy)]"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[5/6] overflow-hidden bg-[oklch(0.96_0.01_220)]">
              <Image
                src="/assets/images/franchise-training.jpg"
                alt="Training program"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                {t("benefitsPage.trainingEyebrow")}
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05] mb-6">
                {t("benefitsPage.trainingTitle")}
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-10 max-w-md">
                {t("benefitsPage.trainingBody")}
              </p>
              <div className="border-t border-black/[0.08]">
                <div className="border-b border-black/[0.08] py-6 flex items-start gap-6">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/40 pt-1 tabular-nums shrink-0">
                    01
                  </span>
                  <div>
                    <p className="font-heading font-[700] text-[var(--navy)] tracking-[-0.01em] mb-1">
                      {t("benefitsPage.phase1Title")}
                    </p>
                    <p className="text-sm text-[var(--navy)]/70 leading-relaxed">
                      {t("benefitsPage.phase1Desc")}
                    </p>
                  </div>
                </div>
                <div className="border-b border-black/[0.08] py-6 flex items-start gap-6">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/40 pt-1 tabular-nums shrink-0">
                    02
                  </span>
                  <div>
                    <p className="font-heading font-[700] text-[var(--navy)] tracking-[-0.01em] mb-1">
                      {t("benefitsPage.phase2Title")}
                    </p>
                    <p className="text-sm text-[var(--navy)]/70 leading-relaxed">
                      {t("benefitsPage.phase2Desc")}
                    </p>
                  </div>
                </div>
              </div>
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
                {t("benefitsPage.closingEyebrow")}
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                {t("benefitsPage.closingTitle1")} <span className="text-[var(--aqua)]">{t("benefitsPage.closingTitle2")}</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-center gap-6">
              <Link
                href="/howtoapply"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
              >
                {t("benefitsPage.closingCtaPrimary")}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/faqs"
                className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
              >
                {t("benefitsPage.closingCtaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
