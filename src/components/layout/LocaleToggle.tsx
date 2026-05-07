'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { setLocaleAction } from '@/lib/i18n/actions'
import type { Locale } from '@/lib/i18n/locale'

const OPTIONS: ReadonlyArray<{ value: Locale; label: string }> = [
  { value: 'en', label: 'EN' },
  { value: 'th', label: 'TH' },
]

export function LocaleToggle({
  current,
  variant = 'dark',
}: {
  current: Locale
  variant?: 'dark' | 'light'
}) {
  const [pending, startTransition] = useTransition()
  const router = useRouter()

  function pick(next: Locale) {
    if (next === current || pending) return
    startTransition(async () => {
      const r = await setLocaleAction(next)
      if (r.ok) router.refresh()
    })
  }

  const containerClass =
    variant === 'dark'
      ? 'inline-flex items-center rounded-full border border-white/15 bg-white/5 p-0.5 text-[10px]'
      : 'inline-flex items-center rounded-full border border-[oklch(0.91_0.01_220)] bg-white p-0.5 text-xs'

  return (
    <div role="group" aria-label="Language" className={containerClass}>
      {OPTIONS.map((opt) => {
        const isActive = opt.value === current
        const activeClass =
          variant === 'dark'
            ? 'rounded-full bg-[var(--aqua)] px-2.5 py-0.5 font-heading font-[700] text-white'
            : 'rounded-full bg-[var(--navy)] px-3 py-1 font-heading font-[700] text-white'
        const inactiveClass =
          variant === 'dark'
            ? 'rounded-full px-2.5 py-0.5 font-heading text-white/60 hover:text-white disabled:opacity-50'
            : 'rounded-full px-3 py-1 font-heading text-[var(--navy)]/60 hover:text-[var(--navy)] disabled:opacity-50'

        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => pick(opt.value)}
            disabled={pending && !isActive}
            aria-pressed={isActive}
            className={isActive ? activeClass : inactiveClass}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
