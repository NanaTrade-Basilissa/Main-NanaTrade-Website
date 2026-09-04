import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Growth() {
  return (
    <section id="growth" className="relative overflow-hidden bg-ink py-36 sm:py-44 lg:py-52">
      <ParallaxImage
        src="/images/basilissa-atmosphere.jpg"
        alt="A warm, full Basilissa dining room in the evening"
        className="absolute inset-0"
        strength={50}
      />
      <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-paper text-balance">
              Growing with purpose.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-paper/75">
              Basilissa is built to grow through new brands, new partnerships and new
              locations, without ever losing sight of what got us here.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="#" variant="inverse" showArrow>
              Partner With Us
            </Button>
            <Button href="#" variant="outline-light">
              Explore Franchise Opportunities
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
