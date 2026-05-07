import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { getServerT } from "@/lib/i18n/server";

const shopLinks: Array<{ key: "robot" | "chemicals" | "pumps" | "salt" | "mineral"; href: string }> = [
  { key: "robot", href: "/shop/category/pool-cleaning-robot" },
  { key: "chemicals", href: "/shop/category/pool-chemicals" },
  { key: "pumps", href: "/shop/category/pool-pump" },
  { key: "salt", href: "/shop/category/salt-chlorinator" },
  { key: "mineral", href: "/shop/category/mineral-swim" },
];

const serviceLinks: Array<{ key: "lab" | "ourServices" | "maintenance" | "bookLabTest" | "contact"; href: string }> = [
  { key: "lab", href: "/lab" },
  { key: "ourServices", href: "/service" },
  { key: "maintenance", href: "/service" },
  { key: "bookLabTest", href: "/book-lab-test" },
  { key: "contact", href: "/contactus" },
];

export async function Footer() {
  const { t } = await getServerT();

  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/assets/logos/ppl-logo-white.png"
                alt="Pool Pro&Lab"
                width={512}
                height={512}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">{t("footer.about")}</p>
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

          <div>
            <h3 className="font-heading font-[700] text-sm uppercase tracking-widest text-[var(--aqua)] mb-5">
              {t("footer.shop")}
            </h3>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {t(`footer.links.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-[700] text-sm uppercase tracking-widest text-[var(--aqua)] mb-5">
              {t("footer.services")}
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {t(`footer.links.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-[700] text-sm uppercase tracking-widest text-[var(--aqua)] mb-5">
              {t("footer.customerService")}
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
                  <p className="text-white/40 text-xs mt-0.5">{t("footer.bangkokHq")}</p>
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
                  {t("footer.branchesCount")}
                  <br />
                  <Link href="/contactus" className="text-[var(--aqua)] hover:underline">
                    {t("footer.findBranch")}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Pool Pro&amp;Lab. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <Link href="/sitemap.xml" className="hover:text-white/70 transition-colors">
              {t("footer.sitemap")}
            </Link>
            <Link href="/contactus" className="hover:text-white/70 transition-colors">
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
