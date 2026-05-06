import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Phone } from "lucide-react";

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
    href: "/shop",
  },
  {
    name: "Cleaning Robot ACTIVE 20",
    img: "/assets/images/product-active20.jpg",
    price: "฿45,990",
    category: "Cleaning Robot",
    href: "/shop",
  },
  {
    name: "Cleaning Robot ACTIVE 30i",
    img: "/assets/images/product-active30i.jpg",
    price: "฿63,130",
    category: "Cleaning Robot",
    href: "/shop",
  },
  {
    name: "Top Mount Sand Filter",
    img: "/assets/images/product-sand-filter.png",
    price: "Contact for Price",
    category: "Filter System",
    href: "/shop",
  },
];

const categories = [
  { name: "Pool Cleaning Robot", img: "/assets/images/category-cleaning-robot.jpg" },
  { name: "Pool Cleaning Equipment", img: "/assets/images/category-cleaning-equipment.jpg" },
  { name: "Pool Chemicals", img: "/assets/images/category-chemicals.png" },
  { name: "Premium Chemicals", img: "/assets/images/category-chemicals-premium.png" },
  { name: "Pool Pump", img: "/assets/images/category-pump.png" },
  { name: "Salt Chlorinator", img: "/assets/images/category-salt-chlorinator.png" },
  { name: "Mineral Swim", img: "/assets/images/category-mineral-swim.png" },
];

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--navy)] to-[oklch(0.22_0.06_230)] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--aqua)]/20 border border-[var(--aqua)]/30 text-[var(--aqua)] rounded-full px-4 py-1.5 text-xs font-heading font-[700] uppercase tracking-widest mb-5">
            <ShoppingBag className="w-3.5 h-3.5" />
            Pool Equipment & Supplies
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-4">
            Shop Pool Equipment
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Over 124 products across 14 categories. Thailand&apos;s most complete pool equipment range,
            backed by expert advice.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="font-heading text-2xl font-[800] text-[var(--navy)] mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-[oklch(0.97_0.005_220)] hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-transparent hover:border-[var(--aqua)]/20 cursor-pointer"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  sizes="120px"
                />
              </div>
              <span className="font-heading font-[700] text-xs text-center text-[var(--navy)] leading-tight">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-[oklch(0.97_0.005_220)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-2xl font-[800] text-[var(--navy)] mb-8">Featured Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl overflow-hidden border border-[oklch(0.91_0.01_220)] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="relative aspect-square bg-[oklch(0.97_0.005_220)]">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <span className="absolute top-3 left-3 bg-[var(--aqua)]/10 text-[var(--aqua)] border border-[var(--aqua)]/20 rounded-full px-2.5 py-0.5 text-xs font-heading font-[700]">
                    {product.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-[700] text-[var(--navy)] mb-2 leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-[var(--aqua)] font-heading font-[800] text-lg">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact to order */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-[var(--navy)] rounded-3xl p-10 md:p-14 text-white text-center">
          <Phone className="w-10 h-10 text-[var(--aqua)] mx-auto mb-5" />
          <h2 className="font-heading text-2xl md:text-3xl font-[800] mb-4">
            124+ Products Available
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Our full catalog includes over 124 pool products. Contact us directly for pricing,
            availability, and expert recommendations tailored to your pool.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contactus"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
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
