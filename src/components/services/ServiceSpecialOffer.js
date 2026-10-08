import GoldButton from "@/components/ui/GoldButton";
import LineIcon from "@/components/ui/LineIcon";

export default function ServiceSpecialOffer({ offer }) {
  return (
    <section className="relative -mt-12 lg:-mt-16 pb-24 sm:pb-28 lg:pb-32">
      <div className="container-x">
        <div className="relative max-w-[1080px] mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f1a3a] via-[#0a1128] to-[#070d1e] border border-[#d4af37]/40 shadow-[0_30px_70px_-30px_rgba(10,17,40,0.7)] px-7 py-9 sm:px-12 sm:py-12">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#d4af37]/15 blur-3xl pointer-events-none" />
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#fae49d] mb-4">
                <LineIcon name="key" className="w-4 h-4" strokeWidth={1.8} />
                {offer.eyebrow}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] font-normal leading-[1.2] text-white mb-3">{offer.heading}</h2>
              <p className="font-serif italic text-lg text-[#f5d77f] mb-3">{offer.lead}</p>
              <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed max-w-xl">{offer.description}</p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <GoldButton href="/contact#consultation">{offer.cta}</GoldButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
