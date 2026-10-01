// Draft answers, written from what the rest of the site already says. No pricing.
const faqs = [
  {
    q: "Will you take over an app someone else built, or one made with AI?",
    a: "Yes. That's the rescue work. I audit it, fix the security and payment problems, and get it shipping again without a rewrite unless it truly needs one.",
  },
  {
    q: "How fast does a new build go?",
    a: "It depends on scope. We set milestones in discovery so you see working pieces early instead of waiting on one big reveal.",
  },
  {
    q: "Can I hire you for my team instead of a project?",
    a: "Yes, on a contract or fractional basis, as an AI architect and builder: agent harnesses, orchestration, and AI workflows that hold up in production.",
  },
  {
    q: "What do I get at the end?",
    a: "A system you own, deployed and documented, plus training so your team can run it without me.",
  },
  {
    q: "What do you build with?",
    a: "Mostly Next.js, Supabase, and Stripe or PayPal, with Claude and agent tooling where AI earns its place. The full list is in the stack section above.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
        <div>
          <p className="code-label font-mono text-[var(--rose-text)] text-xs mb-4" style={{ letterSpacing: "0.12em" }}>
            FAQ
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--charcoal)] leading-tight">
            Questions, answered.
          </h2>
        </div>
        <div>
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group border-b border-[var(--border)] py-5">
              <summary className="flex justify-between gap-6 cursor-pointer list-none font-sans text-base font-medium text-[var(--charcoal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--rose)] [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="font-mono text-lg text-[var(--rose)] transition-transform duration-300 group-open:rotate-45 leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm font-sans font-light text-[var(--taupe)] leading-relaxed max-w-[60ch]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
