import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "@italodeandra/ui/components/Button";
import { motion } from "framer-motion";

export default function WhatsappButton() {
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      animate={{
        scale: [1, 1.2, 1], // Aumenta e diminui de tamanho
        opacity: [0.6, 1], // Pulsa a opacidade
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <Button size="xl" variant="text" icon className="rounded-full">
        <Icon icon="logos:whatsapp-icon" className="h-10 w-10" />
      </Button>
    </motion.div>
  );
}
