import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

const pillars = [
  {
    index: "01",
    name: "People",
    description: "The people across our companies come first, always.",
  },
  {
    index: "02",
    name: "Quality",
    description: "One shared standard of quality, in every company we build.",
  },
  {
    index: "03",
    name: "Culture",
    description: "Ghanaian heritage at the center of every business we run.",
  },
  {
    index: "04",
    name: "Growth",
    description: "Expanding through new companies, not just bigger ones.",
  },
];

export function AboutNanaTrade() {
  return (
    <section id="about" className="bg-cream py-28 sm:py-32 lg:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] text-ink text-balance">
                NanaTrade is more than one company.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/65">
                We are a group built around people, quality, culture and growth, the
                foundation every one of our companies is built on.
              </p>
            </Reveal>

            <div className="mt-16 divide-y divide-border border-t border-border">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.index} delay={0.05 * i}>
                  <div className="group grid grid-cols-[3rem_1fr] items-baseline gap-x-6 py-7 sm:grid-cols-[3rem_10rem_1fr] sm:items-center">
                    <span className="font-mono text-sm text-ink/35">{pillar.index}</span>
                    <h3 className="text-2xl font-semibold text-ink transition-colors duration-300 group-hover:text-accent-deep">
                      {pillar.name}
                    </h3>
                    <p className="col-span-2 mt-2 text-base leading-relaxed text-ink/60 sm:col-span-1 sm:mt-0">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-16">
            <ParallaxImage
              src="/images/basilissa-tableware.jpg"
              alt="Detail from one of NanaTrade's companies"
              className="aspect-[4/5] w-full"
              sizes="(min-width: 1024px) 40vw, 100vw"
              strength={30}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
