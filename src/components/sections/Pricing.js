import SectionHeading from "@/components/ui/SectionHeading";
import { pricing } from "@/data/content";

export default function Pricing() {
  return (
    <section id="bang-gia" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Bảng giá"
          title="Giá rõ ràng, không phát sinh"
          description="Chỉ cần sửa file data/content.js là đổi được giá và quyền lợi."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                p.highlighted
                  ? "border-black bg-black text-white shadow-2xl dark:border-white dark:bg-white dark:text-black"
                  : "border-black/10 bg-white dark:border-white/10 dark:bg-black"
              }`}
            >
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.highlighted ? "opacity-70" : "text-zinc-500"}`}>
                {p.description}
              </p>
              <p className="mt-6">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-sm opacity-70"> {p.unit}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#faq"
                className={`mt-8 flex h-11 items-center justify-center rounded-full text-sm font-semibold transition ${
                  p.highlighted
                    ? "bg-white text-black hover:bg-zinc-200 dark:bg-black dark:text-white dark:hover:bg-zinc-800"
                    : "bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
