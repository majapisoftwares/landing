import useUiTranslation from "@majapisoftwares/ui/hooks/useTranslation";
import { useRouter } from "next/router";
import intlPtBr from "./pt-br";

const intl = {
  "pt-BR": intlPtBr,
};

export function useTranslation(prePath?: string) {
  const { locale } = useRouter();
  return useUiTranslation(
    locale ? intl[locale as keyof typeof intl] : undefined,
    prePath,
  );
}
