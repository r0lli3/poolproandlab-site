import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Apply",
  description:
    "Step-by-step guide to applying for a Pool Pro&Lab franchise. 6 steps: application form, initial meeting, financial verification, franchise agreement, training, and branch opening.",
};

const steps = [
  {
    num: "01",
    title: "Complete Franchise Application Form",
    desc: "Complete the franchise application form and send it to the Franchise Manager.",
    detail: "Email: business-contact@poolproandlab.com | Tel. Contact our franchise team",
  },
  {
    num: "02",
    title: "Franchise Initial Meeting",
    desc: "Franchise Initial meeting. The preliminary qualification of the applicant will be considered and an appointment will be made for the interview.",
    detail: null,
  },
  {
    num: "03",
    title: "Financial Verification",
    desc: "If the preliminary qualification meets the standard required, Pool Pro&Lab will provide details of the business.",
    detail: null,
  },
  {
    num: "04",
    title: "Franchise Agreement",
    desc: "Franchise agreement is signed.",
    detail: null,
  },
  {
    num: "05",
    title: "Training Program",
    desc: "Pool Pro&Lab will provide a comprehensive training course for franchisee staff — covering products, services, operations, and business management.",
    detail: null,
  },
  {
    num: "06",
    title: "Branch Setup and Opening",
    desc: "The office will be set up and decorated ready to operate. Pool Pro&Lab will send a staff member to coach during the beginning of the operation.",
    detail: null,
  },
];

export default function HowToApplyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--navy)] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            Join Our Franchise
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-4">
            How to Apply
          </h1>
          <p className="text-white/70 text-base md:text-lg">
            Steps for Franchise Application
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[oklch(0.91_0.01_220)] hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex gap-8 md:gap-12">
                {/* Step number */}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--aqua)] flex items-center justify-center text-white font-heading font-[800] text-sm shadow-lg shadow-[var(--aqua)]/30 z-10 relative">
                    {step.num}
                  </div>
                </div>
                {/* Content */}
                <div
                  className={`flex-1 pb-8 ${i < steps.length - 1 ? "border-b border-[oklch(0.91_0.01_220)]" : ""}`}
                >
                  <h2 className="font-heading text-xl font-[700] text-[var(--navy)] mb-3">
                    {step.title}
                  </h2>
                  <p className="text-[var(--navy)]/70 leading-relaxed mb-3">{step.desc}</p>
                  {step.detail && (
                    <div className="bg-[var(--aqua)]/10 border border-[var(--aqua)]/20 rounded-xl px-4 py-3 text-sm text-[var(--navy)]/70">
                      {step.detail}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application contact */}
      <section className="bg-gradient-to-br from-[oklch(0.97_0.02_198)] to-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl font-[800] text-[var(--navy)] mb-3">
            Send Your Application
          </h2>
          <p className="text-[var(--navy)]/60 mb-8 leading-relaxed">
            Ready to start your journey? Contact our franchise team to get the application form and
            begin the process.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/business-contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Contact Franchise Team
            </Link>
            <a
              href="tel:0818445564"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--navy)] text-white font-heading font-[600] rounded-full hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>
          <p className="mt-6 text-sm text-[var(--navy)]/50">
            ⚠️ Note: Please contact us for the most current franchise contact information.
          </p>
        </div>
      </section>
    </>
  );
}
