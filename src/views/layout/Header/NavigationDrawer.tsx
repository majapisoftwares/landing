import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@majapisoftwares/ui/components/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { XMarkIcon } from "@heroicons/react/16/solid";
import Routes from "../../../routes";
import { useTranslation } from "../../../intl/useTranslation";

export default function NavigationDrawer() {
  const t = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-50">
      <Button
        icon
        onClick={toggleDrawer}
        className="border-none focus:ring-0! focus:ring-offset-0! dark:hover:border-none"
      >
        <Icon icon="mdi:menu" className="h-7 w-7" />
      </Button>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 left-0 z-50 h-screen w-screen bg-zinc-900 p-4 shadow-lg"
      >
        <div className="mb-6 flex w-full">
          <Button
            icon
            onClick={toggleDrawer}
            className="border-none focus:ring-0! focus:ring-offset-0! dark:hover:border-none"
          >
            <XMarkIcon className="h-7 w-7" />
          </Button>
        </div>
        <div className="flex flex-col items-end justify-end px-4">
          <Button
            variant="text"
            href={Routes.Home}
            onClick={() => setIsOpen(false)}
            className="font-dm border-0 text-[28px] text-zinc-50"
          >
            {t("Home")}
          </Button>
          <Button
            variant="text"
            href={Routes.About}
            onClick={() => setIsOpen(false)}
            className="font-dm border-0 text-[28px] text-zinc-50"
          >
            {t("About us")}
          </Button>
          <Button
            variant="text"
            href={Routes.Contact}
            onClick={() => setIsOpen(false)}
            className="font-dm border-0 text-[28px] text-zinc-50"
          >
            {t("Contact us")}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
