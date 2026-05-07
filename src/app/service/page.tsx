import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getServerT } from "@/lib/i18n/server";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Computerized pool water testing, advanced water treatment with Australian products, pool care & cleaning, equipment repair, and water problem elimination.",
};

export default async function ServicePage() {
  const { t } = await getServerT();

  const services = [
    { n: "01", title: t("servicePage.svc01Title"), description: t("servicePage.svc01Desc"), img: "/assets/images/service-water-lab.jpg", features: [] as string[] },
    {
      n: "02",
      title: t("servicePage.svc02Title"),
      description: t("servicePage.svc02Desc"),
      img: "/assets/images/service-water-treatment.jpg",
      features: [
        t("servicePage.svc02Feature1"),
        t("servicePage.svc02Feature2"),
        t("servicePage.svc02Feature3"),
        t("servicePage.svc02Feature4"),
      ],
    },
    { n: "03", title: t("servicePage.svc03Title"), description: t("servicePage.svc03Desc"), img: "/assets/images/service-pool-care.jpg", features: [] as string[] },
    {
      n: "04",
      title: t("servicePage.svc04Title"),
      description: t("servicePage.svc04Desc"),
      img: "/assets/images/service-maintenance.jpg",
      features: [
        t("servicePage.svc04Feature1"),
        t("servicePage.svc04Feature2"),
        t("servicePage.svc04Feature3"),
        t("servicePage.svc04Feature4"),
        t("servicePage.svc04Feature5"),
        t("servicePage.svc04Feature6"),
      ],
    },
    {
      n: "05",
      title: t("servicePage.svc05Title"),
      description: t("servicePage.svc05Desc"),
      img: "/assets/images/lab-feature.jpg",
      features: [
        t("servicePage.svc05Feature1"),
        t("servicePage.svc05Feature2"),
        t("servicePage.svc05Feature3"),
        t("servicePage.svc05Feature4"),
        t("servicePage.svc05Feature5"),
        t("servicePage.svc05Feature6"),
        t("servicePage.svc05Feature7"),
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-10">
            {t("servicePage.eyebrow")}
          </p>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading font-[700] text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.02em] text-[var(--navy)]">
                {t("servicePage.heroLine1")}
                <br />
                {t("servicePage.heroLine2")} <span className="text-[var(--aqua)]">{t("servicePage.heroLine3")}</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed max-w-md">
                {t("servicePage.heroSub")}
              </p>
              <div className="flex items-center gap-6 mt-8">
                <Link
                  href="/contactus"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                >
                  {t("servicePage.ctaPrimary")}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/lab"
                  className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
                >
                  {t("servicePage.ctaSecondary")}
                </Link>
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/8] mt-16 md:mt-24 overflow-hidden bg-[oklch(0.96_0.01_220)]">
            <Image
              src="/assets/images/service-hero.jpg"
              alt="Pool Pro&Lab Services"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* Services list — alternating editorial */}
      <section className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6">
          {services.map((svc, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={svc.title}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center py-20 md:py-28 ${
                  i !== services.length - 1 ? "border-b border-black/[0.08]" : ""
                }`}
              >
                <div
                  className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}
                >
                  <div className="relative aspect-[5/4] overflow-hidden bg-[oklch(0.96_0.01_220)]">
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/40 block mb-8">
                    {svc.n}
                  </span>
                  <h2 className="font-heading font-[700] text-3xl md:text-4xl text-[var(--navy)] mb-5 tracking-[-0.02em] leading-[1.1]">
                    {svc.title}
                  </h2>
                  <p className="text-[var(--navy)]/70 leading-relaxed mb-6">
                    {svc.description}
                  </p>
                  {svc.features.length > 0 && (
                    <ul className="border-t border-black/[0.08]">
                      {svc.features.map((f, j) => (
                        <li
                          key={f}
                          className="flex items-start gap-6 py-3 border-b border-black/[0.08] text-sm text-[var(--navy)]"
                        >
                          <span className="font-mono text-[11px] text-black/40 pt-0.5 tabular-nums">
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          <span className="leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA close */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
                {t("servicePage.closingEyebrow")}
              </p>
              <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] text-[var(--navy)] leading-[1.05]">
                {t("servicePage.closingTitle1")}{" "}
                <span className="text-[var(--aqua)]">{t("servicePage.closingTitle2")}</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--navy)]/70 leading-relaxed mb-8 max-w-md">
                {t("servicePage.closingBody")}
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/contactus"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                >
                  {t("servicePage.closingCtaPrimary")}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/shop"
                  className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
                >
                  {t("servicePage.closingCtaSecondary")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
