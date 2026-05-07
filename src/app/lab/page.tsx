import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pool Water Testing Lab",
  description:
    "ASEAN's first computerized pool water analysis laboratory. We check 11 parameters of your pool's chemical balance. Bring your water sample or book a collection service.",
  openGraph: {
    title: "Pool Water Testing Lab | Pool Pro&Lab",
    description:
      "ASEAN's first computerized pool water analysis lab. 11 parameters tested. Results and recommendations within seven days.",
  },
};

const parameters = [
  "Free Chlorine",
  "Total Chlorine",
  "pH Level",
  "Total Alkalinity",
  "Calcium Hardness",
  "Cyanuric Acid",
  "Total Dissolved Solids",
  "Iron",
  "Copper",
  "Salt Level",
  "Water Temperature",
];

const risks = [
  "Damaged hair and scalp",
  "Skin problems and irritation",
  "Tooth decay",
  "Respiratory infections",
  "Pink eye (conjunctivitis)",
];

const steps = [
  {
    n: "01",
    title: "Bring your water sample",
    desc: "Drop a sample at any of our eleven branches. We test on the spot and walk you through the results before you leave.",
  },
  {
    n: "02",
    title: "Or have us collect it",
    desc: "Our technicians can pick the sample up from your pool. Written results and recommendations come back within seven days.",
  },
  {
    n: "03",
    title: "Get a real prescription",
    desc: "Computerized analysis turns into a precise treatment plan — exact products, exact doses — to bring water back into balance.",
  },
];

export default function LabPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-10">
            The Lab — ASEAN&apos;s first computerized pool water analysis
          </p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-[var(--navy)]">
                You can&apos;t see
                <br />
                what&apos;s in your pool.
                <br />
                <span className="text-[var(--aqua)]">We can.</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed max-w-md">
                A computerized lab measures eleven parameters of your pool&apos;s chemistry and
                returns a real treatment plan — not a guess.
              </p>
              <div className="flex items-center gap-6 mt-8">
                <Link
                  href="/contactus"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                >
                  Book a water test
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#process"
                  className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
                >
                  See how it works
                </Link>
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/8] mt-16 md:mt-24 overflow-hidden bg-[oklch(0.96_0.01_220)]">
            <Image
              src="/assets/images/lab-hero.jpg"
              alt="Pool Water Testing Laboratory"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* Editorial pull quote */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p className="font-heading text-2xl md:text-4xl font-[500] text-[var(--navy)] leading-[1.2] tracking-[-0.01em]">
            &ldquo;Because you never know what lies beneath the sparkling blue water in your
            swimming pool.&rdquo;
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                001 — Why it matters
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                Bad water doesn&apos;t look bad. It just makes you sick.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[var(--navy)]/70 leading-relaxed mb-10 max-w-2xl">
                Out-of-balance pool chemistry quietly causes a long list of problems for the
                people who actually swim in it. Our lab catches these before they reach you.
              </p>
              <ul className="border-t border-black/[0.08]">
                {risks.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-6 py-4 border-b border-black/[0.08] text-sm text-[var(--navy)]"
                  >
                    <span className="font-mono text-[11px] text-black/40 pt-0.5 tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The 11 parameters */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-16">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
              002 — What we measure
            </p>
            <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
              Eleven parameters. One report. Real recommendations.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-t border-black/[0.08]">
            {parameters.map((param, i) => (
              <div
                key={param}
                className="border-r border-b border-black/[0.08] p-6 flex items-start justify-between gap-4"
              >
                <span className="font-heading font-[600] text-base md:text-lg text-[var(--navy)] leading-tight tracking-[-0.01em]">
                  {param}
                </span>
                <span className="font-mono text-[11px] text-black/40 tabular-nums shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-16">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
              003 — The process
            </p>
            <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
              Three ways to get your water tested.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 border-t border-black/[0.08]">
            {steps.map((step) => (
              <div
                key={step.n}
                className="p-8 md:p-10 border-b md:border-b-0 md:border-r last:md:border-r-0 border-black/[0.08]"
              >
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/40 block mb-12">
                  {step.n}
                </span>
                <h3 className="font-heading font-[700] text-2xl text-[var(--navy)] mb-4 tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--navy)]/70 leading-relaxed">{step.desc}</p>
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
                004 — Ready when you are
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                Drop a sample today. <span className="text-[var(--aqua)]">Swim cleaner tomorrow.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 leading-relaxed mb-8 max-w-md">
                Visit any of our eleven branches across Thailand, or contact us to arrange a sample
                collection.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/contactus"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                >
                  Book a water test
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/service"
                  className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
                >
                  See our services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
