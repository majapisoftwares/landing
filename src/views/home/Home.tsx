import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import { ServiceOverview } from "./service-overview/ServiceOverview";
import { OurProcess } from "./our-process/OurProcess";
import CaseStudies from "./CaseStudies";
import AboutSection from "./AboutSection";

export function Home() {
  return (
    <div className="relative overflow-x-clip bg-[#000003]">
      <div className="relative flex w-full flex-col gap-20">
        <Hero />
        <WhyChooseUs />
        <ServiceOverview />
        <CaseStudies />
        <OurProcess />
        <AboutSection />
      </div>
    </div>
  );
}
