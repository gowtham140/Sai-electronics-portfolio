import { ChevronDown, MessageCircle } from 'lucide-react'
import { useContent } from '../../i18n/language'
import Section from '../layout/Section'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Faq() {
  const { faq, shop, ui } = useContent()
  const heading = ui.sections.faq

  return (
    <Section id="faq" className="pt-4 sm:pt-6">
      <SectionHeading
        eyebrow={heading.eyebrow}
        title={heading.title}
        className="mx-auto max-w-2xl text-center"
        align="center"
      />

      <div className="mx-auto mt-10 grid max-w-3xl gap-2.5">
        {faq.map((item, index) => (
          <Reveal key={item.question} delay={Math.min(index * 0.04, 0.2)}>
            <details className="card group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[15px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  size={17}
                  aria-hidden="true"
                  className="shrink-0 text-muted transition-transform duration-200 ease-out group-open:rotate-180"
                />
              </summary>
              <p className="pt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 text-center text-sm text-muted">
          {ui.faq.stillUnsure}{' '}
          <a
            href={shop.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
          >
            <MessageCircle size={14} aria-hidden="true" />
            {ui.actions.askWhatsApp}
          </a>
        </p>
      </Reveal>
    </Section>
  )
}
