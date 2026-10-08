import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Challenge from "@/components/sections/Challenge";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Differentiator from "@/components/sections/Differentiator";
import WhyAlice from "@/components/sections/WhyAlice";
import Execution from "@/components/sections/Execution";
import WhoIsThisFor from "@/components/sections/WhoIsThisFor";
import FinalCta from "@/components/sections/FinalCta";
import SectionPattern from "@/components/ui/SectionPattern";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a1128] text-white">
      {/* Executive Luxury Navbar */}
      <Navbar />

      {/* Main Landing Flow */}
      <main className="flex-1 w-full max-w-full overflow-x-clip">
        {/* 01. Hero with Twilight Saigon Skyline */}
        <Hero />

        {/* Unified Light Luxury Flow: 02. The Challenge & 03. Services Overview */}
        <div data-nav-theme="light" className="relative isolate bg-[#faf8f5] text-slate-800 overflow-hidden">
          {/* Continuous shared motif, kept at its 1920px scale on any screen */}
          <SectionPattern />

          {/* 02. The Challenge / Pain Points with Meeting Visual */}
          <Challenge />

          {/* Natural, Harmonious Section Junction Transition */}
          <div className="relative z-10 container-x flex items-center justify-center my-1 pointer-events-none">
            <div className="h-px flex-1 max-w-xs sm:max-w-md bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent" />
            <div className="mx-4 flex items-center gap-1.5 text-[#b8860b]/60">
              <span className="w-1 h-1 rounded-full bg-[#d4af37]/50" />
              <span className="w-1.5 h-1.5 rotate-45 border border-[#d4af37]/70 bg-amber-50" />
              <span className="w-1 h-1 rounded-full bg-[#d4af37]/50" />
            </div>
            <div className="h-px flex-1 max-w-xs sm:max-w-md bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent" />
          </div>

          {/* 03. Three Key Areas (Services Overview) */}
          <ServicesOverview />
        </div>

        {/* 04. The Big Differentiator (1 vs 7 comparison) */}
        <Differentiator />

        {/* Unified Light Flow: 05–07 share one continuous pattern; pulled up under the navy curve above */}
        <div data-nav-theme="light" className="relative isolate -mt-7 sm:-mt-11 lg:-mt-14 bg-[#faf8f5] text-slate-800 overflow-hidden">
          <SectionPattern />

          {/* 05. Why Alice & Co.? (Local Expertise. International Standards.) */}
          <WhyAlice />

          {/* 06. On The Ground in HCMC (Real People. Real Execution.) */}
          <Execution />

          {/* 07. Who Is This For? (Target Segments) */}
          <WhoIsThisFor />
        </div>

        {/* 10. Final Call-To-Action Banner */}
        <FinalCta />
      </main>

      {/* 11. Luxury Executive Footer */}
      <Footer />
    </div>
  );
}
