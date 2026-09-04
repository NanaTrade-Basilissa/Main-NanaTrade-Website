import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Our Story", href: "#story" },
  { label: "Our Brands", href: "#brands" },
  { label: "Our Philosophy", href: "#philosophy" },
  { label: "Leadership", href: "#leadership" },
  { label: "Careers", href: "#careers" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Customer Data Privacy", href: "#" },
  { label: "Governance & Charter", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="pt-20 pb-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <Reveal className="flex flex-col gap-6">
            <Image
              src="/logos/basilisssa-nanatrade.svg"
              alt="Basilissa, a NanaTrade company"
              width={962}
              height={232}
              className="h-11 w-auto"
            />
            <p className="max-w-xs text-sm leading-relaxed text-paper/60">
              A Ghanaian hospitality group building exceptional experiences through people,
              quality, culture and growth.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/40 mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-paper/75 hover:text-basilissa-yellow transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/40 mb-5">
              Legal &amp; Governance
            </h3>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-paper/75 hover:text-basilissa-yellow transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/40 mb-5">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-paper/75">
              <li>Accra, Ghana</li>
              <li>
                <a
                  href="mailto:info@basilissa.com"
                  className="hover:text-basilissa-yellow transition-colors duration-300"
                >
                  info@basilissa.com
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-paper/45">
            © {new Date().getFullYear()} Basilissa. Part of the NanaTrade Group. All rights
            reserved.
          </p>
          <p className="text-xs text-paper/45">Hospitality, built around people.</p>
        </div>
      </Container>
    </footer>
  );
}
