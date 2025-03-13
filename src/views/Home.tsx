import Hero from "./home/Hero";
import WhyChooseUs from "./home/WhyChooseUs";
import Projects from "./home/Projects";
import Clients from "./home/Clients";
import Contact from "./home/Contact";
import Services from "./home/Services";
import Flare from "./layout/Flare";

export function Home() {
  return (
    <div className="relative overflow-x-hidden bg-zinc-900/80 pt-20">
      <Flare />
      <div className="relative flex w-full flex-col gap-20 pt-20 lg:gap-40">
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
