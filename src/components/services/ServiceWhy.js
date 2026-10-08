import LineIcon from "@/components/ui/LineIcon";

export default function ServiceWhy({ why }) {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-24 sm:pb-28 lg:pb-32 text-slate-900">
      <div className="container-x">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b8860b] block mb-3">{why.eyebrow}</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.12] tracking-tight text-[#0f172a]">
                {why.headingTop}
                <br />
                {why.headingBottom}
              </h2>
            </div>
            <p className="lg:col-span-5 text-sm sm:text-[15px] text-slate-600 leading-relaxed lg:pb-1.5">{why.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-x-8 lg:gap-x-0">
            {why.pillars.map((p, idx) => (
              <div
                key={p.title}
                className={`group flex items-start gap-4 lg:px-6 first:lg:pl-0 ${idx > 0 ? "lg:border-l lg:border-[#d4af37]/25" : ""}`}
              >
                <span className="w-12 h-12 shrink-0 rounded-full border border-[#d4af37]/70 bg-white/70 text-[#b8860b] flex items-center justify-center shadow-[0_6px_18px_rgba(212,175,55,0.12)] group-hover:bg-[#d4af37] group-hover:text-white transition-colors duration-300">
                  <LineIcon name={p.icon} className="w-6 h-6" strokeWidth={1.5} />
                </span>
                <div className="pt-0.5">
                  <h3 className="text-[15px] font-semibold text-[#0f172a] mb-1.5">{p.title}</h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
