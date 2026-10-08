export default function Cta() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-black px-6 py-16 text-center text-white sm:px-12 dark:bg-white dark:text-black">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_80%_at_50%_100%,rgba(255,255,255,0.2),transparent)] dark:bg-[radial-gradient(50%_80%_at_50%_100%,rgba(0,0,0,0.12),transparent)]" />
          <h2 className="relative text-3xl font-bold sm:text-4xl">
            Sẵn sàng có landing page của riêng bạn?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl opacity-70">
            Clone cấu trúc này, đổi chữ trong data/content.js, chạy npm run dev là xong bản demo đầu tiên.
          </p>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#bang-gia"
              className="flex h-12 items-center justify-center rounded-full bg-white px-8 font-semibold text-black hover:bg-zinc-200 dark:bg-black dark:text-white dark:hover:bg-zinc-800"
            >
              Bắt đầu miễn phí
            </a>
            <a
              href="#cach-hoat-dong"
              className="flex h-12 items-center justify-center rounded-full border border-white/30 px-8 font-semibold hover:bg-white/10 dark:border-black/20 dark:hover:bg-black/5"
            >
              Xem lại cấu trúc
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
