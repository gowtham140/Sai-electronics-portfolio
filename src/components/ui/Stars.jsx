import { Star } from 'lucide-react'
import { useContent } from '../../i18n/language'
import { cx } from '../../lib/cx'
import { format } from '../../lib/format'

export default function Stars({ rating, size = 14, className }) {
  const content = useContent()

  return (
    <div
      role="img"
      aria-label={format(content.ui.reviews.stars, { rating })}
      className={cx('flex items-center gap-0.5', className)}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={size}
          strokeWidth={1.5}
          aria-hidden="true"
          className={
            index < rating ? 'fill-amber-400 text-amber-400' : 'fill-transparent text-line'
          }
        />
      ))}
    </div>
  )
}
