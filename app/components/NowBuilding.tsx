import Image from "next/image";
import { Terminal } from "./BrowserWindow";

const ROBLOX_URL = "https://www.roblox.com/share?code=ef61c59ec2d3624bb19e0909c28e1c33&type=ExperienceDetails";

export default function NowBuilding() {
  return (
    <section className="px-6 md:px-12 pb-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,1.1fr)_1fr] gap-6 md:gap-10 items-center bg-gradient-to-r from-[var(--gold-light)] to-[var(--rose-light)] border border-[var(--border)] rounded-2xl p-4 md:p-6">
        <a
          href={ROBLOX_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Play Train Run on Roblox"
          className="group relative block aspect-[718/454] rounded-xl overflow-hidden shadow-[0_30px_60px_-28px_rgba(107,100,96,0.55)] md:-rotate-1 hover:rotate-0 transition-transform duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--rose)]"
        >
          <Image
            src="/work/trainrun.jpg"
            alt="Train Run, a Roblox game: city and farm worlds with coins on the tracks"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
          <span className="absolute bottom-3 right-3 font-mono text-[11px] bg-white/90 text-[var(--charcoal)] rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">play ↗</span>
        </a>
        <div className="flex flex-col gap-4 md:pr-4">
          <div>
            <p className="code-label font-mono text-[var(--rose-text)] text-xs" style={{ letterSpacing: "0.12em" }}>
              CURRENTLY BUILDING
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-[var(--charcoal)] mt-2">Train Run, a Roblox game</h3>
            <p className="text-sm font-sans font-light text-[var(--taupe)] mt-2 max-w-[52ch]">
              Collect, grow, survive, explore across city and farm worlds, live on Roblox. Outside client work I build
              games: Roblox, Phaser sims, and a cruise ship management game in Unity.
            </p>
          </div>
          <Terminal
            lines={[
              { kind: "cmd", text: "git log --oneline -1" },
              { kind: "ok", text: "train-run v1.0: city + farm worlds, live" },
            ]}
          />
          <a
            href={ROBLOX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-flex items-center gap-2 text-sm font-sans font-medium text-[var(--charcoal)] bg-[var(--gold)] px-5 py-3 rounded-lg hover:bg-[var(--rose)] hover:text-white transition-colors duration-300"
          >
            Play on Roblox <span aria-hidden>↗</span>
          </a>
          <div className="flex flex-wrap gap-1.5">
            {["Roblox", "Luau", "Rojo", "Game design"].map((t) => (
              <span key={t} className="font-mono text-[10.5px] px-2 py-0.5 rounded border border-[var(--border)] text-[var(--taupe)] bg-white">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
