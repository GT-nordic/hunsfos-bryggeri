import type { Metadata } from "next";
import { Bebas_Neue, Lora, DM_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
});

const lora = Lora({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Hunsfos Bryggeri & Destilleri",
  description:
    "Håndbrygget øl fra hjertet av Vennesla — i det gamle Møllehuset på Hunsfos Fabrikker siden 2016.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${bebasNeue.variable} ${lora.variable} ${dmMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
