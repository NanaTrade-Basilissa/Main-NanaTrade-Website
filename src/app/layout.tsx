import type { Metadata } from "next";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "NanaTrade | A Ghanaian Group of Companies",
  description:
    "NanaTrade is a Ghanaian group of companies, including Basilissa, built around people, quality, culture and growth.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-paper text-ink">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
