import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { getServerT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerT();
  return {
    title: t("newsPage.heroTitle"),
    description: t("newsPage.metaDesc"),
  };
}

export default async function NewsPage() {
  const { t } = await getServerT();
  return (
    <>
      <section className="bg-[var(--navy)] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            {t("newsPage.heroEyebrow")}
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-4">
            {t("newsPage.heroTitle")}
          </h1>
          <p className="text-white/70 text-base md:text-lg">{t("newsPage.heroSubtitle")}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-xl mx-auto">
          <div className="w-20 h-20 rounded-full bg-[var(--aqua)]/10 flex items-center justify-center mx-auto mb-6">
            <Newspaper className="w-10 h-10 text-[var(--aqua)]" />
          </div>
          <h2 className="font-heading text-2xl font-[800] text-[var(--navy)] mb-4">
            {t("newsPage.comingSoonTitle")}
          </h2>
          <p className="text-[var(--navy)]/60 leading-relaxed mb-8">{t("newsPage.comingSoonBody")}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contactus"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
            >
              {t("common.contactUs")} <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://www.facebook.com/poolproandlab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--navy)] text-white font-heading font-[600] rounded-full hover:opacity-90 transition-opacity"
            >
              {t("newsPage.facebookCta")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
