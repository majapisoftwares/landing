import Hero from "./home/Hero";
import WhyChooseUs from "./home/WhyChooseUs";
import Services from "./home/Services";
import Projects from "./home/Projects";

export function Home() {
  return (
    <div className="w-full bg-zinc-900/80 bg-[url('/bg-fullhd.png')] bg-top bg-repeat-y">
      <div className="flex w-full flex-col gap-40 bg-[url('/noise.png')] bg-cover bg-top bg-repeat-y py-40">
        <Hero />
        <WhyChooseUs />
        <Services />
        <Projects />
      </div>
    </div>
  );
}
