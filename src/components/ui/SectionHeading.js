export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}>
      {eyebrow ? (
        <span className="inline-flex w-fit items-center rounded-full border border-black/10 bg-black/[.04] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-zinc-700 dark:border-white/15 dark:bg-white/10 dark:text-zinc-200">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">{description}</p>
      ) : null}
    </div>
  );
}
