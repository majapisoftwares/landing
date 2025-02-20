import Button from "@italodeandra/ui/components/Button";
import Link from "next/link";
import Logo from "../../Logo";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Header() {
  return (
    <div className="flex w-full border-b border-zinc-700 bg-transparent">
      <div className="mx-auto flex w-full max-w-screen-xl justify-between bg-transparent px-4 py-4">
        <Link href="/" className="flex items-center">
          <Logo className="max-w-32" />
        </Link>
        <div className="hidden gap-4 md:flex">
          <Button variant="text" className="font-dm text-white">
            About
          </Button>
          <Button variant="text" className="font-dm text-white">
            Solutions
          </Button>
          <Button
            variant="filled"
            className="rounded-[50px] border border-zinc-500 bg-zinc-100 font-dm text-zinc-800"
          >
            Contact Us
          </Button>
        </div>
        <div className="md:hidden">
          <Button icon variant="text" className="text-white">
            <Icon icon="mdi:menu" className="h-7 w-7" />
          </Button>
        </div>
      </div>
    </div>
  );
}
