import { Icon } from "@iconify/react";
import {
  ChartBarSquareIcon,
  CircleStackIcon,
  ClipboardDocumentCheckIcon,
  Cog8ToothIcon,
  CogIcon,
  CpuChipIcon,
  GlobeAltIcon,
  PresentationChartLineIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import { ArrowTrendingUpIcon } from "@heroicons/react/16/solid";
import { ServiceCard } from "./ServiceCard";
import Bg from "../../layout/Bg";

export function ServiceOverview() {
  return (
    <div className="relative">
      <Bg />
      <div className="relative z-10 mx-auto flex w-full max-w-(--breakpoint-xl) flex-col gap-10 px-4">
        <div className="flex flex-col justify-between gap-2 lg:flex-row">
          <div className="font-dm max-w-[550px] bg-[linear-gradient(180deg,#F8F8F8_-4.83%,rgba(255,255,255,0.00)_441.19%)] bg-clip-text text-4xl leading-[42px] font-medium text-transparent">
            Complete software solutions from concept to deployment.
          </div>
          <div className="font-dm max-w-[600px] text-xl leading-7 font-normal tracking-[-0.24px] text-zinc-400 lg:text-right">
            At Majapi, we handle every stage of the software development
            lifecycle. From strategic planning and user-centered design to
            scalable development and infrastructure management, we deliver
            end-to-end solutions built for performance and growth.
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <ServiceCard
            icon={<Icon icon="mdi:brain" />}
            title="Strategy & Product Planning"
            description="We help you define your vision, target audience, and business goals, transforming ideas into actionable roadmaps."
            badges={[
              {
                icon: <ChartBarSquareIcon />,
                label: "Business analysis",
              },
              {
                icon: <Icon icon="ri:lightbulb-flash-line" />,
                label: "Product discovery",
              },
              {
                icon: <ClipboardDocumentCheckIcon />,
                label: "MVP Definition",
              },
              {
                icon: <ArrowTrendingUpIcon />,
                label: "Tech Stack Advisory",
              },
            ]}
          />
          <ServiceCard
            icon={<Icon icon="mingcute:palette-line" />}
            title="UX/UI & Brand Design"
            description="We design intuitive and visually engaging interfaces that drive results across platforms."
            badges={[
              {
                icon: <Icon icon="ri:group-line" />,
                label: "User research",
              },
              {
                icon: <Icon icon="ri:shapes-line" />,
                label: "Wireframing",
              },
              {
                icon: <Icon icon="ri:pencil-ruler-2-line" />,
                label: "Branding",
              },
              {
                icon: <Icon icon="ri:drag-drop-line" />,
                label: "High-fidelity Prototyping",
              },
              {
                icon: <Icon icon="ri:pencil-ruler-line" />,
                label: "Design Systems",
              },
            ]}
          />
          <ServiceCard
            icon={<Icon icon="ri:macbook-line" />}
            title="Web & Mobile Development"
            description="We build fast, scalable, and secure applications using modern technologies tailored to your needs."
            badges={[
              {
                icon: <Icon icon="ri:html5-line" />,
                label: "Websites",
              },
              {
                icon: <RectangleGroupIcon />,
                label: "ERP",
              },
              {
                icon: <CircleStackIcon />,
                label: "Admin Panels",
              },
              {
                icon: <Icon icon="ri:smartphone-line" />,
                label: "Mobile apps (iOS, Android, Hybrid)",
              },
              {
                icon: <Cog8ToothIcon />,
                label: "APIs",
              },
            ]}
          />
          <ServiceCard
            icon={<CogIcon />}
            title="Infrastructure & DevOps"
            description="We take care of the architecture, hosting, and deployment pipeline so your product runs smoothly always."
            badges={[
              {
                icon: <Icon icon="clarity:ci-cd-line" />,
                label: "CI/CD",
              },
              {
                icon: <Icon icon="eos-icons:monitoring" />,
                label: "Monitoring",
              },
              {
                icon: <Icon icon="ri:archive-line" />,
                label: "Backups",
              },
              {
                icon: <Icon icon="ri:cloud-line" />,
                label: "Cloud infrastructure",
              },
              {
                icon: <PresentationChartLineIcon />,
                label: "Scaling",
              },
            ]}
          />
          <ServiceCard
            icon={<Icon icon="ri:robot-2-line" />}
            title="AI, Automation & Blockchain"
            description="From smart integrations to full AI solutions and blockchain systems, we implement future-ready technologies."
            badges={[
              {
                icon: <Icon icon="mingcute:ai-line" />,
                label: "AI models",
              },
              {
                icon: <Icon icon="ri:robot-line" />,
                label: "Bots",
              },
              {
                icon: <Icon icon="ri:contract-line" />,
                label: "Smart Contracts",
              },
              {
                icon: <CpuChipIcon />,
                label: "Automation flows",
              },
              {
                icon: <GlobeAltIcon />,
                label: "Web3 integrations",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
