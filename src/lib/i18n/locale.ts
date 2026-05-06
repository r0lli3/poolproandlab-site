// Cookie-based locale handling. We deliberately don't use URL prefixes
// (/en/..., /th/...) because:
//   1. Existing customer links in LINE messages and SMS would break.
//   2. Pages are mostly static — pre-rendering per-locale gives us nothing
//      that a single-tree render with a translator doesn't.

export const SUPPORTED_LOCALES = ['en', 'th'] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'en'
export const LOCALE_COOKIE_NAME = 'ppl-locale'
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (SUPPORTED_LOCALES as readonly string[]).includes(value)
}

/**
 * Pick a locale from an Accept-Language header. Used as a fallback when no
 * cookie is set yet (first visit). We do a coarse prefix match — `en-GB`
 * counts as `en`, `th-TH` as `th`. Anything else falls through to default.
 */
export function localeFromAcceptLanguage(header: string | null | undefined): Locale {
  if (!header) return DEFAULT_LOCALE
  const parts = header
    .split(',')
    .map((part) => {
      const [tag, ...rest] = part.trim().split(';')
      const q = rest.find((r) => r.startsWith('q='))?.slice(2)
      const qNum = q ? parseFloat(q) : 1
      return { tag: (tag ?? '').toLowerCase(), q: Number.isFinite(qNum) ? qNum : 0 }
    })
    .filter((p) => p.tag)
    .sort((a, b) => b.q - a.q)

  for (const { tag } of parts) {
    const prefix = tag.split('-')[0]
    if (isLocale(prefix)) return prefix
  }
  return DEFAULT_LOCALE
}
