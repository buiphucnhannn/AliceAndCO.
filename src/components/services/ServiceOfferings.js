import Image from "next/image";
import LineIcon from "@/components/ui/LineIcon";

// 4 per row for 4/7/8 items (7 → 4 + 3 centred), otherwise 3 per row (5 → 3 + 2 centred)
const widthFor = (count) =>
  count % 4 === 0 || count === 7
    ? "lg:w-[calc((100%-4.5rem)/4)]"
    : "lg:w-[calc((100%-3rem)/3)]";

export default function ServiceOfferings({ offerings }) {
  const width = widthFor(offerings.items.length);

  return (
    <section className="relative pt-8 lg:pt-12 pb-24 sm:pb-28 lg:pb-32 text-slate-900">
      <div className="container-x">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 lg:mb-12">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b8860b] block mb-3">{offerings.eyebrow}</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.12] tracking-tight text-[#0f172a]">
                {offerings.headingTop}
                <br />
                {offerings.headingBottom}
              </h2>
            </div>
            <p className="lg:col-span-5 text-sm sm:text-[15px] text-slate-600 leading-relaxed lg:pb-1.5">{offerings.description}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {offerings.items.map((item, idx) => (
              <article
                key={item.title}
                className={`group relative w-full sm:w-[calc((100%-1.5rem)/2)] ${width} rounded-2xl bg-white/85 border border-[#d4af37]/20 shadow-[0_10px_30px_-18px_rgba(120,95,40,0.35)] hover:shadow-[0_22px_45px_-20px_rgba(120,95,40,0.45)] hover:-translate-y-1 hover:border-[#d4af37]/50 transition-all duration-300 overflow-hidden`}
              >
                {item.image && (
                  <div className="relative aspect-[16/9]">
                    <Image src={item.image} alt="" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                  </div>
                )}
                {/* Mobile: compact row (icon left, text right); sm+: stacked card */}
                <div className="relative p-5 sm:p-6 lg:p-7 flex items-start gap-4 sm:block">
                  <div className="flex items-start justify-between shrink-0 sm:mb-5">
                    <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#d4af37]/60 bg-amber-50/80 text-[#b8860b] flex items-center justify-center group-hover:bg-[#d4af37] group-hover:text-white transition-colors duration-300">
                      <LineIcon name={item.icon} className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                    </span>
                    <span className="hidden sm:block font-serif text-2xl text-[#d4af37]/40 leading-none">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0 pr-6 sm:pr-0">
                    <h3 className="text-[15px] sm:text-base font-semibold text-[#0f172a] mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-[13px] text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                  <span className="sm:hidden absolute top-4 right-5 font-serif text-lg text-[#d4af37]/45 leading-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* Gold underline that draws in on hover */}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-[#fae49d] to-[#d4af37] group-hover:w-full transition-all duration-500" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
