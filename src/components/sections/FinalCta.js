import Image from "next/image";
import Link from "next/link";
import { finalCtaData } from "@/data/content";

// Cuts an even, symmetric curve out of the top edge (mirrors the Differentiator's curves).
// The section is pulled up with a negative margin so the light section above shows through.
const curveSvg =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 60' preserveAspectRatio='none'%3E%3Cpath d='M0,8 Q720,56 1440,8 V60 H0 Z'/%3E%3C/svg%3E\")";
const topCurveMask = {
  WebkitMaskImage: `${curveSvg}, linear-gradient(#000, #000)`,
  maskImage: `${curveSvg}, linear-gradient(#000, #000)`,
  WebkitMaskSize: "100% var(--curve-h), 100% calc(100% - var(--curve-h) + 1px)",
  maskSize: "100% var(--curve-h), 100% calc(100% - var(--curve-h) + 1px)",
  WebkitMaskPosition: "top, bottom",
  maskPosition: "top, bottom",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
};

// Shared closing banner; pages may override eyebrow / heading / subtext / cta via props
export default function FinalCta(props) {
  const data = { ...finalCtaData, ...props };

  return (
    <section
      className="relative isolate -mt-7 sm:-mt-11 lg:-mt-14 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-14 lg:pb-16 bg-[#060b19] text-white overflow-hidden [--curve-h:28px] sm:[--curve-h:44px] lg:[--curve-h:56px]"
      style={topCurveMask}
    >
      {/* Twilight Saigon skyline: anchored to the top so the Landmark 81 spire stays in frame */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0">
          <Image
            src={data.bgImage}
            alt="Ho Chi Minh City skyline at twilight"
            fill
            sizes="100vw"
            className="object-cover object-[69%_0%]"
          />
        </div>
        {/* Navy wash behind the centered copy, skyline stays vivid at the sides */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_75%_at_50%_55%,rgba(6,11,25,0.82)_0%,rgba(6,11,25,0.55)_55%,rgba(6,11,25,0.15)_100%)]" />
        {/* Grounding into the footer */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#060b19]/85 to-transparent" />
      </div>

      <div className="relative container-x">
        <div className="max-w-xl lg:max-w-3xl mx-auto text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#fae49d] mb-3">
            {data.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[48px] font-normal leading-[1.12] tracking-tight text-white mb-3">
            {data.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-200/90 mb-7 lg:mb-8">
            {data.subtext}
          </p>
          <Link
            href={data.cta.href}
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0a1128] bg-gradient-to-r from-[#fae49d] via-[#d4af37] to-[#ba9324] hover:from-[#fff0b8] hover:to-[#dfaf35] shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_14px_40px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>{data.cta.label}</span>
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
