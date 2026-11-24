import { useFlowOnView } from '../lib/hooks';
import { useI18n } from '../lib/i18n';
import { ArrowMarker, Box, FlowDots } from './diagram';

// Simplified CareerViet platform after the PHP → NestJS migration. Every node
// here is named in the project's own description in data/profile.js.

const ARROW = 'cv-arrow';
const ARROW_URL = `url(#${ARROW})`;
const START = 'cvFlowStart';

const COPY = {
  en: {
    svgTitle: 'CareerViet architecture after the migration',
    svgDesc:
      'Clients call Kong Gateway, which routes to NestJS services backed by a Redis Cluster cache. The services publish and consume events on Kafka, which carries changes to PostgreSQL, MongoDB, Oracle PL/SQL and Elasticsearch.',
    edge: [
      { x: 1, y: 44, w: 150, h: 72, title: 'Clients' },
      { x: 211, y: 44, w: 180, h: 72, title: 'Kong Gateway', sub: 'all API traffic' },
      { x: 811, y: 44, w: 188, h: 72, title: 'Redis Cluster', sub: 'high-availability cache' },
    ],
    cacheLabel: 'cache',
    svcTitle: '12+ NestJS services',
    svcSub: 'replaced the PHP monolith',
    tapLabel: 'events',
    busTitle: 'Kafka event bus',
    busSub: 'Saga pattern keeps cross-database writes consistent',
    stores: [
      { x: 1, title: 'PostgreSQL' },
      { x: 260, title: 'MongoDB' },
      { x: 519, title: 'Oracle PL/SQL' },
      { x: 779, title: 'Elasticsearch', sub: 'search, replaced Solr' },
    ],
  },
  vi: {
    svgTitle: 'Kiến trúc CareerViet sau khi chuyển đổi microservices',
    svgDesc:
      'Client gọi qua Kong Gateway để định tuyến tới hơn 12 NestJS services kết hợp Redis Cluster cache. Các service phát và xử lý sự kiện qua Kafka (Saga), đồng bộ thay đổi sang PostgreSQL, MongoDB, Oracle PL/SQL và Elasticsearch.',
    edge: [
      { x: 1, y: 44, w: 150, h: 72, title: 'Clients' },
      { x: 211, y: 44, w: 180, h: 72, title: 'Kong Gateway', sub: 'toàn bộ API' },
      { x: 811, y: 44, w: 188, h: 72, title: 'Redis Cluster', sub: 'cache sẵn sàng cao' },
    ],
    cacheLabel: 'cache',
    svcTitle: '12+ NestJS services',
    svcSub: 'thay thế PHP monolith',
    tapLabel: 'sự kiện',
    busTitle: 'Kafka event bus',
    busSub: 'Saga pattern giữ nhất quán dữ liệu liên DB',
    stores: [
      { x: 1, title: 'PostgreSQL' },
      { x: 260, title: 'MongoDB' },
      { x: 519, title: 'Oracle PL/SQL' },
      { x: 779, title: 'Elasticsearch', sub: 'tìm kiếm, thay Solr' },
    ],
  },
};

const STORE = { y: 292, w: 220, h: 72 };
const BUS = { y: 196, h: 44 };
const TAP = { x: 601, y: 120 }; // where the services meet the bus

export default function CareerVietDiagram({ caption }) {
  const figureRef = useFlowOnView(START);
  const { lang } = useI18n();
  const c = COPY[lang] || COPY.en;

  return (
    <figure className="diagram" ref={figureRef}>
      <div className="diagram__canvas">
        <svg viewBox="0 0 1000 366" role="img" aria-labelledby="cv-arch-title cv-arch-desc">
          <title id="cv-arch-title">{c.svgTitle}</title>
          <desc id="cv-arch-desc">{c.svgDesc}</desc>

          <ArrowMarker id={ARROW} />

          {/* request path */}
          {c.edge.map((box) => (
            <Box key={box.x} {...box} />
          ))}
          <path className="arch-link" d="M151 80H210" markerEnd={ARROW_URL} />
          <path className="arch-link" d="M391 80H450" markerEnd={ARROW_URL} />
          <path className="arch-link" d="M752 80H810" markerStart={ARROW_URL} markerEnd={ARROW_URL} />
          <text className="arch-sub" x="781" y="70" textAnchor="middle">
            {c.cacheLabel}
          </text>

          {/* services — stacked to read as many, without inventing their names */}
          <rect className="arch-tile" x="467" y="24" width="268" height="80" rx="10" />
          <rect className="arch-tile" x="459" y="32" width="284" height="80" rx="10" />
          <rect className="arch-group" x="451" y="40" width="300" height="80" rx="10" />
          <text className="arch-title" x="471" y="71">
            {c.svcTitle}
          </text>
          <text className="arch-sub" x="471" y="93">
            {c.svcSub}
          </text>

          {/* event bus */}
          <path
            className="arch-link"
            d={`M${TAP.x} ${TAP.y + 1}V${BUS.y - 1}`}
            markerStart={ARROW_URL}
            markerEnd={ARROW_URL}
          />
          <text className="arch-sub" x={TAP.x + 12} y="173">
            {c.tapLabel}
          </text>
          <text className="arch-bus-title" x="1" y="160">
            {c.busTitle}
          </text>
          <text className="arch-sub" x="1" y="182">
            {c.busSub}
          </text>
          <rect className="arch-bus" x="1" y={BUS.y} width="998" height={BUS.h} rx="10" />

          {/* stores */}
          {c.stores.map((s) => {
            const cx = s.x + STORE.w / 2;
            return (
              <g key={s.x}>
                <path
                  className="arch-link"
                  d={`M${cx} ${BUS.y + BUS.h + 1}V${STORE.y - 1}`}
                  markerEnd={ARROW_URL}
                />
                <Box x={s.x} y={STORE.y} w={STORE.w} h={STORE.h} title={s.title} sub={s.sub} />
              </g>
            );
          })}

          {/* events travelling from the services, along the bus, into each store */}
          <FlowDots
            startId={START}
            tap={TAP}
            busMidY={BUS.y + BUS.h / 2}
            targets={c.stores.map((s) => s.x + STORE.w / 2)}
            targetY={STORE.y}
          />
        </svg>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
