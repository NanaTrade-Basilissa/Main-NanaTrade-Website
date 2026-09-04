import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

interface Brand {
  name: string;
  tag: string;
  description: string;
  image: string;
  imageAlt: string;
}

const brands: Brand[] = [
  {
    name: "Basilissa Family Restaurant",
    tag: "Flagship Brand",
    description:
      "Our flagship dining brand: warm, contemporary hospitality rooted in Ghanaian culture, built for families and gatherings alike.",
    image: "/images/basilissa-interior-hero.jpg",
    imageAlt: "The interior of the flagship Basilissa Family Restaurant",
  },
];

export function OurBrands() {
  return (
    <section id="brands" className="bg-cream py-28 sm:py-32 lg:py-40">
      <Container>
        <SectionHeading
          className="text-ink mb-16 lg:mb-20"
          heading="Our Brands"
          lede="Basilissa is the foundation of a growing hospitality group. Each brand carries the same commitment to people, quality and culture."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {brands.map((brand) => (
            <Reveal key={brand.name} className="lg:col-span-8">
              <div className="group relative overflow-hidden bg-paper border border-border">
                <ParallaxImage
                  src={brand.image}
                  alt={brand.imageAlt}
                  className="aspect-[16/10] w-full"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  strength={24}
                />
                <div className="p-8 sm:p-10">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-yellow-deep">
                    {brand.tag}
                  </span>
                  <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-ink">{brand.name}</h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/65">
                    {brand.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="flex h-full min-h-[280px] flex-col justify-between border border-dashed border-ink/25 p-8 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                What&apos;s Next
              </span>
              <p className="text-xl font-semibold leading-snug text-ink/70">
                New brands are joining the Basilissa family as the group grows.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
