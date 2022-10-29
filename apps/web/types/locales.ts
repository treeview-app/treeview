const locales = ['en', 'fr'] as const;
type Locale = typeof locales[number];

const defaultLocale = 'en';

type WithLocale<T> = T & { readonly locale: Locale };

export type { Locale, WithLocale };
export { defaultLocale };
