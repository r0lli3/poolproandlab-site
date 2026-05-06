'use client'

// Client-side i18n. Receives the current locale from the server (rendered
// once by the layout) and provides a `useT()` hook for client components.

import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { createTranslator, type Translator } from './translate'
import type { Locale } from './locale'

const I18nContext = createContext<Translator | null>(null)

export function I18nProvider({
  locale,
  children,
}: {
  locale: Locale
  children: ReactNode
}) {
  const value = useMemo(() => createTranslator(locale), [locale])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useT(): Translator {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error('useT() must be used inside <I18nProvider>')
  }
  return ctx
}
