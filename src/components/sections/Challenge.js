import Image from "next/image";
import Link from "next/link";
import { challengeData } from "@/data/content";
import { feather } from "@/components/ui/curves";

function ChallengeIcon({ idx }) {
  switch (idx) {
    case 0:
      // Starting a business: Classic corporate / enterprise building
      return (
        <svg className="w-4 h-4 text-[#b8860b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4" />
        </svg>
      );
    case 1:
      // Finding a reliable supplier: Factory / industrial sourcing
      return (
        <svg className="w-4 h-4 text-[#b8860b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20h20M4 20V9l5 3V9l5 3V5h6v15" />
          <circle cx="16.5" cy="13.5" r="2.5" />
          <path d="M18.5 15.5L21 18" />
        </svg>
      );
    case 2:
      // Business trip: Executive briefcase / travel
      return (
        <svg className="w-4 h-4 text-[#b8860b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="7" width="18" height="14" rx="2" />
          <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M12 11v2M8 12h8" />
        </svg>
      );
    case 3:
      // Moving to HCMC: City location pin with home
      return (
        <svg className="w-4 h-4 text-[#b8860b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <path d="M9 11l3-3 3 3v3h-6v-3z" />
        </svg>
      );
    case 4:
      // Dealing with local partners: Handshake partnership
      return (
        <svg className="w-4 h-4 text-[#b8860b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 17l-1.5-1.5a2.5 2.5 0 00-3.5 0L4 17.5M13 17l1.5-1.5a2.5 2.5 0 013.5 0l2 2" />
          <path d="M7 11l4.5-4.5a2 2 0 012.8 0L17 9" />
          <path d="M2 13l5-5M22 13l-5-5" />
        </svg>
      );
    case 5:
      // Mail & Packages: Postal mail & logistics
      return (
        <svg className="w-4 h-4 text-[#b8860b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6M12 13v6" />
        </svg>
      );
    case 6:
    default:
      // Trusted local contact: User with verified check badge
      return (
        <svg className="w-4 h-4 text-[#b8860b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M16 11l2 2 4-4" />
        </svg>
      );
  }
}

export default function Challenge() {
  return (
    <section className="relative pt-12 sm:pt-14 lg:pt-16 pb-8 sm:pb-10 lg:pb-12 text-slate-800">

      <div className="relative z-10 container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          {/* Left Column: Story & Call to Action */}
          <div className="lg:col-span-4 text-left">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b8860b] block mb-2.5">
              {challengeData.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.16] text-[#0f172a] mb-5">
              Being in Vietnam shouldn&apos;t mean figuring everything out alone.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-7 max-w-md">
              {challengeData.description}
            </p>
            <Link
              href={challengeData.cta.href}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0a1128] bg-gradient-to-r from-[#fae49d] via-[#d4af37] to-[#ba9324] hover:from-[#fff0b8] hover:to-[#dfaf35] shadow-[0_4px_18px_rgba(212,175,55,0.35)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>{challengeData.cta.label}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Center Image: frameless, edges feathered into the background */}
          <div className="lg:col-span-5 relative">
            {/* Soft golden glow behind the image */}
            <div
              aria-hidden="true"
              className="absolute -inset-8 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.14)_0%,rgba(212,175,55,0.05)_45%,transparent_72%)] blur-2xl"
            />
            <div
              className="relative aspect-[16/11] group"
              style={feather({ left: 18, right: 18, top: 16, bottom: 16 })}
            >
              <Image
                src={challengeData.image}
                alt="Executive Consultation in Ho Chi Minh City"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[center_30%] saturate-[0.92] group-hover:scale-[1.02] transition-transform duration-700"
              />
              {/* Warm cream wash so the photo shares the section's palette */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f7f1e3]/25 via-transparent to-[#f7f1e3]/20 mix-blend-soft-light pointer-events-none" />
            </div>
          </div>

          {/* Right Floating Checklist Card */}
          <div className="lg:col-span-3">
            <div className="bg-white/85 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-[0_12px_36px_rgba(180,140,80,0.08)] border border-amber-200/60">
              <div className="space-y-3">
                {challengeData.painPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <span className="w-7 h-7 rounded-lg bg-amber-50/90 border border-amber-200/70 flex items-center justify-center shrink-0 group-hover:border-[#d4af37] group-hover:bg-amber-100/70 transition-all">
                      <ChallengeIcon idx={idx} />
                    </span>
                    <span className="text-xs font-medium text-slate-700 group-hover:text-slate-950 transition-colors leading-tight">
                      {point.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
