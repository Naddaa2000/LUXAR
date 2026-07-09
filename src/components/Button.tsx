import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "btn-hover inline-flex items-center justify-center gap-2 font-mono font-bold tracking-wider text-center rounded-xl transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-fixed-dim focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary-fixed-dim text-on-primary hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(59,130,246,0.45)]",
  ghost:
    "border border-secondary-fixed-dim/50 text-secondary-fixed-dim hover:bg-secondary-fixed-dim/10 hover:scale-[1.02]",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2 text-[13px]",
  md: "px-7 py-3 text-sm",
  lg: "px-10 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    keyof CommonProps | "href"
  >;

export default function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...rest
  } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as { href: string } & Record<
      string,
      unknown
    >;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
