import { useRouter } from "next/router";
import intlPtBr from "./pt-br";

const intl = {
  "pt-BR": intlPtBr,
};

export function useTranslation(prePath?: string) {
  const { locale } = useRouter();
  const messages = locale ? intl[locale as keyof typeof intl] : undefined;

  return (key: string) => {
    const fullKey = prePath ? `${prePath}.${key}` : key;
    return messages?.[fullKey as keyof typeof messages] ?? key;
  };
}
