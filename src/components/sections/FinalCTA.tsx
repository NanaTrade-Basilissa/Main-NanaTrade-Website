import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface FinalCTAProps {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
}

export function FinalCTA({ heading, ctaLabel, ctaHref }: FinalCTAProps) {
  return (
    <section className="bg-accent py-32 sm:py-40 lg:py-48">
      <Container>
        <div className="mx-auto max-w-2xl text-center text-on-accent">
          <Reveal>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-balance">
              {heading}
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="mt-10">
            <Button href={ctaHref} variant="outline" showArrow>
              {ctaLabel}
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
