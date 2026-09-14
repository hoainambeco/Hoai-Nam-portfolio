import { isPlaceholder, type Copy } from "@/lib/types";

/** Content the CV doesn't provide yet — visibly unfinished, never a guess. */
export function Placeholder({ children }: { children: string }) {
  return (
    <span className="inline-block rounded-[3px] border border-dashed border-line-strong px-2 py-0.5 font-mono text-meta tracking-wide text-subtle uppercase">
      [{children}]
    </span>
  );
}

export function CopyText({ copy }: { copy: Copy }) {
  return isPlaceholder(copy) ? <Placeholder>{copy.placeholder}</Placeholder> : <>{copy}</>;
}
