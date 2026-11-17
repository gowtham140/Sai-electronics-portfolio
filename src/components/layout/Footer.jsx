import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useContent } from '../../i18n/language'
import { format } from '../../lib/format'
import Brand from '../ui/Brand'
import Container from './Container'

const year = new Date().getFullYear()

export default function Footer() {
  const content = useContent()
  const { fullAddress, nav, shop, ui } = content
  const footer = ui.footer

  return (
    <footer className="border-t border-line bg-surface/50">
      <Container className="pt-14 pb-28 md:pb-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1.2fr]">
          <div>
            <Brand />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{footer.blurb}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={shop.phoneHref}
                className="press inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-xs font-medium text-muted hover:border-accent/50 hover:text-ink"
              >
                <Phone size={14} aria-hidden="true" />
                {footer.call}
              </a>
              <a
                href={shop.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="press inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-xs font-medium text-muted hover:border-accent/50 hover:text-ink"
              >
                <MessageCircle size={14} aria-hidden="true" />
                {ui.actions.whatsapp}
              </a>
              <a
                href={`mailto:${shop.email}`}
                className="press inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-xs font-medium text-muted hover:border-accent/50 hover:text-ink"
              >
                <Mail size={14} aria-hidden="true" />
                {footer.email}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              {footer.explore}
            </h3>
            <ul className="mt-4 grid gap-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-1.5 text-sm text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              {footer.visit}
            </h3>
            <ul className="mt-4 grid gap-3 text-sm text-muted">
              <li className="flex gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <span>{fullAddress}</span>
              </li>
              <li className="flex gap-2.5">
                <Clock size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  {footer.hours.map((entry) => (
                    <span key={entry.label} className="block">
                      <span className="text-ink">{entry.label}</span> · {entry.value}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <a href={shop.phoneHref} className="transition-colors hover:text-ink">
                  {shop.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <a href={`mailto:${shop.email}`} className="transition-colors hover:text-ink">
                  {shop.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{format(footer.rights, { year, name: shop.name })}</p>
          <p>{footer.gst}</p>
        </div>
      </Container>
    </footer>
  )
}
