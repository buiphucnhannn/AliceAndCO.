import { contactData } from "@/data/content";

export default function ContactFaq() {
  const faq = contactData.faq;

  return (
    <section className="relative pt-6 lg:pt-8 pb-24 sm:pb-28 lg:pb-32 text-slate-900">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-[1280px] mx-auto">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b8860b] block mb-3">{faq.eyebrow}</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.12] tracking-tight text-[#0f172a] mb-3">
              {faq.heading}
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">{faq.description}</p>
          </div>

          {/* Native disclosure widgets: accessible and no client JS */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {faq.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl bg-white/80 border border-[#d4af37]/25 shadow-[0_6px_20px_-12px_rgba(120,95,40,0.3)] open:bg-white open:border-[#d4af37]/50 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 text-sm font-semibold text-[#0f172a] [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="relative w-6 h-6 shrink-0 rounded-full border border-[#d4af37]/50 text-[#b8860b] flex items-center justify-center group-open:bg-[#d4af37] group-open:text-white transition-colors">
                    <span className="absolute w-2.5 h-px bg-current" />
                    <span className="absolute w-px h-2.5 bg-current group-open:scale-y-0 transition-transform" />
                  </span>
                </summary>
                <p className="px-5 pb-5 -mt-1 text-[13px] text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
