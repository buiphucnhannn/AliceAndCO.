import { Suspense } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import SectionPattern from "@/components/ui/SectionPattern";
import { curvePullUp } from "@/components/ui/curves";
import FinalCta from "@/components/sections/FinalCta";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceOfferings from "@/components/services/ServiceOfferings";
import ServiceSpecialOffer from "@/components/services/ServiceSpecialOffer";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceWhy from "@/components/services/ServiceWhy";
import { servicePages } from "@/data/content";

// Prerender the five services; any other slug hits notFound() below
// (`dynamicParams` is not allowed with cacheComponents in Next 16)
export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

const findPage = (slug) => servicePages.find((p) => p.slug === slug);

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = findPage(slug);
  if (!page) return {};
  return {
    title: `${page.title} | Alice & Co. — Your Local Partner in Vietnam`,
    description: page.metaDescription,
  };
}

// The shell (navbar, footer) renders instantly; everything that depends on the URL `slug`
// is read inside <Suspense> so navigations stay instant (Next 16 Cache Components).
export default function ServicePage({ params }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a1128] text-white">
      <Navbar />

      <main className="flex-1 w-full max-w-full overflow-x-clip">
        <Suspense fallback={<div className="min-h-[min(100svh,1000px)] bg-[#070d1e]" aria-busy="true" />}>
          <ServiceContent params={params} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

// Stacking: navy bands with curved edges (z-30) overlap the cream bands pulled up beneath them
async function ServiceContent({ params }) {
  const { slug } = await params;
  const page = findPage(slug);
  if (!page) notFound();

  return (
    <>
      {/* 01. Hero */}
      <PageHero
        crumbs={[{ label: "Services", href: "/#services" }, { label: page.title }]}
        cta={{ label: "Book a Free Consultation", href: "/contact#consultation" }}
        scriptLine1="Your Local Partner"
        scriptLine2="in Vietnam"
        {...page.hero}
      />

      {/* 02–03. Why this service + what I can help with (cream) */}
      <div data-nav-theme="light" className={`relative z-10 isolate ${curvePullUp} bg-[#faf8f5] text-slate-800 overflow-hidden`}>
        <SectionPattern />
        <ServiceIntro intro={page.intro} />
        <ServiceOfferings offerings={page.offerings} />
        {page.specialOffer && <ServiceSpecialOffer offer={page.specialOffer} />}
      </div>

      {/* 04. How it works (navy, curved top & bottom) */}
      <ServiceProcess process={page.process} />

      {/* 05. Why Alice & Co. (cream) */}
      <div data-nav-theme="light" className={`relative isolate ${curvePullUp} bg-[#faf8f5] text-slate-800 overflow-hidden`}>
        <SectionPattern flip />
        <ServiceWhy why={page.why} />
      </div>

      {/* 06. Closing CTA */}
      <FinalCta {...page.cta} />
    </>
  );
}
