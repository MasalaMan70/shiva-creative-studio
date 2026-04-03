import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {label}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-muted mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
