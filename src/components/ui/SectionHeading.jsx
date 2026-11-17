import { cx } from '../../lib/cx'
import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'left', className }) {
  const centered = align === 'center'

  return (
    <Reveal className={cx(centered && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{title}</h2>
      {description && (
        <p
          className={cx(
            'mt-4 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base',
            centered && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
