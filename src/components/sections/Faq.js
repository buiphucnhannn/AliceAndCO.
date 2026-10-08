"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/content";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-zinc-50 py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Câu hỏi thường gặp"
          description="Component accordion dùng useState - ví dụ chuẩn Client Component."
        />
        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const open = i === openIndex;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-black/10 bg-white dark:border-white/10 dark:bg-black"
              >
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold"
                >
                  {item.q}
                  <span className={`text-xl transition-transform ${open ? "rotate-45" : ""}`}>+</span>
                </button>
                {open && (
                  <p className="px-6 pb-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
