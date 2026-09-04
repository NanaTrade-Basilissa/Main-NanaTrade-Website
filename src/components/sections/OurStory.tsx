import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

export function OurStory() {
  return (
    <section id="story" className="bg-paper py-28 sm:py-32 lg:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <ParallaxImage
              src="/images/basilissa-dining-room.jpg"
              alt="A full Basilissa dining room, guests sharing a meal together"
              className="aspect-[4/3] w-full"
              sizes="(min-width: 1024px) 58vw, 100vw"
              strength={36}
            />
          </div>

          <div className="flex flex-col justify-center lg:col-span-5 lg:pl-4">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">
                Our Story
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight leading-[1.12] text-ink text-balance">
                From one experience to a growing hospitality brand.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-lg leading-relaxed text-ink/65">
                Basilissa began with a single idea: hospitality done with genuine care. That
                idea shaped a restaurant, then a way of working, and now the foundation for a
                group of brands built on the same principles of people, quality and culture.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
