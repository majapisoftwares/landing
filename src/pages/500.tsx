import Link from "next/link";
import { useTranslation } from "../intl/useTranslation";

export default function Page() {
  const t = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#000003] px-6 text-center text-zinc-100">
      <p className="text-sm text-zinc-400">{t("Error")} 500</p>
      <h1 className="font-tight text-4xl">{t("Something went wrong")}</h1>
      <Link href="/" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950">{t("Back to home")}</Link>
    </main>
  );
}
