import { useFlowOnView } from '../lib/hooks';
import { ArrowMarker, Box, FlowDots } from './diagram';

// Simplified SotaAgents platform: the gateway is the control plane, apps are
// the data plane. Every node is named in the public user manual
// (app.sotaagents.ai/manual) or in the project description in data/profile.js.

const ARROW = 'sa-arrow';
const ARROW_URL = `url(#${ARROW})`;
const START = 'saFlowStart';

const EDGE = [
  { x: 1, y: 44, w: 190, h: 72, title: 'Clients', sub: 'web · embed · MCP' },
  { x: 751, y: 44, w: 248, h: 72, title: 'LLM providers', sub: 'Claude · GPT · Gemini' },
];

const APP = { y: 292, w: 220, h: 72 };
const APPS = [
  { x: 1, title: 'Knowledge Base', sub: 'vector + full-text' },
  { x: 260, title: 'Office', sub: 'docx · xlsx · pdf · pptx' },
  { x: 519, title: 'Web Search', sub: 'live, cited sources' },
  { x: 779, title: 'Your app', sub: 'own backend & release' },
];

const BUS = { y: 196, h: 44 };
const TAP = { x: 441, y: 120 }; // where the gateway meets the app bus

export default function SotaAgentsDiagram({ caption }) {
  const figureRef = useFlowOnView(START);

  return (
    <figure className="diagram" ref={figureRef}>
      <div className="diagram__canvas">
        <svg viewBox="0 0 1000 366" role="img" aria-labelledby="sa-arch-title sa-arch-desc">
          <title id="sa-arch-title">SotaAgents platform architecture</title>
          <desc id="sa-arch-desc">
            Clients reach the API Gateway from the web app, an embedded widget or over MCP. The
            gateway handles auth, guardrails, credits and audit, and calls Claude, GPT or Gemini.
            Tool calls go out as signed server-to-server requests to installed apps: Knowledge
            Base, Office, Web Search and any app a team builds on its own backend.
          </desc>

          <ArrowMarker id={ARROW} />

          {/* request path */}
          {EDGE.map((box) => (
            <Box key={box.title} {...box} />
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
            API Gateway · NestJS
          </text>
          <text className="arch-sub" x="271" y="93">
            auth · guardrails · credits · audit
          </text>

          {/* app bus — the data plane boundary */}
          <path
            className="arch-link"
            d={`M${TAP.x} ${TAP.y + 1}V${BUS.y - 1}`}
            markerStart={ARROW_URL}
            markerEnd={ARROW_URL}
          />
          <text className="arch-sub" x={TAP.x + 12} y="173">
            tool calls
          </text>
          <text className="arch-bus-title" x="1" y="160">
            App platform
          </text>
          <text className="arch-sub" x="1" y="182">
            manifest-declared tools, signed requests
          </text>
          <rect className="arch-bus" x="1" y={BUS.y} width="998" height={BUS.h} rx="10" />

          {/* apps */}
          {APPS.map((a) => {
            const cx = a.x + APP.w / 2;
            return (
              <g key={a.title}>
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
            targets={APPS.map((a) => a.x + APP.w / 2)}
            targetY={APP.y}
          />
        </svg>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
