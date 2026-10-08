import Image from "next/image";
import { contactData, siteConfig } from "@/data/content";
import LineIcon from "@/components/ui/LineIcon";
import { mapsEmbedSrc } from "@/components/ui/maps";

export default function ContactLocation() {
  const loc = contactData.location;

  return (
    <section className="relative py-12 lg:py-16 text-slate-900">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 xl:gap-8 items-stretch max-w-[1280px] mx-auto">
          {/* Copy + support photo */}
          <div className="lg:col-span-4 flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b8860b] block mb-3">{loc.eyebrow}</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.12] tracking-tight text-[#0f172a] mb-4">
              {loc.headingTop}
              <br />
              {loc.headingBottom}
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-6">{loc.description}</p>

            <div className="relative mt-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_18px_40px_-20px_rgba(15,23,42,0.4)]">
              <Image src={loc.supportImage} alt="Modern office in Ho Chi Minh City" fill sizes="(max-width: 1024px) 50vw, 26vw" className="object-cover" />
              <div className="absolute right-3 bottom-3 rounded-xl bg-[#fffdf8]/95 backdrop-blur-sm px-4 py-2.5 shadow-lg">
                <span className="block text-sm font-semibold text-[#0f172a] leading-tight">{loc.supportCaptionTitle}</span>
                <span className="block text-xs text-slate-500">{loc.supportCaptionText}</span>
              </div>
            </div>
          </div>

          {/* Live Google map */}
          <div className="lg:col-span-4 relative min-h-[320px] rounded-2xl overflow-hidden border border-[#d4af37]/25 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.4)] bg-[#e8e6df]">
            <iframe
              title={`Map of ${loc.mapsQuery}`}
              src={mapsEmbedSrc(loc.mapsQuery, 13)}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-[#0a1128]/90 text-[#fae49d] text-[11px] font-semibold uppercase tracking-wider px-3.5 py-2 hover:bg-[#0a1128] transition-colors"
            >
              <LineIcon name="pin" className="w-3.5 h-3.5" strokeWidth={1.8} />
              Open in Google Maps
            </a>
          </div>

          {/* City photo with caption */}
          <div className="md:col-span-2 lg:col-span-4 relative min-h-[320px] rounded-2xl overflow-hidden shadow-[0_18px_40px_-20px_rgba(15,23,42,0.4)]">
            <Image src={loc.cityImage} alt="Ho Chi Minh City skyline at sunset" fill sizes="(max-width: 1024px) 100vw, 34vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/70 via-transparent to-transparent" />
            <div className="absolute left-4 right-4 bottom-4 flex items-start gap-3 rounded-2xl bg-[#0a1128]/85 backdrop-blur-md border border-[#d4af37]/25 px-5 py-4">
              <LineIcon name="pin" className="w-5 h-5 mt-0.5 shrink-0 text-[#d4af37]" strokeWidth={1.7} />
              <p className="text-sm text-slate-200 leading-relaxed">{loc.cityCaption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
