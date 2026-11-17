import { Languages } from 'lucide-react'
import { useContent, useLanguage } from '../../i18n/language'
import { cx } from '../../lib/cx'

export default function LanguageToggle({ className, showLabel = false }) {
  const { toggleLanguage } = useLanguage()
  const content = useContent()
  const { display, switchTo } = content.ui.language

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`${display} — ${switchTo}`}
      title={switchTo}
      lang={display === 'EN' ? 'en' : 'ta'}
      className={cx(
        'press inline-flex size-11 shrink-0 items-center justify-center gap-1.5 rounded-full border border-line bg-surface text-[11px] font-semibold text-muted hover:border-accent/50 hover:text-ink',
        showLabel ? 'w-auto px-3 text-xs' : 'xl:w-auto xl:px-3 xl:text-xs',
        className,
      )}
    >
      <Languages size={16} strokeWidth={1.8} aria-hidden="true" className="shrink-0" />
      <span className={showLabel ? 'inline' : 'hidden xl:inline'}>{display}</span>
    </button>
  )
}
