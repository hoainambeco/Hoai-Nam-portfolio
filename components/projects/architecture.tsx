import type { CSSProperties } from "react";
import { cx } from "@/lib/cx";
import type { Architecture as ArchitectureData } from "@/lib/types";

type Props = {
  architecture: ArchitectureData;
  /** Accessible name for the list of layers. */
  label: string;
  /** Play one pass of a request down the layers (hero only). */
  animated?: boolean;
  className?: string;
};

/**
 * A system drawn as layers on a vertical spine. It is plain HTML — an ordered
 * list of tiers — so it reflows on narrow screens and reads sensibly without CSS.
 *
 * --tick is the vertical centre of a tier's first row of nodes; the spine
 * segments and the label are positioned from it.
 */
export function Architecture({ architecture, label, animated = false, className }: Props) {
  const { tiers, caption } = architecture;
  const last = tiers.length - 1;

  const segment = (i: number) =>
    i === 0 ? "top-(--tick) bottom-0" : i === last ? "top-0 h-(--tick)" : "inset-y-0";

  return (
    <figure className={cx("min-w-0", className)}>
      <ol aria-label={label} className="[--rail:4.25rem] sm:[--rail:5.25rem]">
        {tiers.map((tier, i) => (
          <li
            key={tier.label}
            className="grid grid-cols-[var(--rail)_minmax(0,1fr)] gap-x-3"
            style={{ "--tick": tier.via ? "2.8rem" : "1.2rem", "--tier": i } as CSSProperties}
          >
            <span className="meta pt-[calc(var(--tick)_-_0.5625rem)] text-subtle">{tier.label}</span>

            <div className={cx("relative pl-5 sm:pl-6", i < last && "pb-4 sm:pb-5")}>
              <span aria-hidden className={cx("absolute left-0 w-px bg-line-strong", segment(i))} />
              {animated && (
                <span aria-hidden className={cx("arch-signal absolute left-0 w-px bg-accent", segment(i))} />
              )}
              <span
                aria-hidden
                className={cx("absolute top-(--tick) left-0 h-px w-4 bg-line-strong", animated && "arch-tick")}
              />

              {tier.via && <p className="meta mb-2 text-subtle">{tier.via}</p>}

              <ul className="flex flex-wrap gap-2">
                {tier.nodes.map((node) => (
                  <li key={node.name} className="rounded-[3px] border border-line-strong bg-raised px-3 py-2">
                    <span className="block text-[0.9375rem] leading-[1.3] text-fg">{node.name}</span>
                    {node.role && <span className="meta block text-subtle">{node.role}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
      <figcaption className="mt-5 max-w-[56ch] text-sm text-subtle">{caption}</figcaption>
    </figure>
  );
}
