import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  return (
    <section className="bg-basilissa-yellow py-32 sm:py-40 lg:py-48">
      <Container>
        <div className="mx-auto max-w-2xl text-center text-ink">
          <Reveal>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-balance">
              Experience Basilissa.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="mt-10">
            <Button href="#" variant="outline" showArrow>
              Discover Basilissa
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
