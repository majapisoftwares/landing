import {
  ClipboardDocumentListIcon,
  CodeBracketSquareIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import { Arrow } from "./Arrow";
import { ProcessStep } from "./ProcessStep";
import Bg from "../../layout/Bg";
import { useTranslation } from "../../../intl/useTranslation";

export function OurProcess() {
  const t = useTranslation();

  return (
    <div className="relative">
      <Bg />
      <div className="relative z-10 mx-auto flex w-full max-w-(--breakpoint-xl) flex-col items-center justify-center gap-[75px] px-4">
        <div className="flex max-w-[604px] flex-col items-center gap-2">
          <div className="font-dm bg-[linear-gradient(180deg,#F8F8F8_-4.83%,rgba(255,255,255,0.00)_441.19%)] bg-clip-text text-5xl leading-[56px] font-semibold tracking-[-2.88px] text-transparent">
            {t("Our process")}
          </div>
          <div className="font-dm text-center text-2xl leading-8 tracking-[-0.288px] text-zinc-500">
            {t(
              "At Majapi, we follow a streamlined approach to ensure the success of every project.",
            )}
          </div>
        </div>
        <div className="relative flex flex-col gap-10 sm:gap-0 xl:flex-row">
          <ProcessStep
            icon={<LightBulbIcon />}
            title={t("Discovery")}
            description={t("We collaborate to understand your business goals.")}
          />
          <Arrow className="top-27 left-66 hidden scale-x-[-1] -rotate-95 sm:block xl:top-70 xl:left-29 xl:scale-x-100 xl:rotate-0" />
          <ProcessStep
            className="sm:ml-70 xl:mt-70 xl:ml-0"
            icon={<ClipboardDocumentListIcon />}
            title={t("Planning")}
            description={t(
              "We create a clear roadmap and timeline for your project.",
            )}
          />
          <Arrow className="top-130 left-63 hidden scale-x-[-1] rotate-10 sm:block xl:top-29 xl:left-95 xl:rotate-180" />
          <ProcessStep
            icon={<CodeBracketSquareIcon />}
            title={t("Development")}
            description={t(
              "Our team develops and tests the solution to ensure it meets your requirements.",
            )}
          />
          <Arrow className="top-202 left-33 hidden -rotate-10 sm:block xl:top-29 xl:left-199 xl:scale-x-[-1] xl:rotate-270" />
          <ProcessStep
            icon={<RocketLaunchIcon className="animate-shake" />}
            className="sm:ml-70 xl:mt-70 xl:ml-0"
            title={t("Launch")}
            description={t(
              "We launch your product, providing support and ongoing optimization.",
            )}
            glow
          />
        </div>
      </div>
    </div>
  );
}
