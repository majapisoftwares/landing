import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Routes from "../../../routes";
import { useTranslation } from "../../../intl/useTranslation";
import Logo from "../../Logo";

export default function NavigationDrawer() {
  const t = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-50">
      <Button
        icon
        onClick={toggleDrawer}
        aria-expanded={isOpen}
        aria-label={isOpen ? t("Close menu") : t("Open menu")}
        className="h-9 w-6 border-none p-0 text-zinc-100 focus:ring-0! focus:ring-offset-0! dark:hover:border-none"
      >
        <Icon icon="lucide:menu" className="h-6 w-6" />
      </Button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scaleY: 0.96 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -3, scaleY: 0.98 }}
            transition={{ type: "tween", duration: 0.3, ease: [0.2, 0, 0, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={t("Main menu")}
            className="fixed top-4 left-1/2 z-[100] w-[calc(100vw-2.5rem)] max-w-[448px] origin-top -translate-x-1/2 rounded-[18px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(13,13,16,0.98),rgba(0,0,3,0.98))] px-3.5 pt-3.5 pb-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.48)] outline-none"
          >
            <div className="flex h-12 w-full items-center gap-3">
              <a
                href={Routes.Home}
                onClick={() => setIsOpen(false)}
                aria-label="Majapi"
                className="flex size-10 shrink-0 items-center justify-center rounded-full text-white"
              >
                <Logo markOnly className="h-7 w-auto" />
              </a>

              <nav
                className="flex min-w-0 flex-1 items-center justify-center gap-[clamp(0.85rem,5vw,2.35rem)]"
                aria-label={t("Main navigation")}
              >
                <a
                  href={`${Routes.Home}#services`}
                  onClick={() => setIsOpen(false)}
                  className="font-dm text-[17px] leading-6 whitespace-nowrap text-zinc-100 transition-colors hover:text-white"
                >
                  {t("Services")}
                </a>
                <a
                  href={`${Routes.Home}#about`}
                  onClick={() => setIsOpen(false)}
                  className="font-dm text-[17px] leading-6 whitespace-nowrap text-zinc-100 transition-colors hover:text-white"
                >
                  {t("About us")}
                </a>
                <a
                  href={Routes.Cases}
                  onClick={() => setIsOpen(false)}
                  className="font-dm text-[17px] leading-6 whitespace-nowrap text-zinc-100 transition-colors hover:text-white"
                >
                  {t("Cases")}
                </a>
              </nav>

              <Button
                icon
                onClick={toggleDrawer}
                aria-label={t("Close menu")}
                className="size-10 shrink-0 border-none p-0 text-zinc-100 focus:ring-0! focus:ring-offset-0! dark:hover:border-none"
              >
                <Icon icon="lucide:x" className="size-8" />
              </Button>
            </div>

            <Button
              variant="filled"
              rounded
              href={Routes.Contact}
              onClick={() => setIsOpen(false)}
              className="mt-4 h-12 w-full rounded-full bg-white px-7 font-[Inter] text-[17px] font-medium text-zinc-950 shadow-[0_0_0_1px_rgba(26,0,255,0.12)] transition-transform active:scale-[0.96]"
            >
              {t("Contact")}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
