import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Apply",
  description:
    "Step-by-step guide to applying for a Pool Pro&Lab franchise. 6 steps: application form, initial meeting, financial verification, franchise agreement, training, and branch opening.",
};

const steps = [
  {
    n: "01",
    title: "Send the application form",
    desc: "Complete the franchise application form and send it to the Franchise Manager.",
    detail: "business-contact@poolproandlab.com",
  },
  {
    n: "02",
    title: "Initial meeting",
    desc: "We review preliminary qualifications and schedule an interview with the franchise team.",
    detail: null,
  },
  {
    n: "03",
    title: "Financial verification",
    desc: "If the preliminary qualifications meet our standard, we share the full business details.",
    detail: null,
  },
  {
    n: "04",
    title: "Franchise agreement",
    desc: "Both sides sign the franchise agreement.",
    detail: null,
  },
  {
    n: "05",
    title: "Training program",
    desc: "A comprehensive training course for you and your staff — products, services, operations, and business management.",
    detail: null,
  },
  {
    n: "06",
    title: "Branch setup and opening",
    desc: "Office decoration to spec, equipment installation, and a Pool Pro&Lab staffer on-site to coach the start of operations.",
    detail: null,
  },
];

export default function HowToApplyPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-10">
            How to apply — Six steps to opening
          </p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-[var(--navy)]">
                Six steps from
                <br />
                form to <span className="text-[var(--aqua)]">opening day.</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed max-w-md">
                A clear, predictable process. The whole thing takes around four months from signed
                agreement to open doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="border-t border-black/[0.08]">
            {steps.map((step) => (
              <div
                key={step.n}
                className="grid md:grid-cols-12 gap-6 md:gap-10 py-8 md:py-10 border-b border-black/[0.08] items-start"
              >
                <div className="md:col-span-2">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/40 tabular-nums">
                    {step.n}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <h2 className="font-heading font-[700] text-2xl md:text-3xl text-[var(--navy)] tracking-[-0.01em] leading-tight">
                    {step.title}
                  </h2>
                </div>
                <div className="md:col-span-5">
                  <p className="text-[var(--navy)]/70 leading-relaxed">{step.desc}</p>
                  {step.detail && (
                    <p className="mt-3 font-mono text-sm text-[var(--navy)]/80 break-all">
                      {step.detail}
                    </p>
                  )}
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
                Step zero
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                Send the form. <span className="text-[var(--aqua)]">We&apos;ll take it from there.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 leading-relaxed mb-8 max-w-md">
                Get the application form and start the conversation with our franchise team.
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                <Link
                  href="/business-contact"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                >
                  Contact franchise team
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
