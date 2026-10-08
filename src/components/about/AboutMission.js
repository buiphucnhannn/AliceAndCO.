import Image from "next/image";
import { aboutData } from "@/data/content";
import LineIcon from "@/components/ui/LineIcon";
import { curveMask, curvePullUp, curveVars } from "@/components/ui/curves";

export default function AboutMission() {
  const mission = aboutData.mission;

  return (
    <section
      className={`relative z-30 isolate overflow-hidden bg-[#080e22] text-white ${curvePullUp} pt-24 sm:pt-28 lg:pt-32 pb-24 sm:pb-28 lg:pb-32 ${curveVars}`}
      style={curveMask({ top: true, bottom: true })}
    >
      {/* Same connectivity texture as the home page's navy section */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src="/images/differentiator_bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080e22]/90 via-[#080e22]/70 to-[#080e22]/90" />
      </div>

      <div className="container-x">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#fae49d] block mb-3">
                {mission.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.15] tracking-tight max-w-2xl">
                {mission.heading}
              </h2>
            </div>
            <p className="lg:col-span-5 text-sm sm:text-base text-slate-300 font-light leading-relaxed lg:pb-2">
              {mission.description}
            </p>
          </div>

          <div className="mt-14 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-y-10">
            {mission.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className={`group text-center px-4 lg:px-6 ${idx > 0 ? "lg:border-l lg:border-[#d4af37]/20" : ""} ${
                  idx % 2 ? "border-l border-[#d4af37]/20 lg:border-l" : ""
                }`}
              >
                <div className="mx-auto w-14 h-14 flex items-center justify-center text-[#d4af37] group-hover:-translate-y-1 transition-transform duration-300">
                  <LineIcon name={pillar.icon} className="w-10 h-10" strokeWidth={1.2} />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-[#fae49d]">{pillar.title}</h3>
                <p className="mt-1.5 text-[13px] text-slate-400 leading-relaxed max-w-[200px] mx-auto">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
