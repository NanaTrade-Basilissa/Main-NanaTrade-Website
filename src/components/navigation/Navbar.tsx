"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface NavbarProps {
  logo: NavbarLogo;
  homeHref?: string;
  navLinks: NavLink[];
  ctaLabel: string;
  ctaHref: string;
}

export function Navbar({ logo, homeHref = "/", navLinks, ctaLabel, ctaHref }: NavbarProps) {
  const [solid, setSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setSolid(window.scrollY > 64);
        ticking.current = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const light = !solid && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-out",
        solid || mobileOpen
          ? "bg-paper/95 backdrop-blur-sm border-b border-border shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href={homeHref} className="flex items-center shrink-0">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            priority
            className="h-10 sm:h-11 w-auto"
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                light ? "text-paper/90 hover:text-accent" : "text-ink/80 hover:text-ink",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={ctaHref} variant={light ? "outline-light" : "primary"} className="h-11 sm:h-11">
            {ctaLabel}
          </Button>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
          className={cn(
            "lg:hidden inline-flex size-10 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent",
            light ? "text-paper" : "text-ink",
          )}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-paper border-b border-border"
          >
            <Container className="flex flex-col py-6 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-base font-semibold text-ink border-b border-border/70 last:border-none"
                >
                  {link.label}
                </a>
              ))}
              <Button
                href={ctaHref}
                variant="primary"
                className="mt-5 w-full"
                onClick={() => setMobileOpen(false)}
              >
                {ctaLabel}
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
