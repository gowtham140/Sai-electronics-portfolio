import { MessageCircle, Phone } from 'lucide-react'
import { useContent } from '../../i18n/language'
import Button from '../ui/Button'

export default function MobileCta() {
  const { shop, ui } = useContent()

  return (
    <aside
      aria-label={ui.mobileCta.label}
      className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <Button href={shop.phoneHref} size="md">
          <Phone size={16} aria-hidden="true" />
          {ui.mobileCta.call}
        </Button>
        <Button href={shop.whatsappUrl} variant="secondary" size="md">
          <MessageCircle size={16} aria-hidden="true" />
          {ui.mobileCta.whatsapp}
        </Button>
      </div>
    </aside>
  )
}
