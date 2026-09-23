import Logo from "../../Logo";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Routes from "../../../routes";
import { INSTAGRAM_LINK, LINKEDIN_LINK } from "../../../constants";
import { useTranslation } from "../../../intl/useTranslation";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { Reveal } from "../../home/Reveal";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Footer() {
  const t = useTranslation();

  return (
    <footer className="relative isolate overflow-hidden bg-[#000003] text-white">
      <div className="hero-bottom-fade pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[360px]" />
      <div className="footer-background-texture pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[560px] opacity-80" />
      <div className="footer-bottom-flare pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[470px] opacity-90" />
      <div className="relative z-10">
        <section className="mb-20 flex min-h-[430px] items-start justify-center px-5 pt-24 sm:min-h-[500px] sm:pt-28 lg:min-h-[545px] lg:pt-48">
          <Reveal
            className="flex max-w-[691px] flex-col items-center gap-[34px] text-center"
            viewportAmount={0.35}
          >
            <h2 className="font-tight text-[42px] leading-[1.13] tracking-[-1.5px] text-white sm:text-[60px]">
              {t("Ready to take your brand to")}{" "}
              <span className="whitespace-nowrap">
                <LineShadowText shadowColor="rgba(255, 255, 255, 0.72)">
                  {t("new heights")}
                </LineShadowText>
                ?
              </span>
            </h2>
            <RainbowButton
              href={Routes.Contact}
              size="lg"
              arcadeHover
              hoverText={t("Schedule a meeting")}
              className="font-tight rounded-[60px] px-7 py-[14px] text-base"
            >
              <ArrowLongRightIcon className="relative z-10 h-5 w-5" />
            </RainbowButton>
          </Reveal>
        </section>

        <div className="mx-auto flex w-full max-w-[920px] flex-col items-center justify-between gap-10 px-5 pt-12 pb-10 sm:flex-row sm:items-end sm:py-[58px]">
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <Link href="/" className="flex items-center" aria-label="Majapi">
              <Logo className="w-[116px]" />
            </Link>
            <p className="text-center text-xs font-normal tracking-[-0.1px] text-zinc-400 sm:text-left">
              © {new Date().getFullYear()} Majapi Softwares.{" "}
              {t("All rights reserved.")}
            </p>
          </div>
          <div className="flex flex-col items-center gap-1.5 sm:items-start">
            <div className="text-sm font-normal">{t("Follow us on")}</div>
            <div className="flex gap-1">
              <Button
                href={LINKEDIN_LINK}
                target="_blank"
                variant="text"
                icon
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" className="h-7 w-7" />
              </Button>
              <Button
                href={INSTAGRAM_LINK}
                target="_blank"
                variant="text"
                icon
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" className="h-7 w-7" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
