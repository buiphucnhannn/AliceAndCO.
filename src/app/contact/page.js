import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import SectionPattern from "@/components/ui/SectionPattern";
import { curvePullUp } from "@/components/ui/curves";
import { contactData } from "@/data/content";
import ContactMain from "@/components/contact/ContactMain";
import ContactLocation from "@/components/contact/ContactLocation";
import ContactFaq from "@/components/contact/ContactFaq";
import FinalCta from "@/components/sections/FinalCta";

export const metadata = {
  title: "Contact | Alice & Co. — Your Local Partner in Vietnam",
  description:
    "Book a free consultation with Alice & Co. Reach out by form, WhatsApp, Viber, Zalo or email — on-the-ground support in Ho Chi Minh City, Vietnam.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a1128] text-white">
      <Navbar />

      <main className="flex-1 w-full max-w-full overflow-x-clip">
        {/* 01. Hero — Let's Discuss Your Plans */}
        <PageHero
          crumb="Contact"
          imageAlt="Alice meeting clients in a Ho Chi Minh City office overlooking the skyline"
          imagePosition="0% center"
          imagePositionMobile="30% center"
          cta={{ label: "Book a Free Consultation", href: "#consultation" }}
          {...contactData.hero}
        />

        {/* 02–04. Form & details, location, FAQ — one cream band pulled up under the hero curve */}
        <div data-nav-theme="light" className={`relative isolate ${curvePullUp} bg-[#faf8f5] text-slate-800 overflow-hidden`}>
          <SectionPattern />
          <ContactMain />
          <ContactLocation />
          <ContactFaq />
        </div>

        {/* 05. Ready to talk — shared closing banner (curves up into the cream band) */}
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}
