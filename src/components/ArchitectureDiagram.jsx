import { useEffect, useRef } from 'react';

// Simplified CareerViet platform after the PHP → NestJS migration. Every node
// here is named in the project's own description in data/profile.js.

const EDGE = [
  { x: 1, y: 44, w: 150, h: 72, title: 'Clients' },
  { x: 211, y: 44, w: 180, h: 72, title: 'Kong Gateway', sub: 'all API traffic' },
  { x: 811, y: 44, w: 188, h: 72, title: 'Redis Cluster', sub: 'high-availability cache' },
];

const STORE = { y: 292, w: 220, h: 72 };
const STORES = [
  { x: 1, title: 'PostgreSQL' },
  { x: 260, title: 'MongoDB' },
  { x: 519, title: 'Oracle PL/SQL' },
  { x: 779, title: 'Elasticsearch', sub: 'search, replaced Solr' },
];

const BUS = { y: 196, h: 44 };
const TAP = { x: 601, y: 120 }; // where the services meet the bus

function Box({ x, y, w, h, title, sub }) {
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

export default function ArchitectureDiagram() {
  const figureRef = useRef(null);

  // One pass of events through Kafka the first time the diagram is in view.
  // Observe the figure, not the svg: on phones the svg is wider than its
  // scroll box, so its visible ratio never reaches the threshold.
  useEffect(() => {
    const figure = figureRef.current;
    const start = figure?.querySelector('#flowStart');
    if (!start?.beginElement) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        start.beginElement();
      },
      { threshold: 0.6 },
    );
    observer.observe(figure);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="diagram" ref={figureRef}>
      <div className="diagram__canvas">
        <svg
          viewBox="0 0 1000 366"
          role="img"
          aria-labelledby="arch-title arch-desc"
        >
          <title id="arch-title">CareerViet architecture after the migration</title>
          <desc id="arch-desc">
            Clients call Kong Gateway, which routes to NestJS services backed by a Redis
            Cluster cache. The services publish and consume events on Kafka, which carries
            changes to PostgreSQL, MongoDB, Oracle PL/SQL and Elasticsearch.
          </desc>

          <defs>
            <marker
              id="arch-arrow"
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

          {/* request path */}
          {EDGE.map((box) => (
            <Box key={box.title} {...box} />
          ))}
          <path className="arch-link" d="M151 80H210" markerEnd="url(#arch-arrow)" />
          <path className="arch-link" d="M391 80H450" markerEnd="url(#arch-arrow)" />
          <path
            className="arch-link"
            d="M752 80H810"
            markerStart="url(#arch-arrow)"
            markerEnd="url(#arch-arrow)"
          />
          <text className="arch-sub" x="781" y="70" textAnchor="middle">
            cache
          </text>

          {/* services — stacked to read as many, without inventing their names */}
          <rect className="arch-tile" x="467" y="24" width="268" height="80" rx="10" />
          <rect className="arch-tile" x="459" y="32" width="284" height="80" rx="10" />
          <rect className="arch-group" x="451" y="40" width="300" height="80" rx="10" />
          <text className="arch-title" x="471" y="71">
            NestJS services
          </text>
          <text className="arch-sub" x="471" y="93">
            replaced the PHP monolith
          </text>

          {/* event bus */}
          <path
            className="arch-link"
            d={`M${TAP.x} ${TAP.y + 1}V${BUS.y - 1}`}
            markerStart="url(#arch-arrow)"
            markerEnd="url(#arch-arrow)"
          />
          <text className="arch-sub" x={TAP.x + 12} y="173">
            events
          </text>
          <text className="arch-bus-title" x="1" y="160">
            Kafka event bus
          </text>
          <text className="arch-sub" x="1" y="182">
            Saga pattern keeps cross-database writes consistent
          </text>
          <rect className="arch-bus" x="1" y={BUS.y} width="998" height={BUS.h} rx="10" />

          {/* stores */}
          {STORES.map((s) => {
            const cx = s.x + STORE.w / 2;
            return (
              <g key={s.title}>
                <path
                  className="arch-link"
                  d={`M${cx} ${BUS.y + BUS.h + 1}V${STORE.y - 1}`}
                  markerEnd="url(#arch-arrow)"
                />
                <Box x={s.x} y={STORE.y} w={STORE.w} h={STORE.h} title={s.title} sub={s.sub} />
              </g>
            );
          })}

          {/* events travelling from the services, along the bus, into each store */}
          {STORES.map((s, i) => {
            const cx = s.x + STORE.w / 2;
            const path = `M${TAP.x} ${TAP.y}V${BUS.y + BUS.h / 2}H${cx}V${STORE.y}`;
            const begin = i === 0 ? 'indefinite' : `flowStart.begin+${(i * 0.18).toFixed(2)}s`;
            return (
              <circle key={s.title} className="arch-dot" r="5" opacity="0">
                <animateMotion
                  id={i === 0 ? 'flowStart' : undefined}
                  path={path}
                  begin={begin}
                  dur="1.6s"
                  repeatCount="3"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.85;1"
                  begin={i === 0 ? 'flowStart.begin' : begin}
                  dur="1.6s"
                  repeatCount="3"
                />
              </circle>
            );
          })}
        </svg>
      </div>
      <figcaption>
        Simplified view of CareerViet after the migration. Requests enter through Kong, NestJS
        services coordinate over Kafka, and Elasticsearch stays in sync with three databases in
        real time.
      </figcaption>
    </figure>
  );
}
