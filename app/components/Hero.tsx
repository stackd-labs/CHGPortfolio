"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxScene } from "./Parallax";
import { BrowserWindow, Terminal, StatusPill } from "./BrowserWindow";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-x-clip">
      {/* Desk photo backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: "#d9c3a5",
          backgroundImage: "url(/desk.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* light pink veil: photo is only a hint behind it */}
        <div className="absolute inset-0 bg-[rgba(251,238,243,0.86)]" />
        {/* extra pink hue */}
        <div className="absolute inset-0 bg-[#ff666b]/20" />
        {/* fade into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--rose)]" />
      </div>
      <div className="grid-bg" />
      <div className="min-h-screen flex items-center px-6 md:px-12 pt-28 pb-20 max-w-6xl mx-auto relative">
        <div className="w-full grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-10 items-center">
          {/* LEFT */}
          <div>
            <motion.div data-motion-reveal
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 bg-white border border-[var(--border)] rounded-full px-3.5 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] text-[var(--taupe)]">
                Taking builds, rescues, and AI architect roles
              </span>
            </motion.div>

            <motion.p data-motion-reveal
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="code-label font-mono font-semibold text-[#8a2549] text-xs md:text-sm mt-8 mb-5"
              style={{ letterSpacing: "0.12em" }}
            >
              CHANEL HICKS-GRAY
            </motion.p>

            <motion.h1 data-motion-reveal
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease }}
              className="font-serif text-[2.7rem] md:text-6xl lg:text-[3.8rem] xl:text-[4rem] font-bold tracking-tight text-[#1a1a1a] leading-[0.98] mb-7 [text-shadow:0_2px_18px_rgba(255,255,255,0.75)]"
            >
              I build your app.
              <br />
              Or I{"’"}ll <em className="text-[#8a2549] not-italic">rescue it.</em>
            </motion.h1>

            <motion.p data-motion-reveal
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-[var(--charcoal)] text-base md:text-lg font-sans font-normal max-w-[44ch] leading-relaxed mb-9"
            >
              AI architect and builder. I ship production systems with real auth,
              real payments, and real users, and I take over the ones that stalled,
              broke, or got vibe-coded into a corner.
            </motion.p>

            <motion.div data-motion-reveal
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="inline-block text-sm font-sans font-medium text-[var(--charcoal)] bg-[var(--gold)] px-6 py-3.5 rounded-lg hover:bg-[var(--rose)] hover:text-white transition-colors duration-300"
              >
                Build or rescue my app
              </a>
              <a
                href="#hire"
                className="inline-block text-sm font-sans font-medium text-[var(--charcoal)] border border-[var(--charcoal)]/30 px-6 py-3.5 rounded-lg hover:border-[var(--rose)] hover:text-[var(--rose)] transition-colors duration-300"
              >
                Hire me
              </a>
              <a
                href="https://github.com/stackd-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-xs text-[var(--taupe)] hover:text-[var(--rose)] transition-colors duration-300 px-2"
              >
                github/stackd-labs ↗
              </a>
            </motion.div>

            <motion.div data-motion-reveal
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap items-center gap-8 mt-10 pt-7 border-t border-[var(--border)]"
            >
              {[
                { value: "6", label: "BUILDS SHOWN BELOW" },
                { value: "6+", label: "INDUSTRIES" },
                { value: "Web · AI · Games", label: "WHAT I SHIP" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl font-semibold text-[var(--charcoal)]">{stat.value}</p>
                  <p className="font-mono text-[10px] text-[var(--taupe)] mt-1" style={{ letterSpacing: "0.08em" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: floating scene */}
          <motion.div data-motion-reveal
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease }}
          >
            <ParallaxScene className="relative h-[440px] sm:h-[520px] lg:h-[560px]">
              <div data-depth="10" className="p-layer absolute top-6 left-0 sm:left-8 w-[88%] sm:w-[440px] z-[2]">
                <div className="float-y">
                  <BrowserWindow
                    src="/work/pathbuilders.png"
                    alt="PathBuilders admin dashboard"
                    url="pathbuilders.vercel.app"
                    priority
                  />
                </div>
              </div>

              <div data-depth="22" className="p-layer absolute top-[250px] sm:top-[290px] -left-2 w-[62%] sm:w-[300px] z-[3]">
                <div className="float-y" style={{ animationDelay: "-3s" }}>
                  <BrowserWindow
                    src="/work/villa.png"
                    alt="Villa Management Group website"
                    url="villamanagegroup.com"
                    sizes="300px"
                  />
                </div>
              </div>

              <div data-depth="30" className="p-layer absolute top-[275px] sm:top-[310px] right-0 w-[58%] sm:w-[270px] z-[4]">
                <div className="float-y" style={{ animationDelay: "-5s" }}>
                  <Terminal
                    lines={[
                      { kind: "cmd", text: "audit ./inherited-app" },
                      { kind: "dim", text: "checking auth, RLS, payments…" },
                      { kind: "ok", text: "plan: stabilize, don't rewrite" },
                      { kind: "cmd", text: "deploy --prod" },
                      { kind: "ok", text: "live" },
                    ]}
                  />
                </div>
              </div>

              <div data-depth="40" className="p-layer absolute -top-2 right-0 z-[5] hidden sm:block">
                <div className="float-y" style={{ animationDelay: "-2s" }}>
                  <div className="bg-white border border-[var(--border)] rounded-2xl p-2 pr-4 flex items-center gap-3 shadow-[0_20px_40px_-18px_rgba(107,100,96,0.5)]">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                      <Image src="/chanel.jpeg" alt="Chanel Hicks-Gray" fill sizes="48px" className="object-cover object-top" />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-[var(--charcoal)] leading-tight">Chanel Hicks-Gray</p>
                      <p className="font-mono text-[10px] text-[var(--taupe)]">AI architect · builder</p>
                    </div>
                  </div>
                </div>
              </div>

              <div data-depth="34" className="p-layer absolute bottom-2 left-[38%] z-[5] hidden sm:block">
                <div className="float-y" style={{ animationDelay: "-6s" }}>
                  <StatusPill tone="rose">Supabase RLS · multi-role</StatusPill>
                </div>
              </div>

              <div data-depth="26" className="p-layer absolute top-[230px] right-2 z-[5] hidden lg:block">
                <div className="float-y" style={{ animationDelay: "-4s" }}>
                  <StatusPill tone="gold">Stripe + PayPal · live</StatusPill>
                </div>
              </div>
            </ParallaxScene>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
