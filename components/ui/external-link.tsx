import { ArrowUpRight } from "lucide-react";
import { cx } from "@/lib/cx";

export function ExternalLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  // Inline, not flex: when the text wraps, the arrow stays after the last word.
  return (
    <a href={href} target="_blank" rel="noreferrer" className={cx("link", className)}>
      {children}
      <ArrowUpRight aria-hidden className="ml-1 inline-block size-3.5 align-[-0.1em] text-subtle" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
