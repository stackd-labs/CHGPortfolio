"use client";

const row1 = [
  "Claude", "Agent SDK", "MCP", "Next.js", "React", "TypeScript",
  "Supabase", "Stripe", "PayPal", "Resend", "Tailwind CSS", "Vercel",
];

const row2 = [
  "App Rescue", "New Builds", "AI Architecture", "Agent Harnesses",
  "Multi-Agent Orchestration", "Security Hardening", "Payments & Billing",
  "Team Enablement",
];

function Row({ items }: { items: string[] }) {
  const doubled = items;
  return (
    <div className="overflow-hidden">
      <div
        className="flex flex-wrap justify-center gap-y-3"
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-5 text-[10px] font-sans font-semibold text-white/80"
            style={{ letterSpacing: "0.2em" }}
          >
            {item.toUpperCase()}
            <span className="text-white/40 text-xs" aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="py-7 border-y border-[var(--rose)] bg-[var(--rose)] overflow-hidden space-y-3">
      <Row items={row1} />
      <Row items={row2} />
    </div>
  );
}
