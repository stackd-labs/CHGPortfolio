"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 md:px-12 pt-24 pb-20 max-w-6xl mx-auto relative">
      <div className="w-full grid md:grid-cols-[70fr_30fr] gap-10 md:gap-16 items-center">

        {/* Photo — mobile only, shows above text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:hidden"
        >
          <div className="relative w-48 h-60">
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-sm border border-[var(--gold)] opacity-30" />
            <Image
              src="/chanel.jpeg"
              alt="Chanel Hicks-Gray"
              fill
              className="rounded-sm object-cover object-top"
              priority
            />
          </div>
        </motion.div>

        {/* LEFT */}
        <div>
          {/* Availability pulse */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-sans text-[var(--taupe)]" style={{ letterSpacing: "0.08em" }}>
              Taking builds, rescues, and AI architect roles
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--rose)] text-base md:text-xl font-serif font-medium mb-8"
            style={{ letterSpacing: "0.15em" }}
          >
            CHANEL HICKS-GRAY
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[2.6rem] md:text-6xl lg:text-[5.5rem] font-semibold text-[var(--charcoal)] leading-[0.97] mb-8"
          >
            I build your app.
            <br />
            Or I{"’"}ll
            <br />
            <em className="text-[var(--rose)] not-italic font-medium">rescue it.</em>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="w-16 h-px bg-[var(--gold)] mb-8 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="text-[var(--taupe)] text-base md:text-xl font-sans font-light max-w-lg leading-relaxed mb-12"
          >
            AI architect and builder. I ship production systems with real auth,
            real payments, and real users, and I take over the ones that stalled,
            broke, or got vibe-coded into a corner. Hire me for the build, or
            bring me onto your team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-wrap items-center gap-6 md:gap-8"
          >
            <a
              href="#contact"
              className="inline-block text-sm font-sans font-medium text-[var(--charcoal)] bg-[var(--gold)] px-7 py-3.5 rounded-sm hover:bg-[var(--charcoal)] hover:text-white transition-colors duration-300"
              style={{ letterSpacing: "0.05em" }}
            >
              Build or rescue my app
            </a>
            <a
              href="#hire"
              className="inline-block text-sm font-sans font-medium text-[var(--taupe)] hover:text-[var(--gold)] transition-colors duration-300 border-b border-[var(--border)] pb-0.5"
            >
              Hire me
            </a>
            <a
              href="https://github.com/stackd-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-sans font-medium text-[var(--taupe)] hover:text-[var(--gold)] transition-colors duration-300 border-b border-[var(--border)] pb-0.5"
            >
              GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.15 }}
            className="flex flex-wrap items-center gap-6 md:gap-8 pt-10 border-t border-[var(--border)]"
          >
            {[
              { value: "5", label: "Live Client Systems" },
              { value: "6+", label: "Industries Served" },
              { value: "Web · AI · Games", label: "What I Ship" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl font-semibold text-[var(--charcoal)]">{stat.value}</p>
                <p className="text-xs font-sans text-[var(--taupe)] mt-0.5" style={{ letterSpacing: "0.08em" }}>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — photo (desktop only) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex justify-end"
        >
          <div className="relative w-64 h-80 md:w-full md:h-[480px] lg:h-[540px] max-w-xs">
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-sm border border-[var(--gold)] opacity-30" />
            <Image
              src="/chanel.jpeg"
              alt="Chanel Hicks-Gray"
              fill
              className="rounded-sm object-cover object-top"
              priority
            />
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-transparent to-[var(--gold)]"
        />
      </motion.div>
    </section>
  );
}
