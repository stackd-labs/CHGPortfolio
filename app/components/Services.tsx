"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const offers = [
  {
    tag: "01 / NEW BUILD",
    title: "Build your app",
    desc: "From idea to live product: data model, auth, payments, email, admin tools, and the AI features that actually earn their place. You get a system you own, documented, deployed, and handed off.",
    points: ["Next.js + Supabase + Stripe/PayPal", "Portals, dashboards, booking, billing", "AI features and agents where they fit"],
  },
  {
    tag: "02 / RESCUE",
    title: "Rescue your app",
    desc: "Stalled build, a contractor who disappeared, or an AI-generated codebase that works until it doesn't. I audit it, stabilize it, fix the security holes, and get it shipping again, without a from-scratch rewrite unless it truly needs one.",
    points: ["Codebase + security audit", "Auth, RLS, and payment fixes", "Deploy pipeline and handoff docs"],
  },
  {
    tag: "03 / HIRE ME",
    title: "AI Architect / Builder",
    desc: "Contract or fractional. I design and build agent harnesses, multi-agent orchestration, and AI workflows for teams that need them to run reliably in production, not just in a demo.",
    points: ["Agent harnesses + orchestration", "Claude Agent SDK, MCP, tool use", "Evals, guardrails, and team enablement"],
  },
];

const services = [
  {
    number: "01",
    title: "Systems Architecture",
    desc: "Workflows, data structures, and integrations that scale without adding headcount.",
  },
  {
    number: "02",
    title: "AI Engineering",
    desc: "Agents, tool use, retrieval, and AI features built into the product itself, with the guardrails that keep them honest.",
  },
  {
    number: "03",
    title: "Full-Stack Product Engineering",
    desc: "Web apps, portals, and internal tools that are technically solid, documented, and built to last.",
  },
  {
    number: "04",
    title: "Education & Enablement",
    desc: "Training and SOPs so your team can run what I build long after the engagement ends.",
  },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 px-8 md:px-12 bg-[var(--rose-light)]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p
            className="text-[var(--rose-text)] text-xs font-sans font-semibold mb-4 tracking-widest"
            style={{ letterSpacing: "0.2em" }}
          >
            EXPERTISE
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--charcoal)] max-w-md leading-tight">
              Build it, rescue it, or bring me in.
            </h2>
            <p className="text-[var(--taupe)] font-sans font-light text-base max-w-xs leading-relaxed">
              Three ways to work with me. Every one ends with a system that runs in production and a team that knows how to run it.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <FadeIn key={offer.tag} delay={i * 0.08} className="h-full">
              <div
                id={offer.tag.includes("HIRE") ? "hire" : undefined}
                className={`group h-full flex flex-col border rounded-sm p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 ${
                  offer.tag.includes("HIRE")
                    ? "bg-[var(--charcoal)] border-[var(--charcoal)] text-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                    : "bg-white border-[var(--border)] hover:border-[var(--gold)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                }`}
              >
                <p className="text-[10px] font-sans font-semibold text-[var(--gold)] mb-5" style={{ letterSpacing: "0.2em" }}>
                  {offer.tag}
                </p>
                <h3 className={`font-serif text-2xl font-medium mb-4 ${offer.tag.includes("HIRE") ? "text-white" : "text-[var(--charcoal)]"}`}>
                  {offer.title}
                </h3>
                <p className={`font-sans font-light text-sm leading-relaxed mb-6 flex-grow ${offer.tag.includes("HIRE") ? "text-white/70" : "text-[var(--taupe)]"}`}>
                  {offer.desc}
                </p>
                <ul className="space-y-2">
                  {offer.points.map((pt) => (
                    <li key={pt} className={`flex items-start gap-2 text-xs font-sans ${offer.tag.includes("HIRE") ? "text-white/80" : "text-[var(--charcoal)]"}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--rose)] shrink-0 mt-1.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-[var(--border)] grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.number} delay={i * 0.06}>
              <div>
                <span className="font-serif text-[var(--gold)] text-sm font-medium">{service.number}</span>
                <h4 className="font-serif text-lg font-medium text-[var(--charcoal)] mt-2 mb-2">{service.title}</h4>
                <p className="text-[var(--taupe)] font-sans font-light text-sm leading-relaxed">{service.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-12 pt-10 border-t border-[var(--border)]">
            <p className="text-[var(--taupe)] font-sans font-light text-sm mb-4">
              Not sure which one fits? Tell me where it&apos;s stuck.
            </p>
            <a
              href="#contact"
              className="inline-block text-sm font-sans font-medium text-[var(--charcoal)] border border-[var(--gold)] px-7 py-3.5 rounded-sm hover:bg-[var(--gold)] transition-all duration-300"
              style={{ letterSpacing: "0.05em" }}
            >
              Start a conversation
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
