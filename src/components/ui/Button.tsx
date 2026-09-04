import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex h-12 sm:h-13 items-center justify-center gap-2.5 px-7 sm:px-8 " +
  "font-medium text-[13px] sm:text-sm tracking-[0.04em] uppercase " +
  "transition-[background-color,color,border-color,transform] duration-300 ease-out " +
  "active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-basilissa-yellow";

const variants = {
  primary: "bg-ink text-paper hover:bg-basilissa-yellow hover:text-ink",
  inverse: "bg-basilissa-yellow text-ink hover:bg-ink hover:text-paper",
  outline: "border border-current bg-transparent hover:bg-ink hover:text-paper hover:border-ink",
  "outline-light": "border border-paper/50 text-paper bg-transparent hover:bg-paper hover:text-ink",
} as const;

type Variant = keyof typeof variants;

interface SharedProps {
  variant?: Variant;
  showArrow?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  variant = "primary",
  showArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);
  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {content}
    </button>
  );
}
