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
import { OurBrands } from "@/components/sections/OurBrands";
import { OurStory } from "@/components/sections/OurStory";
import { Philosophy } from "@/components/sections/Philosophy";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MoreThanRestaurant />
        <OurStory />
        <OurBrands />
        <Philosophy />
        <BusinessPrinciples />
        <CustomerExperience />
        <Leadership />
        <Growth />
        <Careers />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
