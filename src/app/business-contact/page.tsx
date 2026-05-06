import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Contact",
  description:
    "Interested in a Pool Pro&Lab franchise? Contact our business development team to learn more about franchise opportunities.",
};

export default function BusinessContactPage() {
  return (
    <>
      <section className="bg-[var(--navy)] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            Franchise Inquiry
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-4">
            Franchise Contact
          </h1>
          <p className="text-white/70">Interested in becoming a Pool Pro&amp;Lab franchisee?</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[var(--aqua)]/10 flex items-center justify-center">
            <Building2 className="w-5 h-5 text-[var(--aqua)]" />
          </div>
          <div>
            <p className="font-heading font-[700] text-[var(--navy)]">Franchise Inquiry Form</p>
            <p className="text-sm text-[var(--navy)]/60">Our team will respond within 2 business days</p>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
