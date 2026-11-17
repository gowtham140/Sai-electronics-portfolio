import { animate, m, useMotionValue, useReducedMotion } from 'motion/react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useContent } from '../../i18n/language'
import { cx } from '../../lib/cx'
import Section from '../layout/Section'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function WorkVideo({ item, label, reduce }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined

    video.muted = true

    if (reduce) {
      video.pause()
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.55 },
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
      video.pause()
    }
  }, [reduce])

  return (
    <video
      ref={videoRef}
      src={item.video}
      poster={item.image}
      controls
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={label}
      onPointerDown={(event) => event.stopPropagation()}
      className="absolute inset-0 size-full bg-black object-cover"
    />
  )
}

function WorkCard({ item, index, count, labels, setRef, reduce, offset }) {
  const distance = offset
  const magnitude = Math.min(Math.abs(distance), 2)
  const isActive = distance === 0
  const depth = isActive ? 55 : -40 - magnitude * 16
  const scale = isActive ? 1.04 : 0.95 - Math.max(0, magnitude - 1) * 0.03
  const rotateY = isActive ? 0 : (distance > 0 ? -1 : 1) * (8 + Math.max(0, magnitude - 1) * 2)
  const shiftX = isActive ? 0 : distance > 0 ? -8 : 8
  const opacity = Math.abs(distance) > 2 ? 0.65 : 1

  return (
    <div
      ref={setRef}
      role="group"
      aria-roledescription="slide"
      aria-label={`${item.title} — ${index + 1} / ${count}`}
      style={{ zIndex: isActive ? 30 : 20 - magnitude }}
      className="relative w-[82vw] max-w-[360px] shrink-0 sm:w-[56vw] sm:max-w-[420px] lg:w-[36vw] lg:max-w-[440px] xl:w-[420px]"
    >
      <div
        className="relative will-change-transform"
        style={{
          transform: `translate3d(${shiftX}px, 0, ${depth}px) rotateY(${rotateY}deg) scale(${scale})`,
          transformOrigin: 'center center',
          transformStyle: 'preserve-3d',
          opacity,
          transition: reduce
            ? 'none'
            : 'transform 500ms var(--ease-out), opacity 500ms var(--ease-out)',
        }}
      >
        <figure
          className={cx(
            'photo-card card-hover relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-elevated',
            isActive && 'border-accent/40 shadow-[0_30px_70px_-30px_var(--glow)]',
          )}
        >
          {item.video ? (
            <WorkVideo item={item} label={labels.videoLabel} reduce={reduce} />
          ) : (
            <img
              src={item.image}
              alt={item.alt}
              width="1000"
              height="1250"
              loading={index < 3 ? 'eager' : 'lazy'}
              decoding="async"
              draggable="false"
              className="absolute inset-0 size-full object-cover"
            />
          )}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
          />

          <span className="pointer-events-none absolute top-3 left-3 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[10px] font-semibold text-white/90 backdrop-blur">
            {item.tag}
          </span>

          <span className="pointer-events-none absolute top-3 right-3 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white/80 backdrop-blur">
            {String(index + 1).padStart(2, '0')} / {count}
          </span>

          {item.video && (
            <span className="pointer-events-none absolute inset-0 grid place-items-center">
              <span className="grid size-14 place-items-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur">
                <Play size={20} aria-hidden="true" className="translate-x-px fill-current" />
              </span>
            </span>
          )}

          <figcaption
            className={cx(
              'pointer-events-none absolute inset-x-0 p-4',
              item.video ? 'bottom-12' : 'bottom-0',
            )}
          >
            <p className="text-sm font-semibold text-white sm:text-base">{item.title}</p>
            <p className="mt-1 text-[11px] text-white/70">{labels.hint}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default function RecentWork() {
  const { workMedia, ui } = useContent()
  const heading = ui.sections.recentWork
  const labels = ui.recentWork
  const reduce = useReducedMotion()
  const viewportRef = useRef(null)
  const cardRefs = useRef([])
  const activeRef = useRef(0)
  const x = useMotionValue(0)
  const [metrics, setMetrics] = useState({ step: 0, maxDrag: 0, pages: 1 })
  const [active, setActive] = useState(0)
  const [dragging, setDragging] = useState(false)

  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current
      const first = cardRefs.current[0]
      const second = cardRefs.current[1]
      if (!viewport || !first) return

      const firstRect = first.getBoundingClientRect()
      const step = second
        ? second.getBoundingClientRect().left - firstRect.left
        : firstRect.width + 16
      const perView = Math.max(1, Math.floor((viewport.clientWidth + 8) / step))
      const maxDrag = Math.max(0, (workMedia.length - perView) * step)
      const last = maxDrag > 0 ? Math.round(maxDrag / step) : 0
      const next = Math.min(activeRef.current, last)

      activeRef.current = next
      setActive(next)
      setMetrics({ step, maxDrag, pages: last + 1 })
      x.set(-Math.min(next * step, maxDrag))
    }

    measure()

    const observer = new ResizeObserver(measure)
    if (viewportRef.current) observer.observe(viewportRef.current)
    window.addEventListener('resize', measure)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [workMedia.length, x])

  const goTo = (index) => {
    const last = Math.max(0, metrics.pages - 1)
    const next = Math.max(0, Math.min(index, last))

    activeRef.current = next
    setActive(next)
    animate(
      x,
      -Math.min(next * metrics.step, metrics.maxDrag),
      reduce
        ? { duration: 0 }
        : { type: 'spring', stiffness: 260, damping: 30, mass: 0.75 },
    )
  }

  const onDragEnd = (_, info) => {
    setDragging(false)
    if (!metrics.step) return

    const movement = info.offset.x + info.velocity.x * 0.16
    if (movement < -metrics.step * 0.24) goTo(activeRef.current + 1)
    else if (movement > metrics.step * 0.24) goTo(activeRef.current - 1)
    else goTo(activeRef.current)
  }

  const onKeyDown = (event) => {
    if (event.target instanceof HTMLVideoElement) return

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(activeRef.current - 1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(activeRef.current + 1)
    }
  }

  return (
    <Section id="recent-work" className="border-y border-line bg-elevated/35">
      <SectionHeading
        eyebrow={heading.eyebrow}
        title={heading.title}
        description={heading.description}
      />

      <Reveal className="mt-10">
        <div role="region" aria-roledescription="carousel" aria-label={heading.title}>
          <div
            ref={viewportRef}
            tabIndex={0}
            onKeyDown={onKeyDown}
            className="overflow-hidden rounded-3xl py-12 outline-none [perspective:1200px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:py-14"
          >
            <m.div
              className={cx(
                'flex select-none gap-4 will-change-transform',
                dragging ? 'cursor-grabbing' : 'cursor-grab',
              )}
              style={{ x, touchAction: 'pan-y', transformStyle: 'preserve-3d' }}
              drag="x"
              dragConstraints={{ left: -metrics.maxDrag, right: 0 }}
              dragElastic={reduce ? 0 : 0.08}
              dragMomentum={!reduce}
              dragTransition={{ bounceStiffness: 260, bounceDamping: 30 }}
              onDragStart={() => setDragging(true)}
              onDragEnd={onDragEnd}
            >
              {workMedia.map((item, index) => (
                <WorkCard
                  key={item.image}
                  item={item}
                  index={index}
                  count={workMedia.length}
                  labels={labels}
                  reduce={reduce}
                  offset={index - active}
                  setRef={(node) => {
                    cardRefs.current[index] = node
                  }}
                />
              ))}
            </m.div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <p aria-live="polite" className="text-sm font-medium text-muted">
              {labels.slide
                .replace('{current}', String(active + 1))
                .replace('{total}', String(workMedia.length))}
            </p>

            <div className="flex items-center gap-3">
              <div className="hidden h-1 w-28 overflow-hidden rounded-full bg-line sm:block">
                <m.div
                  className="h-full rounded-full bg-accent"
                  style={{ transformOrigin: 'left' }}
                  animate={{ scaleX: (active + 1) / metrics.pages }}
                  transition={
                    reduce ? { duration: 0 } : { duration: 0.35, ease: [0.23, 1, 0.32, 1] }
                  }
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goTo(activeRef.current - 1)}
                  disabled={active === 0}
                  aria-label={labels.previous}
                  className="press grid size-10 place-items-center rounded-full border border-line bg-surface text-ink disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(activeRef.current + 1)}
                  disabled={active >= metrics.pages - 1}
                  aria-label={labels.next}
                  className="press grid size-10 place-items-center rounded-full border border-line bg-surface text-ink disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
