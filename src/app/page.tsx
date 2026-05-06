import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FlaskConical, Wrench, Droplets, ChevronRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Pool Pro&Lab | Thailand's Premier Pool Equipment & Water Testing Lab",
  description:
    "Thailand's leading pool equipment supplier and ASEAN's first computerized water testing laboratory. Professional pool services across Bangkok, Chiang Mai, Chiang Rai, and Hua Hin.",
  openGraph: {
    title: "Pool Pro&Lab | Pool Equipment, Water Testing Lab & Services",
    description:
      "Thailand's leading pool equipment supplier and ASEAN's first computerized water testing laboratory.",
  },
};

const categories = [
  { name: "Pool Cleaning Robot", img: "/assets/images/category-cleaning-robot.jpg", href: "/shop" },
  { name: "Pool Cleaning Equipment", img: "/assets/images/category-cleaning-equipment.jpg", href: "/shop" },
  { name: "Pool Chemicals", img: "/assets/images/category-chemicals.png", href: "/shop" },
  { name: "Premium Chemicals", img: "/assets/images/category-chemicals-premium.png", href: "/shop" },
  { name: "Pool Pump", img: "/assets/images/category-pump.png", href: "/shop" },
  { name: "Salt Chlorinator", img: "/assets/images/category-salt-chlorinator.png", href: "/shop" },
  { name: "Mineral Swim", img: "/assets/images/category-mineral-swim.png", href: "/shop" },
];

const services = [
  {
    icon: FlaskConical,
    title: "Pool Water Testing Lab",
    description:
      "ASEAN's first computerized water analysis laboratory. We check 11 parameters of your pool's chemical balance and provide instant expert recommendations.",
    href: "/lab",
    color: "var(--aqua)",
  },
  {
    icon: Droplets,
    title: "Pool Water Treatment",
    description:
      "Advanced water treatment using premium Australian products — sanitizers, pH buffers, clarifiers, and pool protection solutions.",
    href: "/service",
    color: "var(--navy)",
  },
  {
    icon: Wrench,
    title: "Pool Care & Cleaning",
    description:
      "Full-service maintenance by trained technicians: vacuum, water balancing, equipment checks, repairs, and water problem elimination.",
    href: "/service",
    color: "oklch(0.65 0.18 40)",
  },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "14,000+", label: "Pools Built in Thailand" },
  { value: "11", label: "Water Parameters Tested" },
  { value: "4", label: "Branch Locations" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--navy)] via-[oklch(0.22_0.06_230)] to-[oklch(0.18_0.04_220)] text-white">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--aqua)] rounded-full opacity-10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                className="mb-6 bg-[var(--aqua)]/20 text-[var(--aqua)] border-[var(--aqua)]/30 font-heading text-xs tracking-widest uppercase"
                variant="outline"
              >
                ASEAN&apos;s #1 Pool Lab
              </Badge>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-[800] leading-[1.05] mb-6">
                Pool Equipment
                <br />
                <span className="text-[var(--aqua)]">&amp; Supplies</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
                Thailand&apos;s leading pool equipment supplier, certified water testing laboratory,
                and professional pool maintenance service — all in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
                >
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/lab"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-heading font-[600] rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  Book Lab Test
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/products-hero.png"
                  alt="Pool equipment and supplies"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="600px"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white text-[var(--navy)] rounded-xl shadow-lg px-5 py-3">
                <div className="flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-[var(--aqua)]" />
                  <div>
                    <p className="font-heading font-[800] text-sm">Water Lab</p>
                    <p className="text-xs text-[var(--navy)]/60">11 parameters tested</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 64L60 56C120 48 240 32 360 26.7C480 21.3 600 26.7 720 32C840 37.3 960 42.7 1080 40C1200 37.3 1320 26.7 1380 21.3L1440 16V64H0Z" fill="oklch(0.99 0 0)" />
          </svg>
        </div>
      </section>

      {/* Water lab CTA banner */}
      <section className="bg-[oklch(0.93_0.06_198)] border-y border-[var(--aqua)]/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FlaskConical className="w-5 h-5 text-[var(--aqua)] shrink-0" />
            <p className="font-heading font-[700] text-[var(--navy)] text-sm sm:text-base">
              Pool Water Testing Lab &amp; Supplies —{" "}
              <span className="font-[400] text-[var(--navy)]/70">
                ASEAN&apos;s first computerized water analysis lab
              </span>
            </p>
          </div>
          <Link
            href="/lab"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            Book Now <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Product Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            Explore Our Range
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-[800] text-[var(--navy)]">
            Product Categories
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-[oklch(0.97_0.005_220)] hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-transparent hover:border-[var(--aqua)]/20"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  sizes="150px"
                />
              </div>
              <span className="font-heading font-[700] text-xs text-center text-[var(--navy)] leading-tight">
                {cat.name}
              </span>
            </Link>
          ))}
          <Link
            href="/shop"
            className="group flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border-2 border-dashed border-[var(--aqua)]/30 hover:border-[var(--aqua)] hover:bg-[oklch(0.97_0.02_198)] transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-full bg-[var(--aqua)]/10 flex items-center justify-center group-hover:bg-[var(--aqua)]/20 transition-colors">
              <ArrowRight className="w-5 h-5 text-[var(--aqua)]" />
            </div>
            <span className="font-heading font-[700] text-xs text-center text-[var(--aqua)] leading-tight">
              View All<br />Products
            </span>
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[var(--navy)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-4xl md:text-5xl font-[800] text-[var(--aqua)] mb-2">
                  {stat.value}
                </p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            What We Do
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-[800] text-[var(--navy)]">
            Our Services
          </h2>
          <p className="text-[var(--navy)]/60 mt-4 max-w-xl mx-auto leading-relaxed">
            From water testing to equipment supply and full pool maintenance — we cover every aspect of pool care.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc) => (
            <Link
              key={svc.title}
              href={svc.href}
              className="group relative overflow-hidden rounded-2xl bg-white border border-[oklch(0.91_0.01_220)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `color-mix(in oklch, ${svc.color} 15%, transparent)` }}
              >
                <svc.icon className="w-6 h-6" style={{ color: svc.color }} />
              </div>
              <h3 className="font-heading font-[700] text-xl text-[var(--navy)] mb-3">
                {svc.title}
              </h3>
              <p className="text-[var(--navy)]/60 text-sm leading-relaxed mb-5">
                {svc.description}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-heading font-[700]"
                style={{ color: svc.color }}
              >
                Learn More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Lab Feature */}
      <section className="bg-gradient-to-br from-[oklch(0.97_0.02_198)] to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="/assets/images/lab-hero.jpg"
                alt="Pool Water Testing Laboratory"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--navy)]/20 to-transparent" />
            </div>
            <div>
              <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-4">
                Pool Water Testing Lab
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-[800] text-[var(--navy)] mb-4">
                Is Your Pool Water
                <br />
                <span className="text-[var(--aqua)]">Health Enough to Swim?</span>
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-6">
                Because you never know what lies beneath the sparkling blue water in your swimming pool.
                Poor water quality can cause damaged hair, skin problems, tooth decay, respiratory
                infections, and pink eye.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "11 water parameters checked",
                  "Computerized water analysis",
                  "First certified lab in ASEAN",
                  "Results and recommendations within 7 days",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[var(--navy)]/80">
                    <CheckCircle2 className="w-5 h-5 text-[var(--aqua)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/lab"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
              >
                Learn About Our Lab <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise CTA */}
      <section className="relative overflow-hidden bg-[var(--navy)] text-white py-20">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[var(--aqua)]/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-4">
            Business Opportunity
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-[800] mb-4">
            1st Pool Service Franchise in Asia
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Thailand has the highest rate of pool ownership in Asia and the industry continues to grow.
            Join our franchise network and build a highly profitable business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/franchise-concept"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
            >
              Learn About Franchise <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/howtoapply"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-heading font-[600] rounded-full hover:bg-white/20 transition-colors border border-white/20"
            >
              How to Apply
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
