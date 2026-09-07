import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/navigation/Navbar";
import { AboutNanaTrade } from "@/components/sections/AboutNanaTrade";
import { Careers } from "@/components/sections/Careers";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Leadership } from "@/components/sections/Leadership";
import { OurCompanies } from "@/components/sections/OurCompanies";
import { Philosophy } from "@/components/sections/Philosophy";

export const metadata: Metadata = {
  title: "NanaTrade | A Ghanaian Group of Companies",
  description:
    "NanaTrade is a Ghanaian group of companies, including Basilissa, built around people, quality, culture and growth.",
};

const NANATRADE_LOGO = {
  src: "/logos/nanatrade-logo.svg",
  alt: "NanaTrade Food & Restaurant Services",
  width: 1330,
  height: 383,
};

export default function Home() {
  return (
    <div className="theme-nanatrade">
      <Navbar
        logo={NANATRADE_LOGO}
        navLinks={[
          { label: "About", href: "#about" },
          { label: "Our Brands", href: "#brands" },
          { label: "Our Philosophy", href: "#philosophy" },
          { label: "Leadership", href: "#leadership" },
          { label: "Careers", href: "#careers" },
        ]}
        ctaLabel="Our Companies"
        ctaHref="#brands"
      />
      <main>
        <Hero
          image={{
            src: "/images/basilissa-team.jpg",
            alt: "People from across NanaTrade's companies working together",
          }}
          heading="A group of companies, built around people."
          subtext="NanaTrade brings together a growing portfolio of Ghanaian companies, including Basilissa, united by a shared standard for quality and culture."
          ctaLabel="Explore Our Brands"
          ctaHref="#brands"
        />
        <AboutNanaTrade />
        <OurCompanies />
        <Philosophy heading="Our philosophy shapes every company we build." />
        {/* <Leadership /> */}
        <Careers
          image={{
            src: "/images/basilissa-hospitality-manager.jpg",
            alt: "A team member from one of NanaTrade's companies",
          }}
          heading="Build something meaningful with us."
          body="We grow by investing in our people across every company: training, mentorship and real opportunity for those who share our standard for excellence."
          ctaLabel="Join the NanaTrade Family"
          ctaHref="#"
        />
        <FinalCTA heading="Experience NanaTrade." ctaLabel="Explore Our Brands" ctaHref="#brands" />
      </main>
      <Footer
        logo={NANATRADE_LOGO}
        blurb="A Ghanaian group of companies, including Basilissa, built around people, quality, culture and growth."
        companyLinks={[
          { label: "About", href: "#about" },
          { label: "Our Brands", href: "#brands" },
          { label: "Our Philosophy", href: "#philosophy" },
          { label: "Leadership", href: "#leadership" },
          { label: "Careers", href: "#careers" },
        ]}
        contactEmail="info@nanatrade.com"
        copyrightLine="NanaTrade. All rights reserved."
        tagline="A group of companies, built around people."
      />
    </div>
  );
}
