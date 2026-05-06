import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FlaskConical, Droplets, Wrench, Zap, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Computerized pool water testing, advanced water treatment with Australian products, pool care & cleaning, equipment repair, and water problem elimination.",
};

const services = [
  {
    icon: FlaskConical,
    title: "Computerized Pool Water Lab",
    description:
      "A more advanced water testing method than the regular practice, where our laboratory specialists will analyze as many as 11 variables of the water chemical balance and evaluate whether your swimming pool is in the ideal condition to swim in or not. We will make our recommendations and show you step by step on how to care for your pool water.",
    img: "/assets/images/service-water-lab.jpg",
    features: [],
  },
  {
    icon: Droplets,
    title: "Advance Water Treatment",
    description: "Based on use of premium Australian imported products:",
    img: "/assets/images/service-water-treatment.jpg",
    features: [
      "Sanitizer & Balancer",
      "Calcium & pH Buffer",
      "Crystal Clear Clarifier & Pool Solutions",
      "Pool Protection",
    ],
  },
  {
    icon: Wrench,
    title: "Pool Care & Cleaning",
    description:
      "Our Pool Pro&Lab technicians will provide a range of essential maintenance services uniquely tailored to your pool. From a full vacuum to water balancing and equipment checks, we will ensure your pool remains in tip top condition.",
    img: "/assets/images/service-pool-care.jpg",
    features: [],
  },
  {
    icon: Wrench,
    title: "Pool Maintenance, Equipment & Repair",
    description:
      "Regular or casual pool servicing. Let us take care of your pool year-round, delivered by highly-trained and experienced technicians.",
    img: "/assets/images/service-maintenance.jpg",
    features: [
      "Filter Repair & Change Filter Media",
      "Salt Chlorinator Repair",
      "Robot Parts Replacement",
      "Pool Pumps Repair",
      "Under Water Light Repair",
      "General Equipment Repair",
    ],
  },
  {
    icon: Zap,
    title: "Water Problem Eliminator",
    description:
      "We diagnose and solve any pool water problem quickly and effectively:",
    img: "/assets/images/lab-feature.jpg",
    features: [
      "Clear Algae Water",
      "Clear Cloudy Water",
      "Pool Flocking",
      "Stains Removal",
      "Eliminate Over-Chlorine Levels",
      "Water Discolorations",
      "Filter Cleaning",
    ],
  },
];

export default function ServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-72 md:h-96">
          <Image
            src="/assets/images/service-hero.jpg"
            alt="Pool Pro&Lab Services"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/50 via-[var(--navy)]/40 to-[var(--navy)]/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
              Professional Pool Care
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-3">
              Our Services
            </h1>
            <p className="text-white/80 text-base md:text-lg">
              Purity your swimming pool
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {services.map((svc, i) => (
          <div
            key={svc.title}
            className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <Image
                src={svc.img}
                alt={svc.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--navy)]/10 to-transparent" />
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-[var(--aqua)]/10 flex items-center justify-center mb-5">
                <svc.icon className="w-6 h-6 text-[var(--aqua)]" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-[800] text-[var(--navy)] mb-4">
                {svc.title}
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-5">
                {svc.description}
              </p>
              {svc.features.length > 0 && (
                <ul className="space-y-2">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--navy)]/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--aqua)] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[var(--navy)] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-[800] mb-4">
            Ready to Keep Your Pool in Perfect Condition?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Contact us today to book any of our professional pool services across Bangkok,
            Chiang Mai, Chiang Rai, and Hua Hin.
          </p>
          <Link
            href="/contactus"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
