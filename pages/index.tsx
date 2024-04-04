import React, { useRef } from "react";
import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import FaqSection from "@/components/sections/FaqSection";
import ServiceSection from "@/components/sections/ServiceSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import PlansSection from "@/components/sections/PlanSections";

export default function Home() {
  const serviceRef = useRef(null); // Ref for the ServiceSection
  const plansRef = useRef(null); // Ref for the PlansSection
  const faqRef = useRef(null); // Assuming you have a FAQSection

  // Functions to scroll to each section
  const scrollToService = () =>
    serviceRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToPlans = () =>
    plansRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToFAQ = () =>
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" }); // Function to scroll to the top of the page

  return (
    <main>
      <NavBar
        scrollToTop={scrollToTop}
        scrollToService={scrollToService}
        scrollToPlans={scrollToPlans}
        scrollToFAQ={scrollToFAQ}
      />
      <div className="mt-24 md:32 lg:mt-8 px-4 md:px-[9rem]">
        <HeroSection />
        <div ref={serviceRef}>
          <ServiceSection />
        </div>
        <PortfolioSection />
        <ProcessSection />
        <div ref={plansRef}>
          <PlansSection />
        </div>
        {/* Assuming you add a FAQSection and its ref */}
        <div ref={faqRef}> {/* Placeholder for FAQSection */}</div>
        <TestimonialSection />
        <FaqSection />
        <FooterSection />
      </div>
    </main>
  );
}
