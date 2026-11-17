import { useContent } from '../../i18n/language'
import { cx } from '../../lib/cx'

export default function Brand({ className, compact = false }) {
  const content = useContent()

  return (
    <a
      href="#home"
      className={cx('group inline-flex shrink-0 items-center gap-2.5', className)}
    >
      <img
        src="/logos/brand.png"
        alt="Sri Sai Electronics"
        className="block h-9 w-auto shrink-0 dark:hidden"
      />
      <img
        src="/logos/brand-dark.png"
        alt="Sri Sai Electronics"
        className="hidden h-9 w-auto shrink-0 dark:block"
      />
      {!compact && (
        <span className="hidden whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.18em] text-muted sm:block lg:hidden xl:block">
          {content.ui.brandTagline}
        </span>
      )}
    </a>
  )
}
