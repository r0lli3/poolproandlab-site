import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Find your nearest Pool Pro&Lab branch. Bangkok, Chiang Mai, Chiang Rai, and Hua Hin. Call 081-844-5564 or email info@poolproandlab.com.",
};

const branches = [
  {
    name: "Bangkok (HQ)",
    address: "2184–2186 New Petchaburi Rd., Bangkapi, Huaykwang, Bangkok 10310",
    phone: "081-844-5564",
    email: "info@poolproandlab.com",
    mapUrl: "https://maps.google.com/?q=2184+New+Petchaburi+Rd,+Bangkok",
  },
  {
    name: "Chiang Mai",
    address: "209/19 Wualai Road, Haiya, Muang, Chiang Mai 50100",
    phone: "095-204-4332",
    email: "chiangmai.ppl@gmail.com",
    mapUrl: "https://maps.google.com/?q=209/19+Wualai+Road,+Chiang+Mai",
  },
  {
    name: "Chiang Rai",
    address: "139/2, 139/5 Moo. 12, Rob Waing, Muang Chiang Rai 57000",
    phone: "095-371-2689",
    email: "poolproandlab.cr@gmail.com",
    mapUrl: "https://maps.google.com/?q=Rob+Waing,+Muang+Chiang+Rai",
  },
  {
    name: "Hua Hin",
    address: "60/30 Phet Kasem, Hua Hin, Prachuap Khiri Khan 77110",
    phone: "095-424-4888",
    email: "ppl.huahin@gmail.com",
    mapUrl: "https://maps.google.com/?q=Phet+Kasem+Hua+Hin",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-10">
            Contact — We pick up the phone
          </p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-[var(--navy)]">
                Talk to a real
                <br />
                pool person.
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed max-w-md">
                Four branches across Thailand, all staffed by trained technicians who actually
                know your pool.
              </p>
              <div className="flex items-center gap-6 mt-8 flex-wrap">
                <a
                  href="tel:0818445564"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors tabular-nums"
                >
                  Call 081-844-5564
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="https://lin.ee/DfhPrxD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
              001 — Find a branch
            </p>
            <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
              Four locations. <span className="text-[var(--aqua)]">One standard.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-black/[0.08]">
            {branches.map((branch) => (
              <div
                key={branch.name}
                className="border-r border-b border-black/[0.08] p-8 flex flex-col gap-5"
              >
                <h3 className="font-heading font-[700] text-xl text-[var(--navy)] tracking-[-0.01em]">
                  {branch.name}
                </h3>
                <p className="text-[var(--navy)]/60 text-sm leading-relaxed flex-1">
                  {branch.address}
                </p>
                <div className="space-y-2 text-sm">
                  <a
                    href={`tel:${branch.phone.replace(/[^0-9]/g, "")}`}
                    className="block text-[var(--navy)] hover:text-[var(--aqua)] transition-colors tabular-nums font-[600]"
                  >
                    {branch.phone}
                  </a>
                  <a
                    href={`mailto:${branch.email}`}
                    className="block text-[var(--navy)]/70 hover:text-[var(--aqua)] transition-colors break-all"
                  >
                    {branch.email}
                  </a>
                </div>
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-[600] text-[var(--navy)] hover:text-[var(--aqua)] transition-colors"
                >
                  View on map
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                002 — Or send a message
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05] mb-6">
                Tell us about your pool.
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed max-w-md">
                Question about water testing, equipment, or services? Drop us a note. Someone who
                knows pools will reply.
              </p>
              <div className="mt-8">
                <Link
                  href="/business-contact"
                  className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
                >
                  Franchise / business inquiries →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
