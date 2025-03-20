import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import Projects from "./Projects";
import Clients from "./Clients";
import Contact from "./Contact";
import Services from "./Services";
import Flare from "../layout/Flare";
import Reveal from "./Reveal";

export function Home() {
  return (
    <div className="relative overflow-x-hidden bg-zinc-900/80 pt-20">
      <Flare />
      <div className="relative flex w-full flex-col gap-20 pt-20 lg:gap-40">
        <Reveal delay={0.25}>
          <Hero />
        </Reveal>
        <Reveal delay={0.75}>
          <WhyChooseUs />
        </Reveal>
        <Services />
        <Reveal delay={0.75}>
          <Projects />
        </Reveal>
        <Clients />
        <Reveal delay={0.75}>
          <Contact />
        </Reveal>
        <div className="h-96 bg-gradient-to-t from-zinc-900 from-30% to-zinc-900/0" />
      </div>
    </div>
  );
}
