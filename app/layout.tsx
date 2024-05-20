import type { Metadata } from "next";
import "./globals.css";
import { Inter, Lora, Pathway_Extreme } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const lora = Lora({ subsets: ["latin"], variable: "--font-serif" });
const body = Pathway_Extreme({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Zaid Akhter's CV",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cv.zaidakhter.com",
    siteName: "Zaid Akhter's CV",
    title: "Zaid Akhter's CV",
  },
  twitter: {
    creator: "@zaidakhterr",
    site: "@zaidakhterr",
    title: "Zaid Akhter's CV",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-zinc-50 text-base text-zinc-900 antialiased">
      <body
        className={cn(
          inter.variable,
          lora.variable,
          body.variable,
          "w-screen overflow-x-hidden font-sans selection:bg-blue-600 selection:text-white"
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
