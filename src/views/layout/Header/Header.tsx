import Button from "@italodeandra/ui/components/Button";
import Link from "next/link";
import Logo from "../../Logo";
import { Icon } from "@iconify/react";
import Routes from "../../../routes";
import DropdownMenu from "@italodeandra/ui/components/DropdownMenu";

export default function Header() {
  return (
    <div className="fixed z-20 flex w-full border-b border-zinc-700 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-screen-xl justify-between p-4">
        <Link href="/" className="flex items-center">
          <Logo className="w-32" />
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
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button
                icon
                className="border-none focus:!ring-0 focus:!ring-offset-0 dark:hover:border-none"
              >
                <Icon icon="mdi:menu" className="h-7 w-7" />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item href={Routes.Home}>Home</DropdownMenu.Item>
              <DropdownMenu.Item href={Routes.Solutions}>
                Solutions
              </DropdownMenu.Item>
              <DropdownMenu.Item href={Routes.About}>About</DropdownMenu.Item>
              <DropdownMenu.Item href={Routes.Contact}>
                Contact Us
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
    </div>
  );
}
