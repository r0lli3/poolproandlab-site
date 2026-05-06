"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How long does the shop decoration take before opening for business?",
    a: "About 4 months from the time the franchise agreement is signed and location is confirmed.",
  },
  {
    q: "What will the franchisee get in return for its initial investment?",
    a: "The initial investment includes: shop decoration as per prototype (depending on the location), all essential equipment and facilities, signage and supplies, assistance in marketing and advertising campaign, staff training, and continuous operation support.",
  },
  {
    q: "Is a minimum order imposed?",
    a: "It depends on the location. Our franchise team will discuss the specifics with you during the initial meeting.",
  },
  {
    q: "Will the franchisor assist in location selection?",
    a: "Yes — we have a team of experts who can recommend the most viable location. We can negotiate the rental charge on your behalf. We also have some prime areas for you to choose from.",
  },
  {
    q: "What is the franchise application process?",
    a: "The process has 6 steps: complete franchise application form, attend initial meeting and interview, financial status assessment, franchise contract signing, training program, and finally outlet decoration and opening.",
  },
  {
    q: "What training does Pool Pro&Lab provide?",
    a: "We provide a comprehensive training program in two phases. Phase 1 is at our head office, covering products, services, and operations. Phase 2 is on-site training in your outlet, with a Pool Pro&Lab staff member to coach you during the beginning of the operation.",
  },
  {
    q: "What ongoing support is available after opening?",
    a: "Franchisees receive ongoing support in: outlet management, operations, marketing, procurement, accounting and legal matters, business consultation, and research and development.",
  },
  {
    q: "Can I expand my franchise to multiple locations?",
    a: "Yes. Pool Pro&Lab wants each franchisee to run a full-time business and achieve ownership success. Franchisees have the right to extend their business when they are ready to do so.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "bg-white border rounded-2xl overflow-hidden transition-all duration-200",
        open ? "border-[var(--aqua)]/30 shadow-md" : "border-[oklch(0.91_0.01_220)]"
      )}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-heading font-[700] text-[var(--navy)] text-sm sm:text-base">
          {q}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-[var(--aqua)] shrink-0 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <div className="h-px bg-[oklch(0.91_0.01_220)] mb-4" />
          <p className="text-[var(--navy)]/70 leading-relaxed text-sm">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqsPage() {
  return (
    <>
      <section className="bg-[var(--navy)] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            Got Questions?
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-4">FAQs</h1>
          <p className="text-white/70">Questions &amp; Answers about our franchise program</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[var(--navy)]/60 mb-6">
            Still have questions? Contact our franchise team directly.
          </p>
          <Link
            href="/business-contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
          >
            Contact Franchise Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
