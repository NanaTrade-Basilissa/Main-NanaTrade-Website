import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface FooterProps {
  logo: FooterLogo;
  blurb: string;
  companyLinks: FooterLink[];
  legalLinks?: FooterLink[];
  contactEmail: string;
  copyrightLine: string;
  tagline?: string;
}

const DEFAULT_LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Customer Data Privacy", href: "#" },
  { label: "Governance & Charter", href: "#" },
];

export function Footer({
  logo,
  blurb,
  companyLinks,
  legalLinks = DEFAULT_LEGAL_LINKS,
  contactEmail,
  copyrightLine,
  tagline,
}: FooterProps) {
  return (
    <footer className="bg-ink text-paper">
      <Container className="pt-20 pb-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <Reveal className="flex flex-col gap-6">
            <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-11 w-auto" />
            <p className="max-w-xs text-sm leading-relaxed text-paper/60">{blurb}</p>
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
                    className="text-sm text-paper/75 hover:text-accent transition-colors duration-300"
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
                    className="text-sm text-paper/75 hover:text-accent transition-colors duration-300"
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
                  href={`mailto:${contactEmail}`}
                  className="hover:text-accent transition-colors duration-300"
                >
                  {contactEmail}
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-paper/45">
            © {new Date().getFullYear()} {copyrightLine}
          </p>
          {tagline && <p className="text-xs text-paper/45">{tagline}</p>}
        </div>
      </Container>
    </footer>
  );
}
