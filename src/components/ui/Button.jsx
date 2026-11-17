import { cx } from '../../lib/cx'

const base =
  'group/button inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold disabled:pointer-events-none disabled:opacity-50'

const variants = {
  primary:
    'border border-transparent bg-accent text-accent-ink shadow-[0_16px_34px_-18px_var(--glow)] hover:brightness-110',
  secondary:
    'border border-line bg-surface text-ink hover:border-accent/50 hover:bg-elevated',
  ghost: 'border border-transparent text-ink hover:bg-elevated',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-[15px]',
  icon: 'size-11 p-0',
}

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  type,
  ...props
}) {
  const Component = href ? 'a' : 'button'
  const external = href?.startsWith('http')

  return (
    <Component
      {...props}
      href={href}
      type={href ? undefined : (type ?? 'button')}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={cx(base, variants[variant], sizes[size], 'press', className)}
    >
      {children}
    </Component>
  )
}
