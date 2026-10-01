"use client";

import { ParallaxScene } from "./Parallax";
import { StatusPill } from "./BrowserWindow";

// Real client quotes, styled as social posts. No handles, likes, or verified marks:
// these are reviews, not screenshots of real posts.
type Review = {
  name: string;
  meta: string;
  initial: string;
  color: string;
  quote: string;
  link?: { label: string; href: string };
  feature?: string;
};

const reviews: Review[] = [
  {
    name: "Villa Concierge Co",
    meta: "Insurance operations",
    initial: "V",
    color: "#2f4b5c",
    quote:
      "Chanel replaced three separate tools with one platform that actually fits how we work. Placements, billing, and inventory finally live in one place, and her training meant our team was running it confidently from day one.",
    link: { label: "see the build", href: "#work" },
  },
  {
    name: "Capital Core Dance Studio",
    meta: "Midlothian, VA",
    initial: "C",
    color: "var(--rose)",
    feature: "She understood our studio before she touched the code.",
    quote: "The site she built is fast, beautiful, and made for enrollment, and inquiries climbed within the first month of launch.",
  },
  {
    name: "Evolution Production Co",
    meta: "Touring ice & dance, DMV",
    initial: "E",
    color: "#a07a1c",
    quote:
      "Full brand site shipped in two weeks with zero revision rounds. Chanel just got it, the work carried the weight a performance brand needs without us having to spell it out.",
    link: { label: "epcperform.com", href: "https://www.epcperform.com/" },
  },
];

// Desktop placement on the wall: position, depth, tilt, float offset.
const spots = [
  { pos: "xl:top-0 xl:left-[6%]", depth: 16, rot: "xl:-rotate-3", delay: "0s" },
  { pos: "xl:top-8 xl:right-0", depth: 28, rot: "xl:rotate-3", delay: "-4s" },
  { pos: "xl:bottom-0 xl:left-[3%]", depth: 12, rot: "xl:rotate-2", delay: "-2s" },
];

function Head({ r }: { r: Review }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="w-9 h-9 rounded-full grid place-items-center font-serif text-sm font-semibold text-white shrink-0"
        style={{ background: r.color }}
      >
        {r.initial}
      </span>
      <div className="min-w-0">
        <p className="font-sans text-sm font-semibold text-[var(--charcoal)] leading-tight">{r.name}</p>
        <p className="font-mono text-[10.5px] text-[var(--taupe)]">{r.meta}</p>
      </div>
      <span className="ml-auto font-mono text-[9px] uppercase tracking-wider text-[var(--taupe)] border border-[var(--border)] rounded px-1.5 py-0.5 shrink-0">
        Client review
      </span>
    </div>
  );
}

function Post({ r }: { r: Review }) {
  if (r.feature) {
    return (
      <article className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden shadow-[0_30px_60px_-30px_rgba(107,100,96,0.5)]">
        <div className="p-4">
          <Head r={r} />
        </div>
        <div className="aspect-[1.45] bg-gradient-to-br from-[var(--rose-light)] via-[#f7e3d3] to-[var(--gold-light)] grid place-items-center px-7 text-center">
          <p className="font-serif italic text-xl leading-snug text-[var(--charcoal)]">
            &ldquo;{r.feature}&rdquo;
          </p>
        </div>
        <p className="px-4 pt-3 pb-4 text-[13px] font-sans text-[var(--taupe)] leading-relaxed">{r.quote}</p>
      </article>
    );
  }
  return (
    <article className="bg-white border border-[var(--border)] rounded-2xl p-4 shadow-[0_30px_60px_-30px_rgba(107,100,96,0.5)]">
      <Head r={r} />
      <p className="mt-3 text-[14px] font-sans font-normal leading-relaxed text-[var(--charcoal)]">{r.quote}</p>
      {r.link && (
        <div className="flex justify-between mt-4 pt-3 border-t border-[var(--border)] font-mono text-[10.5px] text-[var(--taupe)]">
          <span>{r.meta}</span>
          <a href={r.link.href} className="text-[var(--rose)] hover:text-[var(--charcoal)]" {...(r.link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
            {r.link.label} →
          </a>
        </div>
      )}
    </article>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24 md:py-32 px-6 md:px-12 overflow-x-clip">
      <div className="max-w-6xl mx-auto">
        <ParallaxScene className="relative xl:h-[640px]">
          <div className="xl:absolute xl:inset-0 xl:grid xl:place-items-center xl:text-center xl:pointer-events-none mb-10 xl:mb-0">
            <div className="max-w-md">
              <p className="code-label font-mono text-[var(--rose-text)] text-xs mb-4" style={{ letterSpacing: "0.12em" }}>
                WHAT CLIENTS SAY
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--charcoal)] leading-tight">
                The people running my systems, in their words.
              </h2>
            </div>
          </div>

          <div className="flex xl:block gap-4 overflow-x-auto xl:overflow-visible snap-x snap-mandatory pb-4 xl:pb-0 -mx-6 px-6 xl:mx-0 xl:px-0">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                data-depth={spots[i].depth}
                className={`p-layer shrink-0 w-[82%] sm:w-[320px] snap-center xl:absolute xl:w-[330px] ${spots[i].pos} hover:z-10`}
              >
                <div className={`transition-transform duration-300 ${spots[i].rot} xl:hover:rotate-0 xl:hover:scale-[1.03]`}>
                  <div className="float-y" style={{ animationDelay: spots[i].delay }}>
                    <Post r={r} />
                  </div>
                </div>
              </div>
            ))}
            <div data-depth="36" className="p-layer hidden xl:block absolute bottom-10 right-[8%]">
              <div className="float-y" style={{ animationDelay: "-6s" }}>
                <StatusPill>Inquiries up in month one</StatusPill>
              </div>
            </div>
          </div>
        </ParallaxScene>
      </div>
    </section>
  );
}
