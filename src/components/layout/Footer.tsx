import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { getServerT } from "@/lib/i18n/server";
import type { Locale } from "@/lib/i18n/locale";

export async function Footer(_props: { locale?: Locale } = {}) {
  const { t } = await getServerT();

  const branches = [
    { name: t("footer.branchLabels.bangkok"), phone: "081-844-5564" },
    { name: t("footer.branchLabels.chiangmai"), phone: "095-204-4332" },
    { name: t("footer.branchLabels.chiangrai"), phone: "095-371-2689" },
    { name: t("footer.branchLabels.huahin"), phone: "095-424-4888" },
    { name: t("footer.branchLabels.kanchanaburi"), phone: "034-520-575" },
    { name: t("footer.branchLabels.korat"), phone: "080-724-7700" },
    { name: t("footer.branchLabels.krabi"), phone: "075-818-338" },
    { name: t("footer.branchLabels.nakhonsi"), phone: "075-800-422" },
    { name: t("footer.branchLabels.phuket"), phone: "076-238-999" },
    { name: t("footer.branchLabels.rayong"), phone: "064-654-4995" },
    { name: t("footer.branchLabels.samui"), phone: "077-427-356" },
  ];

  const shopLinks = [
    { label: t("footer.shopLinks.robot"), href: "/shop" },
    { label: t("footer.shopLinks.chemicals"), href: "/shop" },
    { label: t("footer.shopLinks.pumps"), href: "/shop" },
    { label: t("footer.shopLinks.salt"), href: "/shop" },
    { label: t("footer.shopLinks.mineral"), href: "/shop" },
  ];

  const serviceLinks = [
    { label: t("footer.serviceLinks.lab"), href: "/lab" },
    { label: t("footer.serviceLinks.ourServices"), href: "/service" },
    { label: t("footer.serviceLinks.contact"), href: "/contactus" },
  ];

  const franchiseLinks = [
    { label: t("footer.franchiseLinks.concept"), href: "/franchise-concept" },
    { label: t("footer.franchiseLinks.benefits"), href: "/benefits" },
    { label: t("footer.franchiseLinks.howToApply"), href: "/howtoapply" },
    { label: t("footer.franchiseLinks.faqs"), href: "/faqs" },
  ];

  return (
    <footer className="border-t border-black/[0.08] bg-white text-[var(--navy)]">
      {/* Big closing line */}
      <div className="border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-6">
            {t("footer.closingEyebrow")}
          </p>
          <h2 className="font-heading font-[700] text-3xl md:text-5xl tracking-[-0.02em] leading-[1.05] max-w-3xl">
            {t("footer.closingTitle1")}
            <br />
            <span className="text-[var(--aqua)]">{t("footer.closingTitle2")}</span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/contactus"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
            >
              {t("footer.closingCta")}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0818445564"
              className="text-sm font-[600] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
            >
              081-844-5564
            </a>
          </div>
        </div>
      </div>

      {/* Main link grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-12 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-3">
          <Image
            src="/assets/logos/logo-site.jpg"
            alt="Pool Pro&Lab"
            width={130}
            height={48}
            className="h-10 w-auto object-contain mb-5"
          />
          <p className="text-[var(--navy)]/60 text-sm leading-relaxed mb-6 max-w-xs">
            {t("footer.brandBlurb")}
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/poolproandlab"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-black/[0.12] hover:border-[var(--aqua)] hover:text-[var(--aqua)] flex items-center justify-center transition-colors font-heading font-[700] text-sm"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://lin.ee/DfhPrxD"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-black/[0.12] hover:border-[var(--aqua)] hover:text-[var(--aqua)] flex items-center justify-center transition-colors"
              aria-label="Line"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Shop */}
        <div className="col-span-1 md:col-span-2">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-5">
            {t("footer.shopHeading")}
          </p>
          <ul className="space-y-2.5">
            {shopLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[var(--navy)]/70 hover:text-[var(--aqua)] text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="col-span-1 md:col-span-2">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-5">
            {t("footer.servicesHeading")}
          </p>
          <ul className="space-y-2.5">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[var(--navy)]/70 hover:text-[var(--aqua)] text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Franchise */}
        <div className="col-span-1 md:col-span-2">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-5">
            {t("footer.franchiseHeading")}
          </p>
          <ul className="space-y-2.5">
            {franchiseLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[var(--navy)]/70 hover:text-[var(--aqua)] text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Branches */}
        <div className="col-span-2 md:col-span-3">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-5">
            {t("footer.branchesHeading")}
          </p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
            {branches.map((b) => (
              <li key={b.name} className="text-sm">
                <span className="text-[var(--navy)] font-[500] block">{b.name}</span>
                <a
                  href={`tel:${b.phone.replace(/[^0-9]/g, "")}`}
                  className="text-[var(--navy)]/60 hover:text-[var(--aqua)] tabular-nums"
                >
                  {b.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-black/50">
            {t("footer.rights", { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-6 font-mono text-[11px] tracking-[0.14em] uppercase text-black/50">
            <Link href="/sitemap.xml" className="hover:text-[var(--navy)] transition-colors">
              {t("footer.sitemap")}
            </Link>
            <a
              href="mailto:info@poolproandlab.com"
              className="hover:text-[var(--navy)] transition-colors"
            >
              info@poolproandlab.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
