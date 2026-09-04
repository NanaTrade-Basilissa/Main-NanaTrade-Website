import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

export function Leadership() {
  return (
    <section id="leadership" className="bg-cream py-28 sm:py-32 lg:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ParallaxImage
              src="/images/basilissa-executive-portrait.jpg"
              alt="Portrait of a Basilissa Group executive"
              className="aspect-[4/5] w-full"
              sizes="(min-width: 1024px) 40vw, 100vw"
              strength={28}
            />
          </div>

          <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">
                Leadership
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance">
                Full Name
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-2 text-base font-semibold uppercase tracking-[0.08em] text-yellow-deep">
                Founder &amp; Group Chief Executive
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink/65">
                Leadership at Basilissa means setting the standard for people, quality and
                culture, and building a team that carries that standard forward as the group
                grows.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
