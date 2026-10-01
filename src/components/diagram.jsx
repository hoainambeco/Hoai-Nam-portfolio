// Shared pieces for the architecture diagrams. Each diagram passes its own id
// prefix so two diagrams on one page never share marker or animation ids.

export function Box({ x, y, w, h, title, sub }) {
  return (
    <g>
      <rect className="arch-box" x={x} y={y} width={w} height={h} rx="8" />
      <text className="arch-title" x={x + 18} y={sub ? y + 31 : y + h / 2 + 6}>
        {title}
      </text>
      {sub && (
        <text className="arch-sub" x={x + 18} y={y + 53}>
          {sub}
        </text>
      )}
    </g>
  );
}

export function ArrowMarker({ id }) {
  return (
    <defs>
      <marker
        id={id}
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="8"
        markerHeight="8"
        markerUnits="userSpaceOnUse"
        orient="auto-start-reverse"
      >
        <path className="arch-head" d="M1 1.5 9 5 1 8.5Z" />
      </marker>
    </defs>
  );
}

// Dots travelling from `tap` down to the bus, along it, and into each target.
export function FlowDots({ startId, tap, busMidY, targets, targetY }) {
  return targets.map((cx, i) => {
    const path = `M${tap.x} ${tap.y}V${busMidY}H${cx}V${targetY}`;
    const begin = i === 0 ? 'indefinite' : `${startId}.begin+${(i * 0.18).toFixed(2)}s`;
    return (
      <circle key={cx} className="arch-dot" r="5" opacity="0">
        <animateMotion
          id={i === 0 ? startId : undefined}
          path={path}
          begin={begin}
          dur="1.6s"
          repeatCount="3"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.1;0.85;1"
          begin={i === 0 ? `${startId}.begin` : begin}
          dur="1.6s"
          repeatCount="3"
        />
      </circle>
    );
  });
}
