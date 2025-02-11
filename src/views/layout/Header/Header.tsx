import UiHeader from "@italodeandra/ui/components/Header";
import Button from "@italodeandra/ui/components/Button";
import { Bars3BottomLeftIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import UserMenu from "./UserMenu";
import navigationDrawerState from "@italodeandra/ui/components/NavigationDrawer/navigationDrawer.state";
import NextLink from "next/link";
import ModeToggle from "@italodeandra/ui/components/ModeToggle";
import Routes from "../../../routes";

export default function Header({ title }: { title?: string }) {
  return (
    <UiHeader className="gap-2">
      <Button
        icon
        variant="text"
        className="-my-2 -ml-2"
        onClick={navigationDrawerState.toggle}
      >
        <Bars3BottomLeftIcon />
      </Button>
      <NextLink href={Routes.Home} className="ml-3">
        <Image
          src="/icons/favicon.svg"
          width={34}
          height={34}
          alt="Logo"
          quality={100}
        />
      </NextLink>
      {title && <span className="ml-2 text-xl font-medium">{title}</span>}
      <div className="flex-grow" />
      <ModeToggle />
      <UserMenu />
    </UiHeader>
  );
}
