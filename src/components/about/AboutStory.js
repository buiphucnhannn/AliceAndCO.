import Image from "next/image";
import { aboutData } from "@/data/content";

export default function AboutStory() {
  const story = aboutData.story;

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-24 sm:pb-28 lg:pb-32 text-slate-900">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center max-w-[1280px] mx-auto">
          {/* Story copy */}
          <div className="lg:col-span-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b8860b] block mb-3">
              {story.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.12] tracking-tight text-[#0f172a] mb-6">
              {story.headingTop}
              <br />
              {story.headingBottom}
            </h2>
            <div className="space-y-4 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              {story.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-7">
              <p className="font-script script-ink text-4xl text-[#0f172a] leading-none -rotate-3 origin-left">{story.signature}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500 mt-2">{story.role}</p>
            </div>
          </div>

          {/* Portrait with overlapping quote card */}
          <div className="lg:col-span-7">
            <div className="relative sm:pr-[34%] lg:pr-[30%]">
              <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-[0_30px_60px_-25px_rgba(15,23,42,0.45)]">
                <Image
                  src={story.image}
                  alt="Alice, founder of Alice & Co., at work in Ho Chi Minh City"
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw" /* 16:9 source cropped to 4:5 (~2.2× zoom) */
                  className="object-cover"
                  style={{ objectPosition: story.imagePosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/25 via-transparent to-transparent" />
              </div>

              <figure className="relative sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 mt-6 sm:mt-0 sm:w-[44%] lg:w-[40%] rounded-3xl bg-[#fffdf8]/95 backdrop-blur-sm border border-[#d4af37]/25 shadow-[0_24px_50px_-20px_rgba(120,95,40,0.35)] p-7 lg:p-8">
                <span className="font-serif text-6xl leading-none text-[#d4af37] block h-8 -mt-1" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="font-serif text-lg lg:text-xl leading-snug text-[#0f172a] mt-3">
                  {story.quote}
                </blockquote>
                <div className="w-10 h-px bg-[#d4af37]/60 my-5" />
                <figcaption>
                  <span className="block text-sm font-semibold tracking-[0.18em] text-[#0f172a]">{story.quoteAuthor}</span>
                  <span className="block text-xs text-slate-500 mt-1">{story.quoteRole}</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
