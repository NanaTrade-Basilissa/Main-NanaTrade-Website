import { User } from "lucide-react";
import type { ReactNode } from "react";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

interface LeadershipProps {
  id?: string;
  eyebrow?: string;
  name?: ReactNode;
  title?: string;
  bio?: ReactNode;
  image?: { src: string; alt: string };
  instagram?: string;
}

const InstagramIcon = ({ className = "size-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export function Leadership({
  id = "leadership",
  eyebrow = "Leadership",
  name = "Julius Yaw Baidoo Agbeneyfia",
  title = "CEO, NanaTrade LTD. (Basilissa Restaurant)",
  bio = (
    <>
      Leadership at NanaTrade means setting the standard for people, quality and culture, and
      building a team that carries that standard forward as the group grows.
    </>
  ),
  image,
  instagram = "https://www.instagram.com/saved_julius101?stkn=MTRxbnppMjRqNTJpdw%3D%3D&utm_source=qr",
}: LeadershipProps) {
  return (
    <section id={id} className="bg-cream py-28 sm:py-32 lg:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            {image ? (
              <ParallaxImage
                src={image.src}
                alt={image.alt}
                className="aspect-4/5 w-full"
                sizes="(min-width: 1024px) 40vw, 100vw"
                strength={28}
              />
            ) : (
              <div className="flex aspect-4/5 w-full items-center justify-center border border-border bg-cream-deep">
                <User className="size-16 text-ink/25" strokeWidth={1.25} aria-hidden="true" />
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">
                {eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance">
                {name}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-2 text-base font-semibold uppercase tracking-[0.08em] text-accent-deep">
                {title}
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink/65">{bio}</p>
            </Reveal>
            {instagram && (
              <Reveal delay={0.28}>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex size-10 items-center justify-center rounded-full border border-border text-ink/70 transition-colors duration-300 hover:border-ink/30 hover:text-accent-deep"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="size-4" />
                </a>
              </Reveal>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
