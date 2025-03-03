import Logo from "../../Logo";
import Button from "@italodeandra/ui/components/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "@italodeandra/ui/components/Link";
import Routes from "../../../routes";
import { INSTAGRAM_LINK, LINKEDIN_LINK } from "../../../constants";

export default function Footer() {
  return (
    <div className="flex w-full border-t border-zinc-700 bg-zinc-900">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col-reverse items-center justify-between gap-8 px-4 py-20 md:flex-row md:gap-4">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link href="/" className="flex items-center">
            <Logo className="w-32" />
          </Link>
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="text-sm font-normal tracking-[-0.1px]">
              © {new Date().getFullYear()} Majapi Inc. All rights reserved.
            </div>
            <div className="text-sm font-normal tracking-[-0.1px]">
              <Link
                className="text-white no-underline hover:underline dark:hover:decoration-white"
                href={Routes.TermsConditions}
              >
                Terms & Conditions
              </Link>{" "}
              ∙{" "}
              <Link
                className="text-white no-underline hover:underline dark:hover:decoration-white"
                href={Routes.PrivacyPolicy}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden gap-2 md:flex">
          <Button href={Routes.Solutions} variant="text">
            Solutions
          </Button>
          <Button href={Routes.About} variant="text">
            About
          </Button>
          <Button href={Routes.Contact} variant="text">
            Contact
          </Button>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-tight text-xl">Follow us on</div>
          <div className="flex">
            <Button href={LINKEDIN_LINK} target="_blank" variant="text" icon>
              <Icon icon="mdi:linkedin" className="h-10 w-10" />
            </Button>
            <Button href={INSTAGRAM_LINK} target="_blank" variant="text" icon>
              <Icon icon="mdi:instagram" className="h-10 w-10" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
