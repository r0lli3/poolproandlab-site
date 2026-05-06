import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Phone, Grid3x3 } from "lucide-react";
import { getServerT } from "@/lib/i18n/server";
import { CATEGORIES, PRODUCTS } from "@/lib/catalog";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerT();
  return {
    title: t("shopPage.heroTitle"),
    description: t("shopPage.heroSubtitle"),
  };
}

export default async function ShopPage() {
  const { t } = await getServerT();
  const featured = PRODUCTS.filter((p) => p.price !== null).slice(0, 4);
  const productCount = PRODUCTS.length;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--navy)] to-[#0f1722] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--aqua)]/20 border border-[var(--aqua)]/30 text-[var(--aqua)] rounded-full px-4 py-1.5 text-xs font-heading font-[700] uppercase tracking-widest mb-5">
            <ShoppingBag className="w-3.5 h-3.5" />
            {t("shopPage.heroBadge")}
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-4">
            {t("shopPage.heroTitle")}
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            {t("shopPage.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <h2 className="font-heading text-2xl font-[800] text-[var(--navy)]">
            {t("shopPage.browseTitle")}
          </h2>
          <Link
            href="/shop/all"
            className="inline-flex items-center gap-1.5 text-sm font-heading font-[700] text-[var(--aqua)] hover:text-[var(--aqua-dark)] transition-colors"
          >
            {t("shopPage.viewAllProducts")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop/category/${cat.slug}`}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-[var(--secondary)] hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-transparent hover:border-[var(--aqua)]/20"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white">
                {cat.img ? (
                  <Image
                    src={cat.img}
                    alt={t(`categories.names.${cat.slug}`)}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    sizes="120px"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--aqua)]/40">
                    <Grid3x3 className="w-8 h-8" />
                  </div>
                )}
              </div>
              <span className="font-heading font-[700] text-xs text-center text-[var(--navy)] leading-tight">
                {t(`categories.names.${cat.slug}`)}
              </span>
            </Link>
          ))}
          <Link
            href="/shop/all"
            className="group flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border-2 border-dashed border-[var(--aqua)]/40 hover:border-[var(--aqua)] hover:bg-[var(--aqua)]/5 transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-full bg-[var(--aqua)]/10 flex items-center justify-center group-hover:bg-[var(--aqua)]/20 transition-colors">
              <Grid3x3 className="w-5 h-5 text-[var(--aqua)]" />
            </div>
            <span className="font-heading font-[700] text-xs text-center text-[var(--aqua)] leading-tight whitespace-pre-line">
              {t("categories.allProductsTile")}
            </span>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-[var(--secondary)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-2xl font-[800] text-[var(--navy)] mb-8">
            {t("shopPage.featured")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
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
                  <span className="absolute top-3 left-3 bg-[var(--aqua)]/10 text-[var(--aqua)] border border-[var(--aqua)]/20 rounded-full px-2.5 py-0.5 text-xs font-heading font-[700]">
                    {t(`categories.names.${product.categorySlug}`)}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-[700] text-[var(--navy)] mb-2 leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-[var(--aqua)] font-heading font-[800] text-lg">
                    {product.price ?? t("shopPage.contactForPrice")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-[var(--navy)] rounded-3xl p-10 md:p-14 text-white text-center">
          <Phone className="w-10 h-10 text-[var(--aqua)] mx-auto mb-5" />
          <h2 className="font-heading text-2xl md:text-3xl font-[800] mb-4">
            {t("shopPage.ctaTitle", { count: productCount })}
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            {t("shopPage.ctaBody", { count: productCount })}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/shop/all"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
            >
              {t("shopPage.viewAllProducts")} <ArrowRight className="w-4 h-4" />
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
