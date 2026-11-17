import { useContent } from '../../i18n/language'
import Container from '../layout/Container'

export default function Brands() {
  const { brands, ui } = useContent()

  return (
    <section
      aria-label={ui.brands.label}
      className="border-y border-line bg-surface/40 py-8"
    >
      <Container>
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
          {ui.brands.title}
        </p>

        <div className="marquee-mask relative mt-5 overflow-hidden">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center gap-10 pr-10"
              >
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="font-display text-base font-semibold whitespace-nowrap text-muted sm:text-lg"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
