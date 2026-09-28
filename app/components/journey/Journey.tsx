"use client";

import { useEffect, useRef } from "react";
import "./journey.css";
import { JOURNEY_MARKUP } from "./markup";
import { initJourney } from "./init";

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    // Fresh markup on every mount so a re-run (React strict mode, fast refresh)
    // never stacks a second copy of the scene.
    ref.current.innerHTML = JOURNEY_MARKUP;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const cleanup = initJourney(ref.current);
    return () => {
      cleanup();
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div
      ref={ref}
      className="jr-root"
      dangerouslySetInnerHTML={{ __html: JOURNEY_MARKUP }}
    />
  );
}
