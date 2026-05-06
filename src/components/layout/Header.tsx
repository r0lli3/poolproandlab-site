"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Water Lab", href: "/lab" },
  { label: "Services", href: "/service" },
  { label: "News", href: "/news" },
  {
    label: "Franchise",
    href: "#",
    children: [
      { label: "Franchise Concept", href: "/franchise-concept" },
      { label: "Benefits", href: "/benefits" },
      { label: "How to Apply", href: "/howtoapply" },
      { label: "FAQs", href: "/faqs" },
      { label: "Business Contact", href: "/business-contact" },
    ],
  },
  { label: "Contact Us", href: "/contactus" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [franchiseOpen, setFranchiseOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[var(--navy)] text-white/80 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <span className="font-heading tracking-widest uppercase text-white/50 text-[10px]">
            Pool Water Testing Lab &amp; Supplies
          </span>
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
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white"
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
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-heading font-600 text-[var(--navy)] hover:text-[var(--aqua)] transition-colors rounded-md"
                    onMouseEnter={() => setFranchiseOpen(true)}
                    onMouseLeave={() => setFranchiseOpen(false)}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  <div
                    className={cn(
                      "absolute top-full left-0 pt-1 transition-all duration-200",
                      "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                    )}
                    onMouseEnter={() => setFranchiseOpen(true)}
                    onMouseLeave={() => setFranchiseOpen(false)}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-[oklch(0.91_0.01_220)] py-2 min-w-[200px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-[var(--navy)] hover:text-[var(--aqua)] hover:bg-[oklch(0.96_0.01_220)] transition-colors"
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
                  className="px-3 py-2 text-sm font-heading font-[600] text-[var(--navy)] hover:text-[var(--aqua)] transition-colors rounded-md"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contactus"
              className="ml-2 px-5 py-2 bg-[var(--aqua)] text-white text-sm font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
            >
              Book Lab Test
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
          <div className="lg:hidden bg-white border-t border-[oklch(0.91_0.01_220)] px-6 py-4 space-y-1">
            <div className="mb-4 pb-4 border-b border-[oklch(0.91_0.01_220)] flex flex-col gap-2 text-sm text-[var(--navy)]/70">
              <a href="tel:0818445564" className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--aqua)]" /> 081-844-5564
              </a>
              <a href="mailto:info@poolproandlab.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--aqua)]" /> info@poolproandlab.com
              </a>
            </div>
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    className="w-full flex items-center justify-between py-2.5 text-sm font-heading font-[600] text-[var(--navy)]"
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
                  className="block py-2.5 text-sm font-heading font-[600] text-[var(--navy)] hover:text-[var(--aqua)] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4">
              <Link
                href="/contactus"
                className="block text-center px-5 py-2.5 bg-[var(--aqua)] text-white text-sm font-heading font-[700] rounded-full hover:opacity-90 transition-opacity"
                onClick={() => setMobileOpen(false)}
              >
                Book Lab Test
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
