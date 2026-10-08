import Image from "next/image";
import { targetAudienceData } from "@/data/content";
import { feather, frameFeather } from "@/components/ui/curves";

// Landmark fades in from the left (into the copy) and softly at the top & bottom
const landmarkFeather = frameFeather({ left: 55, top: 20, bottom: 20 }, { right: 28 });

function SegmentIcon({ name }) {
  const common = {
    className: "w-6 h-6",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "business":
      return (
        <svg {...common}>
          <path d="M3 21h18M5 21V8l7-4 7 4v13" />
          <path d="M9 21v-4h6v4M9 10h.01M12 10h.01M15 10h.01M9 13h.01M12 13h.01M15 13h.01" strokeWidth={2} />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s-7-6.1-7-11.5a7 7 0 0114 0C19 14.9 12 21 12 21z" />
          <path d="M9.5 10.5L12 8l2.5 2.5V13h-5v-2.5z" />
        </svg>
      );
    case "plane":
      return (
        <svg {...common}>
          <path d="M21 15.5v-1.8l-8-5V4a1.5 1.5 0 00-3 0v4.7l-8 5v1.8l8-2.5V18l-2 1.5V21l3.5-1 3.5 1v-1.5L13 18v-5z" />
        </svg>
      );
    case "support":
    default:
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
  }
}

export default function WhoIsThisFor() {
  return (
    <section className="relative isolate pt-10 lg:pt-12 pb-14 sm:pb-16 lg:pb-20 text-slate-900 overflow-hidden">

      {/* Saigon landmark on the right, feathered into the background (desktop) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-y-0 right-0 frame-right frame-mask w-[36%] xl:w-[min(34%,653px)] pointer-events-none"
        style={landmarkFeather}
      >
        <Image
          src={targetAudienceData.landmarkImage}
          alt=""
          fill
          sizes="36vw"
          className="object-cover object-[60%_center]"
        />
      </div>

      <div className="relative z-10 container-x">
        <div className="lg:w-[72%] xl:w-[70%]">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b8860b] block mb-3">
            {targetAudienceData.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-[#0f172a] leading-[1.15] max-w-xl">
            {targetAudienceData.heading}
          </h2>

          {/* 4 audience columns with hairline gold dividers */}
          <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-x-8 lg:gap-x-0">
            {targetAudienceData.segments.map((segment, idx) => (
              <div
                key={segment.title}
                className={`group flex items-start gap-3.5 lg:px-5 first:lg:pl-0 ${
                  idx > 0 ? "lg:border-l lg:border-[#d4af37]/25" : ""
                }`}
              >
                <div className="w-12 h-12 shrink-0 rounded-full border border-[#d4af37]/70 bg-white/70 flex items-center justify-center text-[#b8860b] shadow-[0_6px_18px_rgba(212,175,55,0.12)] group-hover:bg-[#d4af37] group-hover:text-white transition-colors duration-300">
                  <SegmentIcon name={segment.icon} />
                </div>
                <div className="pt-1">
                  <h3 className="text-[15px] font-semibold text-[#0f172a] mb-1.5 leading-snug">
                    {segment.title}
                  </h3>
                  <ul className="space-y-0.5">
                    {segment.items.map((item) => (
                      <li key={item} className="text-[13px] text-slate-600 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet landmark */}
        <div
          className="lg:hidden relative mt-10 h-56 sm:h-72 -mx-4 sm:-mx-8 md:-mx-10"
          style={feather({ top: 22, bottom: 28 })}
        >
          <Image
            src={targetAudienceData.landmarkImage}
            alt="Ho Chi Minh City landmark"
            fill
            sizes="(max-width: 1023px) 100vw, 1px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
