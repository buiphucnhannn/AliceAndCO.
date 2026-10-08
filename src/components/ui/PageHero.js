import Image from "next/image";
import Link from "next/link";
import { curveMask, curveVars, frameFeather } from "@/components/ui/curves";

// Full-viewport navy hero for inner pages: copy on the left, photo dissolving in from the
// right, gilded handwritten line, and a curved bottom edge into the next (cream) band.
export default function PageHero({
  crumb,
  crumbs,
  eyebrow,
  headingTop,
  headingAccent,
  description,
  cta,
  image,
  imageAlt,
  imagePosition = "30% center",
  imagePositionMobile, // where the subject sits on narrow portrait screens
  scriptLine1,
  scriptLine2,
  signature = "Alice", // every inner-page hero signs off the same way
}) {
  return (
    <section
      className={`relative z-30 isolate overflow-hidden bg-[#070d1e] text-white pt-28 sm:pt-32 lg:pt-28 pb-20 sm:pb-24 lg:pb-28 min-h-[calc(min(100svh,1000px)+var(--curve-h))] flex items-center ${curveVars}`}
      style={curveMask({ bottom: true })}
    >
      {/* Photo on the right, dissolving into navy on the left */}
      <div className="absolute inset-y-0 right-0 frame-right frame-mask mask-off-mobile w-full lg:w-[min(72%,1382px)] -z-10" style={frameFeather({ left: 55 }, { right: 28 })}>
        {/* The frame is full-height, so the photo is scaled by height (wider than its slot):
            request a full-width, high-quality file to keep it sharp */}
        <Image
          src={image}
          alt={imageAlt}
          fill
          preload
          quality={90}
          sizes="100vw"
          className="object-cover object-[var(--pos-m)] lg:object-[var(--pos)]"
          style={{ "--pos": imagePosition, "--pos-m": imagePositionMobile ?? imagePosition }}
        />
      </div>
      {/* Mobile: the photo fills the screen (no side fade) under a top-to-bottom wash, so the
          subject stays visible above while the copy below stays legible */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#070d1e]/45 via-[#070d1e]/70 to-[#070d1e]/92 lg:hidden" />
      <div className="absolute -z-10 bottom-0 left-1/4 w-[480px] h-[480px] bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-x w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-[1280px] mx-auto">
          <div className="lg:col-span-6">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-6">
              <Link href="/" className="hover:text-[#fae49d] transition-colors">Home</Link>
              {(crumbs ?? [{ label: crumb }]).map((c) => (
                <span key={c.label} className="flex items-center gap-2">
                  <span className="text-[#d4af37]">›</span>
                  {c.href ? (
                    <Link href={c.href} className="hover:text-[#fae49d] transition-colors">{c.label}</Link>
                  ) : (
                    <span className="text-slate-200">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>

            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#d4af37] mb-4">
              {eyebrow}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] leading-[1.08] tracking-tight font-normal mb-6 max-w-xl text-balance">
              {headingTop}{" "}
              <span className="block italic bg-gradient-to-r from-[#fef0c7] via-[#d4af37] to-[#e6b83b] bg-clip-text text-transparent">
                {headingAccent}
              </span>
            </h1>
            <p className="max-w-lg text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed mb-8">
              {description}
            </p>
            {cta && (
              <Link
                href={cta.href}
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0a1128] bg-gradient-to-r from-[#fae49d] via-[#d4af37] to-[#ba9324] hover:from-[#fff0b8] hover:to-[#dfaf35] shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{cta.label}</span>
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            )}
          </div>

          {/* Gilded handwriting lifted off busy photography by soft, diffuse shadows
              (a tight contact shadow + a wide falloff) — reads as depth, not an outline or badge */}
          <div className="hidden lg:flex lg:col-span-6 justify-end self-end pb-4">
            <p className="font-script script-gold text-[60px] xl:text-[72px] leading-[1.02] text-right -rotate-6">
              {scriptLine1}
              <span className="block pr-10">{scriptLine2}</span>
              {signature && <span className="block text-[40px] xl:text-[48px] pr-2 mt-2">— {signature}</span>}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
