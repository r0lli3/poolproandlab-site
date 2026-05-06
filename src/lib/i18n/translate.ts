// Pure translation logic. No Next.js imports — usable from server, client,
// and tests alike. The server/client wrappers handle locale resolution and
// provider plumbing.

import enMessages from './messages/en.json'
import thMessages from './messages/th.json'
import type { Locale } from './locale'

type Messages = typeof enMessages

const MESSAGE_BUNDLES: Record<Locale, Messages> = {
  en: enMessages,
  th: thMessages as Messages,
}

function resolve(messages: unknown, key: string): unknown {
  let current = messages
  for (const segment of key.split('.')) {
    if (current && typeof current === 'object' && segment in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[segment]
    } else {
      return undefined
    }
  }
  return current
}

function interpolate(template: string, params?: Record<string, string | number>): string {
  if (!params) return template
  return template.replace(/\{(\w+)\}/g, (match, name) => {
    const v = params[name]
    return v === undefined || v === null ? match : String(v)
  })
}

export interface Translator {
  readonly locale: Locale
  t(key: string, params?: Record<string, string | number>): string
}

export function createTranslator(locale: Locale): Translator {
  const primary = MESSAGE_BUNDLES[locale]
  // English is the canonical source. Missing keys in TH fall back to EN
  // so the UI stays usable while translations are filled in.
  const fallback = MESSAGE_BUNDLES['en']

  function t(key: string, params?: Record<string, string | number>): string {
    let value = resolve(primary, key)
    if (typeof value !== 'string') value = resolve(fallback, key)
    if (typeof value !== 'string') {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(`[i18n] missing key: ${key}`)
      }
      return key
    }
    return interpolate(value, params)
  }

  return { locale, t }
}
