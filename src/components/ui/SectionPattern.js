import Image from "next/image";

// Shared gold line-art motif for the light (#faf8f5) areas.
// The artwork isn't seamless, so tiles are mirrored: every other row flips vertically and
// the side tiles flip horizontally, so each seam meets its own mirror image. Tiles never
// grow beyond the 1920px design frame — on wider screens / zoomed out the motif repeats
// sideways at its 100% scale instead of stretching. The parent must create a stacking
// context (e.g. `isolate`) so the pattern sits behind every child via -z-10.
const ROWS = 6;
const TILE = "relative shrink-0 w-[min(100vw,1920px)] aspect-[1376/768]";

export default function SectionPattern({ flip = false, opacity = 0.35 }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 pointer-events-none overflow-hidden mix-blend-multiply"
      style={{ opacity }}
    >
      {Array.from({ length: ROWS }, (_, row) => (
        <div key={row} className={`flex justify-center ${row % 2 ? "-scale-y-100" : ""}`}>
          {[-1, 0, 1].map((col) => (
            <div key={col} className={`${TILE} ${(col !== 0) !== flip ? "-scale-x-100" : ""}`}>
              <Image src="/images/luxury_minimalist_pattern.jpg" alt="" fill loading={row === 0 && col === 0 ? "eager" : "lazy"} sizes="(max-width: 1920px) 100vw, 1920px" className="object-cover" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
