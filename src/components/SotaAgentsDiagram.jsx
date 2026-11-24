import { useFlowOnView } from '../lib/hooks';
import { useI18n } from '../lib/i18n';
import { ArrowMarker, Box, FlowDots } from './diagram';

// Simplified SotaAgents platform: the gateway is the control plane, apps are
// the data plane. Every node is named in the public user manual
// (app.sotaagents.ai/manual) or in the project description in data/profile.js.

const ARROW = 'sa-arrow';
const ARROW_URL = `url(#${ARROW})`;
const START = 'saFlowStart';

const COPY = {
  en: {
    svgTitle: 'SotaAgents platform architecture',
    svgDesc:
      'Clients reach the API Gateway from the web app, an embedded widget or over MCP. The gateway handles auth, guardrails, credits and audit, and calls Claude, GPT or Gemini. Tool calls go out as signed server-to-server requests to installed apps: Knowledge Base, Office, Web Search and any app a team builds on its own backend.',
    edge: [
      { x: 1, y: 44, w: 190, h: 72, title: 'Clients', sub: 'web · embed · MCP' },
      { x: 751, y: 44, w: 248, h: 72, title: 'LLM providers', sub: 'Claude · GPT · Gemini' },
    ],
    gwTitle: 'API Gateway · NestJS',
    gwSub: 'auth · guardrails · credits · audit',
    tapLabel: 'tool calls',
    busTitle: 'App platform',
    busSub: 'manifest-declared tools, signed requests',
    apps: [
      { x: 1, title: 'Knowledge Base', sub: 'vector + full-text' },
      { x: 260, title: 'Office', sub: 'docx · xlsx · pdf · pptx' },
      { x: 519, title: 'Web Search', sub: 'live, cited sources' },
      { x: 779, title: 'Your app', sub: 'own backend & release' },
    ],
  },
  vi: {
    svgTitle: 'Kiến trúc nền tảng SotaAgents',
    svgDesc:
      'Client kết nối API Gateway từ web app, widget nhúng hoặc qua giao thức MCP. Gateway xử lý xác thực, guardrails, credit và audit, đồng thời gọi Claude, GPT hoặc Gemini. Các lệnh gọi tool được ký xác thực server-to-server gửi tới các app cài đặt trên backend riêng.',
    edge: [
      { x: 1, y: 44, w: 190, h: 72, title: 'Clients', sub: 'web · nhúng · MCP' },
      { x: 751, y: 44, w: 248, h: 72, title: 'Nhà cung cấp LLM', sub: 'Claude · GPT · Gemini' },
    ],
    gwTitle: 'API Gateway · NestJS',
    gwSub: 'xác thực · guardrails · credit · audit',
    tapLabel: 'gọi tool',
    busTitle: 'Nền tảng App',
    busSub: 'tool khai báo qua manifest, request có chữ ký',
    apps: [
      { x: 1, title: 'Knowledge Base', sub: 'vector + toàn văn' },
      { x: 260, title: 'Office', sub: 'docx · xlsx · pdf · pptx' },
      { x: 519, title: 'Web Search', sub: 'trực tiếp, trích nguồn' },
      { x: 779, title: 'App riêng', sub: 'backend & release riêng' },
    ],
  },
};

const APP = { y: 292, w: 220, h: 72 };
const BUS = { y: 196, h: 44 };
const TAP = { x: 441, y: 120 }; // where the gateway meets the app bus

export default function SotaAgentsDiagram({ caption }) {
  const figureRef = useFlowOnView(START);
  const { lang } = useI18n();
  const c = COPY[lang] || COPY.en;

  return (
    <figure className="diagram" ref={figureRef}>
      <div className="diagram__canvas">
        <svg viewBox="0 0 1000 366" role="img" aria-labelledby="sa-arch-title sa-arch-desc">
          <title id="sa-arch-title">{c.svgTitle}</title>
          <desc id="sa-arch-desc">{c.svgDesc}</desc>

          <ArrowMarker id={ARROW} />

          {/* request path */}
          {c.edge.map((box) => (
            <Box key={box.x} {...box} />
          ))}
          <path className="arch-link" d="M191 80H250" markerEnd={ARROW_URL} />
          <path className="arch-link" d="M632 80H750" markerStart={ARROW_URL} markerEnd={ARROW_URL} />
          <text className="arch-sub" x="691" y="70" textAnchor="middle">
            AI SDK
          </text>

          {/* gateway — the control plane */}
          <rect className="arch-tile" x="267" y="24" width="348" height="80" rx="10" />
          <rect className="arch-tile" x="259" y="32" width="364" height="80" rx="10" />
          <rect className="arch-group" x="251" y="40" width="380" height="80" rx="10" />
          <text className="arch-title" x="271" y="71">
            {c.gwTitle}
          </text>
          <text className="arch-sub" x="271" y="93">
            {c.gwSub}
          </text>

          {/* app bus — the data plane boundary */}
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

          {/* apps */}
          {c.apps.map((a) => {
            const cx = a.x + APP.w / 2;
            return (
              <g key={a.x}>
                <path
                  className="arch-link"
                  d={`M${cx} ${BUS.y + BUS.h + 1}V${APP.y - 1}`}
                  markerStart={ARROW_URL}
                  markerEnd={ARROW_URL}
                />
                <Box x={a.x} y={APP.y} w={APP.w} h={APP.h} title={a.title} sub={a.sub} />
              </g>
            );
          })}

          {/* tool calls travelling from the gateway, along the bus, into each app */}
          <FlowDots
            startId={START}
            tap={TAP}
            busMidY={BUS.y + BUS.h / 2}
            targets={c.apps.map((a) => a.x + APP.w / 2)}
            targetY={APP.y}
          />
        </svg>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
