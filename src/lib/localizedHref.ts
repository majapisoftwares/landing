export function localizedHref(
  href: string,
  locale: string | undefined,
  defaultLocale: string | undefined,
  isLocaleDomain: boolean,
) {
  if (
    isLocaleDomain ||
    !locale ||
    locale === defaultLocale ||
    href === `/${locale}` ||
    href.startsWith(`/${locale}/`)
  ) {
    return href;
  }

  return `/${locale}${href}`;
}
