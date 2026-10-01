"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BrowserWindow } from "./BrowserWindow";

const projects = [
  {
    name: "Dance Studio Portal",
    shot: "/work/dsp.png",
    url: "studio.capitalcoredance.com",
    category: "Studio Operations Platform",
    description:
      "The live operating system for a dance studio: enrollment, trials, recurring tuition billing with PayPal, parent and instructor portals, website intake, and family email campaigns. Real auth, row-level security, real money.",
    outcome: "Runs the studio's day to day, in production.",
    href: "https://studio.capitalcoredance.com",
    tags: ["Next.js", "Supabase RLS", "PayPal", "Resend"],
    accent: true,
    comingSoon: false,
  },
  {
    name: "Bounce FX Party Rentals",
    shot: "/work/bouncefx.png",
    url: "bouncefxpartyrentals.com",
    category: "Rescue & Rebuild",
    description:
      "Moved a party rental business off Squarespace onto a custom booking site and admin portal: live inventory, bundle slots, Stripe checkout, and a CRM built from their old order history.",
    outcome: "Booking, payments, and admin in one system they own.",
    href: "https://www.bouncefxpartyrentals.com",
    tags: ["Next.js", "Stripe", "Admin Portal"],
    accent: false,
    comingSoon: false,
  },
  {
    name: "PathBuilders",
    shot: "/work/pathbuilders.png",
    url: "pathbuilders.vercel.app",
    category: "Apprenticeship Management",
    description:
      "Apprenticeship management platform for HVAC, electrical, and plumbing programs. Admin, instructor, employer, and apprentice portals with OJT timesheets, attendance, and hour ledgers. Public mock with fictional data, so click around.",
    outcome: "247 mock apprentices, 62 employers, one connected system.",
    href: "https://pathbuilders.vercel.app",
    tags: ["Next.js 16", "React 19", "Data Modeling"],
    accent: false,
    comingSoon: false,
  },
  {
    name: "Villa Concierge Co",
    shot: "/work/villa.png",
    url: "villa-group-conceirge2.vercel.app",
    category: "Insurance Operations Platform",
    description:
      "Operations system for an insurance relocation housing firm. Placements, housing inventory, carrier and adjuster contacts, and billing for ALE claims in one interface.",
    outcome: "Replaced 3 separate tools with one unified platform.",
    href: "https://villa-group-conceirge2.vercel.app/",
    tags: ["Operations", "React", "Supabase"],
    accent: false,
    comingSoon: false,
  },
  {
    name: "Seal the Leak",
    shot: "/work/sealtheleak.png",
    url: "nicolesprojectapp.vercel.app",
    category: "AI Personal Growth App",
    description:
      "A daily clarity app and step-by-step reset program personalized to your energy archetype, with AI-generated daily guidance.",
    outcome: "365 AI-personalized daily cards delivered on demand.",
    href: "https://nicolesprojectapp.vercel.app/",
    tags: ["AI", "Next.js", "Supabase"],
    accent: false,
    comingSoon: false,
  },
  {
    name: "Stackd Studios",
    shot: "/work/stackd.png",
    url: "stackdstudiosai.com",
    category: "AI Build Lab",
    description:
      "My build lab. Where I design and ship AI products, agent tooling, and client systems, from first idea to live product.",
    outcome: "Idea to live product in under 6 weeks.",
    href: "https://www.stackdstudiosai.com",
    tags: ["Strategy", "Product", "AI"],
    accent: false,
    comingSoon: false,
  },
];

const brandSites = [
  { name: "Capital Core Dance Studio", href: "https://www.capitalcoredance.com/" },
  { name: "Evolution Production Co", href: "https://www.epcperform.com/" },
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

export default function Work() {
  return (
    <section id="work" className="relative py-28 md:py-36 px-6 md:px-12 bg-gradient-to-b from-[var(--rose-light)] to-[var(--warm-gray)] overflow-hidden">
      <div className="grid-bg" />
      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <p className="code-label font-mono text-[var(--rose-text)] text-xs mb-4" style={{ letterSpacing: "0.12em" }}>
            SELECTED WORK
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--charcoal)] max-w-xl leading-tight">
              Systems running in the real world.
            </h2>
            <p className="text-[var(--taupe)] font-sans font-light text-base max-w-xs leading-relaxed">
              Every window is the live site. Click through to the real thing.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={(i % 2) * 0.08} className="h-full">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-5 h-full bg-white/70 backdrop-blur border border-[var(--border)] rounded-2xl p-4 md:p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--rose)] hover:shadow-[0_30px_60px_-30px_rgba(196,84,122,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--rose)]"
              >
                <div className="[transform:perspective(1000px)_rotateX(5deg)] origin-bottom transition-transform duration-500 group-hover:[transform:none]">
                  <BrowserWindow src={project.shot} alt={`${project.name} live site`} url={project.url} />
                </div>
                <div className="px-1 flex flex-col gap-3 flex-grow">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif text-xl md:text-2xl font-medium text-[var(--charcoal)] group-hover:text-[var(--rose)] transition-colors duration-300">
                      {project.name}
                    </h3>
                    <span className="font-mono text-[10px] text-[#a07a1c]" style={{ letterSpacing: "0.08em" }}>
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm font-sans font-light leading-relaxed text-[var(--taupe)] flex-grow">
                    {project.description}
                  </p>
                  <p className="text-xs font-sans font-medium text-[var(--rose)] flex items-center gap-1.5">
                    <span>↑</span> {project.outcome}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10.5px] px-2 py-0.5 rounded border border-[var(--border)] text-[var(--taupe)] bg-white">
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto font-mono text-[11px] text-[var(--charcoal)] group-hover:text-[var(--rose)] transition-colors">
                      open ↗
                    </span>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <p className="font-mono text-[11px] text-[var(--taupe)]" style={{ letterSpacing: "0.12em" }}>
              ALSO: BRAND SITES
            </p>
            <div className="flex flex-wrap gap-6">
              {brandSites.map((site) => (
                <a
                  key={site.name}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans text-[var(--charcoal)] hover:text-[var(--rose)] transition-colors duration-300 border-b border-[var(--border)] pb-0.5"
                >
                  {site.name} &rarr;
                </a>
              ))}
            </div>
            <a
              href="https://github.com/stackd-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="md:ml-auto font-mono text-xs text-[var(--rose)] hover:text-[var(--charcoal)] transition-colors duration-300"
            >
              more on github ↗
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
