'use server'

// Server action invoked by the LocaleToggle. Sets the locale cookie and
// revalidates the layout so server components re-render with the new
// translator.

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { LOCALE_COOKIE_NAME, LOCALE_COOKIE_MAX_AGE, isLocale } from './locale'

export async function setLocaleAction(value: string): Promise<{ ok: boolean }> {
  if (!isLocale(value)) return { ok: false }
  const cookieStore = await cookies()
  cookieStore.set(LOCALE_COOKIE_NAME, value, {
    httpOnly: false,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: LOCALE_COOKIE_MAX_AGE,
  })
  revalidatePath('/', 'layout')
  return { ok: true }
}
