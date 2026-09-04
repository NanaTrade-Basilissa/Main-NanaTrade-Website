import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export function Container({ children, as: Tag = "div", className }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[84rem] px-5 sm:px-8 lg:px-10", className)}>
      {children}
    </Tag>
  );
}
