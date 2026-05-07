import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { getServerT } from "@/lib/i18n/server";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Find your nearest Pool Pro&Lab branch — eleven locations across Thailand. Call 081-844-5564 or email info@poolproandlab.com.",
};

export default async function ContactPage() {
  const { t } = await getServerT();

  const branches = [
    { name: t("contact.branches.bangkok.name"), address: t("contact.branches.bangkok.address"), phones: ["081-844-5564"], email: "info@poolproandlab.com", mapUrl: "https://maps.google.com/?q=2184+New+Petchaburi+Rd,+Bangkok" },
    { name: t("contact.branches.chiangmai.name"), address: t("contact.branches.chiangmai.address"), phones: ["052-011-788", "095-204-4332"], email: "chiangmai.ppl@gmail.com", mapUrl: "https://maps.google.com/?q=209/19+Wualai+Road,+Chiang+Mai" },
    { name: t("contact.branches.chiangrai.name"), address: t("contact.branches.chiangrai.address"), phones: ["082-496-1477", "095-371-2689"], email: "poolproandlab.cr@gmail.com", mapUrl: "https://maps.google.com/?q=Rob+Wiang,+Muang+Chiang+Rai" },
    { name: t("contact.branches.huahin.name"), address: t("contact.branches.huahin.address"), phones: ["095-424-4888"], email: "ppl.huahin@gmail.com", mapUrl: "https://maps.google.com/?q=Phet+Kasem+Hua+Hin" },
    { name: t("contact.branches.kanchanaburi.name"), address: t("contact.branches.kanchanaburi.address"), phones: ["034-520-575"], email: "ppl.kanchanaburi@gmail.com", mapUrl: "https://maps.google.com/?q=Tha+Makham+Kanchanaburi" },
    { name: t("contact.branches.korat.name"), address: t("contact.branches.korat.address"), phones: ["080-724-7700"], email: "poolproandlab_korat@hotmail.com", mapUrl: "https://maps.google.com/?q=Khok+Kruat+Nakhon+Ratchasima" },
    { name: t("contact.branches.krabi.name"), address: t("contact.branches.krabi.address"), phones: ["075-818-338"], email: "ppl.krabi@gmail.com", mapUrl: "https://maps.google.com/?q=Maharat+Rd+Krabi" },
    { name: t("contact.branches.nakhonsi.name"), address: t("contact.branches.nakhonsi.address"), phones: ["075-800-422", "088-752-6732"], email: "ppl.nakhonsri@gmail.com", mapUrl: "https://maps.google.com/?q=Pak+Phoon+Nakhon+Si+Thammarat" },
    { name: t("contact.branches.phuket.name"), address: t("contact.branches.phuket.address"), phones: ["076-238-999", "076-615-160"], email: "ppl.phuket@gmail.com", mapUrl: "https://maps.google.com/?q=Thep+Krasattri+Rd+Phuket" },
    { name: t("contact.branches.rayong.name"), address: t("contact.branches.rayong.address"), phones: ["064-654-4995"], email: "ppl.rayong@gmail.com", mapUrl: "https://maps.google.com/?q=Phla+Ban+Chang+Rayong" },
    { name: t("contact.branches.samui.name"), address: t("contact.branches.samui.address"), phones: ["077-427-356", "081-536-7597"], email: "poolproandlab.samui@gmail.com", mapUrl: "https://maps.google.com/?q=Bo+Phut+Ko+Samui" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-10">
            {t("contact.eyebrow")}
          </p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-[var(--navy)]">
                {t("contact.heroLine1")}
                <br />
                {t("contact.heroLine2")}
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed max-w-md">
                {t("contact.heroSub")}
              </p>
              <div className="flex items-center gap-6 mt-8 flex-wrap">
                <a
                  href="tel:0818445564"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors tabular-nums"
                >
                  {t("contact.callBtn")}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="https://lin.ee/DfhPrxD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t("contact.chatLine")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                {t("contact.formEyebrow")}
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05] mb-6">
                {t("contact.formTitle")}
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed max-w-md">
                {t("contact.formBody")}
              </p>
              <div className="mt-8">
                <Link
                  href="/business-contact"
                  className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
                >
                  {t("contact.formAux")}
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
              {t("contact.branchEyebrow")}
            </p>
            <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
              {t("contact.branchTitle1")} <span className="text-[var(--aqua)]">{t("contact.branchTitle2")}</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-l border-t border-black/[0.08]">
            {branches.map((branch) => (
              <div
                key={branch.name}
                className="border-r border-b border-black/[0.08] p-8 flex flex-col gap-5"
              >
                <h3 className="font-heading font-[700] text-xl text-[var(--navy)] tracking-[-0.01em]">
                  {branch.name}
                </h3>
                <p className="text-sm text-[var(--navy)]/70 leading-relaxed">{branch.address}</p>
                <div className="space-y-1">
                  {branch.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                      className="block text-sm text-[var(--navy)] hover:text-[var(--aqua)] transition-colors tabular-nums font-[500]"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
                <a
                  href={`mailto:${branch.email}`}
                  className="text-sm text-[var(--navy)]/70 hover:text-[var(--aqua)] transition-colors break-all"
                >
                  {branch.email}
                </a>
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors mt-auto self-start"
                >
                  {t("contact.viewMap")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
