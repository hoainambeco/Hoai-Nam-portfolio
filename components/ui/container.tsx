import { cx } from "@/lib/cx";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cx("mx-auto w-full max-w-[82rem] px-5 sm:px-8 lg:px-12", className)}>{children}</div>;
}
