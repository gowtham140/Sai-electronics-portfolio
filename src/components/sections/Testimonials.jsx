import { Star } from 'lucide-react'
import { useContent } from '../../i18n/language'
import { format } from '../../lib/format'
import Section from '../layout/Section'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import Stars from '../ui/Stars'

export default function Testimonials() {
  const { shop, testimonials, ui } = useContent()
  const heading = ui.sections.reviews

  return (
    <Section id="reviews" className="border-y border-line bg-surface/35">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
        />

        <Reveal delay={0.08} className="shrink-0">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3">
            <span className="grid size-10 place-items-center rounded-xl bg-amber-400/15 text-amber-400">
              <Star size={18} className="fill-amber-400" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-lg leading-none font-semibold text-ink">
                {shop.rating.average}
                <span className="text-sm font-medium text-muted"> / 5</span>
              </p>
              <p className="mt-1.5 text-xs text-muted">
                {format(ui.reviews.from, { count: shop.rating.count })}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((review, index) => (
          <Reveal key={review.name} delay={Math.min(index * 0.05, 0.3)} className="min-w-0">
            <article className="card flex h-full min-w-0 flex-col p-5 sm:p-6">
              <Stars rating={review.rating} />

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                “{review.text}”
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-accent-soft font-display text-sm font-semibold text-accent"
                >
                  {review.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">{review.name}</p>
                  <p className="truncate text-[11px] text-muted">{review.area}</p>
                </div>
                <span className="ml-auto max-w-[50%] shrink-0 truncate rounded-full border border-line bg-elevated px-2 py-1 text-[10px] font-medium text-muted">
                  {review.service}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
