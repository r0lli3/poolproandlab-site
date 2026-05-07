"use client";

import Link from "next/link";
import { useState } from "react";
import { Plus, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How long does the shop decoration take before opening for business?",
    a: "About four months from the time the franchise agreement is signed and the location is confirmed.",
  },
  {
    q: "What will the franchisee get in return for its initial investment?",
    a: "Shop decoration to prototype standard (depending on location), all essential equipment and facilities, signage and supplies, marketing and advertising support, staff training, and continuous operational support.",
  },
  {
    q: "Is a minimum order imposed?",
    a: "It depends on the location. Our franchise team will walk through the specifics with you during the initial meeting.",
  },
  {
    q: "Will the franchisor assist in location selection?",
    a: "Yes. We have a team of experts who recommend viable locations, can negotiate rental rates on your behalf, and have prime sites available.",
  },
  {
    q: "What is the franchise application process?",
    a: "Six steps: application form, initial interview, financial assessment, contract signing, training program, and finally outlet decoration and opening.",
  },
  {
    q: "What training does Pool Pro&Lab provide?",
    a: "Two phases. Phase one is at our head office, covering products, services, and operations. Phase two is on-site at your outlet, with a Pool Pro&Lab staffer coaching you through the beginning of operations.",
  },
  {
    q: "What ongoing support is available after opening?",
    a: "Outlet management, operations, marketing, procurement, accounting and legal, business consultation, and research and development — all on tap.",
  },
  {
    q: "Can I expand my franchise to multiple locations?",
    a: "Yes. Pool Pro&Lab wants each franchisee running a full-time business with ownership success. Franchisees have the right to extend when ready.",
  },
];

function FaqItem({ q, a, n }: { q: string; a: string; n: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/[0.08]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-6 md:py-8 text-left group"
      >
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/40 shrink-0 pt-1.5 tabular-nums">
          {n}
        </span>
        <span className="font-heading font-[600] text-[var(--navy)] text-lg md:text-xl flex-1 tracking-[-0.01em] leading-snug">
          {q}
        </span>
        <Plus
          className={cn(
            "w-5 h-5 text-[var(--navy)]/60 shrink-0 mt-1 transition-transform duration-200 group-hover:text-[var(--aqua)]",
            open && "rotate-45"
          )}
        />
      </button>
      {open && (
        <div className="pb-8 pl-[calc(11px_+_0.18em_+_1.5rem)] sm:pl-[64px] -mt-2">
          <p className="text-[var(--navy)]/70 leading-relaxed max-w-3xl">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-10">
            FAQs — Franchise program
          </p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-[var(--navy)]">
                Questions, <span className="text-[var(--aqua)]">answered.</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed max-w-md">
                Everything you&apos;d ask before signing a franchise agreement — and a few things
                you didn&apos;t think to ask.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ list */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="border-t border-black/[0.08]">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} n={String(i + 1).padStart(2, "0")} />
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
                Still have questions?
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                Talk to the franchise team.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 leading-relaxed mb-8 max-w-md">
                We&apos;ll walk you through the program, the economics, and what running a Pool
                Pro&amp;Lab actually looks like.
              </p>
              <Link
                href="/business-contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
              >
                Contact franchise team
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
