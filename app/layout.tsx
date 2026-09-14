import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Martian_Mono } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { SiteNav } from "@/components/navigation/site-nav";
import { profile } from "@/data/profile";
import { METADATA_BASE, absolute } from "@/lib/site";
import "./globals.css";

const sans = Hanken_Grotesk({
  subsets: ["latin", "vietnamese"],
  variable: "--font-hanken",
  display: "swap",
});

const mono = Martian_Mono({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-martian",
  display: "swap",
});

const title = `${profile.name} — ${profile.role}`;
const description =
  "Full-stack engineer in Ha Noi with a backend focus: NestJS microservices, Kafka, PostgreSQL, Elasticsearch and React. Case studies from CareerViet, Acanet, BVote and BOffice.";

export const metadata: Metadata = {
  metadataBase: new URL(`${METADATA_BASE}/`),
  title: { default: title, template: `%s — ${profile.name}` },
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: "https://github.com/hoainambeco" }],
  creator: profile.name,
  alternates: { canonical: absolute("/") },
  openGraph: {
    type: "website",
    siteName: profile.name,
    locale: "en_US",
    url: absolute("/"),
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#0e1013",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-fg px-4 py-2 text-sm font-medium text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
