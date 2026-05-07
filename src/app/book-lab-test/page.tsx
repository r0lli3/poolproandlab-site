import type { Metadata } from "next";
import { FlaskConical, Clock, Truck } from "lucide-react";
import { LabTestForm } from "@/components/sections/LabTestForm";
import { getServerT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerT();
  return {
    title: t("labBooking.metaTitle"),
    description: t("labBooking.metaDesc"),
  };
}

export default async function BookLabTestPage() {
  const { t } = await getServerT();

  const highlights = [
    { icon: FlaskConical, key: "highlight1" },
    { icon: Clock, key: "highlight2" },
    { icon: Truck, key: "highlight3" },
  ] as const;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--navy)] to-[#0f1722] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
            {t("labBooking.heroEyebrow")}
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-5">
            {t("labBooking.heroTitle")}
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            {t("labBooking.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 md:-mt-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-4">
          {highlights.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="bg-white rounded-2xl border border-[var(--border)] p-6 shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--aqua)]/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-[var(--aqua)]" />
              </div>
              <h3 className="font-heading font-[700] text-[var(--navy)] mb-1.5">
                {t(`labBooking.${key}Title`)}
              </h3>
              <p className="text-sm text-[var(--navy)]/60 leading-relaxed">
                {t(`labBooking.${key}Body`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-[800] text-[var(--navy)] mb-3">
            {t("labBooking.formTitle")}
          </h2>
          <p className="text-[var(--navy)]/60 leading-relaxed">
            {t("labBooking.formBody")}
          </p>
        </div>
        <LabTestForm />
      </section>
    </>
  );
}
