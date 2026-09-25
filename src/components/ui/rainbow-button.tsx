import { cva, type VariantProps } from "class-variance-authority";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

const rainbowButtonVariants = cva(
  "relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium outline-none transition-all focus-visible:ring-2 focus-visible:ring-zinc-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-0 bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] bg-[length:200%] text-white [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.125rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:bg-[length:200%] before:[filter:blur(0.75rem)]",
        outline:
          "border border-white/20 border-b-transparent bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(#0a0a0a_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] bg-[length:200%] text-white [background-clip:padding-box,border-box,border-box] [background-origin:border-box] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:bg-[length:200%] before:[filter:blur(0.75rem)]",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-xl px-3 text-xs",
        lg: "h-11 rounded-xl px-8",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type RainbowButtonProps = VariantProps<typeof rainbowButtonVariants> & {
  className?: string;
  arcadeHover?: boolean;
  hoverText?: string;
  } & (
    | Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">
    | (Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
        href: string;
      })
  );

export function RainbowButton({
  className,
  variant,
  size,
  arcadeHover = false,
  hoverText,
  children,
  ...props
}: RainbowButtonProps) {
  const classes = cn(
    rainbowButtonVariants({ variant, size }),
    hoverText && "group",
    arcadeHover && "agent-arcade-button",
    className,
  );

  const content = hoverText ? (
    <span className="relative z-10 inline-flex items-center justify-center gap-x-[0.25em]">
      {hoverText.split(" ").map((word, index) => (
        <span key={`${word}-${index}`} className="relative overflow-hidden">
          <span className="agent-arcade-button-word block transition-transform duration-[800ms] ease-out group-hover:-translate-y-full">
            {word}
          </span>
          <span
            aria-hidden="true"
            className="agent-arcade-button-word absolute top-full left-0 block transition-transform duration-[800ms] ease-out group-hover:-translate-y-full"
          >
            {word}
          </span>
        </span>
      ))}
      {children}
    </span>
  ) : (
    children
  );

  if ("href" in props) {
    return (
      <a className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}

export { rainbowButtonVariants };
export type { RainbowButtonProps };
