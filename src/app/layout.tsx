import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Basilissa | A Ghanaian Hospitality Group",
  description:
    "Basilissa is a Ghanaian hospitality group building exceptional experiences through people, quality, culture and growth.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body className="min-h-screen bg-paper text-ink">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
