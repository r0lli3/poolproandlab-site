import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Find your nearest Pool Pro&Lab branch. Bangkok, Chiang Mai, Chiang Rai, and Hua Hin. Call 081-844-5564 or email info@poolproandlab.com.",
};

const branches = [
  {
    name: "Bangkok (HQ)",
    address: "2184-2186 New Petchaburi Rd., Bangkapi, Huaykwang, Bangkok 10310",
    phone: "081-844-5564",
    email: "info@poolproandlab.com",
    mapUrl: "https://maps.google.com/?q=2184+New+Petchaburi+Rd,+Bangkok",
  },
  {
    name: "Chiang Mai",
    address: "209/19 Wualai Road, Haiya, Muang, Chiangmai 50100",
    phone: "052-011788 / 095-204-4332",
    email: "chiangmai.ppl@gmail.com",
    mapUrl: "https://maps.google.com/?q=209/19+Wualai+Road,+Chiang+Mai",
  },
  {
    name: "Chiang Rai",
    address: "139/2, 139/5 Moo.12, Rob Waing, Muang Chiang Rai, 57000",
    phone: "082-496-1477 / 095-371-2689",
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
      <section className="bg-[var(--navy)] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            Get in Touch
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-4">
            Contact Us
          </h1>
          <p className="text-white/70 text-base md:text-lg">
            Pool Water Testing Lab and Supplies
          </p>
        </div>
      </section>

      {/* Branch locations */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            Find Us
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-[800] text-[var(--navy)]">
            Our Branches
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="bg-white rounded-2xl border border-[oklch(0.91_0.01_220)] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--aqua)]/10 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-[var(--aqua)]" />
              </div>
              <h3 className="font-heading font-[700] text-[var(--navy)] text-lg mb-3">
                {branch.name}
              </h3>
              <p className="text-[var(--navy)]/60 text-sm leading-relaxed mb-4">
                {branch.address}
              </p>
              <div className="space-y-2">
                <a
                  href={`tel:${branch.phone.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-2 text-sm text-[var(--navy)]/80 hover:text-[var(--aqua)] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[var(--aqua)] shrink-0" />
                  {branch.phone}
                </a>
                <a
                  href={`mailto:${branch.email}`}
                  className="flex items-center gap-2 text-sm text-[var(--navy)]/80 hover:text-[var(--aqua)] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[var(--aqua)] shrink-0" />
                  {branch.email}
                </a>
              </div>
              <a
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs font-heading font-[700] text-[var(--aqua)] hover:underline"
              >
                View on Map →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[oklch(0.97_0.005_220)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
              Send a Message
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-[800] text-[var(--navy)]">
              Get in Touch
            </h2>
            <p className="text-[var(--navy)]/60 mt-3 leading-relaxed">
              Have a question about pool water testing, equipment, or services? Send us a message and
              we&apos;ll get back to you promptly.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Line/Social quick contact */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0818445564"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-[var(--navy)] text-white rounded-2xl hover:opacity-90 transition-opacity font-heading font-[700]"
          >
            <Phone className="w-5 h-5 text-[var(--aqua)]" />
            Call: 081-844-5564
          </a>
          <a
            href="https://lin.ee/DfhPrxD"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-[#06C755] text-white rounded-2xl hover:opacity-90 transition-opacity font-heading font-[700]"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on Line
          </a>
          <a
            href="mailto:info@poolproandlab.com"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-[var(--aqua)] text-white rounded-2xl hover:opacity-90 transition-opacity font-heading font-[700]"
          >
            <Mail className="w-5 h-5" />
            Email Us
          </a>
        </div>
      </section>
    </>
  );
}
