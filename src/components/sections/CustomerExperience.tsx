"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

const chain = ["People", "Service", "Quality", "Experience"];

export function CustomerExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) {
      nodeRefs.current.forEach((node) => {
        if (!node) return;
        node.style.opacity = "1";
        node.style.transform = "none";
      });
      if (lineRef.current) lineRef.current.style.transform = "scaleY(1)";
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const nodes = nodeRefs.current.filter(Boolean) as HTMLLIElement[];
      const steps = nodes.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * 1.4}`,
          scrub: 0.6,
          pin: true,
        },
      });

      if (lineRef.current) {
        tl.to(lineRef.current, { scaleY: 1, ease: "none", duration: steps }, 0);
      }

      nodes.forEach((node, i) => {
        tl.to(
          node,
          { opacity: 1, scale: 1, duration: 1, ease: "none" },
          i === 0 ? 0 : i * 0.9,
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative overflow-hidden bg-paper">
      <div className="grid min-h-[100svh] grid-cols-1 items-center lg:grid-cols-12">
        <div className="relative order-2 h-[45vh] lg:order-1 lg:col-span-5 lg:h-full">
          <Image
            src="/images/basilissa-hospitality-manager.jpg"
            alt="A Basilissa hospitality manager greeting a guest"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
        </div>

        <Container className="order-1 py-20 lg:order-2 lg:col-span-7 lg:py-0">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">
              Customer Experience
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-lg text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-ink text-balance">
              Everything comes back to the experience.
            </h2>
          </Reveal>

          <div className="relative mt-14 flex gap-8">
            <div className="relative w-px shrink-0 bg-border">
              <div
                ref={lineRef}
                className="absolute inset-x-0 top-0 h-full origin-top scale-y-0 bg-basilissa-yellow"
              />
            </div>

            <ul className="flex flex-1 flex-col gap-10">
              {chain.map((step, i) => (
                <li
                  key={step}
                  ref={(el) => {
                    nodeRefs.current[i] = el;
                  }}
                  className="scale-95 opacity-30 transition-none"
                >
                  <span className="text-2xl sm:text-3xl font-semibold text-ink">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}
