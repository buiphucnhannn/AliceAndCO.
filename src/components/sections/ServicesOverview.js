import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/content";

export default function ServicesOverview() {
  return (
    <section id="services" className="relative pt-8 sm:pt-10 lg:pt-12 pb-14 sm:pb-16 lg:pb-20 text-slate-900">
      <div className="container-x">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#b8860b] block mb-2">
            {servicesData.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight text-[#0f172a]">
            {servicesData.heading}
          </h2>
        </div>

        {/* 5 Core Services Cards — the whole card links to its service page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 xl:gap-6">
          {servicesData.items.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              aria-label={`Explore ${service.title}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-amber-200/50 hover:border-[#d4af37] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2"
            >
              <div>
                {/* Top Half Image */}
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={service.bgImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5">
                  {/* Number Badge */}
                  <span className="font-serif text-lg font-bold text-[#b8860b] tracking-wider block mb-1">
                    {service.number}
                  </span>

                  {/* Title & Circular Arrow Button */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <h3 className="font-serif text-[17px] lg:text-lg font-semibold text-slate-900 leading-snug">
                      {service.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="w-7 h-7 rounded-full border border-amber-300 group-hover:border-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-white flex items-center justify-center text-amber-700 text-xs shrink-0 transition-colors"
                    >
                      →
                    </span>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {service.checklist.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="text-[#b8860b] text-[11px] shrink-0 mt-0.5">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
