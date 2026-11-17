import { AnimatePresence, m } from 'motion/react'
import { Menu, MessageCircle, Phone, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useContent } from '../../i18n/language'
import { cx } from '../../lib/cx'
import Brand from '../ui/Brand'
import Button from '../ui/Button'
import LanguageToggle from '../ui/LanguageToggle'
import ThemeToggle from '../ui/ThemeToggle'
import Container from './Container'

const sectionIds = ['services', 'why-us', 'work', 'reviews', 'location', 'contact']

export default function Navbar() {
  const content = useContent()
  const { nav, shop, ui } = content
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)
  const triggerRef = useRef(null)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const panel = panelRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || !panel) return

      const focusable = Array.from(
        panel.querySelectorAll('a[href], button:not([disabled])'),
      ).filter((element) => element.offsetParent !== null)

      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    const focusTimer = window.setTimeout(() => {
      panel?.querySelector('a[href]')?.focus()
    }, 80)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      window.clearTimeout(focusTimer)
    }
  }, [open])

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (query.matches) setOpen(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cx(
          'relative z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-200 ease-out',
          scrolled || open
            ? 'border-line bg-bg/80 backdrop-blur-xl'
            : 'border-transparent bg-transparent',
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4">
          <Brand />

          <nav aria-label={ui.nav.primary} className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={cx(
                    'rounded-full px-2.5 py-2 text-sm transition-colors duration-150',
                    isActive
                      ? 'bg-elevated font-medium text-ink'
                      : 'text-muted hover:text-ink',
                  )}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <LanguageToggle />
            <div className="hidden xl:block">
              <Button
                href={shop.whatsappUrl}
                size="icon"
                aria-label={ui.actions.messageWhatsApp}
                title={ui.actions.messageWhatsApp}
              >
                <MessageCircle size={17} aria-hidden="true" />
              </Button>
            </div>
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? ui.nav.closeMenu : ui.nav.openMenu}
              className="press grid size-11 place-items-center rounded-full border border-line bg-surface text-ink lg:hidden"
            >
              {open ? (
                <X size={18} aria-hidden="true" />
              ) : (
                <Menu size={18} aria-hidden="true" />
              )}
            </button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {open && (
          <m.button
            key="menu-backdrop"
            type="button"
            aria-label={ui.nav.closeMenu}
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 cursor-default bg-black/45 backdrop-blur-[2px] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          />
        )}
        {open && (
          <m.div
            key="menu-panel"
            id="mobile-menu"
            ref={panelRef}
            className="fixed inset-x-3 top-[4.25rem] z-50 max-h-[calc(100svh-5.25rem)] overflow-y-auto rounded-2xl border border-line bg-surface p-4 shadow-2xl lg:hidden"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          >
            <nav aria-label={ui.nav.mobile} className="grid gap-1">
              {nav.map((item) => {
                const isActive = active === item.href.slice(1)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? 'true' : undefined}
                    className={cx(
                      'rounded-xl px-3 py-2.5 text-[15px] font-medium transition-colors duration-150',
                      isActive
                        ? 'bg-elevated text-ink'
                        : 'text-muted hover:bg-elevated hover:text-ink',
                    )}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>

            <div className="mt-3 grid gap-2 border-t border-line pt-3">
              <Button href={shop.phoneHref} size="md">
                <Phone size={16} aria-hidden="true" />
                {ui.actions.call} {shop.phone}
              </Button>
              <Button href={shop.whatsappUrl} variant="secondary" size="md">
                <MessageCircle size={16} aria-hidden="true" />
                {ui.actions.messageWhatsApp}
              </Button>
            </div>

            <div className="mt-3 grid gap-2 border-t border-line pt-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-muted">{ui.language.label}</span>
                <LanguageToggle showLabel />
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-muted">{ui.theme.appearance}</span>
                <ThemeToggle />
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
