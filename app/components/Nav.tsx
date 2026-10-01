"use client";

import { useState, useEffect } from "react";
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

  return (
    <>
      <motion.nav
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
            className="font-serif text-lg font-medium tracking-tight text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors duration-300"
          >
            CHG
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-sans font-medium tracking-wide text-[var(--taupe)] hover:text-[var(--gold)] transition-colors duration-300 uppercase"
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
            aria-label="Toggle menu"
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--background)] flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-3xl text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-sans font-medium text-white bg-[var(--rose)] px-7 py-3.5 rounded-sm hover:bg-[var(--charcoal)] transition-colors duration-300"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
