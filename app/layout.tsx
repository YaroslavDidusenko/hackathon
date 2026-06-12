import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Recovery Energy Grid | Цифровий двійник енергомережі",
  description:
    "Recovery Energy Grid — цифровий двійник енергомережі України. ШІ-аналіз пошкоджень, прогнозування відключень та автоматичний план відновлення живлення.",
  keywords: [
    "Recovery Energy Grid",
    "цифровий двійник",
    "енергомережа",
    "LSTM",
    "Україна",
    "ENTSO-E",
    "відновлення енергетики",
  ],
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
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
