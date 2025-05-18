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
import { useTranslation } from "../../../intl/useTranslation";

export function ServiceOverview() {
  const t = useTranslation();

  return (
    <div className="relative">
      <Bg />
      <div className="relative z-10 mx-auto flex w-full max-w-(--breakpoint-xl) flex-col gap-10 px-4">
        <div className="flex flex-col justify-between gap-2 lg:flex-row">
          <div className="font-dm max-w-[550px] bg-[linear-gradient(180deg,#F8F8F8_-4.83%,rgba(255,255,255,0.00)_441.19%)] bg-clip-text text-4xl leading-[42px] font-medium text-transparent">
            {t("Complete software solutions from concept to deployment.")}
          </div>
          <div className="font-dm max-w-[600px] text-xl leading-7 font-normal tracking-[-0.24px] text-zinc-400 lg:text-right">
            {t(
              "At Majapi, we handle every stage of the software development lifecycle. From strategic planning and user-centered design to scalable development and infrastructure management, we deliver end-to-end solutions built for performance and growth.",
            )}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <ServiceCard
            icon={<Icon icon="mdi:brain" />}
            title={t("Strategy & Product Planning")}
            description={t(
              "We help you define your vision, target audience, and business goals, transforming ideas into practical roadmaps.",
            )}
            badges={[
              {
                icon: <ChartBarSquareIcon />,
                label: t("Business analysis"),
              },
              {
                icon: <Icon icon="ri:lightbulb-flash-line" />,
                label: t("Product discovery"),
              },
              {
                icon: <ClipboardDocumentCheckIcon />,
                label: t("MVP Definition"),
              },
              {
                icon: <ArrowTrendingUpIcon />,
                label: t("Tech Stack Advisory"),
              },
            ]}
          />
          <ServiceCard
            icon={<Icon icon="mingcute:palette-line" />}
            title={t("UI/UX & Brand Design")}
            description={t(
              "We design intuitive and visually engaging interfaces that drive results across platforms.",
            )}
            badges={[
              {
                icon: <Icon icon="ri:group-line" />,
                label: t("User research"),
              },
              {
                icon: <Icon icon="ri:shapes-line" />,
                label: t("Wireframing"),
              },
              {
                icon: <Icon icon="ri:pencil-ruler-2-line" />,
                label: t("Branding"),
              },
              {
                icon: <Icon icon="ri:drag-drop-line" />,
                label: t("High-fidelity prototyping"),
              },
              {
                icon: <Icon icon="ri:pencil-ruler-line" />,
                label: t("Design systems"),
              },
            ]}
          />
          <ServiceCard
            icon={<Icon icon="ri:macbook-line" />}
            title={t("Web & Mobile Development")}
            description={t(
              "We build fast, scalable, and secure applications using modern technologies tailored to your needs.",
            )}
            badges={[
              {
                icon: <Icon icon="ri:html5-line" />,
                label: t("Websites"),
              },
              {
                icon: <RectangleGroupIcon />,
                label: t("ERP"),
              },
              {
                icon: <CircleStackIcon />,
                label: t("Admin panels"),
              },
              {
                icon: <Icon icon="ri:smartphone-line" />,
                label: t("Mobile apps"),
              },
              {
                icon: <Cog8ToothIcon />,
                label: t("APIs"),
              },
            ]}
          />
          <ServiceCard
            icon={<CogIcon />}
            title={t("Infrastructure & DevOps")}
            description={t(
              "We take care of the architecture, hosting, and deployment pipeline so your product runs smoothly always.",
            )}
            badges={[
              {
                icon: <Icon icon="clarity:ci-cd-line" />,
                label: t("CI/CD"),
              },
              {
                icon: <Icon icon="eos-icons:monitoring" />,
                label: t("Monitoring"),
              },
              {
                icon: <Icon icon="ri:archive-line" />,
                label: t("Backups"),
              },
              {
                icon: <Icon icon="ri:cloud-line" />,
                label: t("Cloud infrastructure"),
              },
              {
                icon: <PresentationChartLineIcon />,
                label: t("Scaling"),
              },
            ]}
          />
          <ServiceCard
            icon={<Icon icon="ri:robot-2-line" />}
            title={t("AI, Automation & Blockchain")}
            description={t(
              "From smart integrations to full AI solutions and blockchain systems, we implement future-ready technologies.",
            )}
            badges={[
              {
                icon: <Icon icon="mingcute:ai-line" />,
                label: t("AI models"),
              },
              {
                icon: <Icon icon="ri:robot-line" />,
                label: t("Bots"),
              },
              {
                icon: <Icon icon="ri:contract-line" />,
                label: t("Smart Contracts"),
              },
              {
                icon: <CpuChipIcon />,
                label: t("Automation flows"),
              },
              {
                icon: <GlobeAltIcon />,
                label: t("Web3 integrations"),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
