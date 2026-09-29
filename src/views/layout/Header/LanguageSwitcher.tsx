import { useRouter } from "next/router";
import { setCookie } from "cookies-next/client";

type Locale = "en-US" | "pt-BR";

const locales: Array<{
  code: Locale;
  label: string;
}> = [
  { code: "pt-BR", label: "Português (Brasil)" },
  { code: "en-US", label: "English (United States)" },
];

const localeCookieMaxAge = 60 * 60 * 24 * 365;

function BrazilFlag() {
  return (
    <svg
      aria-hidden="true"
      className="size-5 rounded-[3px]"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h512v512H0z" fill="none" />
      <path
        fill="#fff8f8"
        d="M256 102L20 256l236 154l236-154zm0 54a100 100 0 0 1 100 100a100 100 0 0 1-.504 10.014c-48.123-36.173-110.506-57.542-168.914-56.409c-6.632.13-13.207.566-19.709 1.286A100 100 0 0 1 256 156m-65.568 71.73c55.59.133 116.403 22.059 161.045 57.979A100 100 0 0 1 256 356a100 100 0 0 1-100-100a100 100 0 0 1 3.545-25.943c10.012-1.593 20.354-2.352 30.887-2.327"
      />
    </svg>
  );
}

function UnitedStatesFlag() {
  return (
    <svg
      aria-hidden="true"
      className="size-5 rounded-[3px]"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h32v32H0z" fill="none" />
      <path
        fill="#fff8f8"
        d="M3 7v10h26v-2H17v-2h12v-2H17V9h12V7zm2 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-6 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2M5 14a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2M3 19v2h26v-2zm0 4v2h26v-2z"
      />
    </svg>
  );
}

function Flag({ code }: { code: Locale }) {
  return code === "pt-BR" ? <BrazilFlag /> : <UnitedStatesFlag />;
}

export default function LanguageSwitcher() {
  const router = useRouter();
  const currentLocale = (router.locale ?? "en-US") as Locale;
  const isPortuguese = currentLocale === "pt-BR";

  const handleLocaleChange = (locale: Locale) => {
    if (locale === currentLocale) return;

    setCookie("NEXT_LOCALE", locale, {
      maxAge: localeCookieMaxAge,
      sameSite: "lax",
    });

    void router.push(
      { pathname: router.pathname, query: router.query },
      undefined,
      { locale },
    );
  };

  return (
    <div
      aria-label={isPortuguese ? "Selecionar idioma" : "Select language"}
      className="flex shrink-0 items-center gap-0.5 rounded-full border border-white/15 bg-white/[0.06] p-0.5"
      role="group"
    >
      {locales.map(({ code, label }) => {
        const isSelected = currentLocale === code;

        return (
          <button
            key={code}
            type="button"
            aria-label={label}
            aria-pressed={isSelected}
            title={label}
            onClick={() => handleLocaleChange(code)}
            className={`flex size-8 items-center justify-center rounded-full transition-[background-color,opacity,transform] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-1 focus-visible:ring-offset-black active:scale-[0.96] ${
              isSelected
                ? "bg-white/15 opacity-100"
                : "opacity-55 hover:bg-white/10 hover:opacity-100"
            }`}
          >
            <Flag code={code} />
          </button>
        );
      })}
    </div>
  );
}
