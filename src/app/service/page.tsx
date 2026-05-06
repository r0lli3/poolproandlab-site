import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FlaskConical, Droplets, Wrench, Zap, ArrowRight } from "lucide-react";
import { getServerT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerT();
  return {
    title: t("servicePage.heroTitle"),
    description: t("servicePage.metaDesc"),
  };
}

type ServiceKey = "lab" | "treatment" | "care" | "maintenance" | "eliminator";

const SERVICES: Array<{ key: ServiceKey; icon: typeof FlaskConical; img: string; featureCount: number }> = [
  { key: "lab", icon: FlaskConical, img: "/assets/images/service-water-lab.jpg", featureCount: 0 },
  { key: "treatment", icon: Droplets, img: "/assets/images/service-water-treatment.jpg", featureCount: 4 },
  { key: "care", icon: Wrench, img: "/assets/images/service-pool-care.jpg", featureCount: 0 },
  { key: "maintenance", icon: Wrench, img: "/assets/images/service-maintenance.jpg", featureCount: 6 },
  { key: "eliminator", icon: Zap, img: "/assets/images/lab-feature.jpg", featureCount: 7 },
];

export default async function ServicePage() {
  const { t } = await getServerT();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-72 md:h-96">
          <Image
            src="/assets/images/service-hero.jpg"
            alt="Pool Pro&Lab Services"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/50 via-[var(--navy)]/40 to-[var(--navy)]/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <p className="font-heading text-xs uppercase tracking-widest text-[var(--aqua)] font-[700] mb-3">
              {t("servicePage.heroEyebrow")}
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-[800] mb-3">
              {t("servicePage.heroTitle")}
            </h1>
            <p className="text-white/80 text-base md:text-lg">{t("servicePage.heroSubtitle")}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {SERVICES.map((svc, i) => {
          const features = Array.from({ length: svc.featureCount }, (_, j) =>
            t(`servicePage.${svc.key}.feature${j + 1}`)
          );
          return (
            <div
              key={svc.key}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <Image
                  src={svc.img}
                  alt={t(`servicePage.${svc.key}.title`)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--navy)]/10 to-transparent" />
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[var(--aqua)]/10 flex items-center justify-center mb-5">
                  <svc.icon className="w-6 h-6 text-[var(--aqua)]" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-[800] text-[var(--navy)] mb-4">
                  {t(`servicePage.${svc.key}.title`)}
                </h2>
                <p className="text-[var(--navy)]/70 leading-relaxed mb-5">
                  {t(`servicePage.${svc.key}.description`)}
                </p>
                {features.length > 0 && (
                  <ul className="space-y-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--navy)]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--aqua)] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="bg-[var(--navy)] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-[800] mb-4">
            {t("servicePage.ctaTitle")}
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">{t("servicePage.ctaBody")}</p>
          <Link
            href="/contactus"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-white font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
          >
            {t("servicePage.ctaPrimary")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
