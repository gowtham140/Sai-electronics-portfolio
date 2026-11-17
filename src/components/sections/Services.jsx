import { ArrowRight, Check, MessageCircle } from 'lucide-react'
import { useContent } from '../../i18n/language'
import { cx } from '../../lib/cx'
import { icons } from '../../lib/icons'
import Section from '../layout/Section'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Services() {
  const { services, shop, ui } = useContent()
  const heading = ui.sections.services

  return (
    <Section id="services">
      <SectionHeading
        eyebrow={heading.eyebrow}
        title={heading.title}
        description={heading.description}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {services.map((service, index) => {
          const Icon = icons[service.icon]

          return (
            <Reveal key={service.title} delay={Math.min(index * 0.05, 0.3)} className="min-w-0">
              <article
                className={cx(
                  'card card-hover flex h-full min-w-0 flex-col gap-4 p-5 sm:p-6',
                  service.featured && 'border-accent/40',
                )}
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>

                <div className="flex-1">
                  <h3 className="text-[17px] font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 border-t border-line pt-4 text-xs font-medium text-muted">
                  <Check size={14} className="text-accent" aria-hidden="true" />
                  {service.note}
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-line bg-surface/50 p-5 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
              <MessageCircle size={17} aria-hidden="true" />
            </span>
            <div>
              <p className="font-display font-semibold text-ink">{ui.servicesCta.title}</p>
              <p className="mt-1 text-sm text-muted">{ui.servicesCta.text}</p>
            </div>
          </div>
          <Button href={shop.whatsappUrl} variant="secondary" size="sm" className="shrink-0">
            {ui.actions.messageUs}
            <ArrowRight size={14} aria-hidden="true" />
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}
