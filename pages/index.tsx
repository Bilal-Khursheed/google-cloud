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
  const serviceRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToService = () => {
    const offset = 100;
    const servicePosition = serviceRef.current
      ? serviceRef.current.offsetTop
      : 0;
    window.scrollTo({
      top: servicePosition - offset,
      behavior: "smooth",
    });
  };
  const scrollToPlans = () => {
    const offset = 100;
    const plansPosition = plansRef.current ? plansRef.current.offsetTop : 0;
    window.scrollTo({
      top: plansPosition - offset,
      behavior: "smooth",
    });
  };
  const scrollToFAQ = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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
        <div ref={faqRef}> </div>
        <TestimonialSection />
        <FaqSection />
        <FooterSection />
      </div>
    </main>
  );
}
