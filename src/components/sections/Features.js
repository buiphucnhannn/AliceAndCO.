import SectionHeading from "@/components/ui/SectionHeading";
import { features } from "@/data/content";

const icons = {
  bolt: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
  search: <path d="M11 4a7 7 0 105.3 11.8l3.2 3.2 1.4-1.4-3.2-3.2A7 7 0 0011 4zm0 2a5 5 0 110 10 5 5 0 010-10z" />,
  devices: <path d="M4 5h16v11H4V5zm0 13h16v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1zm2-13v9h12V5H6z" />,
  blocks: <path d="M4 4h7v7H4V4zm9 0h7v4h-7V4zM4 13h7v7H4v-7zm9-5h7v11h-7V8z" />,
  target: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zm0 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z" />,
  cloud: <path d="M7 18a4 4 0 01-.6-7.96A5.5 5.5 0 0117.2 9.3 4.5 4.5 0 0117.5 18H7z" />,
};

export default function Features() {
  return (
    <section id="tinh-nang" className="scroll-mt-20 bg-zinc-50 py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Tính năng"
          title="Mọi thứ bạn cần cho 1 landing chuyên nghiệp"
          description="Cấu trúc giống agency thật: mỗi tính năng là 1 card, dữ liệu tách riêng để dễ sửa."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-black"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  {icons[f.icon]}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
