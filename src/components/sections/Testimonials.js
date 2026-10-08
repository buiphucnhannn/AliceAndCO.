import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section id="danh-gia" className="scroll-mt-20 bg-zinc-50 py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Đánh giá"
          title="Khách hàng nói gì?"
          description="Section testimonial giúp tăng niềm tin và tỉ lệ chuyển đổi."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
              <div className="flex gap-1 text-yellow-500">{"★★★★★"}</div>
              <blockquote className="mt-4 flex-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                “{t.content}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-black/10 pt-4 dark:border-white/10">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white dark:bg-white dark:text-black">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
