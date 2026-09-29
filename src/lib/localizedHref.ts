export function localizedHref(
  href: string,
  locale: string | undefined,
  defaultLocale: string | undefined,
) {
  const activeLocale = locale ?? defaultLocale;

  if (
    !activeLocale ||
    href === `/${activeLocale}` ||
    href.startsWith(`/${activeLocale}/`)
  ) {
    return href;
  }

  return `/${activeLocale}${href}`;
}
