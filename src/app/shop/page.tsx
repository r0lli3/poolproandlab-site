import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Pool Pro&Lab shop — pool cleaning robots, chemicals, pumps, filters, salt chlorinators, mineral swim systems, and more. Thailand's leading pool equipment supplier.",
};

const products = [
  {
    name: "Cleaning Robot ACTIVE 10",
    img: "/assets/images/product-active10.jpg",
    price: "฿36,380",
    category: "Cleaning Robot",
  },
  {
    name: "Cleaning Robot ACTIVE 20",
    img: "/assets/images/product-active20.jpg",
    price: "฿45,990",
    category: "Cleaning Robot",
  },
  {
    name: "Cleaning Robot ACTIVE 30i",
    img: "/assets/images/product-active30i.jpg",
    price: "฿63,130",
    category: "Cleaning Robot",
  },
  {
    name: "Top Mount Sand Filter",
    img: "/assets/images/product-sand-filter.png",
    price: "Contact for price",
    category: "Filter System",
  },
];

const categories = [
  { name: "Pool Cleaning Robots", img: "/assets/images/category-cleaning-robot.jpg" },
  { name: "Cleaning Equipment", img: "/assets/images/category-cleaning-equipment.jpg" },
  { name: "Pool Chemicals", img: "/assets/images/category-chemicals.png" },
  { name: "Premium Chemicals", img: "/assets/images/category-chemicals-premium.png" },
  { name: "Pool Pumps", img: "/assets/images/category-pump.png" },
  { name: "Salt Chlorinators", img: "/assets/images/category-salt-chlorinator.png" },
  { name: "Mineral Swim", img: "/assets/images/category-mineral-swim.png" },
];

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-10">
            Shop — 124+ products · 14 categories
          </p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-[var(--navy)]">
                Pool equipment.
                <br />
                <span className="text-[var(--aqua)]">Curated, not catalogued.</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed max-w-md">
                Thailand&apos;s most complete pool equipment range, backed by expert advice on
                what actually fits your pool.
              </p>
              <div className="flex items-center gap-6 mt-8">
                <Link
                  href="/contactus"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                >
                  Get a quote
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

      {/* Categories grid */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="flex items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                001 — Browse by category
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] max-w-2xl leading-[1.05]">
                Equipment for every part of pool ownership.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-t border-black/[0.08]">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href="#"
                className="group relative aspect-[4/5] border-r border-b border-black/[0.08] p-6 flex flex-col justify-between hover:bg-[oklch(0.97_0.01_220)] transition-colors"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    className="object-contain group-hover:scale-[1.04] transition-transform duration-500"
                    sizes="300px"
                  />
                </div>
                <div className="flex items-end justify-between">
                  <span className="font-heading font-[600] text-sm text-[var(--navy)] leading-tight">
                    {cat.name}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-black/30 group-hover:text-[var(--aqua)] transition-colors" />
                </div>
              </Link>
            ))}
            <Link
              href="/contactus"
              className="group relative aspect-[4/5] border-r border-b border-black/[0.08] p-6 flex flex-col justify-between bg-[var(--navy)] text-white hover:bg-black transition-colors"
            >
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/60">
                Catalog
              </span>
              <div className="flex items-end justify-between">
                <span className="font-heading font-[600] text-2xl leading-tight">
                  See the full
                  <br />
                  range →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
              002 — Featured
            </p>
            <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
              The four we&apos;d put in our own pool.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-black/[0.08]">
            {products.map((product) => (
              <div
                key={product.name}
                className="border-r border-b border-black/[0.08] flex flex-col"
              >
                <div className="relative aspect-square bg-[oklch(0.97_0.005_220)]">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-black/50 block mb-2">
                      {product.category}
                    </span>
                    <h3 className="font-heading font-[600] text-base text-[var(--navy)] leading-snug tracking-[-0.01em]">
                      {product.name}
                    </h3>
                  </div>
                  <p className="font-heading font-[700] text-xl text-[var(--navy)] tabular-nums">
                    {product.price}
                  </p>
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
                003 — The full catalog
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                124 products. <span className="text-[var(--aqua)]">One conversation away.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 leading-relaxed mb-8 max-w-md">
                Contact us directly for pricing, availability, and recommendations tailored to
                your pool.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/contactus"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                >
                  Contact us
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
