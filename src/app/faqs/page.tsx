"use client";

import Link from "next/link";
import { useState } from "react";
import { Plus, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n/client";

function FaqItem({ q, a, n }: { q: string; a: string; n: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/[0.08]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-6 md:py-8 text-left group"
      >
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/40 shrink-0 pt-1.5 tabular-nums">
          {n}
        </span>
        <span className="font-heading font-[600] text-[var(--navy)] text-lg md:text-xl flex-1 tracking-[-0.01em] leading-snug">
          {q}
        </span>
        <Plus
          className={cn(
            "w-5 h-5 text-[var(--navy)]/60 shrink-0 mt-1 transition-transform duration-200 group-hover:text-[var(--aqua)]",
            open && "rotate-45"
          )}
        />
      </button>
      {open && (
        <div className="pb-8 pl-[calc(11px_+_0.18em_+_1.5rem)] sm:pl-[64px] -mt-2">
          <p className="text-[var(--navy)]/70 leading-relaxed max-w-3xl">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqsPage() {
  const { t } = useT();

  const itemKeys = ["decoration", "investment", "minOrder", "location", "process", "training", "support", "expand"];
  const faqs = itemKeys.map((k) => ({
    q: t(`faqsPage.items.${k}.q`),
    a: t(`faqsPage.items.${k}.a`),
  }));

  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-10">
            {t("faqsPage.eyebrow")}
          </p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-[var(--navy)]">
                {t("faqsPage.heroLine1")} <span className="text-[var(--aqua)]">{t("faqsPage.heroLine2")}</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed max-w-md">
                {t("faqsPage.heroSub")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ list */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="border-t border-black/[0.08]">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} n={String(i + 1).padStart(2, "0")} />
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
                {t("faqsPage.closingEyebrow")}
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                {t("faqsPage.closingTitle")}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 leading-relaxed mb-8 max-w-md">
                {t("faqsPage.closingBody")}
              </p>
              <Link
                href="/business-contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
              >
                {t("faqsPage.closingCta")}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
