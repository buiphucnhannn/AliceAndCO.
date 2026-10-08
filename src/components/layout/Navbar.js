"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/data/content";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  // "light" while a [data-nav-theme="light"] area scrolls behind the capsule, otherwise "dark"
  const [navTheme, setNavTheme] = useState("dark");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 25);
      const probeY = window.scrollY > 25 ? 34 : 42; // vertical middle of the capsule
      const behind = document
        .elementsFromPoint(window.innerWidth / 2, probeY)
        .find((el) => !el.closest("header"));
      setNavTheme(behind?.closest("[data-nav-theme]")?.getAttribute("data-nav-theme") ?? "dark");
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  const onLight = navTheme === "light";
  const linkIdle = onLight
    ? "text-slate-700 hover:text-slate-950 hover:bg-[#d4af37]/10"
    : "text-slate-200 hover:text-white hover:bg-white/10";

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none w-full max-w-full overflow-x-clip">
      {/* Floating Capsule Navigation Bar (Sleek Compact Island Header) */}
      <div className={`container-x transition-all duration-300 ${scrolled ? "pt-1.5" : "pt-2.5 sm:pt-3"}`}>
        <div
          className={`pointer-events-auto rounded-full flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-7 transition-all duration-500 ${
            onLight ? "glass-capsule glass-capsule-light" : scrolled ? "glass-capsule glass-capsule-scrolled" : "glass-capsule"
          } ${scrolled ? "py-1.5 sm:py-2" : "py-2 sm:py-2.5"}`}
        >
          {/* Official Brand Logo */}
          <BrandLogo size="md" light={!onLight} />

          {/* Desktop Nav Pills */}
          <nav className="hidden lg:flex items-center gap-2 2xl:gap-3">
            {navLinks.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    {/* Click glides to the services overview on the home page; hover opens the list */}
                    <Link
                      href={item.href}
                      onClick={() => setServicesDropdownOpen(false)}
                      className={`flex items-center gap-1 px-3.5 py-1 text-[11px] 2xl:text-xs tracking-[0.14em] uppercase font-medium rounded-full transition-all cursor-pointer ${
                        pathname?.startsWith("/services")
                          ? onLight
                            ? "bg-gradient-to-r from-[#d4af37]/25 to-[#fae49d]/30 text-[#8a6410] border border-[#d4af37]/60 shadow-sm"
                            : "bg-gradient-to-r from-[#d4af37]/30 to-[#fae49d]/15 text-[#fae49d] border border-[#d4af37]/50 shadow-sm"
                          : linkIdle
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-3 h-3 text-[#d4af37] transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Services Dropdown */}
                    {/* Centred under the trigger; plain centred labels */}
                    {servicesDropdownOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-60 animate-fadeIn">
                        <div className="rounded-2xl p-2 bg-[#0a1128]/95 border border-[#d4af37]/30 shadow-2xl backdrop-blur-2xl">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`block text-center px-4 py-2.5 rounded-xl text-[13px] transition-colors ${
                                pathname === child.href
                                  ? "text-[#fae49d] bg-white/10"
                                  : "text-slate-300 hover:text-[#fae49d] hover:bg-white/10"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1 text-[11px] 2xl:text-xs tracking-[0.14em] uppercase font-medium rounded-full transition-all duration-200 ${
                    active
                      ? onLight
                        ? "bg-gradient-to-r from-[#d4af37]/25 to-[#fae49d]/30 text-[#8a6410] border border-[#d4af37]/60 shadow-sm"
                        : "bg-gradient-to-r from-[#d4af37]/30 to-[#fae49d]/15 text-[#fae49d] border border-[#d4af37]/50 shadow-sm"
                      : linkIdle
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Consultation CTA Pill Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact#consultation"
              className="group hidden sm:inline-flex items-center gap-2 rounded-full pl-4 pr-1.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0a1128] bg-gradient-to-r from-[#fae49d] via-[#d4af37] to-[#ba9324] hover:from-[#fff0b8] hover:to-[#dfaf35] shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <span>Book a Free Consultation</span>
              <span className="w-5 h-5 rounded-full bg-[#0a1128] text-[#d4af37] flex items-center justify-center font-bold text-[10px] group-hover:scale-105 group-hover:bg-black transition-all">
                →
              </span>
            </Link>

            {/* Mobile Hamburger Pill Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden w-9 h-9 rounded-full border border-[#d4af37]/30 flex items-center justify-center hover:border-[#d4af37] transition-all ${
                onLight ? "bg-white/70 text-slate-800 hover:text-slate-950" : "bg-slate-800/60 text-slate-200 hover:text-white"
              }`}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto lg:hidden mt-2 p-5 rounded-2xl bg-[#0a1128]/95 border border-[#d4af37]/30 shadow-2xl backdrop-blur-2xl animate-fadeIn">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-sm font-medium text-slate-200 hover:text-[#fae49d] py-2 border-b border-slate-800/80 transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-[#d4af37] text-xs">→</span>
                  </Link>
                  {item.children && (
                    <div className="pl-4 py-2 space-y-2 border-l border-[#d4af37]/20 my-1">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs text-slate-400 hover:text-[#fae49d] py-1"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-3 flex flex-col gap-3">
                <Link
                  href="/contact#consultation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0a1128] bg-gradient-to-r from-[#fae49d] via-[#d4af37] to-[#ba9324] shadow-md"
                >
                  Book a Free Consultation
                </Link>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-1 px-1">
                  <span>Alice &amp; Co.</span>
                  <span>Hotline: {siteConfig.displayPhone}</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
