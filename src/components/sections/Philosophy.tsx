import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

interface Value {
  name: string;
  description: string;
}

const DEFAULT_VALUES: Value[] = [
  { name: "Love", description: "Genuine care in every interaction." },
  { name: "Discipline", description: "Consistency, even when no one is watching." },
  { name: "Professionalism", description: "Excellence as a standard, not an exception." },
  { name: "Faith & Culture", description: "Heritage honoured in how we work." },
  { name: "Customer Centricity", description: "Every decision starts with the guest." },
  { name: "Respect", description: "For people, for craft, for one another." },
];

interface PhilosophyProps {
  id?: string;
  heading?: ReactNode;
  values?: Value[];
}

export function Philosophy({
  id = "philosophy",
  heading = "Our philosophy shapes everything we do.",
  values = DEFAULT_VALUES,
}: PhilosophyProps) {
  return (
    <section id={id} className="bg-accent text-on-accent py-28 sm:py-32 lg:py-40">
      <Container>
        <Reveal>
          <h2 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] text-balance">
            {heading}
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {values.map((value, i) => (
            <Reveal key={value.name} delay={0.06 * (i % 3)}>
              <div className="group border-t border-on-accent/20 pt-6">
                <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight transition-[padding] duration-300 group-hover:pl-2">
                  {value.name}
                </h3>
                <p className="mt-2 text-base text-on-accent/70">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
