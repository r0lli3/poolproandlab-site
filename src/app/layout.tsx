import type { Metadata } from "next";
import { Space_Grotesk, Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { I18nProvider } from "@/lib/i18n/client";
import { getServerLocale } from "@/lib/i18n/server";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoThai = Noto_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pool Pro&Lab | Pool Equipment, Water Testing Lab & Services",
    template: "%s | Pool Pro&Lab",
  },
  description:
    "Pool Pro&Lab — Thailand's leading pool equipment supplier, computerized water testing laboratory, and professional pool maintenance services. First computerized water lab in ASEAN.",
  metadataBase: new URL("https://poolproandlab.com"),
  openGraph: {
    siteName: "Pool Pro&Lab",
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getServerLocale();

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${inter.variable} ${notoThai.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <I18nProvider locale={locale}>
          <Header locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
