import Image from "next/image";
import GoldButton from "@/components/ui/GoldButton";
import LineIcon from "@/components/ui/LineIcon";

export default function ServiceIntro({ intro }) {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 lg:pb-16 text-slate-900">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center max-w-[1280px] mx-auto">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b8860b] block mb-3">{intro.eyebrow}</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.12] tracking-tight text-[#0f172a] mb-5">
              {intro.headingTop}
              <br />
              {intro.headingBottom}
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-8">{intro.description}</p>
            <GoldButton href="/contact#consultation">{intro.cta}</GoldButton>
          </div>

          {/* Photo with an overlapping highlights card */}
          <div className="lg:col-span-7">
            <div className="relative sm:pr-[30%] lg:pr-[28%]">
              <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden shadow-[0_30px_60px_-25px_rgba(15,23,42,0.45)]">
                <Image
                  src={intro.image}
                  alt={intro.imageAlt}
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/25 via-transparent to-transparent" />
              </div>

              <ul className="relative sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 mt-6 sm:mt-0 sm:w-[46%] lg:w-[42%] rounded-3xl bg-[#fffdf8]/95 backdrop-blur-sm border border-[#d4af37]/25 shadow-[0_24px_50px_-20px_rgba(120,95,40,0.35)] p-6 lg:p-7 space-y-5">
                {intro.highlights.map((h) => (
                  <li key={h.text} className="flex items-center gap-3.5">
                    <span className="w-10 h-10 shrink-0 rounded-xl bg-amber-50 border border-[#d4af37]/40 text-[#b8860b] flex items-center justify-center">
                      <LineIcon name={h.icon} className="w-5 h-5" strokeWidth={1.6} />
                    </span>
                    <span className="text-sm text-slate-700 leading-snug">{h.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
