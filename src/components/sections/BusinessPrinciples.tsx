import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

const supportingPrinciples = [
  { name: "Open Communication", description: "Clear, honest dialogue at every level." },
  { name: "Accountability", description: "Owning our decisions and their outcomes." },
  { name: "Cleanliness", description: "A standard, not a schedule." },
  { name: "Customer Data Privacy", description: "Guest information handled with care." },
  { name: "Quality Assurance", description: "Checked, not assumed." },
  { name: "Training & Feedback", description: "Growth built into how we work." },
  { name: "Respectful Conduct", description: "Toward guests, colleagues and partners." },
  { name: "Reward Loyalty & Dedication", description: "Recognising those who show up." },
  { name: "Zero Tolerance for Misconduct", description: "No exceptions, no ambiguity." },
];

export function BusinessPrinciples() {
  return (
    <section id="principles" className="bg-ink text-paper py-28 sm:py-32 lg:py-40">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/45">
            How We Work
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-balance">
            Continuous improvement.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/65">
            We never stop improving. It&apos;s the principle that holds every other one together,
            and the standard the rest of our team is built on.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-0 border-t border-paper/15 sm:grid-cols-2 lg:grid-cols-3">
          {supportingPrinciples.map((principle, i) => (
            <Reveal key={principle.name} delay={0.03 * (i % 3)}>
              <div className="border-b border-paper/15 py-6">
                <h3 className="text-base font-semibold uppercase tracking-[0.04em] text-paper">
                  {principle.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-paper/55">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
