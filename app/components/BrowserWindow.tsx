import Image from "next/image";

// A browser-chrome frame around a real screenshot of a live site.
export function BrowserWindow({
  src,
  alt,
  url,
  className = "",
  priority = false,
  sizes = "(max-width: 900px) 100vw, 560px",
}: {
  src: string;
  alt: string;
  url: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`bg-white border border-[var(--border)] rounded-xl overflow-hidden shadow-[0_40px_80px_-30px_rgba(107,100,96,0.45),0_12px_24px_-12px_rgba(107,100,96,0.25)] ${className}`}
    >
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--border)] bg-[#fbfaf8]">
        <span className="w-2 h-2 rounded-full bg-[#f0b8c9]" />
        <span className="w-2 h-2 rounded-full bg-[#f3d58f]" />
        <span className="w-2 h-2 rounded-full bg-[#e2ded7]" />
        <span className="ml-2.5 flex-1 truncate font-mono text-[10px] text-[var(--taupe)] bg-[var(--warm-gray)] rounded px-2 py-0.5">
          <span className="text-emerald-600">https://</span>
          {url}
        </span>
      </div>
      <div className="relative aspect-[16/10] bg-[var(--warm-gray)]">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
      </div>
    </div>
  );
}

// Cream terminal card with prompt lines.
export function Terminal({
  lines,
  className = "",
}: {
  lines: { kind: "cmd" | "ok" | "dim"; text: string }[];
  className?: string;
}) {
  return (
    <div
      className={`bg-[#fffaf3] border border-[#ecdcc0] rounded-xl px-4 py-3.5 font-mono text-[11.5px] leading-[1.8] text-[var(--charcoal)] shadow-[0_30px_60px_-28px_rgba(107,100,96,0.5)] ${className}`}
    >
      {lines.map((l, i) => (
        <div key={i} className={l.kind === "dim" ? "text-[var(--taupe)]" : ""}>
          {l.kind === "cmd" && <span className="text-[var(--rose)]">$ </span>}
          {l.kind === "ok" && <span className="text-emerald-600">✓ </span>}
          {l.text}
        </div>
      ))}
    </div>
  );
}

// Small floating status pill.
export function StatusPill({ children, tone = "green" }: { children: React.ReactNode; tone?: "green" | "rose" | "gold" }) {
  const dot = tone === "rose" ? "bg-[var(--rose)]" : tone === "gold" ? "bg-[var(--gold)]" : "bg-emerald-500";
  return (
    <div className="inline-flex items-center gap-2 bg-white border border-[var(--border)] rounded-full px-3.5 py-1.5 font-mono text-[11px] text-[var(--charcoal)] whitespace-nowrap shadow-[0_14px_30px_-14px_rgba(107,100,96,0.45)]">
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      {children}
    </div>
  );
}
