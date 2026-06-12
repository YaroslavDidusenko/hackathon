import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://recovery-energy-grid.vercel.app";

const title = "Recovery Energy Grid | Цифровий двійник енергомережі";
const description =
  "Recovery Energy Grid — цифровий двійник енергомережі України. ШІ-аналіз пошкоджень, прогнозування відключень та автоматичний план відновлення живлення.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Recovery Energy Grid",
    "цифровий двійник",
    "енергомережа",
    "LSTM",
    "Україна",
    "ENTSO-E",
    "відновлення енергетики",
  ],
  authors: [{ name: "Recovery Energy Grid" }],
  creator: "Recovery Energy Grid",
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: siteUrl,
    siteName: "Recovery Energy Grid",
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Recovery Energy Grid — цифровий двійник енергомережі",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image"],
    creator: "@RecoveryGridBot",
    site: "@RecoveryGridBot",
  },
  other: {
    "telegram:channel": "@RecoveryGridBot",
    "telegram:site": "@RecoveryGridBot",
  },
};

export const viewport: Viewport = {
  themeColor: "#050814",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
