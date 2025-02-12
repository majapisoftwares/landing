import Hero from "./home/hero";
import WhyChooseUs from "./home/WhyChooseUs";

export function Home() {
  return (
    <div className="mt-20 w-full bg-[url('/bg-fullhd.png')] bg-top bg-repeat-y">
      <div className="-mt-20 w-full bg-[url('/noise.png')] bg-cover bg-top bg-repeat-y">
        <Hero />
        <WhyChooseUs />
      </div>
    </div>
  );
}
