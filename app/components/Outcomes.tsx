"use client";

import { motion } from "framer-motion";

// Numbers come straight from the client quotes and project copy elsewhere on the page.
const outcomes = [
  { big: "3 → 1", who: "Villa Concierge Co", desc: "Three separate tools replaced by one operations platform." },
  { big: "2 wks", who: "Evolution Production Co", desc: "Full brand site shipped with zero revision rounds." },
  { big: "Monthly", who: "Dance Studio Portal", desc: "Tuition billed automatically through PayPal, in production." },
];

export default function Outcomes() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[var(--warm-gray)]">
      <div className="max-w-6xl mx-auto">
        <p className="code-label font-mono text-[var(--rose-text)] text-xs mb-4" style={{ letterSpacing: "0.12em" }}>
          OUTCOMES
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--charcoal)] leading-tight">
          What changed for them.
        </h2>
        <div className="grid md:grid-cols-3 mt-12 border-t border-[var(--charcoal)]">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.who}
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="pt-8 pb-8 md:pb-0 md:pr-8 border-b md:border-b-0 md:border-r last:border-0 border-[var(--border)] md:[&:not(:first-child)]:pl-8"
            >
              <p className="font-serif text-5xl lg:text-6xl font-semibold text-[var(--charcoal)] leading-none tracking-tight">
                {o.big}
              </p>
              <p className="font-mono text-[10.5px] text-[var(--rose)] uppercase mt-4" style={{ letterSpacing: "0.1em" }}>
                {o.who}
              </p>
              <p className="text-sm font-sans font-light text-[var(--taupe)] mt-2 max-w-[30ch]">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
