import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Careers() {
  return (
    <section id="careers" className="grid grid-cols-1 lg:grid-cols-2">
      <ParallaxImage
        src="/images/basilissa-team.jpg"
        alt="Basilissa team members preparing for service together"
        className="h-[50vh] w-full lg:h-full lg:min-h-[640px]"
        sizes="(min-width: 1024px) 50vw, 100vw"
        strength={34}
      />

      <div className="flex items-center bg-ink py-24 lg:py-0">
        <Container className="lg:px-14 xl:px-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/45">
              Careers
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-md text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-paper text-balance">
              Build something meaningful with us.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/70">
              We grow by investing in our people: training, mentorship and real opportunity
              for those who share our standard for hospitality.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-10">
            <Button href="#" variant="inverse" showArrow>
              Join the Basilissa Family
            </Button>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
