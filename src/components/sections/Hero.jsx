import { ArrowRight, BadgeCheck, BatteryCharging, Cctv, MessageCircle, Navigation, Phone, ShieldCheck, Star, Tv } from 'lucide-react'
import { useContent, useLanguage } from '../../i18n/language'
import { cx } from '../../lib/cx'
import { format } from '../../lib/format'
import Container from '../layout/Container'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

const menuIcons = [Tv, Cctv, BatteryCharging]

export default function Hero() {
  const content = useContent()
  const { language } = useLanguage()
  const { shop, stats, ui } = content
  const hero = ui.hero

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.18fr_0.82fr] lg:gap-10">
        <div className="min-w-0">
          <Reveal>
            <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs leading-snug font-medium text-muted">
              <span className="relative flex size-1.5 shrink-0">
                <span className="absolute inline-flex size-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
              </span>
              <span className="min-w-0">{format(hero.badge, { year: shop.established })}</span>
            </p>

            <h1
              className={cx(
                'mt-6 font-semibold [overflow-wrap:anywhere]',
                language === 'ta'
                  ? 'text-[clamp(1.7rem,4.3vw,2.9rem)] leading-[1.2] tracking-[-0.01em]'
                  : 'text-[clamp(2.35rem,4.6vw,3.5rem)] leading-[1.03] tracking-[-0.045em]',
              )}
            >
              {hero.title1}
              <br />
              {hero.title2}
              <span className="text-gradient">{hero.accent}</span>
              {hero.suffix}
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-lg">
              {shop.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={shop.phoneHref} size="lg">
                <Phone size={17} aria-hidden="true" />
                {ui.actions.call}
              </Button>
              <Button href={shop.whatsappUrl} variant="secondary" size="lg">
                <MessageCircle size={17} aria-hidden="true" />
                {ui.actions.whatsapp}
              </Button>
            </div>

            <a
              href="#location"
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              <Navigation size={15} aria-hidden="true" />
              {ui.actions.getDirections}
              <ArrowRight
                size={14}
                aria-hidden="true"
                className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <dd className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-[1.7rem]">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-xs leading-snug text-muted">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.18} y={18} className="relative mx-auto w-full min-w-0 max-w-md">
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_25%,var(--glow),transparent_72%)] blur-2xl"
          />

          <div className="relative rounded-[1.75rem] border border-line bg-surface p-2.5 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.5)]">
            <div className="overflow-hidden rounded-[1.4rem] border border-line">
              <div className="relative bg-grid bg-bg/70 p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {hero.panelTitle}
                  </p>
                  <span className="rounded-full border border-accent/30 bg-accent-soft px-2 py-0.5 text-[10px] font-semibold text-accent">
                    {hero.walkIns}
                  </span>
                </div>

                <div className="mt-4 grid gap-2">
                  {hero.menu.map((item, index) => {
                    const Icon = menuIcons[index]
                    return (
                      <div
                        key={item.label}
                        className="flex min-w-0 items-center gap-3 rounded-xl border border-line bg-surface/90 p-3"
                      >
                        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                          <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[13px] font-semibold text-ink">
                            {item.label}
                          </span>
                          <span className="block text-[11px] leading-snug text-muted">{item.meta}</span>
                        </span>
                        <BadgeCheck
                          size={15}
                          className="shrink-0 text-accent"
                          aria-hidden="true"
                        />
                      </div>
                    )
                  })}
                </div>

                <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-line bg-surface/90 p-3">
                  <MessageCircle
                    size={15}
                    className="shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <p className="text-[11px] leading-snug text-muted">
                    {hero.notSure}{' '}
                    <a
                      href={shop.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-ink underline decoration-line underline-offset-2 hover:decoration-accent"
                    >
                      {ui.actions.sendPhoto}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 border-t border-line bg-surface px-4 py-3">
                <ShieldCheck size={14} className="text-accent" aria-hidden="true" />
                <p className="text-[11px] text-muted">{hero.warranty}</p>
              </div>
            </div>
          </div>

          <div className="float-slow absolute -top-4 -left-4 hidden items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 shadow-lg sm:flex">
            <Star size={14} className="fill-amber-400 text-amber-400" aria-hidden="true" />
            <span className="font-display text-sm font-semibold text-ink">
              {shop.rating.average}
            </span>
            <span className="text-[11px] text-muted">
              {shop.rating.count} {hero.reviewsSuffix}
            </span>
          </div>

          <div className="float-slower absolute -right-3 -bottom-4 hidden items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 shadow-lg sm:flex">
            <BadgeCheck size={14} className="text-accent" aria-hidden="true" />
            <span className="text-[11px] font-medium text-ink">{hero.genuine}</span>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
