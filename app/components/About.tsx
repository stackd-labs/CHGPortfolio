"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Chanel replaced three separate tools with one platform that actually fits how we work. Placements, billing, and inventory finally live in one place, and her training meant our team was running it confidently from day one.",
    name: "Villa Concierge Co",
    title: "Insurance Operations Platform",
    initial: "V",
  },
  {
    quote: "She understood our studio before she touched the code. The site she built is fast, beautiful, and made for enrollment, and inquiries climbed within the first month of launch.",
    name: "Capital Core Dance Studio",
    title: "Midlothian, VA",
    initial: "C",
  },
  {
    quote: "Full brand site shipped in two weeks with zero revision rounds. Chanel just got it, the work carried the weight a performance brand needs without us having to spell it out.",
    name: "Evolution Production Co",
    title: "Touring Ice & Dance, DMV",
    initial: "E",
  },
];

const strengths = [
  {
    title: "Systems Thinking",
    desc: "I map complexity into clarity, whether that's an operations workflow, a business model, or an AI architecture.",
  },
  {
    title: "End-to-End Delivery",
    desc: "From first conversation to live system: strategy, design, build, and handoff. I own the whole arc, not just the part that's easy to code.",
  },
  {
    title: "AI When It Fits",
    desc: "I build with AI when it's genuinely the best tool (agents, automation, LLM features) and reach for plain, solid engineering when that wins instead.",
  },
  {
    title: "Strategy & Enablement",
    desc: "Advice on what to build first, then the training and documentation that lets your team run it confidently without me.",
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

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 px-8 md:px-12 bg-[var(--warm-gray)]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p
            className="text-[var(--rose-text)] text-xs font-sans font-semibold mb-4 tracking-widest"
            style={{ letterSpacing: "0.2em" }}
          >
            ABOUT
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--charcoal)] mb-14 max-w-xl leading-tight">
            The whole problem, end to end.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Bio */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <p className="text-[var(--charcoal)] font-sans font-light text-base leading-loose">
                I started in psychology, studying how people make decisions, what
                drives behavior, and why the most logical solution isn&apos;t
                always the one people choose. That foundation changed how I see
                everything I build. Every system I design is really a question:
                will a real person actually use this?
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[var(--charcoal)] font-sans font-light text-base leading-loose">
                Today I work as an AI architect and builder: part strategist,
                part engineer, part teacher. I take on the whole problem: figuring
                out what to build, building it (or rescuing the version that
                stalled), and making sure your team can run it. Sometimes the answer is AI. Sometimes it&apos;s a clean
                workflow and good engineering. The point is what actually works.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-[var(--charcoal)] font-sans font-light text-base leading-loose">
                I care as much about the team that inherits a system as the
                system itself. So a build doesn&apos;t end at launch, it ends
                when your people can run it without me, through training and
                documentation that demystifies the technology instead of hiding
                behind it.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="pt-4">
                <div className="w-10 h-px bg-[var(--gold)] mb-6" />
                <p className="text-[var(--taupe)] text-sm font-sans" style={{ letterSpacing: "0.05em" }}>
                  Founder, Hicks Virtual Solutions LLC
                  <br />
                  Founder, Stackd Studios AI
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Strengths */}
          <div className="space-y-5">
            {strengths.map((s, i) => (
              <FadeIn key={s.title} delay={0.1 + i * 0.08}>
                <div className="bg-white border border-[var(--border)] p-6 rounded-sm hover:border-[var(--rose)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(196,84,122,0.1)] transition-all duration-300 group">
                  <h3 className="font-serif text-lg font-medium text-[var(--charcoal)] mb-2 group-hover:text-[var(--rose)] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-[var(--taupe)] text-sm font-sans font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <FadeIn delay={0.3}>
          <div className="mt-20 pt-16 border-t border-[var(--border)]">
            <p className="text-[var(--rose-text)] text-xs font-sans font-semibold mb-10" style={{ letterSpacing: "0.2em" }}>
WHAT CLIENTS SAY
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <FadeIn key={t.name} delay={0.1 + i * 0.08}>
                  <div className="bg-white border border-[var(--border)] rounded-sm p-7 flex flex-col h-full hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300">
                    <div className="font-serif text-4xl leading-none text-[var(--rose)] mb-4 select-none" aria-hidden>&ldquo;</div>
                    <p className="font-sans font-light text-[var(--charcoal)] text-sm leading-loose flex-grow mb-6">
                      {t.quote}
                    </p>
                    <div className="flex items-center gap-3 pt-5 border-t border-[var(--border)]">
                      <div className="w-8 h-8 rounded-full bg-[var(--gold)] flex items-center justify-center shrink-0">
                        <span className="font-serif text-xs font-medium text-[var(--charcoal)]">{t.initial}</span>
                      </div>
                      <div>
                        <p className="font-sans text-sm font-medium text-[var(--charcoal)]">{t.name}</p>
                        <p className="font-sans text-xs text-[var(--taupe)]">{t.title}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
