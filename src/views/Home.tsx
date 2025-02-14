import Hero from "./home/Hero";
import WhyChooseUs from "./home/WhyChooseUs";
import Services from "./home/Services";

export function Home() {
  return (
    <div className="mt-20 w-full bg-[url('/bg-fullhd.png')] bg-top bg-repeat-y">
      <div className="-mt-20 flex w-full flex-col gap-40 bg-[url('/noise.png')] bg-cover bg-top bg-repeat-y">
        <Hero />
        <WhyChooseUs />
        <Services />
      </div>
    </div>
  );
}
