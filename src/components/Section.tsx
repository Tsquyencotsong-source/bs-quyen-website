import { clsx } from "clsx";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "py-16 md:py-20 border-t border-gray-100 first:border-t-0",
        className
      )}
    >
      {children}
    </section>
  );
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("max-w-content mx-auto px-6 md:px-10", className)}>
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  dark?: boolean;
}

export function SectionHeader({ eyebrow, title, lead, dark }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <p className={dark ? "eyebrow-gold" : "eyebrow"}>{eyebrow}</p>
      <h2 className={clsx("section-h2", dark && "!text-white")}>{title}</h2>
      {lead && (
        <p className={clsx("text-base font-light leading-relaxed mt-1 max-w-xl", dark ? "text-white/50" : "text-gray-400")}>
          {lead}
        </p>
      )}
    </div>
  );
}
