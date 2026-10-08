import Link from "next/link";

// Primary gold pill CTA used across inner pages
export default function GoldButton({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0a1128] bg-gradient-to-r from-[#fae49d] via-[#d4af37] to-[#ba9324] hover:from-[#fff0b8] hover:to-[#dfaf35] shadow-[0_6px_20px_rgba(212,175,55,0.35)] transition-all duration-300 hover:-translate-y-0.5 ${className}`}
    >
      <span>{children}</span>
      <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </Link>
  );
}
