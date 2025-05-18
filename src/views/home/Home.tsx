import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import Flare from "../layout/Flare";
import { ServiceOverview } from "./service-overview/ServiceOverview";
import Contact from "./Contact";
import { OurProcess } from "./our-process/OurProcess";
import { Technologies } from "./technologies/Technologies";

export function Home() {
  return (
    <div className="relative overflow-x-hidden bg-zinc-900/80 pt-20">
      <Flare />
      <div className="relative flex w-full flex-col gap-20 pt-20 lg:gap-40">
        <Hero />
        <WhyChooseUs />
        <ServiceOverview />
        <OurProcess />
        <Technologies />
        <Contact />
        <div className="h-96 bg-linear-to-t from-zinc-900 from-30% to-zinc-900/0" />
      </div>
    </div>
  );
}
