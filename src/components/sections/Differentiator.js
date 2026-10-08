import Image from "next/image";
import { differentiatorData } from "@/data/content";

// Cuts a smooth convex curve out of the section's bottom edge so the next section
// (pulled up underneath with a negative margin) shows through instead of a flat fill.
const curveSvg =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 60' preserveAspectRatio='none'%3E%3Cpath d='M0,0 H1440 V8 Q720,56 0,8 Z'/%3E%3C/svg%3E\")";
const bottomCurveMask = {
  WebkitMaskImage: `linear-gradient(#000, #000), ${curveSvg}`,
  maskImage: `linear-gradient(#000, #000), ${curveSvg}`,
  WebkitMaskSize: "100% calc(100% - var(--curve-h) + 1px), 100% var(--curve-h)",
  maskSize: "100% calc(100% - var(--curve-h) + 1px), 100% var(--curve-h)",
  WebkitMaskPosition: "top, bottom",
  maskPosition: "top, bottom",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
};

function RoleIcon({ idx }) {
  switch (idx) {
    case 0:
      // A lawyer: Scales of Justice
      return (
        <svg className="w-3.5 h-3.5 text-[#fae49d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v17M5 7l7-3 7 3M3 13l4-6 4 6a4 4 0 0 1-8 0zM13 13l4-6 4 6a4 4 0 0 1-8 0zM8 21h8" />
        </svg>
      );
    case 1:
      // A business consultant: Executive briefcase / Strategy
      return (
        <svg className="w-3.5 h-3.5 text-[#fae49d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="7" width="18" height="14" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M12 11v2M8 12h8" />
        </svg>
      );
    case 2:
      // A sourcing agent: Sourcing & procurement inspection
      return (
        <svg className="w-3.5 h-3.5 text-[#fae49d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M21 21l-4.35-4.35M10.5 7.5v6M7.5 10.5h6" />
        </svg>
      );
    case 3:
      // An interpreter: Cross-language dialogue
      return (
        <svg className="w-3.5 h-3.5 text-[#fae49d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 9h8M8 13h5" />
        </svg>
      );
    case 4:
      // A project coordinator: Milestone checklist
      return (
        <svg className="w-3.5 h-3.5 text-[#fae49d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" />
          <path d="M9 13l2 2 4-4" />
        </svg>
      );
    case 5:
      // A real estate agent: Executive property / Residence
      return (
        <svg className="w-3.5 h-3.5 text-[#fae49d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10.5L12 3l9 7.5V20a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20v-9.5z" />
          <path d="M9 21v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6" />
        </svg>
      );
    case 6:
    default:
      // A personal assistant: Executive Concierge / Personal Assistant
      return (
        <svg className="w-3.5 h-3.5 text-[#fae49d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M19 8v6M22 11h-6" />
        </svg>
      );
  }
}

export default function Differentiator() {
  return (
    <section
      className="relative z-20 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 bg-[#080e22] text-white overflow-hidden [--curve-h:28px] sm:[--curve-h:44px] lg:[--curve-h:56px]"
      style={bottomCurveMask}
    >
      {/* Generated Executive Luxury Background (Global Connectivity & Saigon Architecture) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/differentiator_bg.jpg"
          alt="Executive Global Connectivity & City Architecture"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40 mix-blend-screen scale-[1.02]"
        />
        {/* Deep luxury gradient vignette overlay for optimal contrast and text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080e22]/92 via-[#080e22]/70 to-[#080e22]/90" />
      </div>

      {/* Top Symmetrical Smooth Curved Transition (Matching Reference Model) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-7 sm:h-11 lg:h-14 text-[#faf8f5]"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,0 L 1440,0 L 1440,8 Q 720,56 0,8 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative z-10 container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center w-full">
          {/* Left Column: Heading & Context (Spans 4/12, aligns to left edge) */}
          <div className="lg:col-span-4 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#fae49d] block mb-3">
              {differentiatorData.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-normal leading-[1.16] text-white mb-4">
              Instead of hiring <br className="hidden sm:inline" />
              multiple people...
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-md">
              {differentiatorData.subtext}
            </p>
          </div>

          {/* Center Column: The 7 Fragmented Roles (Spans 4/12, centered in the section) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="w-full max-w-[280px] sm:max-w-[300px] flex flex-col space-y-2.5">
              {differentiatorData.roles.map((role, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#0d1633]/85 backdrop-blur-sm border border-slate-700/70 shadow-sm text-xs sm:text-[13px] text-slate-200 hover:border-[#d4af37]/70 hover:bg-[#121d3f] transition-all duration-200 group"
                >
                  <span className="w-6 h-6 rounded-full bg-slate-800/90 border border-amber-300/40 flex items-center justify-center shrink-0 group-hover:border-[#d4af37] group-hover:bg-[#d4af37]/20 transition-all">
                    <RoleIcon idx={idx} />
                  </span>
                  <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
                    {role.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Bracket & The Solution (Spans 4/12, aligns to right edge) */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end gap-5 xl:gap-7">
            {/* Elegant SVG Curly Bracket (Scales to embrace the 7 roles) */}
            <div className="hidden lg:block text-[#d4af37]/80 shrink-0">
              <svg width="34" height="280" viewBox="0 0 45 280" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M 5,10 Q 22,10 22,50 L 22,125 Q 22,140 38,140 Q 22,140 22,155 L 22,230 Q 22,270 5,270" />
              </svg>
            </div>

            {/* Solution Display Box */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Large Gold Crest */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-3 flex items-center justify-center drop-shadow-[0_0_35px_rgba(212,175,55,0.45)]">
                <Image
                  src="/images/logo_crest_transparent.png"
                  alt="Alice & Co. Crest"
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>

              {/* Solution Title */}
              <h3 className="font-serif text-2xl sm:text-[26px] lg:text-[28px] font-normal text-white leading-tight mb-2">
                You have <br />
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#fae49d] via-[#d4af37] to-[#e6b83b]">
                  one trusted
                </span>{" "}
                <br />
                local partner.
              </h3>

              {/* Luxury Signature Script Tagline (Alex Brush Font - Balanced Single Line) */}
              <p className="font-script script-gold text-xl sm:text-2xl lg:text-[25px] xl:text-[27px] font-normal tracking-wide mt-3 select-none leading-relaxed whitespace-nowrap">
                <span className="inline-block whitespace-nowrap">Less hassle.</span>{" "}
                <span className="inline-block whitespace-nowrap">More peace of mind.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
