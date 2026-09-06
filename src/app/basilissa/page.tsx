import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/navigation/Navbar";
import { BusinessPrinciples } from "@/components/sections/BusinessPrinciples";
import { Careers } from "@/components/sections/Careers";
import { CustomerExperience } from "@/components/sections/CustomerExperience";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Growth } from "@/components/sections/Growth";
import { Hero } from "@/components/sections/Hero";
import { Leadership } from "@/components/sections/Leadership";
import { MoreThanRestaurant } from "@/components/sections/MoreThanRestaurant";
import { OurStory } from "@/components/sections/OurStory";
import { Philosophy } from "@/components/sections/Philosophy";

export const metadata: Metadata = {
  title: "Basilissa | A NanaTrade Company",
  description:
    "Basilissa is a Ghanaian hospitality brand, part of the NanaTrade group of companies, building exceptional experiences through people, quality, culture and growth.",
};

const BASILISSA_LOGO = {
  src: "/logos/basilisssa-nanatrade.svg",
  alt: "Basilissa, a NanaTrade company",
  width: 962,
  height: 232,
};

export default function BasilissaPage() {
  return (
    <div className="theme-basilissa">
      <Navbar
        logo={BASILISSA_LOGO}
        navLinks={[
          { label: "About", href: "#about" },
          { label: "Our Story", href: "#story" },
          { label: "Our Philosophy", href: "#philosophy" },
          { label: "Leadership", href: "#leadership" },
          { label: "Careers", href: "#careers" },
        ]}
        ctaLabel="Partner With Us"
        ctaHref="#growth"
      />
      <main>
        <Hero
          image={{
            src: "/images/basilissa-atmosphere.jpg",
            alt: "Guests and staff sharing a warm evening at a Basilissa restaurant",
          }}
          heading="Hospitality, built around people."
          subtext="Building exceptional experiences through quality, culture and people."
          ctaLabel="Discover Basilissa"
          ctaHref="#about"
        />
        <MoreThanRestaurant />
        <OurStory />
        <Philosophy />
        <BusinessPrinciples />
        <CustomerExperience />
        <Leadership
          eyebrow="Leadership"
          title="CEO, NanaTrade LTD. (Basilissa Restaurant)"
          bio={
            <>
              Leadership at Basilissa means setting the standard for people, quality and
              culture, and building a team that carries that standard forward as the brand
              grows within the NanaTrade group.
            </>
          }
          image={{
            src: "/images/basilissa-ceo-portrait.jpg",
            alt: "Portrait of a Basilissa leadership team member",
          }}
        />
        <Growth />
        <Careers
          image={{
            src: "/images/basilissa-team.jpg",
            alt: "Basilissa team members preparing for service together",
          }}
          heading="Build something meaningful with us."
          body="We grow by investing in our people: training, mentorship and real opportunity for those who share our standard for hospitality."
          ctaLabel="Join the Basilissa Family"
          ctaHref="#"
        />
        <FinalCTA heading="Experience Basilissa." ctaLabel="Discover Basilissa" ctaHref="#" />
      </main>
      <Footer
        logo={BASILISSA_LOGO}
        blurb="A Ghanaian hospitality brand built around people, quality, culture and growth. Part of the NanaTrade group of companies."
        companyLinks={[
          { label: "About", href: "#about" },
          { label: "Our Story", href: "#story" },
          { label: "Our Philosophy", href: "#philosophy" },
          { label: "Leadership", href: "#leadership" },
          { label: "Careers", href: "#careers" },
        ]}
        contactEmail="info@basilissa.com"
        copyrightLine="Basilissa. Part of the NanaTrade Group. All rights reserved."
        tagline="Quality Food, Great Taste"
      />
    </div>
  );
}
