"use client";

import { useEffect, useRef, useState } from "react";

const CARDS = [
  {
    title: "Kuliner",
    body: "Rasa rumah yang ikut merantau bersamamu.",
  },
  {
    title: "Cerita",
    body: "Setiap suapan punya alamat dan kenangan.",
  },
  {
    title: "Komunitas",
    body: "Berbagi meja, resep, dan jalan pulang.",
  },
] as const;

/** Vertical scroll span while sticky (100vh stage). Taller = slower horizontal drift. */
const SCROLL_TRACK_VH = CARDS.length * 100;

/**
 * Share of vertical scroll used to move from first → last card centered.
 * The rest keeps the last card centered so green does not appear immediately.
 */
const HORIZONTAL_SCROLL_FRACTION = 0.45;

export default function Cards() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [maxShiftPx, setMaxShiftPx] = useState(0);

  useEffect(() => {
    const measure = () => {
      const row = rowRef.current;
      if (!row || row.children.length < 2) return;
      const first = row.children[0] as HTMLElement;
      const last = row.children[row.children.length - 1] as HTMLElement;
      const firstCx = first.offsetLeft + first.offsetWidth / 2;
      const lastCx = last.offsetLeft + last.offsetWidth / 2;
      setMaxShiftPx(Math.max(0, lastCx - firstCx));
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (rowRef.current) ro.observe(rowRef.current);
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const el = trackRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const trackHeight = el.offsetHeight;
      const vh = window.innerHeight;
      const scrollable = Math.max(1, trackHeight - vh);
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);

      setProgress(scrolled / scrollable);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const horizontalProgress = Math.min(
    1,
    progress / Math.max(Number.EPSILON, HORIZONTAL_SCROLL_FRACTION),
  );
  const translateX = -horizontalProgress * maxShiftPx;

  return (
    <div
      ref={trackRef}
      className="relative w-full"
      style={{ height: `${SCROLL_TRACK_VH}vh` }}
    >
      <div className="sticky top-0 flex h-svh w-full flex-col items-center justify-center overflow-hidden px-4 py-8">
        <div
          className="w-full max-w-none will-change-transform"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          <div
            ref={rowRef}
            className="flex w-max flex-row items-stretch gap-6"
            style={{
              paddingLeft: "max(1rem, calc(50vw - min(85vw, 22rem) / 2))",
              paddingRight: "max(1rem, calc(50vw - min(85vw, 22rem) / 2))",
            }}
          >
            {CARDS.map((card, i) => (
              <article
                key={card.title}
                className="w-[min(85vw,22rem)] shrink-0 rounded-2xl border border-white/25 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-md"
              >
                <p className="font-discordia text-xs uppercase tracking-[0.2em] text-white/70">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="font-polymath mt-2 text-2xl text-white">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <p
          className="hidden pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-xs text-white/60"
          aria-hidden
        >
          Scroll sideways through the cards
        </p>
      </div>
    </div>
  );
}
