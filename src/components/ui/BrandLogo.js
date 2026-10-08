import Link from "next/link";
import Image from "next/image";

export default function BrandLogo({ className = "", light = true, size = "md" }) {
  const isSmall = size === "sm";
  const isLarge = size === "lg";

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 sm:gap-3 group text-left ${className}`}>
      {/* Official Golden Laurel Crest with A& Monogram */}
      <div
        className={`relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
          isSmall
            ? "w-8 h-8"
            : isLarge
            ? "w-14 h-14"
            : "w-9 h-9 sm:w-10 sm:h-10"
        }`}
      >
        <Image
          src="/images/logo_crest_transparent.png"
          alt="Alice & Co. Official Crest"
          fill
          sizes="56px"
          preload
          className="object-contain drop-shadow-[0_2px_8px_rgba(212,175,55,0.35)]"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-serif tracking-[0.16em] font-semibold uppercase leading-tight ${
            isSmall
              ? "text-sm"
              : isLarge
              ? "text-xl sm:text-2xl"
              : "text-[15px] sm:text-base lg:text-[17px]"
          } ${light ? "text-white" : "text-slate-900"}`}
        >
          {/* Playfair's ornate "&" reads like "Et" at small sizes — set it in the clean sans */}
          ALICE <span className="font-sans font-semibold tracking-normal">&amp;</span> CO.
        </span>
        <span
          className={`tracking-[0.22em] uppercase font-medium mt-0.5 ${
            isSmall
              ? "text-[7.5px]"
              : isLarge
              ? "text-[10px]"
              : "text-[8px] sm:text-[9px]"
          } ${light ? "text-[#d4af37]" : "text-[#b8860b]"}`}
        >
          YOUR LOCAL PARTNER IN VIETNAM
        </span>
      </div>
    </Link>
  );
}
