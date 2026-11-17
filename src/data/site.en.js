const establishedYear = 2021
const yearsInBusiness = Math.max(new Date().getFullYear() - establishedYear, 0)

const shop = {
  name: 'Sri Sai Electronics',
  tagline: 'Electronics sales, service & installation you can trust.',
  intro:
    `For over ${yearsInBusiness} years, homes and shops across Tirukkoyilur and nearby areas have trusted Sri Sai Electronics for honest diagnostics, genuine spares and repairs that actually last.`,
  established: establishedYear,
  phone: '+91 95002 60590',
  phoneHref: 'tel:+919500260590',
  whatsapp: '919500260590',
  email: 'hello@saielectronics.in',
  address: {
    line1: 'JSK Complex',
    line2: 'Mela Veedhi',
    city: 'Tirukkoyilur',
    state: 'Tamil Nadu',
    pin: '605757',
  },
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Sri%20Sai%20electronics%20and%20digital%20audios%4011.9676074%2C79.2012035&z=17&output=embed',
  directionsUrl: 'https://maps.app.goo.gl/GnQAwWNsSdFdxXir8',
  rating: { average: 4.8, count: 214 },
  responseNote: 'Most enquiries get a reply within 10 minutes during shop hours.',
  whatsappMessage: 'வணக்கம் ஸ்ரீ சாய் எலக்ட்ரானிக்ஸ்! உங்கள் சர்வீஸ் பற்றி தெரிந்துகொள்ள விரும்புகிறேன்.',
}

shop.whatsappUrl = `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(shop.whatsappMessage)}`

const fullAddress = `${shop.address.line1}, ${shop.address.line2}, ${shop.address.city}, ${shop.address.state} ${shop.address.pin}`

export const en = {
  meta: {
    title: 'Sri Sai Electronics — Sales, Service & Installation in Tirukkoyilur',
    description:
      'Sri Sai Electronics in Tirukkoyilur — LED TV display changes, CCTV camera fitting, lorry and bus speaker setup, home theatre installation, plus appliance, inverter and electrical service. Call or WhatsApp today.',
  },
  shop,
  fullAddress,
  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Why us', href: '#why-us' },
    { label: 'Our work', href: '#work' },
    { label: 'Recent work', href: '#recent-work' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ],
  stats: [
    { value: `${yearsInBusiness}+`, label: 'Years in business' },
    { value: '12k+', label: 'Devices repaired' },
    { value: '4.8/5', label: 'Customer rating' },
    { value: '1 yr', label: 'Repair warranty' },
  ],
  services: [
    {
      icon: 'Tv',
      title: 'LED TV display change & repair',
      description:
        'LED TV display replacement, backlight and panel repairs, with genuine spares fitted at your home.',
      note: 'Same-day diagnosis',
      featured: true,
    },
    {
      icon: 'Cctv',
      title: 'CCTV camera fitting',
      description:
        'HD camera installation, DVR setup and mobile viewing for homes, shops and small offices, with neat cabling.',
      note: 'Free site visit',
    },
    {
      icon: 'Speaker',
      title: 'Lorry & bus speaker setup',
      description:
        'Vehicle speaker, amplifier and wiring fitting for lorries and buses, with clean panel work and a sound check.',
      note: 'Vehicle audio',
    },
    {
      icon: 'Speaker',
      title: 'Home theatre & audio setup',
      description:
        'Soundbars, speakers and home theatre installation with tidy wall mounting and cable routing.',
      note: 'Setup included',
    },
    {
      icon: 'Wrench',
      title: 'Home appliance service',
      description:
        'Washing machines, refrigerators, mixers and microwaves — diagnosed and repaired at your doorstep.',
      note: 'Doorstep service',
    },
    {
      icon: 'BatteryCharging',
      title: 'Inverter & battery',
      description:
        'Sales, installation and battery replacement with a free load calculation for your home.',
      note: 'With warranty',
    },
    {
      icon: 'PlugZap',
      title: 'Electrical fittings',
      description:
        'Wiring, switchboards, fans and lighting upgrades, handled safely by licensed technicians.',
      note: 'Licensed work',
    },
    {
      icon: 'Snowflake',
      title: 'AC installation & service',
      description:
        'Split and window AC installation, gas top-up, deep cleaning and annual maintenance plans.',
      note: 'AMC available',
    },
    {
      icon: 'ShoppingBag',
      title: 'Sales & accessories',
      description:
        'New appliances, certified refurbished units, remotes, mounts, cables and hard-to-find spares.',
      note: 'In-store',
    },
  ],
  brands: [
    'Samsung',
    'LG',
    'Sony',
    'Panasonic',
    'Whirlpool',
    'Havells',
    'Crompton',
    'V-Guard',
    'Philips',
    'Bosch',
  ],
  promises: [
    {
      icon: 'Timer',
      title: 'Same-day diagnosis',
      text: 'Bring it in before 4 pm or book a visit — most issues are identified the same day.',
    },
    {
      icon: 'BadgeCheck',
      title: 'Genuine spares, written warranty',
      text: 'Original or OEM-grade parts, with a one-year warranty on major repairs.',
    },
    {
      icon: 'IndianRupee',
      title: 'Upfront pricing',
      text: 'You approve the estimate before we start. No surprise line items on the bill.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Technicians you can trust',
      text: 'Background-checked staff, uniformed visits and a neat, safe finish every time.',
    },
  ],
  shopPhotos: [
    {
      image: '/images/shop/storefront.svg',
      title: 'Storefront',
      tag: 'The shop',
      alt: 'Dummy photo of the Sri Sai Electronics storefront',
    },
    {
      image: '/images/shop/service-desk.svg',
      title: 'Service desk',
      tag: 'Workbench',
      alt: 'Dummy photo of the service workbench',
    },
    {
      image: '/images/shop/parts-wall.svg',
      title: 'Parts & accessories',
      tag: 'In stock',
      alt: 'Dummy photo of spare parts and accessories on display',
    },
  ],
  servicePhotos: [
    {
      image: '/images/services/tv-repair.svg',
      title: 'Panel-level TV repair',
      tag: 'Service bench',
      alt: 'Dummy photo of a TV panel repair on the bench',
    },
    {
      image: '/images/services/cctv-install.svg',
      title: 'CCTV for a shop front',
      tag: 'Installation',
      alt: 'Dummy photo of a CCTV camera being installed at a shop',
    },
    {
      image: '/images/services/inverter-battery.svg',
      title: 'Inverter & battery setup',
      tag: 'Home install',
      alt: 'Dummy photo of an inverter and battery installation',
    },
    {
      image: '/images/services/home-theatre.svg',
      title: 'Home theatre wiring',
      tag: 'Audio',
      alt: 'Dummy photo of a home theatre setup with speakers',
    },
    {
      image: '/images/services/appliance-visit.svg',
      title: 'Appliance service visit',
      tag: 'Doorstep',
      alt: 'Dummy photo of a technician servicing a washing machine',
    },
    {
      image: '/images/services/switchboard.svg',
      title: 'Switchboard upgrade',
      tag: 'Electrical',
      alt: 'Dummy photo of a switchboard being upgraded',
    },
  ],
  workMedia: [
    {
      type: 'image',
      image: '/media/works/work-01.jpg',
      title: 'Speaker setup',
      tag: 'Audio',
      alt: 'PockSound speakers and amplifiers arranged for testing.',
    },
    {
      type: 'image',
      image: '/media/works/work-02.jpg',
      title: '5.1 home cinema amplifier',
      tag: 'Home theatre',
      alt: 'Powered 5.1 home cinema amplifier on a workbench.',
    },
    {
      type: 'image',
      image: '/media/works/work-03.jpg',
      title: 'Audio installation',
      tag: 'On site',
      alt: 'Audio equipment and cabling during installation work.',
    },
    {
      type: 'image',
      image: '/media/works/work-04.jpg',
      title: '1080p display check',
      tag: 'LED TV',
      alt: 'Display equipment labelled 1080p being checked.',
    },
    {
      type: 'image',
      image: '/media/works/work-05.jpg',
      title: 'Speaker line-up',
      tag: 'Audio',
      alt: 'A row of speakers prepared for fitting.',
    },
    {
      type: 'image',
      image: '/media/works/work-06.jpg',
      title: 'Bench repair',
      tag: 'Service bench',
      alt: 'Electronics being inspected on the service bench.',
    },
    {
      type: 'image',
      image: '/media/works/work-07.jpg',
      title: 'Vehicle audio setup',
      tag: 'Lorry & bus',
      alt: 'Vehicle audio equipment prepared for fitting.',
    },
    {
      type: 'image',
      image: '/media/works/work-08.jpg',
      title: 'Wiring & fitting',
      tag: 'Installation',
      alt: 'Cabling and equipment during a fitting job.',
    },
    {
      type: 'image',
      image: '/media/works/work-09.jpg',
      title: '50-inch display setup',
      tag: 'LED TV',
      alt: 'A 50-inch display and its accessories prepared for setup.',
    },
    {
      type: 'image',
      image: '/media/works/work-10.jpg',
      title: 'Amplifier setup',
      tag: 'Audio',
      alt: 'Bravvo audio amplifier and accessories arranged for setup.',
    },
    {
      type: 'image',
      image: '/media/works/work-11.jpg',
      title: 'X10 audio processor',
      tag: 'Audio setup',
      alt: 'X10 digital audio processor with 5.1 decoder and DSP labelling.',
    },
    {
      type: 'image',
      image: '/media/works/work-12.jpg',
      title: 'Home theatre work',
      tag: 'Home theatre',
      alt: 'Home theatre components being installed.',
    },
    {
      type: 'image',
      image: '/media/works/work-13.jpg',
      title: 'Speaker fitting',
      tag: 'Audio',
      alt: 'Speakers prepared for a customer installation.',
    },
    {
      type: 'video',
      image: '/media/works/work-video-poster.jpg',
      video: '/media/works/work-video.mp4',
      title: 'Installation highlights',
      tag: 'Video',
      alt: 'Short video clip showing recent installation work.',
    },
  ],
  testimonials: [
    {
      name: 'Ravi K.',
      area: 'Tirukkoyilur',
      service: 'Lorry speaker setup',
      rating: 5,
      text: 'They fitted new speakers in my lorry and tidied the old wiring instead of just adding more cable. The sound is clear even on the highway, and they checked everything before handing it back.',
    },
    {
      name: 'Karthik S.',
      area: 'Mela Veedhi',
      service: 'CCTV fitting',
      rating: 5,
      text: 'They planned the camera angles for my shop properly, ran the cables neatly and set up mobile viewing before they left. I can check the shop from home whenever I want.',
    },
    {
      name: 'Meena V.',
      area: 'Kallakurichi',
      service: 'LED TV display change',
      rating: 5,
      text: 'Two other shops told me to buy a new TV. Sri Sai changed the LED display panel for a fraction of the price and the picture looks even and bright again.',
    },
    {
      name: 'Sundar P.',
      area: 'Tirukkoyilur',
      service: 'Bus speaker setup',
      rating: 5,
      text: 'They fitted speakers across the bus and balanced the volume so the passengers at the back can hear clearly. The wiring is hidden properly and the finish looks neat.',
    },
    {
      name: 'Fathima N.',
      area: 'Tirukkoyilur',
      service: 'Home theatre setup',
      rating: 5,
      text: 'They set up our home theatre, mounted the speakers and hid the cables so the hall still looks clean. The sound testing and remote setup were done before they left.',
    },
    {
      name: 'Suresh K.',
      area: 'Nearby area',
      service: 'Electrical work',
      rating: 5,
      text: 'Rewired the switchboard and added two new points without damaging the tiles. The technician explained what he was doing at every step. Will call them again.',
    },
  ],
  hours: [
    { day: 'Monday', short: 'Mon', jsDay: 1, time: '9:00 am – 9:00 pm' },
    { day: 'Tuesday', short: 'Tue', jsDay: 2, time: '9:00 am – 9:00 pm' },
    { day: 'Wednesday', short: 'Wed', jsDay: 3, time: '9:00 am – 9:00 pm' },
    { day: 'Thursday', short: 'Thu', jsDay: 4, time: '9:00 am – 9:00 pm' },
    { day: 'Friday', short: 'Fri', jsDay: 5, time: '9:00 am – 9:00 pm' },
    { day: 'Saturday', short: 'Sat', jsDay: 6, time: '9:00 am – 9:00 pm' },
    { day: 'Sunday', short: 'Sun', jsDay: 0, time: '9:00 am – 2:00 pm' },
  ],
  faq: [
    {
      question: 'Do you repair at home or in the shop?',
      answer:
        'Both. TVs, washing machines, refrigerators and ACs are usually serviced at your home. Small items like mixers, remotes and boards are better diagnosed on our bench — we will tell you which when you call.',
    },
    {
      question: 'Is there a visiting or inspection fee?',
      answer:
        'A small visiting fee applies within Tirukkoyilur, and it is waived when you go ahead with the repair. You will always hear the estimate before any work starts.',
    },
    {
      question: 'Are the spare parts original?',
      answer:
        'We use original parts where the manufacturer supplies them, and OEM-grade equivalents where they do not. Every major repair carries a one-year warranty on the part and the work.',
    },
    {
      question: 'Which areas do you cover?',
      answer:
        'Tirukkoyilur, Mela Veedhi, Kallakurichi and nearby areas. Share your location on WhatsApp and we will confirm the visit slot.',
    },
    {
      question: 'Do you handle CCTV and electrical work for shops?',
      answer:
        'Yes. We do camera layouts, DVR setup, switchboards, lighting and wiring for shops and small offices, and can visit outside shop hours so your business is not disrupted.',
    },
    {
      question: 'Do you fit speakers in lorries and buses?',
      answer:
        'Yes. We fit speakers, amplifiers and wiring in lorries and buses, then check the sound at the vehicle. Bring it to the shop or ask about an on-site visit.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'Cash, UPI, and cards. For larger installations we share a written quote first, and a GST invoice is available on request.',
    },
  ],
  ui: {
    skip: 'Skip to content',
    brandTagline: `Since ${establishedYear} · Tirukkoyilur`,
    nav: {
      primary: 'Primary',
      mobile: 'Mobile',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    theme: {
      appearance: 'Appearance',
      toDark: 'Switch to dark theme',
      toLight: 'Switch to light theme',
    },
    language: {
      label: 'Language',
      switchTo: 'Switch to Tamil',
      display: 'தமிழ்',
    },
    actions: {
      call: 'Call',
      callNow: 'Call now',
      whatsapp: 'WhatsApp',
      messageWhatsApp: 'Message on WhatsApp',
      messageUs: 'Message us',
      getDirections: 'Get directions',
      askWhatsApp: 'Ask us on WhatsApp',
      sendPhoto: 'Send a photo on WhatsApp',
    },
    hero: {
      badge: 'Since {year} · Mela Veedhi, Tirukkoyilur',
      title1: 'Electronics that work.',
      title2: 'Service that ',
      accent: 'lasts',
      suffix: '.',
      panelTitle: 'What we do',
      walkIns: 'Walk-ins welcome',
      menu: [
        { label: 'LED TV display change', meta: 'Same-day diagnosis' },
        { label: 'CCTV camera fitting', meta: 'Free site visit' },
        { label: 'Lorry & bus speakers', meta: 'Sound check included' },
      ],
      notSure: 'Not sure what’s wrong?',
      warranty: '1-year warranty on major repairs · Genuine spares',
      reviewsSuffix: 'reviews',
      genuine: 'Genuine spares',
    },
    brands: {
      label: 'Brands we service',
      title: 'Brands we service & install',
    },
    sections: {
      services: {
        eyebrow: 'Our services',
        title: 'Fix it, fit it, or upgrade it.',
        description:
          'From LED TV display changes and CCTV fitting to lorry, bus and home theatre audio setups, we handle the whole job — and explain it in plain language.',
      },
      why: {
        eyebrow: 'Why Sri Sai Electronics',
        title: 'The difference is in the details.',
        description:
          'Anyone can replace a part. We take the time to find out why it failed, so you are not back on the phone three weeks later.',
      },
      work: {
        eyebrow: 'Our work',
        title: 'Inside the shop and on the job.',
        description:
          'Bench repairs, rooftop installs, wiring upgrades and everything in between. Every job is documented with before-and-after photos for the customer.',
      },
      recentWork: {
        eyebrow: 'Fresh from the field',
        title: 'Recent work, swipe through.',
        description:
          'A quick look at recent speaker, display and home theatre jobs. Swipe or use the arrows; videos start muted and can be unmuted with the controls.',
      },
      reviews: {
        eyebrow: 'Customer feedback',
        title: 'Repairs people talk about.',
        description:
          'A few words from customers across Tirukkoyilur and nearby areas. Feedback shown here is collected in-store and from Google reviews.',
      },
      location: {
        eyebrow: 'Find us',
        title: 'Easy to reach, easy to park.',
        description:
          'Walk in with your device, or book a doorstep visit. Find us at JSK Complex on Mela Veedhi, Tirukkoyilur.',
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Tell us what needs fixing.',
        description:
          'Describe the problem in a call or send a photo on WhatsApp. We will give you an honest estimate and the earliest slot — often the same day.',
      },
      faq: {
        eyebrow: 'Good to know',
        title: 'Questions we get every week.',
      },
    },
    servicesCta: {
      title: 'Not sure what’s wrong?',
      text: 'Send a photo or a short video on WhatsApp. We’ll tell you if it’s worth repairing.',
    },
    why: {
      byNumbers: 'By the numbers',
      trusted: 'Trusted locally',
      quote:
        `We’d rather talk you out of an unnecessary replacement than sell you one. That’s how we have kept customers for ${yearsInBusiness}+ years.`,
      attribution: 'The team at Sri Sai Electronics',
      seeWork: 'See our work',
    },
    work: {
      shopHeading: 'Inside the shop',
      serviceHeading: 'Service work',
    },
    recentWork: {
      previous: 'Previous photo',
      next: 'Next photo',
      slide: 'Work {current} of {total}',
      hint: 'Swipe to explore',
      videoLabel: 'Play recent work video',
    },
    reviews: {
      from: 'From {count} local reviews',
      stars: '{rating} out of 5 stars',
    },
    location: {
      addressTitle: 'Shop address',
      hoursTitle: 'Opening hours',
      today: '(today)',
      directions: 'Get directions',
      landmark: 'Landmark: JSK Complex, Mela Veedhi',
      mapTitle: 'Map showing {name} in Tirukkoyilur',
    },
    contact: {
      callButton: 'Call {phone}',
      channels: [
        { label: 'Call the shop', hint: 'Fastest for urgent repairs' },
        { label: 'WhatsApp', hint: 'Send photos and get an estimate' },
        { label: 'Email', hint: 'Quotes, invoices and AMC plans' },
      ],
    },
    faq: {
      stillUnsure: 'Still unsure?',
    },
    footer: {
      blurb:
        'Honest electronics sales, repair and installation for homes and shops across Tirukkoyilur and nearby areas.',
      explore: 'Explore',
      visit: 'Visit the shop',
      call: 'Call',
      email: 'Email',
      hours: [
        { label: 'Mon – Sat', value: '9:00 am – 9:00 pm' },
        { label: 'Sunday', value: '9:00 am – 2:00 pm' },
      ],
      rights: '© {year} {name}. All rights reserved.',
      gst: 'GST invoice available on request · Tirukkoyilur, Tamil Nadu',
    },
    mobileCta: {
      label: 'Quick contact',
      call: 'Call now',
      whatsapp: 'WhatsApp',
    },
  },
}
