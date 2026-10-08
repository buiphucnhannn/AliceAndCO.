import SectionHeading from "@/components/ui/SectionHeading";
import { steps } from "@/data/content";

export default function HowItWorks() {
  return (
    <section id="cach-hoat-dong" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Cách hoạt động"
          title="3 bước để làm chủ project này"
          description="Hiểu luồng này là bạn hiểu tư duy chia component trong Next.js."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="relative rounded-2xl border border-black/10 p-6 dark:border-white/10">
              <span className="text-5xl font-black text-black/10 dark:text-white/10">{s.step}</span>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
