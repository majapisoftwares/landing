import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "@italodeandra/ui/components/Button";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "../../constants";

export default function WhatsappButton() {
  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <motion.div
          animate={{
            scale: [0.3, 1.4],
            opacity: [0, 0.4, 0],
            filter: ["blur(0px)", "blur(4px)"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full bg-zinc-700/80 backdrop-blur-lg"
        />
        <motion.div
          animate={{
            scale: [0.3, 1.4],
            opacity: [0, 0.4, 0],
            filter: ["blur(0px)", "blur(4px)"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: 0.5,
          }}
          className="absolute inset-0 rounded-full bg-zinc-700/80 backdrop-blur-lg"
        />
        <motion.div
          animate={{
            scale: [0.3, 1.4],
            opacity: [0, 0.4, 0],
            filter: ["blur(0px)", "blur(4px)"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: 1,
          }}
          className="absolute inset-0 rounded-full bg-zinc-700/80 backdrop-blur-lg"
        />
        <Button
          target="_blank"
          href={WHATSAPP_LINK}
          size="xl"
          variant="text"
          icon
          className="z-50 rounded-full dark:hover:bg-transparent dark:active:border-transparent"
        >
          <Icon
            icon="logos:whatsapp-icon"
            className="h-10 w-10 transition-[transform] active:scale-95"
          />
        </Button>
      </div>
    </div>
  );
}
