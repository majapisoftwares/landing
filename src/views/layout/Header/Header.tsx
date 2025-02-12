import Button from "@italodeandra/ui/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex w-full border-b border-zinc-700 bg-[url('/noise.png')] bg-cover bg-no-repeat">
      <div className="mx-auto flex w-full max-w-screen-xl justify-between bg-transparent px-4 py-4">
        <Link href="/">
          <Image
            src="/logo-majapi.svg"
            width={121}
            height={33}
            alt="Logo Majapi"
            className="max-h-8"
          />
        </Link>
        <div className="flex gap-4">
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
      </div>
    </div>
  );
}
