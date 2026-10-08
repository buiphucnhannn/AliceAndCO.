import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionPattern from "@/components/ui/SectionPattern";
import { curveMask, curvePullUp, curveVars } from "@/components/ui/curves";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutMission from "@/components/about/AboutMission";
import AboutValues from "@/components/about/AboutValues";
import AboutHowIWork from "@/components/about/AboutHowIWork";
import AboutVision from "@/components/about/AboutVision";

export const metadata = {
  title: "About | Alice & Co. — Your Local Partner in Vietnam",
  description:
    "Meet Alice, founder of Alice & Co. — bridging global ambitions with local expertise through practical solutions, local knowledge and on-the-ground support in Vietnam.",
};

// Stacking: navy sections with curved edges (z-30) sit above the cream bands (z-10/z-20),
// which are pulled up underneath them so each curve reveals the neighbouring section.
export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a1128] text-white">
      <Navbar />

      <main className="flex-1 w-full max-w-full overflow-x-clip">
        {/* 01. Hero — Bridging Global Ambitions */}
        <AboutHero />

        {/* 02. My Story (cream) */}
        <div
          data-nav-theme="light"
          className={`relative z-10 isolate ${curvePullUp} bg-[#faf8f5] text-slate-800 overflow-hidden`}
        >
          <SectionPattern />
          <AboutStory />
        </div>

        {/* 03. Our Mission (navy, curved top & bottom) */}
        <AboutMission />

        {/* 04–06. Values, How I Work, Long-Term Vision (cream, curved bottom into the footer) */}
        <div
          data-nav-theme="light"
          className={`relative z-20 isolate ${curvePullUp} bg-[#faf8f5] text-slate-800 overflow-hidden ${curveVars}`}
          style={curveMask({ bottom: true })}
        >
          <SectionPattern flip />
          <AboutValues />
          <AboutHowIWork />
          <AboutVision />
        </div>
      </main>

      <div className={`relative z-0 ${curvePullUp}`}>
        <Footer />
      </div>
    </div>
  );
}
