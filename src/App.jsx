import { LazyMotion, domAnimation } from 'motion/react'
import { useContent } from './i18n/language'
import Footer from './components/layout/Footer'
import MobileCta from './components/layout/MobileCta'
import Navbar from './components/layout/Navbar'
import Brands from './components/sections/Brands'
import Contact from './components/sections/Contact'
import Faq from './components/sections/Faq'
import Gallery from './components/sections/Gallery'
import Hero from './components/sections/Hero'
import Location from './components/sections/Location'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import WhyUs from './components/sections/WhyUs'

function App() {
  const content = useContent()

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="relative min-h-svh overflow-x-clip">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-lg"
        >
          {content.ui.skip}
        </a>

        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-48 left-1/2 h-[34rem] w-[52rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute top-[45%] -right-40 size-[26rem] rounded-full bg-accent-2/10 blur-3xl" />
        </div>

        <Navbar />

        <main id="main">
          <Hero />
          <Brands />
          <Services />
          <WhyUs />
          <Gallery />
          <Testimonials />
          <Location />
          <Contact />
          <Faq />
        </main>

        <Footer />
        <MobileCta />
      </div>
    </LazyMotion>
  )
}

export default App
