import Button from "@italodeandra/ui/components/Button";
import RevealMotion from "../../components/RevealMotion";
import Bg from "../layout/Bg";
import Flare from "../layout/Flare";
import { Icon } from "@iconify/react/dist/iconify.js";
import {EnvelopeIcon} from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div className="relative overflow-x-hidden overflow-y-hidden bg-zinc-900/80 pt-20">
      <Flare />
      <Bg className="-top-4" />
      <div className="relative flex w-full flex-col gap-20 pt-20">
        <div className="relative mx-auto flex h-screen w-full max-w-screen-xl flex-col gap-10 px-4">
          <RevealMotion delay={0.25}>
            <div className="z-10 flex flex-col gap-4">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-center font-dm text-3xl font-semibold tracking-[-2.88px] text-transparent md:text-left md:text-5xl">
                Contact us
              </div>
              <div className="max-w-[500px] self-center text-center font-dm text-lg leading-8 text-zinc-400 md:self-start md:text-left md:text-xl">
                Turn challenges into results with our expertise.
              </div>
            </div>
          </RevealMotion>
          <div className="flex w-full flex-col justify-center gap-4 md:flex-row">
            <RevealMotion delay={0.5}>
              <Button
                size="xl"
                className="w-full rounded-xl dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-950/50"
                leading={
                  <Icon
                    icon="mdi:whatsapp"
                    className="h-8 w-8 text-green-400"
                  />
                }
                variant="filled"
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=5516981814643&text&type=phone_number&app_absent=0"
              >
                +55 (16) 98181-4643
              </Button>
            </RevealMotion>
            <RevealMotion delay={0.75}>
              <Button
                size="xl"
                className="w-full rounded-xl dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-950/50"
                leading={
                  <EnvelopeIcon
                    className="h-8 w-8 text-green-400"
                  />
                }
                variant="filled"
                target="_blank"
                href="mailto:cairo@majapi.com"
              >
                cairo@majapi.com
              </Button>
            </RevealMotion>
          </div>
        </div>
      </div>
    </div>
  );
}
