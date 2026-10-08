import Image from "next/image";
import Link from "next/link";
import { executionData } from "@/data/content";
import { feather, frameFeather } from "@/components/ui/curves";

// Fades the photo out on the right (into the copy) and softly on the top/bottom edges
const featherRight = frameFeather({ right: 45, top: 12, bottom: 14 }, { left: 28 });

// Thumbnails dissolve into the background on every edge — no frame
const thumbFeather = feather({ left: 10, right: 10, top: 10, bottom: 10 });

export default function Execution() {
  return (
    <section className="relative isolate pt-4 lg:pt-6 pb-6 lg:pb-8 text-slate-900 overflow-hidden">
      {/* Large on-site photo bleeding off the left edge (desktop) */}
      <div
        className="hidden lg:block absolute left-0 frame-left frame-mask top-4 lg:top-6 bottom-6 lg:bottom-8 w-[min(54%,1037px)]"
        style={featherRight}
      >
        <Image
          src={executionData.mainImage}
          alt="On the ground verification and inspection in Vietnam"
          fill
          sizes="54vw"
          className="object-cover object-[center_40%]"
        />
      </div>

      <div className="relative z-10 container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-center lg:min-h-[480px]">
          {/* Mobile / tablet photo */}
          <div
            className="lg:hidden relative aspect-[4/3] -mx-4 sm:-mx-8 md:-mx-10"
            style={feather({ bottom: 30 })}
          >
            <Image
              src={executionData.mainImage}
              alt="On the ground verification and inspection in Vietnam"
              fill
              sizes="(max-width: 1023px) 100vw, 1px"
              className="object-cover object-[center_40%]"
            />
          </div>

          {/* Spacer for the bleeding photo */}
          <div className="hidden lg:block lg:col-span-6" />

          {/* Copy & CTA */}
          <div className="lg:col-span-4 text-left">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b8860b] block mb-3">
              {executionData.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.12] text-[#0f172a] mb-5">
              Real People.
              <br />
              Real Execution.
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-8 max-w-md">
              {executionData.description}
            </p>
            <Link
              href={executionData.cta.href}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0a1128] bg-gradient-to-r from-[#fae49d] via-[#d4af37] to-[#ba9324] hover:from-[#fff0b8] hover:to-[#dfaf35] shadow-[0_6px_20px_rgba(212,175,55,0.35)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>{executionData.cta.label}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Stack of 3 thumbnails */}
          <div className="lg:col-span-2 grid grid-cols-3 lg:grid-cols-1 gap-1 lg:gap-1.5">
            {executionData.thumbnails.map((item) => (
              <div
                key={item.title}
                className="relative aspect-[4/3] overflow-hidden group"
                style={thumbFeather}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 33vw, 16vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: item.position || "center" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
