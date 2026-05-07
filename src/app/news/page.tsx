import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getServerT } from "@/lib/i18n/server";

export const metadata: Metadata = {
  title: "News & Activities",
  description:
    "Latest news, promotions, and activities from Pool Pro&Lab. Stay updated on pool equipment, water care tips, and company events.",
};

export default async function NewsPage() {
  const { t } = await getServerT();
  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-10">
            {t("newsPage.eyebrow")}
          </p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-[var(--navy)]">
                {t("newsPage.heroLine1")}
                <br />
                <span className="text-[var(--aqua)]">{t("newsPage.heroLine2")}</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed max-w-md">
                {t("newsPage.heroSub")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empty state */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                {t("newsPage.comingSoonEyebrow")}
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                {t("newsPage.comingSoonTitle")}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[var(--navy)]/70 leading-relaxed mb-10 max-w-2xl">
                {t("newsPage.comingSoonBody")}
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                <Link
                  href="/contactus"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                >
                  {t("newsPage.ctaPrimary")}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://www.facebook.com/poolproandlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
                >
                  {t("newsPage.ctaSecondary")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
