import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Computerized pool water testing, advanced water treatment with Australian products, pool care & cleaning, equipment repair, and water problem elimination.",
};

const services = [
  {
    n: "01",
    title: "Computerized Pool Water Lab",
    description:
      "Our laboratory specialists analyze eleven variables of your pool's chemical balance and tell you exactly whether the water is in ideal condition to swim in. You leave with a precise plan — not a guess.",
    img: "/assets/images/service-water-lab.jpg",
    features: [],
  },
  {
    n: "02",
    title: "Advanced Water Treatment",
    description:
      "Premium Australian products, applied by people who have done this for two decades.",
    img: "/assets/images/service-water-treatment.jpg",
    features: [
      "Sanitizer & balancer",
      "Calcium & pH buffer",
      "Crystal-clear clarifier and pool solutions",
      "Long-term pool protection",
    ],
  },
  {
    n: "03",
    title: "Pool Care & Cleaning",
    description:
      "Routine maintenance tailored to the way your pool actually behaves — full vacuum, water balancing, equipment checks. Your pool stays in tip-top condition.",
    img: "/assets/images/service-pool-care.jpg",
    features: [],
  },
  {
    n: "04",
    title: "Maintenance, Equipment & Repair",
    description:
      "Year-round pool servicing delivered by highly-trained technicians. Casual or contracted.",
    img: "/assets/images/service-maintenance.jpg",
    features: [
      "Filter repair and media replacement",
      "Salt chlorinator repair",
      "Robot parts replacement",
      "Pool pumps repair",
      "Underwater light repair",
      "General equipment repair",
    ],
  },
  {
    n: "05",
    title: "Water Problem Eliminator",
    description: "Diagnose and solve any pool water problem — quickly, effectively.",
    img: "/assets/images/lab-feature.jpg",
    features: [
      "Clear algae water",
      "Clear cloudy water",
      "Pool flocking",
      "Stain removal",
      "Eliminate over-chlorine levels",
      "Water discolorations",
      "Filter cleaning",
    ],
  },
];

export default function ServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-10">
            Services — Pool care, end to end
          </p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-[var(--navy)]">
                Five services.
                <br />
                One team that <span className="text-[var(--aqua)]">owns the outcome.</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed max-w-md">
                From a single water problem to a full maintenance contract — handled by the
                technicians who&apos;ve worked on Thailand&apos;s pools for two decades.
              </p>
              <div className="flex items-center gap-6 mt-8">
                <Link
                  href="/contactus"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                >
                  Get in touch
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/lab"
                  className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
                >
                  Visit the lab
                </Link>
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/8] mt-16 md:mt-24 overflow-hidden bg-[oklch(0.96_0.01_220)]">
            <Image
              src="/assets/images/service-hero.jpg"
              alt="Pool Pro&Lab Services"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* Services list — alternating editorial */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6">
          {services.map((svc, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={svc.title}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center py-20 md:py-28 ${
                  i !== services.length - 1 ? "border-b border-black/[0.08]" : ""
                }`}
              >
                <div
                  className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}
                >
                  <div className="relative aspect-[5/4] overflow-hidden bg-[oklch(0.96_0.01_220)]">
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/40 block mb-8">
                    {svc.n}
                  </span>
                  <h2 className="font-heading font-[700] text-3xl md:text-4xl text-[var(--navy)] mb-5 tracking-[-0.02em] leading-[1.1]">
                    {svc.title}
                  </h2>
                  <p className="text-[var(--navy)]/70 leading-relaxed mb-6">
                    {svc.description}
                  </p>
                  {svc.features.length > 0 && (
                    <ul className="border-t border-black/[0.08]">
                      {svc.features.map((f, j) => (
                        <li
                          key={f}
                          className="flex items-start gap-6 py-3 border-b border-black/[0.08] text-sm text-[var(--navy)]"
                        >
                          <span className="font-mono text-[11px] text-black/40 pt-0.5 tabular-nums">
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          <span className="leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA close */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                Ready when you are
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                Bangkok, Chiang Mai, Chiang Rai, Hua Hin —{" "}
                <span className="text-[var(--aqua)]">we cover the country.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 leading-relaxed mb-8 max-w-md">
                Tell us what you need and we&apos;ll get the right technician to your pool.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/contactus"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                >
                  Contact us
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/shop"
                  className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
                >
                  Browse equipment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
