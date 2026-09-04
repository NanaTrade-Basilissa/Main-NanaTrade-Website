import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Use sparingly — most sections should not have one. */
  eyebrow?: string;
  heading: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  className?: string;
  headingClassName?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  lede,
  align = "left",
  className,
  headingClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-current/60">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={eyebrow ? 0.08 : 0}>
        <h2
          className={cn(
            "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.08]",
            headingClassName,
          )}
        >
          {heading}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={eyebrow ? 0.16 : 0.08} className={cn(align === "center" && "max-w-2xl")}>
          <p className="text-lg leading-relaxed text-current/70 text-pretty">{lede}</p>
        </Reveal>
      )}
    </div>
  );
}
