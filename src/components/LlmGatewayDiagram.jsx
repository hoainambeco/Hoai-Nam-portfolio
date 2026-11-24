import { useFlowOnView } from '../lib/hooks';
import { useI18n } from '../lib/i18n';
import { ArrowMarker, Box, FlowDots } from './diagram';

// Simplified LLM Gateway Proxy architecture: unified client endpoints on top,
// regex routing + fault-tolerant credential pool in the middle, and multiple
// upstream LLM providers below.

const ARROW = 'lg-arrow';
const ARROW_URL = `url(#${ARROW})`;
const START = 'lgFlowStart';

const COPY = {
  en: {
    svgTitle: 'LLM Gateway Proxy architecture',
    svgDesc:
      'Client SDKs send OpenAI-, Anthropic- or Gemini-compatible requests to the NestJS + Fastify gateway, backed by sub-millisecond in-memory RBAC key and quota state on SQLite. A credential pool routes requests across OpenAI, Anthropic Claude, Google Gemini and GitHub Copilot with round-robin, sticky selection, OAuth refresh and 429 failover.',
    edge: [
      { x: 1, y: 44, w: 224, h: 72, title: 'Client SDKs', sub: 'OpenAI · Claude · Gemini' },
      { x: 761, y: 44, w: 238, h: 72, title: 'SQLite + RAM', sub: '<1ms key & quota cache' },
    ],
    cacheLabel: 'state',
    gwTitle: 'LLM Gateway · NestJS + Fastify',
    gwSub: 'RBAC keys · regex router · live console',
    tapLabel: 'failover',
    busTitle: 'Credential pool & router',
    busSub: 'round-robin · sticky · OAuth refresh · 429 cooldown',
    upstreams: [
      { x: 1, title: 'OpenAI', sub: 'GPT & reasoning models' },
      { x: 260, title: 'Anthropic Claude', sub: 'Messages & tool use' },
      { x: 519, title: 'Google Gemini', sub: 'native & mapped schema' },
      { x: 779, title: 'GitHub Copilot', sub: 'OAuth pool rotation' },
    ],
  },
  vi: {
    svgTitle: 'Kiến trúc LLM Gateway Proxy',
    svgDesc:
      'Client SDK gửi request chuẩn OpenAI, Anthropic hoặc Gemini tới NestJS + Fastify gateway, kết hợp cache RBAC key và hạn mức dưới 1ms trên RAM và SQLite. Tầng điều phối tài khoản định tuyến và tự động failover qua OpenAI, Anthropic Claude, Google Gemini và GitHub Copilot.',
    edge: [
      { x: 1, y: 44, w: 224, h: 72, title: 'Client SDKs', sub: 'OpenAI · Claude · Gemini' },
      { x: 761, y: 44, w: 238, h: 72, title: 'SQLite + RAM', sub: 'cache key & quota <1ms' },
    ],
    cacheLabel: 'cache',
    gwTitle: 'LLM Gateway · NestJS + Fastify',
    gwSub: 'RBAC key · định tuyến regex · dashboard',
    tapLabel: 'điều phối',
    busTitle: 'Credential pool & tự động failover',
    busSub: 'round-robin · sticky · làm mới OAuth · cooldown 429',
    upstreams: [
      { x: 1, title: 'OpenAI', sub: 'GPT & model suy luận' },
      { x: 260, title: 'Anthropic Claude', sub: 'Messages & gọi công cụ' },
      { x: 519, title: 'Google Gemini', sub: 'chuẩn gốc & ánh xạ' },
      { x: 779, title: 'GitHub Copilot', sub: 'xoay vòng OAuth pool' },
    ],
  },
};

const UPSTREAM = { y: 292, w: 220, h: 72 };
const BUS = { y: 196, h: 44 };
const TAP = { x: 486, y: 120 };

export default function LlmGatewayDiagram({ caption }) {
  const figureRef = useFlowOnView(START);
  const { lang } = useI18n();
  const c = COPY[lang] || COPY.en;

  return (
    <figure className="diagram" ref={figureRef}>
      <div className="diagram__canvas">
        <svg viewBox="0 0 1000 366" role="img" aria-labelledby="lg-arch-title lg-arch-desc">
          <title id="lg-arch-title">{c.svgTitle}</title>
          <desc id="lg-arch-desc">{c.svgDesc}</desc>

          <ArrowMarker id={ARROW} />

          {/* edge nodes */}
          {c.edge.map((box) => (
            <Box key={box.x} {...box} />
          ))}
          <path className="arch-link" d="M225 80H280" markerEnd={ARROW_URL} />
          <path className="arch-link" d="M692 80H760" markerStart={ARROW_URL} markerEnd={ARROW_URL} />
          <text className="arch-sub" x="726" y="70" textAnchor="middle">
            {c.cacheLabel}
          </text>

          {/* gateway core */}
          <rect className="arch-tile" x="297" y="24" width="378" height="80" rx="10" />
          <rect className="arch-tile" x="289" y="32" width="394" height="80" rx="10" />
          <rect className="arch-group" x="281" y="40" width="410" height="80" rx="10" />
          <text className="arch-title" x="301" y="71">
            {c.gwTitle}
          </text>
          <text className="arch-sub" x="301" y="93">
            {c.gwSub}
          </text>

          {/* credential pool & routing bus */}
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

          {/* upstream providers */}
          {c.upstreams.map((u) => {
            const cx = u.x + UPSTREAM.w / 2;
            return (
              <g key={u.x}>
                <path
                  className="arch-link"
                  d={`M${cx} ${BUS.y + BUS.h + 1}V${UPSTREAM.y - 1}`}
                  markerStart={ARROW_URL}
                  markerEnd={ARROW_URL}
                />
                <Box x={u.x} y={UPSTREAM.y} w={UPSTREAM.w} h={UPSTREAM.h} title={u.title} sub={u.sub} />
              </g>
            );
          })}

          <FlowDots
            startId={START}
            tap={TAP}
            busMidY={BUS.y + BUS.h / 2}
            targets={c.upstreams.map((u) => u.x + UPSTREAM.w / 2)}
            targetY={UPSTREAM.y}
          />
        </svg>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
