"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n/client";
import type { Locale } from "@/lib/i18n/locale";
import { LocaleToggle } from "./LocaleToggle";

export function Header({ locale }: { locale: Locale }) {
  const { t } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [franchiseOpen, setFranchiseOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.shop"), href: "/shop" },
    { label: t("nav.lab"), href: "/lab" },
    { label: t("nav.service"), href: "/service" },
    {
      label: t("nav.franchise"),
      href: "#",
      children: [
        { label: t("nav.franchiseConcept"), href: "/franchise-concept" },
        { label: t("nav.benefits"), href: "/benefits" },
        { label: t("nav.howToApply"), href: "/howtoapply" },
        { label: t("nav.faqs"), href: "/faqs" },
        { label: t("nav.businessContact"), href: "/business-contact" },
      ],
    },
    { label: t("nav.contact"), href: "/contactus" },
  ];

  return (
    <>
      {/* Quiet utility strip */}
      <div className="hidden md:block border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between font-mono text-[11px] tracking-[0.14em] uppercase text-black/55">
          <span>{t("topBar.blurb")}</span>
          <div className="flex items-center gap-6">
            <a
              href="tel:0818445564"
              className="flex items-center gap-1.5 hover:text-[var(--aqua)] transition-colors"
            >
              <Phone className="w-3 h-3" />
              081-844-5564
            </a>
            <a
              href="mailto:info@poolproandlab.com"
              className="flex items-center gap-1.5 hover:text-[var(--aqua)] transition-colors"
            >
              <Mail className="w-3 h-3" />
              info@poolproandlab.com
            </a>
            <LocaleToggle current={locale} variant="light" />
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-colors duration-200 border-b",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-black/[0.08]"
            : "bg-white border-black/[0.08]"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/assets/logos/logo-site.jpg"
              alt="Pool Pro&Lab"
              width={120}
              height={44}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-[500] text-[var(--navy)] hover:text-[var(--aqua)] transition-colors"
                    onMouseEnter={() => setFranchiseOpen(true)}
                    onMouseLeave={() => setFranchiseOpen(false)}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  <div
                    className={cn(
                      "absolute top-full left-0 pt-2 transition-all duration-150",
                      "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                    )}
                    onMouseEnter={() => setFranchiseOpen(true)}
                    onMouseLeave={() => setFranchiseOpen(false)}
                  >
                    <div className="bg-white border border-black/[0.08] py-2 min-w-[220px] shadow-sm">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-[var(--navy)] hover:text-[var(--aqua)] hover:bg-[oklch(0.97_0.01_220)] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-[500] text-[var(--navy)] hover:text-[var(--aqua)] transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/lab"
              className="ml-3 px-5 py-2 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
            >
              {t("common.bookLabTest")}
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-[var(--navy)] hover:text-[var(--aqua)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-black/[0.08] px-6 py-4 space-y-1">
            <div className="mb-4 pb-4 border-b border-black/[0.08] flex flex-col gap-2 text-sm text-[var(--navy)]/70">
              <a href="tel:0818445564" className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--aqua)]" /> 081-844-5564
              </a>
              <a href="mailto:info@poolproandlab.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--aqua)]" /> info@poolproandlab.com
              </a>
              <div className="pt-2">
                <LocaleToggle current={locale} variant="light" />
              </div>
            </div>
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    className="w-full flex items-center justify-between py-2.5 text-sm font-[600] text-[var(--navy)]"
                    onClick={() => setFranchiseOpen(!franchiseOpen)}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        franchiseOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {franchiseOpen && (
                    <div className="pl-4 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-[var(--navy)]/70 hover:text-[var(--aqua)]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2.5 text-sm font-[500] text-[var(--navy)] hover:text-[var(--aqua)] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4">
              <Link
                href="/lab"
                className="block text-center px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t("common.bookLabTest")}
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
