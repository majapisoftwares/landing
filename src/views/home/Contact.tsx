import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/ui/button";
import Routes from "../../routes";
import { useTranslation } from "../../intl/useTranslation";

export default function Contact() {
  const t = useTranslation();

  return (
    <section className="relative z-20 bg-[#000003] px-4 pt-24 pb-32 lg:pt-[145px] lg:pb-[175px]">
      <div className="section-gradient-line pointer-events-none absolute top-0 left-1/2 w-[min(1088px,100%)] -translate-x-1/2" />
      <div className="mx-auto flex max-w-[691px] flex-col items-center gap-[34px] text-center">
        <h2 className="font-tight text-[42px] leading-[1.13] tracking-[-1.5px] text-white sm:text-[60px]">
          {t("Ready to take your brand to new heights?")}
        </h2>
        <Button
          href={Routes.Contact}
          variant="filled"
          trailing={<ArrowLongRightIcon className="h-5 w-5" />}
          className="font-tight rounded-[60px] bg-zinc-100 px-7 py-[14px] text-base text-zinc-800 shadow-[0_1px_24px_1px_#444]"
        >
          {t("Schedule a meeting")}
        </Button>
      </div>
    </section>
  );
}
