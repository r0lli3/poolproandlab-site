import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Grid3x3 } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/catalog";
import { getServerT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerT();
  return {
    title: t("shopPage.allHeroTitle"),
    description: t("shopPage.allHeroSubtitle"),
  };
}

export default async function AllProductsPage() {
  const { t } = await getServerT();
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--navy)] to-[#0f1722] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--aqua)]/20 border border-[var(--aqua)]/30 text-[var(--aqua)] rounded-full px-4 py-1.5 text-xs font-heading font-[700] uppercase tracking-widest mb-5">
            <Grid3x3 className="w-3.5 h-3.5" />
            {t("shopPage.allHeroBadge")}
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-4">
            {t("shopPage.allHeroTitle")}
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            {t("shopPage.allHeroSubtitle")}
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-white sticky top-20 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto">
          <Link
            href="/shop/all"
            className="shrink-0 px-4 py-2 rounded-full bg-[var(--navy)] text-white text-xs font-heading font-[700] uppercase tracking-wider"
          >
            {t("common.all")}
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop/category/${cat.slug}`}
              className="shrink-0 px-4 py-2 rounded-full bg-[var(--secondary)] text-[var(--navy)] text-xs font-heading font-[600] uppercase tracking-wider hover:bg-[var(--aqua)]/10 hover:text-[var(--aqua)] transition-colors"
            >
              {t(`categories.names.${cat.slug}`)}
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.slug}
              className="bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="relative aspect-square bg-[var(--secondary)]">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <Link
                  href={`/shop/category/${product.categorySlug}`}
                  className="absolute top-3 left-3 bg-[var(--aqua)]/10 text-[var(--aqua)] border border-[var(--aqua)]/20 rounded-full px-2.5 py-0.5 text-xs font-heading font-[700] hover:bg-[var(--aqua)]/20 transition-colors"
                >
                  {t(`categories.names.${product.categorySlug}`)}
                </Link>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-[700] text-[var(--navy)] mb-2 leading-snug min-h-[2.5em]">
                  {product.name}
                </h3>
                <p className="text-[var(--aqua)] font-heading font-[800] text-lg">
                  {product.price ?? t("shopPage.contactForPrice")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-[var(--navy)] rounded-3xl p-10 md:p-14 text-white text-center">
          <Phone className="w-10 h-10 text-[var(--aqua)] mx-auto mb-5" />
          <h2 className="font-heading text-2xl md:text-3xl font-[800] mb-4">
            {t("shopPage.lookingTitle")}
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            {t("shopPage.lookingBody")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contactus"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
            >
              {t("common.contactUs")} <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0818445564"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-heading font-[600] rounded-full hover:bg-white/20 transition-colors border border-white/20"
            >
              <Phone className="w-4 h-4" /> 081-844-5564
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
