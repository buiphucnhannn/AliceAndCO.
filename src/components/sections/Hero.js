import Link from "next/link";
import Image from "next/image";
import { heroData } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative h-[min(100svh,1000px)] min-h-[620px] flex flex-col justify-center pt-24 lg:pt-28 pb-20 lg:pb-24 overflow-hidden bg-[#070d1e]">
      {/* Background Image with Cinematic Twilight Grade */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/AnhSanPham.png"
          alt="Ho Chi Minh City Sunset Skyline"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[center_35%] scale-105 transform"
        />
        {/* Deep Executive Blue Vignette & Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060b19]/95 via-[#081026]/75 to-[#060b19]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b19] via-transparent to-[#060b19]/70" />
        {/* Subtle Warm Golden Ambient Glow from bottom */}
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Content (Full Viewport Scale) */}
      <div className="relative z-10 container-x w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center w-full max-w-[1280px] mx-auto">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-left">
            {/* Brand eyebrow — plain text, no badge */}
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#d4af37] mb-4">
              Alice &amp; Co. | Your Local Partner in Vietnam
            </p>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] leading-[1.12] text-white font-normal tracking-tight mb-5">
              Need Something <br />
              Done in Vietnam? <br />
              <span className="font-serif italic font-medium bg-gradient-to-r from-[#fef0c7] via-[#d4af37] to-[#e6b83b] bg-clip-text text-transparent">
                I&apos;ll Handle It Locally.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed mb-6">
              {heroData.subtitle}
            </p>

            {/* CTA Button */}
            <div className="flex items-center gap-5">
              <Link
                href={heroData.primaryCta.href}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#0a1128] bg-gradient-to-r from-[#fae49d] via-[#d4af37] to-[#ba9324] hover:from-[#fff0b8] hover:to-[#dfaf35] shadow-[0_10px_35px_rgba(212,175,55,0.45)] hover:shadow-[0_15px_45px_rgba(212,175,55,0.65)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>{heroData.primaryCta.label}</span>
                <span className="w-6 h-6 rounded-full bg-[#0a1128] text-[#d4af37] flex items-center justify-center font-bold text-xs group-hover:scale-105 group-hover:bg-black transition-all">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Executive Desk — open editorial, no enclosing card */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative pl-7">
              {/* Soft local glow to lift text off the skyline */}
              <div className="absolute -inset-10 bg-[radial-gradient(closest-side,rgba(6,11,25,0.55),transparent)] pointer-events-none" />
              {/* Slim vertical gold accent */}
              <div className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-[#d4af37]/80 via-[#d4af37]/30 to-transparent" />
              <div className="relative flex items-center gap-4 mb-5">
                <div className="relative w-12 h-12 shrink-0">
                  <Image
                    src="/images/logo_crest_transparent.png"
                    alt="Alice & Co. Official Crest"
                    fill
                    sizes="48px"
                    className="object-contain drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]"
                  />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-white uppercase tracking-wider [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
                    Alice &amp; Co. Desk
                  </span>
                  <span className="block text-[10px] tracking-wide text-slate-300/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
                    On-the-ground in Ho Chi Minh City
                  </span>
                </div>
              </div>
              <div className="relative h-px w-24 bg-gradient-to-r from-[#d4af37]/70 to-transparent mb-5" />
              <p className="relative font-serif italic font-light text-lg xl:text-xl leading-relaxed text-[#f5f0e6] [text-shadow:0_2px_24px_rgba(0,0,0,0.9)]">
                &ldquo;Direct, dedicated coordination with landlords, factories, authorities and local partners — so your operations in Vietnam move forward seamlessly.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
