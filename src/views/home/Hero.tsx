import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Button from "@majapisoftwares/ui/components/Button";
import { WHATSAPP_LINK } from "../../constants";
import Bg from "../layout/Bg";
import { useTranslation } from "../../intl/useTranslation";

export default function Hero() {
  const t = useTranslation();

  return (
    <div className="relative">
      <Bg className="-top-44" />
      <div className="relative mx-auto flex w-full max-w-(--breakpoint-xl) flex-col items-center gap-5 px-4 md:gap-10">
        <div className="flex flex-col items-center gap-2 lg:gap-4">
          <div className="font-dm bg-linear-to-br from-zinc-100 to-zinc-400 bg-clip-text py-2 text-center text-5xl font-semibold tracking-[-1.92px] text-transparent md:max-w-[670px] md:text-7xl lg:max-w-[767px] lg:text-[90px] lg:leading-[98px] lg:tracking-[-5.4px]">
            {t("Transforming ideas into digital solutions")}
          </div>
          <div className="font-dm max-w-[400px] text-center text-lg text-zinc-400 md:max-w-[510px] md:text-xl md:leading-8">
            {t(
              "Innovation, agility and efficiency to take your company to the next level.",
            )}
          </div>
        </div>
        <Button
          variant="filled"
          target="_blank"
          href={WHATSAPP_LINK}
          className="font-dm rounded-[50px] border border-zinc-600 bg-zinc-100 px-8 py-3 text-base text-zinc-800"
          trailing={<ArrowLongRightIcon className="h-6 w-6" />}
        >
          {t("Schedule a meeting")}
        </Button>
      </div>
    </div>
  );
}
