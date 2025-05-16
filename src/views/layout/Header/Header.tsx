import Button from "@majapisoftwares/ui/components/Button";
import Link from "next/link";
import Logo from "../../Logo";
import Routes from "../../../routes";
import NavigationDrawer from "./NavigationDrawer";

export default function Header() {
  return (
    <div className="fixed z-50 flex w-full border-b border-zinc-800 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-(--breakpoint-xl) justify-between p-4">
        <Link href="/" className="flex items-center">
          <Logo className="w-30" />
        </Link>
        <div className="hidden gap-4 md:flex">
          <Button
            href={Routes.Solutions}
            variant="text"
            className="font-dm text-white"
          >
            Solutions
          </Button>
          <Button
            href={Routes.About}
            variant="text"
            className="font-dm text-white"
          >
            About
          </Button>
          <Button
            variant="filled"
            href={Routes.Contact}
            className="rounded-[50px] border border-zinc-600 bg-zinc-100 font-dm text-zinc-800"
          >
            Contact Us
          </Button>
        </div>
        <div className="md:hidden">
          <NavigationDrawer />
        </div>
      </div>
    </div>
  );
}
