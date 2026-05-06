import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { getServerT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerT();
  return {
    title: t("contact.title"),
    description: t("contact.formBody"),
  };
}

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
  {
    name: "Kanchanaburi",
    address: "60/1 M.1, Thamakham, Muang, Kanchanaburi 71000",
    phone: "034-520-575",
    email: "ppl.kanchanaburi@gmail.com",
    mapUrl: "https://maps.google.com/?q=Thamakham+Muang+Kanchanaburi",
  },
  {
    name: "Korat",
    address: "168 M.7 Khok Kruat, Muang, Nakhon Ratchasima 30280",
    phone: "080-724-7700",
    email: "poolproandlab_korat@hotmail.com",
    mapUrl: "https://maps.google.com/?q=Khok+Kruat+Nakhon+Ratchasima",
  },
  {
    name: "Krabi",
    address: "12 Maharach Rd., Krabi Yai, Muang, Krabi 81000",
    phone: "075-818-338",
    email: "ppl.krabi@gmail.com",
    mapUrl: "https://maps.google.com/?q=Maharach+Rd+Krabi",
  },
  {
    name: "Nakhon Si Thammarat",
    address:
      "376/91 Moo 5, Aom Kai Wachirawut Rd., Pak Phun, Muang, Nakhon Si Thammarat 80000",
    phone: "075-800-422 / 088-752-6732",
    email: "ppl.nakhonsri@gmail.com",
    mapUrl:
      "https://maps.google.com/?q=Pak+Phun+Muang+Nakhon+Si+Thammarat",
  },
  {
    name: "Phuket",
    address: "6/2 Moo 2, Thepkrasatri Rd., Kohkeaw, Muang, Phuket 83200",
    phone: "076-238-999 / 076-615-160",
    email: "ppl.phuket@gmail.com",
    mapUrl: "https://maps.google.com/?q=Kohkeaw+Muang+Phuket",
  },
  {
    name: "Rayong",
    address: "89 Moo 3 Phla, Ban Chang, Rayong 21130",
    phone: "064-654-4995",
    email: "ppl.rayong@gmail.com",
    mapUrl: "https://maps.google.com/?q=Phla+Ban+Chang+Rayong",
  },
  {
    name: "Samui",
    address: "177/3 Moo 1, Bophut, Koh Samui, Surat Thani 84320",
    phone: "077-427-356 / 081-536-7597",
    email: "poolproandlab.samui@gmail.com",
    mapUrl: "https://maps.google.com/?q=Bophut+Koh+Samui",
  },
];

export default async function ContactPage() {
  const { t } = await getServerT();
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--navy)] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            {t("contact.eyebrow")}
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-4">{t("contact.title")}</h1>
          <p className="text-white/70 text-base md:text-lg">{t("contact.subtitle")}</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[var(--secondary)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
              {t("contact.formEyebrow")}
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-[800] text-[var(--navy)]">
              {t("contact.formTitle")}
            </h2>
            <p className="text-[var(--navy)]/60 mt-3 leading-relaxed">{t("contact.formBody")}</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Branch locations */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            {t("contact.branchesEyebrow")}
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-[800] text-[var(--navy)]">
            {t("contact.branchesTitle")}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="bg-white rounded-2xl border border-[var(--border)] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--aqua)]/10 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-[var(--aqua)]" />
              </div>
              <h3 className="font-heading font-[700] text-[var(--navy)] text-lg mb-3">
                {branch.name}
              </h3>
              <p className="text-[var(--navy)]/60 text-sm leading-relaxed mb-4">{branch.address}</p>
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
                {t("common.viewOnMap")} →
              </a>
            </div>
          ))}
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
            {t("common.callUs")}: 081-844-5564
          </a>
          <a
            href="https://lin.ee/DfhPrxD"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-[#06C755] text-white rounded-2xl hover:opacity-90 transition-opacity font-heading font-[700]"
          >
            <MessageCircle className="w-5 h-5" />
            {t("common.chatOnLine")}
          </a>
          <a
            href="mailto:info@poolproandlab.com"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-[var(--aqua)] text-white rounded-2xl hover:opacity-90 transition-opacity font-heading font-[700]"
          >
            <Mail className="w-5 h-5" />
            {t("common.emailUs")}
          </a>
        </div>
      </section>
    </>
  );
}
