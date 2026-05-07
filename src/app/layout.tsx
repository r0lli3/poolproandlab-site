import type { Metadata } from "next";
import { Raleway, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${roboto.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
