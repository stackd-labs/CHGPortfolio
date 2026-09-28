"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setLoading(false);
    if (res.ok) setSent(true);
  };

  return (
    <section id="contact" className="py-28 md:py-36 px-8 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* How I Work strip */}
        <FadeIn>
          <p className="text-[var(--rose-text)] text-xs font-sans font-semibold mb-10" style={{ letterSpacing: "0.2em" }}>
            THE PROCESS
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-20 pb-16 border-b border-[var(--border)]">
            {[
              { number: "01", title: "Discovery or Audit", desc: "New build: we map the business and goals first. Rescue: I audit the codebase and tell you plainly what it needs." },
              { number: "02", title: "Build", desc: "I design and develop the system, keeping you in the loop at every milestone." },
              { number: "03", title: "Launch & Iterate", desc: "We ship, measure, and refine until it works exactly as intended, and it keeps getting better." },
            ].map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="flex gap-5 items-start">
                  <span className="font-serif text-[var(--gold)] text-sm font-medium shrink-0 pt-1">{step.number}</span>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-[var(--charcoal)] mb-2">{step.title}</h4>
                    <p className="text-[var(--taupe)] text-sm font-sans font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left */}
          <div>
            <FadeIn>
              <p
                className="text-[var(--rose-text)] text-xs font-sans font-semibold mb-4 tracking-widest"
                style={{ letterSpacing: "0.2em" }}
              >
                CONTACT
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--charcoal)] mb-6 leading-tight">
                Building, stuck,
                <br />
                or hiring?
                <br />
                Let&apos;s talk.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-[var(--taupe)] font-sans font-light text-base leading-relaxed mb-10 max-w-sm">
                A new app, one that stalled, or a role on your team. Tell me what you have and where it hurts. I reply within 24 to 48 hours.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-4">
                <a
                  href="mailto:chanel@stackdstudiosai.com"
                  className="flex items-center gap-3 text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors duration-300 group"
                >
                  <span className="w-8 h-px bg-[var(--border)] group-hover:bg-[var(--gold)] transition-colors duration-300" />
                  <span className="font-sans text-sm">chanel@stackdstudiosai.com</span>
                </a>
                <a
                  href="https://github.com/stackd-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors duration-300 group"
                >
                  <span className="w-8 h-px bg-[var(--border)] group-hover:bg-[var(--gold)] transition-colors duration-300" />
                  <span className="font-sans text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/chanel-hicks-gray-ms-lpc-r-b673a720"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors duration-300 group"
                >
                  <span className="w-8 h-px bg-[var(--border)] group-hover:bg-[var(--gold)] transition-colors duration-300" />
                  <span className="font-sans text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://www.threads.net/@chanelhicksgray"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors duration-300 group"
                >
                  <span className="w-8 h-px bg-[var(--border)] group-hover:bg-[var(--gold)] transition-colors duration-300" />
                  <span className="font-sans text-sm">Threads</span>
                </a>
                <a
                  href="https://www.instagram.com/chanelhicksgray"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors duration-300 group"
                >
                  <span className="w-8 h-px bg-[var(--border)] group-hover:bg-[var(--gold)] transition-colors duration-300" />
                  <span className="font-sans text-sm">Instagram</span>
                </a>
                <a
                  href="https://www.tiktok.com/@chanelhicksgray"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors duration-300 group"
                >
                  <span className="w-8 h-px bg-[var(--border)] group-hover:bg-[var(--gold)] transition-colors duration-300" />
                  <span className="font-sans text-sm">TikTok</span>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right: Form */}
          <FadeIn delay={0.15}>
            {sent ? (
              <div className="flex flex-col justify-center h-full">
                <div className="w-10 h-px bg-[var(--gold)] mb-6" />
                <h3 className="font-serif text-2xl text-[var(--charcoal)] mb-3">
                  Message received.
                </h3>
                <p className="text-[var(--taupe)] font-sans font-light text-sm leading-relaxed">
                  Thank you for reaching out. I&apos;ll be in touch shortly, usually within 24 to 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-sans font-medium text-[var(--taupe)] mb-2"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    NAME
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-[var(--border)] rounded-sm px-4 py-3.5 text-sm font-sans text-[var(--charcoal)] placeholder:text-[var(--border)] focus:outline-none focus:border-[var(--gold)] transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-sans font-medium text-[var(--taupe)] mb-2"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    EMAIL
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-[var(--border)] rounded-sm px-4 py-3.5 text-sm font-sans text-[var(--charcoal)] placeholder:text-[var(--border)] focus:outline-none focus:border-[var(--gold)] transition-colors duration-300"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-sans font-medium text-[var(--taupe)] mb-2"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-[var(--border)] rounded-sm px-4 py-3.5 text-sm font-sans text-[var(--charcoal)] placeholder:text-[var(--border)] focus:outline-none focus:border-[var(--gold)] transition-colors duration-300 resize-none"
                    placeholder="What are you building, what's broken, or what's the role?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-sm font-sans font-medium text-white bg-[var(--rose)] px-7 py-4 rounded-sm hover:bg-[var(--charcoal)] transition-colors duration-300 disabled:opacity-50"
                  style={{ letterSpacing: "0.05em" }}
                >
                  {loading ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
