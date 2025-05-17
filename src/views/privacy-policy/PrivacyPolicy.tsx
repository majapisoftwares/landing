import Button from "@majapisoftwares/ui/components/Button";
import Bg from "../layout/Bg";
import Flare from "../layout/Flare";
import { Icon } from "@iconify/react/dist/iconify.js";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function PrivacyPolicy() {
  return (
    <div className="relative overflow-x-hidden overflow-y-hidden bg-zinc-900/80 pt-20">
      <Flare />
      <Bg className="-top-4" />
      <div className="relative flex w-full flex-col gap-20 pt-20">
        <div className="relative mx-auto flex h-screen w-full max-w-(--breakpoint-xl) flex-col gap-10 px-4">
          <div className="z-10 flex flex-col gap-4">
            <div className="font-dm bg-linear-to-br from-zinc-100 to-zinc-400 bg-clip-text text-center text-3xl font-semibold tracking-[-2.88px] text-transparent md:text-left md:text-5xl">
              Privacy Policy
            </div>
            <div className="font-dm max-w-[500px] self-center text-center text-lg leading-8 text-zinc-400 md:self-start md:text-left md:text-xl">
              In case of questions or for assistance regarding the provisions
              contained in this document, please contact the Data Protection
              Officer at the email below.
            </div>
          </div>
          <div className="flex w-full flex-col justify-start gap-4 md:flex-row">
            <Button
              size="xl"
              className="w-full rounded-xl dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-950/50"
              leading={
                <Icon icon="proicons:pdf-2" className="h-8 w-8 text-red-600" />
              }
              variant="filled"
              target="_blank"
              href="/documents/privacy-policy.pdf"
            >
              Privacy Policy
            </Button>
            <Button
              size="xl"
              className="w-full rounded-xl dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-950/50"
              leading={<EnvelopeIcon className="h-8 w-8 text-green-400" />}
              variant="filled"
              target="_blank"
              href="mailto:cairo@majapi.com"
            >
              cairo@majapi.com
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
