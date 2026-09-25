import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "../../Logo";
import Routes from "../../../routes";
import NavigationDrawer from "./NavigationDrawer";
import { useTranslation } from "../../../intl/useTranslation";

export default function Header() {
  const t = useTranslation();

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-2.5 md:top-[38px] md:px-4">
      <nav className="flex h-[60px] w-full max-w-none items-center gap-4 rounded-[67px] border border-zinc-900 bg-[rgba(0,0,0,0.56)] p-3 shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-[10px] md:max-w-[520px] md:rounded-full md:px-4">
        <div className="flex h-9 min-w-0 flex-1 items-center justify-between md:relative md:flex md:w-full md:items-center">
          <Link
            aria-label="Majapi"
            href={Routes.Home}
            className="flex items-center"
          >
            <Logo className="w-[84px]" />
          </Link>
          <div className="hidden items-center gap-8 md:absolute md:left-1/2 md:-translate-x-1/2 md:flex">
            <Link
              className="font-dm text-xs text-zinc-200 transition-colors hover:text-white"
              href={`${Routes.Home}#services`}
            >
              {t("Services")}
            </Link>
            <Link
              className="font-dm text-xs text-zinc-200 transition-colors hover:text-white"
              href={`${Routes.Home}#about`}
            >
              {t("About us")}
            </Link>
            <Link
              className="font-dm text-xs text-zinc-200 transition-colors hover:text-white"
              href={Routes.Cases}
            >
              Cases
            </Link>
          </div>
          <Button
            href={Routes.Contact}
            variant="filled"
            rounded
            className="h-9 rounded-[40px] bg-white px-[13px] py-[9px] font-inter text-[14px] leading-6 font-medium text-zinc-950 shadow-[0_0_0_1px_rgba(26,0,255,0.12)] transition-transform active:scale-[0.96] md:ml-auto md:px-4 md:text-xs"
          >
            {t("Contact")}
          </Button>
        </div>
        <div className="shrink-0 md:hidden">
          <NavigationDrawer />
        </div>
      </nav>
    </header>
  );
}
