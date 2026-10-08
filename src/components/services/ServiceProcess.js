import Image from "next/image";
import LineIcon from "@/components/ui/LineIcon";
import { curveMask, curvePullUp, curveVars } from "@/components/ui/curves";

const colsFor = { 5: "lg:grid-cols-5", 6: "lg:grid-cols-6" };

export default function ServiceProcess({ process }) {
  const n = process.steps.length;

  return (
    <section
      className={`relative z-30 isolate overflow-hidden bg-[#080e22] text-white ${curvePullUp} pt-24 sm:pt-28 lg:pt-32 pb-24 sm:pb-28 lg:pb-32 ${curveVars}`}
      style={curveMask({ top: true, bottom: true })}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image src="/images/differentiator_bg.jpg" alt="" fill sizes="100vw" className="object-cover opacity-30 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080e22]/90 via-[#080e22]/70 to-[#080e22]/90" />
      </div>

      <div className="container-x">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-14 lg:mb-16">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#fae49d] block mb-3">{process.eyebrow}</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.15] tracking-tight">{process.heading}</h2>
            </div>
            <p className="lg:col-span-5 text-sm sm:text-base text-slate-300 font-light leading-relaxed lg:pb-1.5">{process.description}</p>
          </div>

          <ol className={`relative flex flex-wrap justify-center gap-y-10 lg:grid ${colsFor[n] ?? "lg:grid-cols-5"} lg:gap-x-4`}>
            {/* Gold timeline connecting the step icons (desktop) */}
            <span
              aria-hidden="true"
              className="hidden lg:block absolute top-8 h-px bg-gradient-to-r from-[#d4af37]/10 via-[#d4af37]/60 to-[#d4af37]/10"
              style={{ left: `${50 / n}%`, right: `${50 / n}%` }}
            />
            {process.steps.map((step, idx) => (
              <li key={step.title} className="group relative text-center px-2 w-1/2 sm:w-1/3 lg:w-auto">
                <span className="relative mx-auto w-16 h-16 rounded-full border border-[#d4af37]/70 bg-[#0a1128] text-[#d4af37] flex items-center justify-center shadow-[0_0_0_6px_#080e22,0_0_24px_rgba(212,175,55,0.18)] group-hover:bg-[#d4af37] group-hover:text-[#0a1128] transition-colors duration-300">
                  <LineIcon name={step.icon} className="w-7 h-7" strokeWidth={1.4} />
                </span>
                <span className="block mt-4 font-serif text-sm text-[#d4af37]/80 tracking-widest">{String(idx + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 text-[15px] font-semibold text-[#fae49d]">{step.title}</h3>
                <p className="mt-1.5 text-[13px] text-slate-400 leading-relaxed max-w-[190px] mx-auto">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
