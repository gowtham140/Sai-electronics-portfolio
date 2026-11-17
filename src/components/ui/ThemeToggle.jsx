import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { useContent } from '../../i18n/language'
import { cx } from '../../lib/cx'

const iconBase =
  'absolute transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none'

export default function ThemeToggle({ className }) {
  const { dark, toggle } = useTheme()
  const content = useContent()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? content.ui.theme.toLight : content.ui.theme.toDark}
      aria-pressed={dark}
      className={cx(
        'press relative grid size-11 shrink-0 place-items-center rounded-full border border-line bg-surface text-muted hover:text-ink',
        className,
      )}
    >
      <Moon
        size={17}
        strokeWidth={1.8}
        className={cx(
          iconBase,
          'rotate-0 scale-100 opacity-100 dark:rotate-90 dark:scale-75 dark:opacity-0',
        )}
      />
      <Sun
        size={18}
        strokeWidth={1.8}
        className={cx(
          iconBase,
          '-rotate-90 scale-75 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100',
        )}
      />
    </button>
  )
}
