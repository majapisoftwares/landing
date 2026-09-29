import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: { default: "bg-primary text-primary-foreground", filled: "bg-zinc-100 text-zinc-900", text: "bg-transparent text-current" },
      size: { default: "h-10 px-4 py-2", xl: "h-12 px-6 py-3", icon: "size-10" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

type ButtonProps = VariantProps<typeof buttonVariants> & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement> & {
  leading?: ReactNode;
  trailing?: ReactNode;
  icon?: boolean;
  rounded?: boolean;
};

export function Button({ className, variant, size, leading, trailing, icon, rounded, href, children, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size: icon ? "icon" : size }), className);
  const content = <>{leading}{children}{trailing}</>;

  if (href) return <a href={href} className={classes} {...props}>{content}</a>;
  return <button className={classes} {...props}>{content}</button>;
}

export { buttonVariants };
