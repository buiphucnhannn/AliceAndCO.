import Image from "next/image";
import { whyAliceData } from "@/data/content";
import { feather, frameFeather } from "@/components/ui/curves";

// Portrait fades in from the top (under the navy curve), from the left and out at the bottom
const featherLeft = frameFeather({ left: 50, top: 30, bottom: 32 }, { right: 28 });
const watermarkFeather = frameFeather({ left: 45, top: 30, bottom: 45 }, { right: 28 });

function PillarIcon({ name }) {
  const common = {
    className: "w-7 h-7",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "scale":
      return (
        <svg {...common}>
          <path d="M12 3v18M8 21h8M5 7h14M12 5l-1-1M12 5l1-1" />
          <path d="M5 7l-3 6a3 3 0 006 0L5 7zM19 7l-3 6a3 3 0 006 0l-3-6z" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M3 21h18M6 17v-4M10 17V9M14 17v-6M18 17V6" />
          <path d="M4 10l5-5 4 3 7-5M17 3h3v3" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
        </svg>
      );
    case "network":
      return (
        <svg {...common}>
          <circle cx="12" cy="7" r="2.5" />
          <circle cx="5.5" cy="10" r="2" />
          <circle cx="18.5" cy="10" r="2" />
          <path d="M8 18a4 4 0 018 0M2.5 18a3 3 0 015.5-1.5M21.5 18a3 3 0 00-5.5-1.5" />
        </svg>
      );
    case "chat":
    default:
      return (
        <svg {...common}>
          <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1.1-4.6A8 8 0 1121 12z" />
          <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth={2.2} />
        </svg>
      );
  }
}

export default function WhyAlice() {
  return (
    <section
      id="about"
      className="relative isolate pt-20 sm:pt-24 lg:pt-28 pb-6 lg:pb-8 text-slate-900 overflow-hidden"
    >
      {/* Faint Saigon skyline watermark behind the header */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 frame-right frame-mask w-full lg:w-[min(70%,1344px)] h-[420px] pointer-events-none opacity-[0.07] grayscale mix-blend-multiply"
        style={watermarkFeather}
      >
        <Image src={whyAliceData.watermarkImage} alt="" fill sizes="70vw" className="object-cover object-bottom" />
      </div>

      {/* Soft navy shade under the curved edge of the section above, for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-28 pointer-events-none bg-gradient-to-b from-[#0a1128]/[0.05] to-transparent"
      />

      {/* Portrait bleeding off the right edge, feathered into the background (desktop) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-0 right-0 frame-right frame-mask h-[440px] xl:h-[480px] w-[30%] xl:w-[min(28%,538px)] pointer-events-none"
        style={featherLeft}
      >
        <Image
          src={whyAliceData.portraitImage}
          alt=""
          fill
          sizes="60vw" /* wide source cropped to a tall frame needs ~2× the slot width */
          className="object-cover object-[8%_30%]"
        />
      </div>

      <div className="relative z-10 container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Heading */}
          <div className="lg:col-span-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b8860b] block mb-3">
              {whyAliceData.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[48px] font-normal tracking-tight text-[#0f172a] leading-[1.12]">
              Local Expertise.
              <br />
              International Standards.
            </h2>
          </div>

          {/* Handwritten signature line — sits in the open cream space between the heading and
              the portrait (never over the bright photo), aligned with the heading's last line */}
          <div className="lg:col-start-7 lg:col-span-4 xl:col-start-8 xl:col-span-3 lg:self-end flex lg:justify-center">
            <p className="font-script script-gold-on-light text-[40px] sm:text-5xl xl:text-[54px] leading-[1] -rotate-[4deg] text-left">
              Your Local Partner
              <span className="block pl-12">in Vietnam</span>
            </p>
          </div>
        </div>

        {/* Mobile / tablet portrait */}
        <div className="lg:hidden relative mt-8 h-64 sm:h-80 rounded-2xl overflow-hidden" style={feather({ bottom: 35 })}>
          <Image
            src={whyAliceData.portraitImage}
            alt="Alice Nguyen - Founder & Local Partner"
            fill
            sizes="(max-width: 1023px) 100vw, 1px"
            className="object-cover object-[20%_30%]"
          />
        </div>

        {/* 5 capability pillars — open row with hairline gold dividers */}
        {/* Mobile: compact rows (icon left, text right); desktop: open 5-column row */}
        <div className="mt-10 lg:mt-14 lg:w-[74%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-6 sm:gap-y-8 sm:gap-x-8 lg:gap-x-0">
          {whyAliceData.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className={`group flex items-start gap-4 lg:block lg:px-6 first:lg:pl-0 ${
                idx > 0 ? "lg:border-l lg:border-[#d4af37]/25" : ""
              }`}
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 shrink-0 rounded-full border border-[#d4af37]/70 bg-white/70 flex items-center justify-center text-[#b8860b] lg:mb-5 shadow-[0_6px_18px_rgba(212,175,55,0.12)] group-hover:bg-[#d4af37] group-hover:text-white transition-colors duration-300">
                <PillarIcon name={pillar.icon} />
              </div>
              <div className="pt-0.5 lg:pt-0">
                <h3 className="text-[15px] font-semibold text-[#0f172a] mb-1.5 lg:mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
