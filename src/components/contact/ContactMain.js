import { contactData } from "@/data/content";
import LineIcon from "@/components/ui/LineIcon";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactMain() {
  const { form, info } = contactData;

  return (
    <section id="consultation" className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 lg:pb-16 text-slate-900 scroll-mt-24">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 xl:gap-20 max-w-[1280px] mx-auto">
          {/* Consultation form */}
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b8860b] block mb-3">{form.eyebrow}</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.12] tracking-tight text-[#0f172a] mb-3">
              {form.heading}
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-8 max-w-lg">{form.description}</p>
            <ContactForm />
          </div>

          {/* Contact details */}
          <div className="lg:col-span-5 lg:border-l lg:border-[#d4af37]/20 lg:pl-12 xl:pl-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b8860b] block mb-3">{info.eyebrow}</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.12] tracking-tight text-[#0f172a] mb-3">
              {info.heading}
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-8">{info.description}</p>

            <ul className="space-y-6">
              {info.items.map((item) => {
                const body = (
                  <>
                    <span className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-[#f5d77f] to-[#c99516] text-white flex items-center justify-center shadow-[0_8px_20px_-6px_rgba(184,134,11,0.55)] group-hover:scale-105 transition-transform">
                      <LineIcon name={item.icon} className="w-5 h-5" strokeWidth={1.7} />
                    </span>
                    <span className="pt-0.5">
                      <span className="block text-[15px] font-semibold text-[#0f172a]">{item.title}</span>
                      {item.lines.map((line, i) => (
                        <span
                          key={line}
                          className={`block leading-relaxed ${
                            i === 0 ? "text-sm text-slate-700" : "text-[13px] text-slate-500"
                          } ${item.href && i === 0 ? "group-hover:text-[#b8860b] transition-colors" : ""}`}
                        >
                          {line}
                        </span>
                      ))}
                    </span>
                  </>
                );
                return (
                  <li key={item.title}>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group flex items-start gap-4"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="group flex items-start gap-4">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
