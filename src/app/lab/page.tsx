import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FlaskConical, CheckCircle2, ArrowRight, Beaker, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Pool Water Testing Lab",
  description:
    "ASEAN's first computerized pool water analysis laboratory. We check 11 parameters of your pool's chemical balance. Bring your water sample or book a collection service.",
  openGraph: {
    title: "Pool Water Testing Lab | Pool Pro&Lab",
    description:
      "ASEAN's first computerized pool water analysis lab. 11 parameters tested. Results and recommendations instantly.",
  },
};

const parameters = [
  "Free Chlorine", "Total Chlorine", "pH Level", "Total Alkalinity",
  "Calcium Hardness", "Cyanuric Acid", "Total Dissolved Solids",
  "Iron", "Copper", "Salt Level", "Water Temperature",
];

const steps = [
  {
    num: "01",
    title: "Bring Your Water Sample",
    desc: "Bring the water sample to any Pool Pro&Lab branch and get results and recommendations instantly.",
    icon: Beaker,
  },
  {
    num: "02",
    title: "Expert Collection Service",
    desc: "Our team of experts can collect the water sample from your location and provide results within 7 days.",
    icon: MapPin,
  },
  {
    num: "03",
    title: "Instant Recommendations",
    desc: "Receive a computerized report with precise treatment recommendations to restore perfect water balance.",
    icon: Clock,
  },
];

export default function LabPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-72 md:h-96">
          <Image
            src="/assets/images/lab-hero.jpg"
            alt="Pool Water Testing Lab"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/60 via-[var(--navy)]/40 to-[var(--navy)]/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <div className="inline-flex items-center gap-2 bg-[var(--aqua)]/20 border border-[var(--aqua)]/40 text-[var(--aqua)] rounded-full px-4 py-1.5 text-xs font-heading font-[700] uppercase tracking-widest mb-4">
              <FlaskConical className="w-3.5 h-3.5" />
              Water Testing Lab
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-3">
              Pool Water Testing Lab
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-lg">
              The first computerized water analysis laboratory in ASEAN
            </p>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="bg-[oklch(0.97_0.02_198)] py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-heading text-xl md:text-2xl font-[700] text-[var(--navy)] leading-relaxed">
            &ldquo;Because you never know what lies beneath the sparkling blue water in your swimming pool…&rdquo;
          </p>
        </div>
      </section>

      {/* Health section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-4">
              Why It Matters
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-[800] text-[var(--navy)] mb-5">
              Is Your Pool Water
              <br />
              <span className="text-[var(--aqua)]">Health Enough to Swim?</span>
            </h2>
            <p className="text-[var(--navy)]/70 leading-relaxed mb-6">
              Did you know? When you take a swim in your pool this may cause a risk for health
              issues such as:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Damaged hair and scalp",
                "Skin problems and irritation",
                "Tooth decay",
                "Respiratory infections",
                "Pink eye (conjunctivitis)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[var(--navy)]/80">
                  <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[var(--navy)]/70 leading-relaxed">
              Because your pool water may not be good enough quality. Our computerized lab catches
              problems before they affect you and your family.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg">
              <Image
                src="/assets/images/service-water-lab.jpg"
                alt="Water testing technician"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="flex flex-col gap-4 pt-8">
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg">
                <Image
                  src="/assets/images/service-water-treatment.jpg"
                  alt="Pool water treatment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="bg-[var(--navy)] rounded-2xl p-5 text-white">
                <FlaskConical className="w-8 h-8 text-[var(--aqua)] mb-3" />
                <p className="font-heading font-[800] text-2xl text-[var(--aqua)]">11</p>
                <p className="text-white/70 text-sm mt-1">Parameters Tested</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pool Water Check Up */}
      <section className="bg-[var(--navy)] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
              Our Process
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-[800] mb-4">
              Pool Water Check Up
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              Our Pool Water Check Up program checks 11 parameters of the water chemical balance
              and evaluates whether your swimming pool is in ideal condition — using computerized
              water analysis. The first laboratory of its kind in ASEAN.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
            {parameters.map((param, i) => (
              <div
                key={param}
                className="bg-white/10 rounded-xl p-3 text-center border border-white/10 hover:border-[var(--aqua)]/40 hover:bg-white/15 transition-colors"
              >
                <span className="block font-heading text-[var(--aqua)] text-xs font-[700] mb-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-white/80 text-xs leading-tight">{param}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Easy way to get tested */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            Simple Process
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-[800] text-[var(--navy)]">
            Easy Way to Get the Water Test
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-white rounded-2xl p-8 border border-[oklch(0.91_0.01_220)] hover:shadow-lg transition-shadow"
            >
              <span className="font-heading text-6xl font-[800] text-[var(--aqua)]/15 absolute top-4 right-6">
                {step.num}
              </span>
              <div className="w-12 h-12 rounded-xl bg-[var(--aqua)]/10 flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-[var(--aqua)]" />
              </div>
              <h3 className="font-heading font-[700] text-lg text-[var(--navy)] mb-3">
                {step.title}
              </h3>
              <p className="text-[var(--navy)]/60 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[var(--aqua)] to-[oklch(0.65_0.16_210)] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-[800] mb-4">
            Ready to Test Your Pool Water?
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Visit any of our 4 branches across Thailand or contact us to arrange a water sample collection.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contactus"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--aqua)] font-heading font-[700] rounded-full hover:bg-white/90 transition-opacity"
            >
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/service"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 text-white font-heading font-[600] rounded-full hover:bg-white/30 transition-colors border border-white/30"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
