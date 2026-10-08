import { aboutData } from "@/data/content";
import LineIcon from "@/components/ui/LineIcon";

export default function AboutValues() {
  const values = aboutData.values;

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-10 lg:pb-14 text-slate-900">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start max-w-[1280px] mx-auto">
          <div className="lg:col-span-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b8860b] block mb-3">
              {values.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.12] tracking-tight text-[#0f172a]">
              {values.headingTop}
              <br />
              {values.headingBottom}
            </h2>
          </div>

          {/* Mobile: compact rows (icon left, text right); desktop: open 4-column row */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-8 sm:gap-x-8 lg:gap-x-0">
            {values.items.map((item, idx) => (
              <div
                key={item.title}
                className={`group flex items-start gap-4 lg:block lg:px-6 ${idx > 0 ? "lg:border-l lg:border-[#d4af37]/25" : ""}`}
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 shrink-0 rounded-full border border-[#d4af37]/70 bg-white/70 flex items-center justify-center text-[#b8860b] lg:mb-5 shadow-[0_6px_18px_rgba(212,175,55,0.12)] group-hover:bg-[#d4af37] group-hover:text-white transition-colors duration-300">
                  <LineIcon name={item.icon} className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <div className="pt-0.5 lg:pt-0">
                  <h3 className="text-[15px] font-semibold text-[#0f172a] mb-1.5 lg:mb-2">{item.title}</h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
