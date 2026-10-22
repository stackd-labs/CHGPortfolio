"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Hire Me", href: "#hire" },
  { label: "Stack", href: "#stack" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const menuScope = useRef<HTMLElement>(null)
  useEffect(() => {
    const resize = () => { if (window.innerWidth >= 1200) setMenuOpen(false) }
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const opener = document.activeElement as HTMLElement | null
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); setMenuOpen(false); opener?.focus() }
      if (e.key !== 'Tab') return
      const items = Array.from(menuScope.current?.querySelectorAll<HTMLElement>('a[href],button') || []).filter(el => el.getClientRects().length)
      const first = items[0], last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus() }
      if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus() }
    }
    document.addEventListener('keydown', key)
    return () => document.removeEventListener('keydown', key)
  }, [menuOpen])

  return (
    <header ref={menuScope}>
      <motion.nav data-motion-reveal
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 md:px-12 py-5 flex items-center justify-between">
          <a
            href="#"
            className="font-serif text-xl font-bold tracking-tight text-[#1a1a1a] hover:text-[#8a2549] transition-colors duration-300"
          >
            CHG
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-sans font-semibold tracking-wide text-[#1a1a1a] hover:text-[#8a2549] transition-colors duration-300 uppercase"
                  style={{ letterSpacing: "0.12em" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="text-sm font-sans font-medium text-white bg-[var(--rose)] px-5 py-2.5 rounded-sm hover:bg-[var(--charcoal)] transition-colors duration-300"
                style={{ letterSpacing: "0.05em" }}
              >
                Book a Call
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="portfolio-mobile-nav"
          >
            <span className={`block w-6 h-px bg-[var(--charcoal)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block w-6 h-px bg-[var(--charcoal)] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-[var(--charcoal)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div data-motion-reveal
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            id="portfolio-mobile-nav" role="navigation" aria-label="Mobile"
            className="fixed inset-0 z-40 overflow-y-auto pt-24 pb-12 bg-[var(--background)] flex flex-col items-center justify-start"
          >
            <ul className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      const target = document.querySelector<HTMLElement>(event.currentTarget.hash);
                      setMenuOpen(false);
                      requestAnimationFrame(() => { target?.setAttribute("tabindex", "-1"); target?.focus(); });
                    }}
                    className="font-serif text-3xl text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={(event) => {
                      const target = document.querySelector<HTMLElement>(event.currentTarget.hash);
                      setMenuOpen(false);
                      requestAnimationFrame(() => { target?.setAttribute("tabindex", "-1"); target?.focus(); });
                    }}
                  className="text-sm font-sans font-medium text-white bg-[var(--rose)] px-7 py-3.5 rounded-sm hover:bg-[var(--charcoal)] transition-colors duration-300"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
