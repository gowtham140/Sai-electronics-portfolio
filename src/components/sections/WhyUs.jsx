import { ArrowRight, Quote } from 'lucide-react'
import { useContent } from '../../i18n/language'
import { icons } from '../../lib/icons'
import Section from '../layout/Section'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function WhyUs() {
  const { promises, stats, ui } = useContent()
  const heading = ui.sections.why

  return (
    <Section id="why-us" className="border-y border-line bg-surface/35">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={heading.eyebrow}
            title={heading.title}
            description={heading.description}
          />

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {promises.map((promise, index) => {
              const Icon = icons[promise.icon]

              return (
                <Reveal key={promise.title} delay={Math.min(index * 0.06, 0.24)}>
                  <div className="flex gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-line bg-surface text-accent">
                      <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-ink">{promise.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {promise.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        <Reveal delay={0.12} y={18}>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-[0_35px_70px_-45px_rgba(0,0,0,0.45)] sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-20 size-64 rounded-full bg-accent/10 blur-3xl"
            />

            <div className="relative flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                {ui.why.byNumbers}
              </p>
              <span className="rounded-full border border-line bg-elevated px-2.5 py-1 text-[10px] font-medium text-muted">
                {ui.why.trusted}
              </span>
            </div>

            <dl className="relative mt-5 grid grid-cols-2 overflow-hidden rounded-2xl border border-line">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-4 sm:p-5 ${index % 2 === 0 ? 'border-r border-line' : ''} ${index < 2 ? 'border-b border-line' : ''}`}
                >
                  <dd className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-[11px] leading-snug text-muted">{stat.label}</dt>
                </div>
              ))}
            </dl>

            <div className="relative mt-5 rounded-2xl border border-line bg-elevated/60 p-5">
              <Quote size={18} className="text-accent" aria-hidden="true" />
              <p className="mt-3 font-display text-[15px] leading-relaxed text-ink">
                “{ui.why.quote}”
              </p>
              <p className="mt-3 text-xs text-muted">{ui.why.attribution}</p>
            </div>

            <a
              href="#work"
              className="group relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
            >
              {ui.why.seeWork}
              <ArrowRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
