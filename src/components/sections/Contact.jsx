import { ArrowRight, Clock, Mail, MessageCircle, Phone } from 'lucide-react'
import { useContent } from '../../i18n/language'
import { format } from '../../lib/format'
import Section from '../layout/Section'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function Contact() {
  const { shop, ui } = useContent()
  const heading = ui.sections.contact
  const channelMeta = ui.contact.channels

  const channels = [
    {
      icon: Phone,
      label: channelMeta[0].label,
      value: shop.phone,
      hint: channelMeta[0].hint,
      href: shop.phoneHref,
    },
    {
      icon: MessageCircle,
      label: channelMeta[1].label,
      value: shop.phone,
      hint: channelMeta[1].hint,
      href: shop.whatsappUrl,
    },
    {
      icon: Mail,
      label: channelMeta[2].label,
      value: shop.email,
      hint: channelMeta[2].hint,
      href: `mailto:${shop.email}`,
    },
  ]

  return (
    <Section id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_40px_90px_-60px_rgba(0,0,0,0.5)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-accent/12 blur-3xl"
          />
          <div aria-hidden="true" className="bg-dots absolute inset-0 opacity-40" />

          <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {heading.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                {heading.title}
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                {heading.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={shop.phoneHref} size="lg">
                  <Phone size={17} aria-hidden="true" />
                  {format(ui.contact.callButton, { phone: shop.phone })}
                </Button>
                <Button href={shop.whatsappUrl} variant="secondary" size="lg">
                  <MessageCircle size={17} aria-hidden="true" />
                  {ui.actions.whatsapp}
                </Button>
              </div>

              <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-line bg-elevated/50 p-3.5">
                <Clock size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <p className="text-xs leading-relaxed text-muted">{shop.responseNote}</p>
              </div>
            </div>

            <div className="grid min-w-0 content-start gap-2.5">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center gap-3.5 rounded-2xl border border-line bg-bg/40 p-4 transition-colors duration-200 ease-out hover:border-accent/40 hover:bg-elevated"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                    <channel.icon size={18} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-medium text-muted">
                      {channel.label}
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-semibold text-ink">
                      {channel.value}
                    </span>
                    <span className="mt-0.5 block text-[11px] text-muted">{channel.hint}</span>
                  </span>
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 text-muted transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
