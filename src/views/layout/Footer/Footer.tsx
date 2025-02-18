import Link from "next/link";
import Logo from "../../logo";

export default function Footer() {
  return (
    <div className="flex w-full border-t border-zinc-700 bg-zinc-900">
      <div className="mx-auto flex w-full max-w-screen-xl justify-between px-4 py-20">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center">
            <Logo className="max-w-32" />
          </Link>
          <div className="flex flex-col gap-2">
            <div className="text-sm font-normal tracking-[-0.1px]">
              © 2025 Majapi Inc. All rights reserved.
            </div>
            <div className="text-sm font-normal tracking-[-0.1px]">
              Terms & Conditions ∙ Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
