import { useContent } from '../../i18n/language'
import Section from '../layout/Section'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function PhotoCard({ photo, index }) {
  return (
    <Reveal delay={Math.min(index * 0.05, 0.3)} className="min-w-0">
      <figure className="photo-card card-hover group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-elevated">
        <img
          src={photo.image}
          alt={photo.alt ?? photo.title}
          width="1200"
          height="900"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 via-black/35 to-transparent"
        />

        <span className="absolute top-3 left-3 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[10px] font-semibold text-white/90 backdrop-blur">
          {photo.tag}
        </span>

        <figcaption className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-sm font-semibold text-white">{photo.title}</p>
        </figcaption>
      </figure>
    </Reveal>
  )
}

export default function Gallery() {
  const { shopPhotos, servicePhotos, ui } = useContent()
  const heading = ui.sections.work

  return (
    <Section id="work">
      <SectionHeading
        eyebrow={heading.eyebrow}
        title={heading.title}
        description={heading.description}
      />

      <div className="mt-12">
        <h3 className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
          {ui.work.shopHeading}
          <span aria-hidden="true" className="h-px flex-1 bg-line" />
        </h3>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {shopPhotos.map((photo, index) => (
            <PhotoCard key={photo.image} photo={photo} index={index} />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
          {ui.work.serviceHeading}
          <span aria-hidden="true" className="h-px flex-1 bg-line" />
        </h3>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicePhotos.map((photo, index) => (
            <PhotoCard key={photo.image} photo={photo} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}
