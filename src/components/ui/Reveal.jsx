import { m, useReducedMotion } from 'motion/react'

export default function Reveal({ children, className, delay = 0, y = 14 }) {
  const reduce = useReducedMotion()

  return (
    <m.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{
        duration: reduce ? 0.2 : 0.5,
        delay: reduce ? 0 : delay,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      {children}
    </m.div>
  )
}
