import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, ChevronLeft, Grid3x3 } from "lucide-react";
import { CATEGORIES, getCategory, productsByCategory } from "@/lib/catalog";
import { getServerT } from "@/lib/i18n/server";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) return { title: "Category" };
  const { t } = await getServerT();
  const name = t(`categories.names.${slug}`);
  return {
    title: name,
    description: t("shopPage.categoryCtaBody", { category: name }),
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const products = productsByCategory(slug);
  const { t } = await getServerT();
  const localizedName = t(`categories.names.${slug}`);

  return (
    <>
      <section className="bg-gradient-to-br from-[var(--navy)] to-[#0f1722] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-[var(--aqua)] text-sm font-heading mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> {t("shopPage.categoryBack")}
          </Link>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-white shrink-0">
              {category.img ? (
                <Image src={category.img} alt={localizedName} fill className="object-contain p-3" sizes="96px" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-[var(--aqua)]/40">
                  <Grid3x3 className="w-10 h-10" />
                </div>
              )}
            </div>
            <div>
              <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-2">
                {t("categories.category")}
              </p>
              <h1 className="font-heading text-3xl md:text-5xl font-[800]">{localizedName}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {products.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-[var(--navy)]/60 leading-relaxed mb-6 max-w-lg mx-auto">
              {t("shopPage.categoryEmptyBody", { category: localizedName })}
            </p>
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-[var(--navy)] rounded-3xl p-10 md:p-14 text-white text-center">
          <Phone className="w-10 h-10 text-[var(--aqua)] mx-auto mb-5" />
          <h2 className="font-heading text-2xl md:text-3xl font-[800] mb-4">
            {t("shopPage.categoryCtaTitle", { category: localizedName })}
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            {t("shopPage.categoryCtaBody", { category: localizedName })}
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
