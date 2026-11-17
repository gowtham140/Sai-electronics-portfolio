import { Clock, MapPin, Navigation } from 'lucide-react'
import { useContent } from '../../i18n/language'
import { cx } from '../../lib/cx'
import { format } from '../../lib/format'
import Section from '../layout/Section'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const today = new Date().getDay()

export default function Location() {
  const { fullAddress, hours, shop, ui } = useContent()
  const heading = ui.sections.location

  return (
    <Section id="location">
      <SectionHeading
        eyebrow={heading.eyebrow}
        title={heading.title}
        description={heading.description}
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="h-full">
          <div className="card flex h-full flex-col p-6">
            <div className="flex gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                <MapPin size={18} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-ink">{ui.location.addressTitle}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{fullAddress}</p>
              </div>
            </div>

            <div className="mt-6 border-t border-line pt-5">
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-accent" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-ink">{ui.location.hoursTitle}</h3>
              </div>

              <ul className="mt-3 grid gap-0.5">
                {hours.map((entry) => {
                  const isToday = entry.jsDay === today
                  return (
                    <li
                      key={entry.day}
                      className={cx(
                        'flex items-center justify-between gap-4 rounded-lg px-2.5 py-1.5 text-[13px]',
                        isToday ? 'bg-accent-soft font-medium text-ink' : 'text-muted',
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {isToday && (
                          <span
                            className="size-1.5 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                        )}
                        {entry.day}
                        {isToday && <span className="sr-only">{ui.location.today}</span>}
                      </span>
                      <span className="tabular-nums">{entry.time}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="mt-auto pt-6">
              <Button
                href={shop.directionsUrl}
                variant="secondary"
                size="md"
                className="w-full"
              >
                <Navigation size={15} aria-hidden="true" />
                {ui.location.directions}
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <div className="card relative h-full min-h-[360px] overflow-hidden p-1.5 sm:min-h-[420px]">
            <iframe
              title={format(ui.location.mapTitle, { name: shop.name })}
              src={shop.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full min-h-[350px] w-full rounded-xl border-0 sm:min-h-[408px]"
            />
            <div className="pointer-events-none absolute right-5 bottom-5 hidden rounded-lg border border-line bg-surface/95 px-3 py-2 text-[11px] font-medium text-muted shadow-lg backdrop-blur sm:block">
              {ui.location.landmark}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
