import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

interface Company {
  name: string;
  tag: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  logo: { src: string; alt: string; width: number; height: number };
}

const companies: Company[] = [
  {
    name: "Basilissa",
    tag: "Hospitality",
    description:
      "A Ghanaian hospitality brand: warm, contemporary dining rooted in Ghanaian culture, built for families and gatherings alike.",
    image: "/images/basilissa-interior-hero.jpg",
    imageAlt: "The interior of Basilissa Family Restaurant",
    href: "/basilissa",
    logo: { src: "/logos/basilissa-logo.png", alt: "Basilissa", width: 572, height: 483 },
  },
];

export function OurCompanies() {
  return (
    <section id="brands" className="bg-cream py-28 sm:py-32 lg:py-40">
      <Container>
        <SectionHeading
          className="text-ink mb-16 lg:mb-20"
          heading="Our Brands"
          lede="NanaTrade's portfolio starts with Basilissa, with new companies joining the group as it grows."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {companies.map((company) => (
            <Reveal key={company.name} className="theme-basilissa lg:col-span-8">
              <Link
                href={company.href}
                className="group relative block overflow-hidden bg-paper border border-border transition-colors duration-300 hover:border-ink/30"
              >
                <ParallaxImage
                  src={company.image}
                  alt={company.imageAlt}
                  className="aspect-[16/10] w-full"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  strength={24}
                />
                <div className="p-8 sm:p-10">
                  <h3 className="sr-only">{company.name}</h3>
                  <Image
                    src={company.logo.src}
                    alt={company.logo.alt}
                    width={company.logo.width}
                    height={company.logo.height}
                    className="h-12 w-auto"
                  />
                  <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
                    {company.tag}
                  </span>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/65">
                    {company.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-ink">
                    Visit {company.name}
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={0.1} className="lg:col-span-4 hidden">
            <div className="flex h-full min-h-[280px] flex-col justify-between border border-dashed border-ink/25 p-8 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                What&apos;s Next
              </span>
              <p className="text-xl font-semibold leading-snug text-ink/70">
                More brands are joining the NanaTrade portfolio as the group grows.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
