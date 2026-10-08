import Image from "next/image";
import Link from "next/link";
import { aboutData } from "@/data/content";
import { feather, frameFeather } from "@/components/ui/curves";

export default function AboutHowIWork() {
  const how = aboutData.howIWork;

  return (
    <section className="relative pt-10 lg:pt-14 pb-16 sm:pb-20 lg:pb-4 text-slate-900">
      {/* Photo bleeding off the left edge (desktop) */}
      <div className="hidden lg:block absolute left-0 frame-left frame-mask top-10 lg:top-14 bottom-2 lg:bottom-4 w-[min(52%,998px)]" style={frameFeather({ right: 40, top: 12, bottom: 14 }, { left: 28 })}>
        <Image
          src={how.image}
          alt="Alice in a consultation with an international client"
          fill
          sizes="52vw"
          className="object-cover object-[30%_center]"
        />
      </div>

      <div className="relative container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-[1280px] mx-auto lg:min-h-[480px]">
          {/* Mobile / tablet photo + desktop caption anchor */}
          <div className="lg:col-span-6 relative lg:self-stretch">
            <div className="lg:hidden relative aspect-[4/3] -mx-4 sm:-mx-8 md:-mx-10" style={feather({ top: 8, bottom: 20 })}>
              <Image
                src={how.image}
                alt="Alice in a consultation with an international client"
                fill
                sizes="(max-width: 1023px) 100vw, 1px"
                className="object-cover object-[30%_center]"
              />
            </div>
            <p className="relative lg:absolute lg:left-0 lg:bottom-10 mt-4 lg:mt-0 inline-block max-w-xs rounded-2xl bg-[#0a1128]/90 backdrop-blur-md border border-[#d4af37]/30 px-6 py-4 text-sm sm:text-[15px] text-white leading-snug shadow-[0_18px_40px_-15px_rgba(10,17,40,0.6)]">
              {how.caption}
            </p>
          </div>

          <div className="lg:col-span-6 lg:pl-10 xl:pl-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b8860b] block mb-3">
              {how.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.12] tracking-tight text-[#0f172a] mb-5">
              {how.headingTop}
              <br />
              {how.headingBottom}
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-8 max-w-lg">{how.description}</p>
            <Link
              href={how.cta.href}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0a1128] bg-gradient-to-r from-[#fae49d] via-[#d4af37] to-[#ba9324] hover:from-[#fff0b8] hover:to-[#dfaf35] shadow-[0_6px_20px_rgba(212,175,55,0.35)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>{how.cta.label}</span>
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
