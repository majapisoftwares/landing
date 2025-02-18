import Hero from "./home/Hero";
import WhyChooseUs from "./home/WhyChooseUs";
import Services from "./home/Services";
import Projects from "./home/Projects";
import Clients from "./home/Clients";

export function Home() {
  return (
    <div className="-mt-20 bg-zinc-900/80 bg-[url('/noise.png')] bg-cover bg-top bg-repeat-y pt-20">
      <div className="flex w-full flex-col gap-40 bg-[url('/bg-fullhd.png')] bg-top bg-repeat-y py-40">
        <Hero />
        <WhyChooseUs />
        <Services />
        <Projects />
        <Clients />
      </div>
    </div>
  );
}
