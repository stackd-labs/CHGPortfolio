"use client";

import { useEffect, useRef } from "react";

// Wraps a floating scene. Every child with `data-depth` drifts against the cursor
// by that many pixels, with a slight 3D tilt. Desktop pointer only.
export function ParallaxScene({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const layers = Array.from(el.querySelectorAll<HTMLElement>("[data-depth]"));

    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || window.innerWidth < 900) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      for (const l of layers) {
        const d = Number(l.dataset.depth) || 10;
        l.style.transform = `translate3d(${-x * d}px, ${-y * d}px, 0) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
      }
    };
    const reset = () => layers.forEach((l) => (l.style.transform = ""));

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ perspective: 1400 }}>
      {children}
    </div>
  );
}
