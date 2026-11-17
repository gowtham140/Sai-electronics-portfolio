import { cx } from '../../lib/cx'

export default function Container({ children, className }) {
  return (
    <div className={cx('mx-auto w-full max-w-6xl px-5 sm:px-8', className)}>{children}</div>
  )
}
