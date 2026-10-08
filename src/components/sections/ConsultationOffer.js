import Image from "next/image";
import Link from "next/link";
import { consultationCardData, riskReversalData } from "@/data/content";
import SectionPattern from "@/components/ui/SectionPattern";

export default function ConsultationOffer() {
  return (
    <section className="relative isolate py-16 lg:py-24 bg-[#faf8f5] text-slate-900 overflow-hidden">
      <SectionPattern position="center" flip />
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-stretch">
          {/* Left Card: FREE CONSULTATION (Dark Executive Card) */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-2xl border border-[#d4af37]/40 flex flex-col justify-between p-8 sm:p-12 text-white min-h-[400px]">
            {/* Background Image with Dark Vignette */}
            <div className="absolute inset-0 z-0">
              <Image
                src={consultationCardData.bgImage}
                alt="Free Consultation Background"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#060b19]/95 via-[#0a1128]/90 to-[#070e24]/80" />
            </div>

            {/* Content Top */}
            <div className="relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#fae49d] block mb-2.5">
                {consultationCardData.eyebrow}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-white tracking-wide mb-7">
                FREE CONSULTATION
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {consultationCardData.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#fae49d] text-xs shrink-0">
                      ✓
                    </span>
                    <span>{feat.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 pt-4">
              <Link
                href={consultationCardData.cta.href}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0a1128] bg-gradient-to-r from-[#fae49d] via-[#d4af37] to-[#ba9324] hover:from-[#fff0b8] hover:to-[#dfaf35] shadow-[0_6px_25px_rgba(212,175,55,0.45)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>{consultationCardData.cta.label}</span>
                <span className="w-6 h-6 rounded-full bg-[#0a1128] text-[#d4af37] flex items-center justify-center font-bold text-xs">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Card: Risk Reversal (Light Botanical Card) */}
          <div className="lg:col-span-5 relative rounded-2xl bg-white/95 border border-amber-200/60 shadow-xl p-8 sm:p-12 flex flex-col justify-between overflow-hidden">
            {/* Subtle decorative botanical watermark */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 text-amber-500/10 pointer-events-none">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 0 C60 30 70 40 100 50 C70 60 60 70 50 100 C40 70 30 60 0 50 C30 40 40 30 50 0 Z" opacity="0.4" />
                <path d="M10 80 Q 50 20 90 90 Q 50 60 10 80 Z" opacity="0.3" />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0f172a] leading-snug mb-5">
                {riskReversalData.heading}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                {riskReversalData.description}
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <Link
                href={riskReversalData.cta.href}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0a1128] bg-gradient-to-r from-[#fae49d] via-[#d4af37] to-[#ba9324] hover:from-[#fff0b8] hover:to-[#dfaf35] shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-all duration-300"
              >
                <span>{riskReversalData.cta.label}</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
