import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const branches = [
  {
    name: "Bangkok (HQ)",
    address: "2184-2186 New Petchaburi Rd., Bangkapi, Huaykwang, Bangkok 10310",
    phone: "081-844-5564",
    email: "info@poolproandlab.com",
  },
  {
    name: "Chiang Mai",
    address: "209/19 Wualai Road, Haiya, Muang, Chiangmai 50100",
    phone: "052-011788 / 095-2044332",
    email: "chiangmai.ppl@gmail.com",
  },
  {
    name: "Chiang Rai",
    address: "139/2, 139/5 Moo.12, Rob Waing, Muang Chiang Rai 57000",
    phone: "082-496-1477 / 095-371-2689",
    email: "poolproandlab.cr@gmail.com",
  },
  {
    name: "Hua Hin",
    address: "60/30 Phet Kasem, Hua Hin, Prachuap Khiri Khan 77110",
    phone: "095-424-4888",
    email: "ppl.huahin@gmail.com",
  },
];

const shopLinks = [
  { label: "Pool Cleaning Robot", href: "/shop" },
  { label: "Pool Chemicals", href: "/shop" },
  { label: "Pool Pumps", href: "/shop" },
  { label: "Salt Chlorinator", href: "/shop" },
  { label: "Mineral Swim", href: "/shop" },
];

const serviceLinks = [
  { label: "Water Testing Lab", href: "/lab" },
  { label: "Our Services", href: "/service" },
  { label: "Pool Maintenance", href: "/service" },
  { label: "News & Activities", href: "/news" },
  { label: "Contact Us", href: "/contactus" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Image
              src="/assets/logos/logo-site.jpg"
              alt="Pool Pro&Lab"
              width={130}
              height={48}
              className="h-12 w-auto object-contain mb-5"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              We have set up our own laboratory which is fully equipped with
              high-technology devices for water testing. The first computerized
              water analysis laboratory in ASEAN.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/poolproandlab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[var(--aqua)] flex items-center justify-center transition-colors font-heading font-[800] text-sm"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://lin.ee/DfhPrxD"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[var(--aqua)] flex items-center justify-center transition-colors"
                aria-label="Line"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="font-heading font-[700] text-sm uppercase tracking-widest text-[var(--aqua)] mb-5">
              Shop
            </h3>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service links */}
          <div>
            <h3 className="font-heading font-[700] text-sm uppercase tracking-widest text-[var(--aqua)] mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-[700] text-sm uppercase tracking-widest text-[var(--aqua)] mb-5">
              Customer Service
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[var(--aqua)] mt-0.5 shrink-0" />
                <div>
                  <a
                    href="tel:0818445564"
                    className="text-white text-sm hover:text-[var(--aqua)] transition-colors font-[600]"
                  >
                    081-844-5564
                  </a>
                  <p className="text-white/40 text-xs mt-0.5">Bangkok HQ</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[var(--aqua)] mt-0.5 shrink-0" />
                <a
                  href="mailto:info@poolproandlab.com"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  info@poolproandlab.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--aqua)] mt-0.5 shrink-0" />
                <p className="text-white/60 text-sm leading-relaxed">
                  4 locations across Thailand
                  <br />
                  <Link
                    href="/contactus"
                    className="text-[var(--aqua)] hover:underline"
                  >
                    Find your nearest branch →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Pool Pro&amp;Lab. All rights reserved. Part of J.D. Pools Group.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <Link href="/sitemap.xml" className="hover:text-white/70 transition-colors">
              Sitemap
            </Link>
            <Link href="/contactus" className="hover:text-white/70 transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
