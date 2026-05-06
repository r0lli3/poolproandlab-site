import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { getServerT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerT();
  return {
    title: t("faqsPage.heroTitle"),
    description: t("faqsPage.metaDesc"),
  };
}

const FAQ_KEYS = [
  "decoration",
  "investment",
  "minOrder",
  "location",
  "process",
  "training",
  "support",
  "expand",
] as const;

export default async function FaqsPage() {
  const { t } = await getServerT();
  return (
    <>
      <section className="bg-[var(--navy)] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            {t("faqsPage.heroEyebrow")}
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-4">
            {t("faqsPage.heroTitle")}
          </h1>
          <p className="text-white/70">{t("faqsPage.heroSubtitle")}</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="space-y-3">
          {FAQ_KEYS.map((k) => (
            <details
              key={k}
              className="group bg-white border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-200 open:border-[var(--aqua)]/30 open:shadow-md"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-heading font-[700] text-[var(--navy)] text-sm sm:text-base">
                  {t(`faqsPage.items.${k}.q`)}
                </span>
                <ChevronDown className="w-5 h-5 text-[var(--aqua)] shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5">
                <div className="h-px bg-[var(--border)] mb-4" />
                <p className="text-[var(--navy)]/70 leading-relaxed text-sm">
                  {t(`faqsPage.items.${k}.a`)}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[var(--navy)]/60 mb-6">{t("faqsPage.stillQuestions")}</p>
          <Link
            href="/business-contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
          >
            {t("faqsPage.contactCta")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
