// Server-side locale resolution + translator factory.
//
// Usage in a server component:
//   const { t, locale } = await getServerT()
//   <h1>{t('hero.title')}</h1>

import { cookies } from 'next/headers'
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  isLocale,
  type Locale,
} from './locale'
import { createTranslator, type Translator } from './translate'

export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const fromCookie = cookieStore.get(LOCALE_COOKIE_NAME)?.value
  if (isLocale(fromCookie)) return fromCookie
  return DEFAULT_LOCALE
}

export async function getServerT(): Promise<Translator> {
  const locale = await getServerLocale()
  return createTranslator(locale)
}

export async function getLang(): Promise<Locale> {
  return getServerLocale()
}

export { DEFAULT_LOCALE }
