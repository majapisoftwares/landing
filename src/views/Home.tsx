import Hero from "./home/Hero";
import WhyChooseUs from "./home/WhyChooseUs";
import Projects from "./home/Projects";
import Clients from "./home/Clients";
import Contact from "./home/Contact";
import dynamic from "next/dynamic";
import Flare from "./layout/Flare";
const Services = dynamic(() => import("./home/Services"), { ssr: false });

export function Home() {
  return (
    <div className="relative overflow-x-hidden bg-zinc-900/80 pt-20">
      <Flare />
      <div className="relative z-10 flex w-full flex-col gap-20 pt-20 md:gap-40">
        <Hero />
        <WhyChooseUs />
        <Services />
        <Projects />
        <Clients />
        <Contact />
        <div className="h-96 bg-gradient-to-t from-zinc-900 from-30% to-zinc-900/0" />
      </div>
    </div>
  );
}
