"use client";

export default function Footer() {
  return (
    <footer className="py-10 px-8 md:px-12 bg-[var(--rose)] border-t border-[var(--rose)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-sans text-xs text-white/70" style={{ letterSpacing: "0.05em" }}>
          © {new Date().getFullYear()} Chanel Hicks-Gray. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="mailto:chanel@stackdstudiosai.com"
            className="font-sans text-xs text-white/70 hover:text-white transition-colors duration-300"
          >
            Email
          </a>
          <a
            href="https://github.com/stackd-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-white/70 hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/chanel-hicks-gray-ms-lpc-r-b673a720"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-white/70 hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://www.threads.net/@chanelhicksgray"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-white/70 hover:text-white transition-colors duration-300"
          >
            Threads
          </a>
          <a
            href="https://www.instagram.com/chanelhicksgray"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-white/70 hover:text-white transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@chanelhicksgray"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-white/70 hover:text-white transition-colors duration-300"
          >
            TikTok
          </a>
          <span className="font-serif text-xs text-white/40">✦</span>
        </div>
      </div>
    </footer>
  );
}
