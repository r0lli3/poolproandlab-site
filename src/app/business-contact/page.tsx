import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { getServerT } from "@/lib/i18n/server";

export const metadata: Metadata = {
  title: "Business Contact",
  description:
    "Interested in a Pool Pro&Lab franchise? Contact our business development team to learn more about franchise opportunities.",
};

export default async function BusinessContactPage() {
  const { t } = await getServerT();
  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-10">
            {t("businessContactPage.eyebrow")}
          </p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-[var(--navy)]">
                {t("businessContactPage.heroLine1")} <span className="text-[var(--aqua)]">{t("businessContactPage.heroLine2")}</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed max-w-md">
                {t("businessContactPage.heroSub")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                {t("businessContactPage.formEyebrow")}
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05] mb-6">
                {t("businessContactPage.formTitle")}
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed max-w-md">
                {t("businessContactPage.formBody")}
              </p>
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
