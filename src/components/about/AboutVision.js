import Image from "next/image";
import { aboutData } from "@/data/content";
import { feather, frameFeather } from "@/components/ui/curves";

export default function AboutVision() {
  const vision = aboutData.vision;

  return (
    <section className="relative pt-2 lg:pt-4 pb-24 sm:pb-28 lg:pb-32 text-slate-900">
      {/* Panorama on the right, dissolving into the cream background */}
      <div
        className="hidden lg:block absolute right-0 frame-right frame-mask top-0 bottom-16 lg:bottom-20 w-[min(60%,1152px)]"
        style={frameFeather({ left: 55, top: 16, bottom: 18 }, { right: 28 })}
      >
        <Image src={vision.image} alt="Vietnam landscape at golden hour" fill sizes="60vw" className="object-cover object-center" />
      </div>

      <div className="relative container-x">
        <div className="max-w-[1280px] mx-auto lg:min-h-[360px] flex flex-col justify-center">
          <div className="max-w-md">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b8860b] block mb-3">
              {vision.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.12] tracking-tight text-[#0f172a] mb-5">
              {vision.headingTop}
              <br />
              {vision.headingBottom}
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">{vision.description}</p>
          </div>

          <div className="lg:hidden relative aspect-[16/9] mt-10 -mx-4 sm:-mx-8 md:-mx-10" style={feather({ top: 15, bottom: 15 })}>
            <Image src={vision.image} alt="Vietnam landscape at golden hour" fill sizes="(max-width: 1023px) 100vw, 1px" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
