import Hero from "./home/Hero";
import WhyChooseUs from "./home/WhyChooseUs";
import Projects from "./home/Projects";
import Clients from "./home/Clients";
import Contact from "./home/Contact";
import dynamic from "next/dynamic";
const Services = dynamic(() => import("./home/Services"), { ssr: false });

function Flare() {
  return (
    <svg
      width="1799"
      height="1924"
      viewBox="0 0 1799 1924"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 -mt-[45%]"
    >
      <g opacity="0.25">
        <g filter="url(#filter0_f_741_188)">
          <ellipse
            cx="471.154"
            cy="994.344"
            rx="80.565"
            ry="353.524"
            transform="rotate(14.9409 471.154 994.344)"
            fill="#D9D9D9"
          />
        </g>
        <g filter="url(#filter1_f_741_188)">
          <ellipse
            cx="301.722"
            cy="840.024"
            rx="80.565"
            ry="353.524"
            transform="rotate(22.8888 301.722 840.024)"
            fill="#D9D9D9"
          />
        </g>
        <g filter="url(#filter2_f_741_188)">
          <ellipse
            cx="625.942"
            cy="974.836"
            rx="80.565"
            ry="353.524"
            transform="rotate(-0.223297 625.942 974.836)"
            fill="#D9D9D9"
          />
        </g>
        <g filter="url(#filter3_f_741_188)">
          <ellipse
            cx="915.593"
            cy="1120.58"
            rx="80.565"
            ry="596.439"
            transform="rotate(-15.9738 915.593 1120.58)"
            fill="#D9D9D9"
          />
        </g>
        <g filter="url(#filter4_f_741_188)">
          <ellipse
            cx="1266.29"
            cy="749.098"
            rx="80.565"
            ry="596.439"
            transform="rotate(-29.6755 1266.29 749.098)"
            fill="#D9D9D9"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_741_188"
          x="199.089"
          y="499.929"
          width="544.129"
          height="988.829"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="76.1"
            result="effect1_foregroundBlur_741_188"
          />
        </filter>
        <filter
          id="filter1_f_741_188"
          x="0.137497"
          y="367.508"
          width="603.169"
          height="945.03"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="72.65"
            result="effect1_foregroundBlur_741_188"
          />
        </filter>
        <filter
          id="filter2_f_741_188"
          x="382.166"
          y="458.114"
          width="487.552"
          height="1033.44"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="81.6"
            result="effect1_foregroundBlur_741_188"
          />
        </filter>
        <filter
          id="filter3_f_741_188"
          x="505.455"
          y="318.135"
          width="820.276"
          height="1604.89"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="114.3"
            result="effect1_foregroundBlur_741_188"
          />
        </filter>
        <filter
          id="filter4_f_741_188"
          x="734.146"
          y="0.728729"
          width="1064.28"
          height="1496.74"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="114.3"
            result="effect1_foregroundBlur_741_188"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function Home() {
  return (
    <div className="-mt-20 bg-zinc-900/80 pt-20">
      <Flare />
      <div className="flex w-full flex-col gap-20 pt-20 md:gap-40 relative z-10">
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
