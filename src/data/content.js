export const siteConfig = {
  brandName: "ALICE & CO.",
  tagline: "YOUR LOCAL PARTNER IN VIETNAM",
  founder: "Nguyen Thi Thao Uyen (Alice Nguyen)",
  phone: "+84 334 095 326",
  displayPhone: "+84 334 095 326",
  email: "alice.nguyen.lawbiz@gmail.com",
  location: "Ho Chi Minh City, Vietnam",
  address: "Le Van Tho, Go Vap, Ho Chi Minh City, Vietnam",
  mapsUrl: "https://maps.app.goo.gl/VLi6LK91YNqnUdEs6",
  whatsappUrl: "https://wa.me/84334095326",
  viberUrl: "viber://chat?number=%2B84334095326",
  zaloUrl: "https://zalo.me/0334095326",
  driveUrl: "https://drive.google.com/drive/folders/1TJ4mCRzhRtOoEZO81rRpxxqSk8cOySkS",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/#services",
    children: [
      { label: "Vietnam Market Entry", href: "/services/market-entry" },
      { label: "Trade & Sourcing", href: "/services/sourcing" },
      { label: "Local Representation", href: "/services/representation" },
      { label: "Relocation & Housing", href: "/services/relocation" },
      { label: "Local Address & Logistics", href: "/services/local-address" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const heroData = {
  eyebrow: "YOUR LOCAL PARTNER IN VIETNAM",
  titleLine1: "Need Something",
  titleLine2: "Done in Vietnam?",
  titleLine3: "I'll Handle It Locally.",
  subtitle:
    "From business and sourcing to relocation, local support, and everyday tasks — Alice & Co. is your trusted local partner for getting things done in Vietnam.",
  primaryCta: {
    label: "Book a Free Consultation",
    href: "/contact#consultation",
  },
  videoPill: {
    label: "Watch Our Story",
    subtext: "2 min",
    href: "#video",
  },
  trustBadges: [
    {
      icon: "pin",
      title: "Based in",
      subtitle: "Ho Chi Minh City",
    },
    {
      icon: "shield",
      title: "Reliable. Discreet.",
      subtitle: "On-the-ground.",
    },
    {
      icon: "globe",
      title: "International",
      subtitle: "clients",
    },
    {
      icon: "users",
      title: "Personal, hands-on",
      subtitle: "support",
    },
  ],
};

export const challengeData = {
  eyebrow: "THE CHALLENGE",
  heading: "Being in Vietnam shouldn't mean figuring everything out alone.",
  description:
    "Whether you're starting a business, looking for a reliable supplier, planning a business trip, relocating to Ho Chi Minh City, or simply need someone you can trust locally — I'm here to help.",
  cta: {
    label: "Let's Talk About Your Needs",
    href: "/contact#consultation",
  },
  painPoints: [
    { text: "Starting a business in Vietnam", icon: "building" },
    { text: "Finding a reliable supplier", icon: "search" },
    { text: "Coming for a business trip", icon: "briefcase" },
    { text: "Moving to Ho Chi Minh City", icon: "map-pin" },
    { text: "Dealing with local partners", icon: "handshake" },
    { text: "Sending/receiving mail & packages", icon: "mail" },
    { text: "Simply needing a trusted local contact", icon: "user-check" },
  ],
  image: "/images/AnhSanPham8.webp",
};

export const servicesData = {
  eyebrow: "WHAT CAN I HANDLE FOR YOU?",
  heading: "Five core services. One trusted partner.",
  items: [
    {
      id: "01",
      number: "01",
      title: "Vietnam Market Entry",
      bgImage: "/images/service_business.jpg",
      checklist: [
        "Market research",
        "Company setup",
        "Business licensing",
        "Recruitment",
        "Office search",
        "Business development",
      ],
      href: "/services/market-entry",
    },
    {
      id: "02",
      number: "02",
      title: "Trade & Sourcing",
      bgImage: "/images/service_trade.jpg",
      checklist: [
        "Supplier sourcing",
        "Factory verification",
        "Procurement support",
        "Quality inspection",
        "Trade support",
      ],
      href: "/services/sourcing",
    },
    {
      id: "03",
      number: "03",
      title: "Local Representation",
      bgImage: "/images/thumb_meeting.jpg",
      checklist: [
        "Attend meetings",
        "Visit factories",
        "Meet suppliers",
        "Local negotiation",
        "Project follow-up",
        "Business travel support",
      ],
      href: "/services/representation",
    },
    {
      id: "04",
      number: "04",
      title: "Relocation & Housing",
      bgImage: "/images/service_relocation.jpg",
      checklist: [
        "Find a home",
        "Property viewings",
        "Negotiation support",
        "Move-in assistance",
        "Settling in",
        "Ongoing support",
      ],
      href: "/services/relocation",
    },
    {
      id: "05",
      number: "05",
      title: "Local Address & Logistics",
      bgImage: "/images/AnhSanPham9.webp",
      checklist: [
        "Local address",
        "Mail receiving",
        "Package receiving",
        "Short-term storage",
        "Sending & forwarding",
        "Logistics support",
      ],
      href: "/services/local-address",
    },
  ],
};

export const differentiatorData = {
  eyebrow: "THE BIG DIFFERENTIATOR",
  heading: "Instead of hiring multiple people...",
  subtext:
    "You don't need to work with a lawyer, consultant, sourcing agent, interpreter, project coordinator, real estate agent and assistant separately.",
  roles: [
    { label: "A lawyer", icon: "scale" },
    { label: "A business consultant", icon: "briefcase" },
    { label: "A sourcing agent", icon: "search" },
    { label: "An interpreter", icon: "message-square" },
    { label: "A project coordinator", icon: "git-commit" },
    { label: "A real estate agent", icon: "home" },
    { label: "A personal assistant", icon: "user" },
  ],
  solutionTitle: "You have one trusted local partner.",
  solutionTagline: "Less hassle. More peace of mind.",
};

export const whyAliceData = {
  eyebrow: "WHY ALICE & CO.?",
  heading: "Local Expertise. International Standards.",
  scriptText: "Your Local Partner in Vietnam",
  portraitImage: "/images/AnhSanPham8.webp",
  watermarkImage: "/images/saigon_cityhall.jpg",
  pillars: [
    {
      title: "Legal Background",
      description: "Understanding contracts, procedures and local requirements.",
      icon: "scale",
    },
    {
      title: "Business Mindset",
      description: "Get things done properly, with practical solutions.",
      icon: "chart",
    },
    {
      title: "International Experience",
      description: "Smooth communication with global clients.",
      icon: "globe",
    },
    {
      title: "Local Network",
      description: "Trusted partners, suppliers, landlords and service providers.",
      icon: "network",
    },
    {
      title: "Clear Communication",
      description: "I handle coordination locally, so you don't have to worry.",
      icon: "chat",
    },
  ],
};

export const executionData = {
  eyebrow: "ON THE GROUND IN HO CHI MINH CITY",
  heading: "Real People. Real Execution.",
  description:
    "I work directly with suppliers, partners, officials and local teams to make sure your plans are executed with precision and care.",
  cta: {
    label: "See How I Work",
    href: "/about",
  },
  mainImage: "/images/AnhSanPham6.webp",
  thumbnails: [
    { image: "/images/thumb_workshop.jpg", title: "Factory floor & production verification" },
    { image: "/images/thumb_coffee.jpg", title: "Strategic advisory meeting", position: "center 22%" },
    { image: "/images/thumb_meeting.jpg", title: "Commercial negotiation" },
  ],
};

export const targetAudienceData = {
  eyebrow: "WHO IS THIS FOR?",
  heading: "I help people who need a trusted person in Vietnam.",
  segments: [
    {
      title: "Businesses",
      items: ["Foreign companies", "Investors", "Entrepreneurs", "Sourcing teams"],
      icon: "business",
    },
    {
      title: "Relocation",
      items: ["Expats", "Professionals", "Families", "New residents"],
      icon: "pin",
    },
    {
      title: "Visiting Vietnam",
      items: ["Executives", "Business travelers", "International visitors"],
      icon: "plane",
    },
    {
      title: "Local Support",
      items: ["Anyone who needs reliable help getting things done locally."],
      icon: "support",
    },
  ],
  // Swap for a generated Saigon City Hall illustration when available
  landmarkImage: "/images/saigon_cityhall.jpg",
};

export const consultationCardData = {
  eyebrow: "START WITH A",
  heading: "FREE CONSULTATION",
  features: [
    { text: "30-minute consultation", icon: "clock" },
    { text: "Understand your needs", icon: "check-circle" },
    { text: "Practical recommendations", icon: "compass" },
    { text: "Discuss the right solution", icon: "lightbulb" },
  ],
  cta: {
    label: "Book a Free Consultation",
    href: "/contact#consultation",
  },
  bgImage: "/images/AnhSanPham.png",
};

export const riskReversalData = {
  heading: "Not sure what you need yet? That's okay.",
  description:
    "Just tell me where you are, what you're trying to do and what you're struggling with — I'll help you figure out the right solution.",
  cta: {
    label: "Let's Talk",
    href: "/contact#consultation",
  },
};

export const finalCtaData = {
  eyebrow: "READY TO MAKE VIETNAM EASIER?",
  heading: "Let's make it happen together.",
  subtext: "One trusted local partner. Less hassle. More peace of mind.",
  cta: {
    label: "Book a Free Consultation",
    href: "/contact#consultation",
  },
  bgImage: "/images/AnhSanPham7.webp",
};

export const footerData = {
  brandName: "ALICE & CO.",
  tagline: "YOUR LOCAL PARTNER IN VIETNAM",
  blurb: "Practical solutions. Local execution. Your trusted partner in Vietnam.",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Vietnam Market Entry", href: "/services/market-entry" },
    { label: "Trade & Sourcing", href: "/services/sourcing" },
    { label: "Local Representation", href: "/services/representation" },
    { label: "Relocation & Housing", href: "/services/relocation" },
    { label: "Local Address & Logistics", href: "/services/local-address" },
    { label: "Contact", href: "/contact" },
  ],
  contacts: {
    location: "Ho Chi Minh City, Vietnam",
    phone: "+84 334 095 326",
    channels: "(WhatsApp · Viber · Zalo)",
    email: "alice.nguyen.lawbiz@gmail.com",
    mapsUrl: "https://maps.app.goo.gl/VLi6LK91YNqnUdEs6",
    mapsQuery: "Ho Chi Minh City, Vietnam",
  },
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { name: "Email", href: "mailto:alice.nguyen.lawbiz@gmail.com", icon: "email" },
  ],
  copyright: "© 2026 Alice & Co. All rights reserved.",
};

// ── About page ───────────────────────────────────────────────────────────────
// Image paths are placeholders from the existing library — swap for dedicated
// portraits of Alice and a Ha Long Bay shot when available.
export const aboutData = {
  hero: {
    eyebrow: "ABOUT ALICE & CO.",
    headingTop: "Bridging Global Ambitions",
    headingAccent: "with Local Expertise.",
    description:
      "I help international individuals and businesses navigate Vietnam with confidence through practical solutions, local knowledge, and on-the-ground support.",
    cta: { label: "Book a Free Consultation", href: "/contact#consultation" },
    image: "/images/AnhSanPham.png",
    scriptLine1: "Your Local Partner",
    scriptLine2: "in Vietnam",
    signature: "Alice",
  },
  story: {
    eyebrow: "MY STORY",
    headingTop: "From Global Experience",
    headingBottom: "to Local Impact.",
    paragraphs: [
      "I'm Alice, the founder of Alice & Co. After years of working in international business and living in Vietnam, I saw how challenging it can be for global clients to navigate a new market — from regulations and local networks to day-to-day operations.",
      "That's why I founded Alice & Co. — to be a trusted local partner who understands both global standards and Vietnam's unique realities, providing practical, reliable, and personalized support.",
    ],
    signature: "Alice",
    role: "Founder, Alice & Co.",
    image: "/images/AnhSanPham9.webp",
    imagePosition: "15% center",
    quote: "I enjoy turning complex situations into simple, workable solutions for my clients.",
    quoteAuthor: "ALICE",
    quoteRole: "Founder, Alice & Co.",
  },
  mission: {
    eyebrow: "OUR MISSION",
    heading: "To Make Your Journey in Vietnam Simpler, Safer and More Successful.",
    description:
      "We exist to bridge the gap between international expectations and local realities, providing hands-on support so you can focus on your goals with confidence.",
    pillars: [
      { title: "Practical Solutions", description: "Real support for real situations.", icon: "handshake" },
      { title: "Local Expertise", description: "Deep knowledge and trusted networks.", icon: "users" },
      { title: "Your Trusted Partner", description: "Committed to long-term success.", icon: "shield" },
      { title: "Global Mindset", description: "Understanding your international perspective.", icon: "globe" },
    ],
  },
  values: {
    eyebrow: "OUR VALUES",
    headingTop: "The Principles",
    headingBottom: "That Guide Us.",
    items: [
      { title: "Integrity", description: "Honest advice and transparent communication.", icon: "scale" },
      { title: "Client-Focused", description: "Your goals always come first.", icon: "target" },
      { title: "Reliability", description: "On-the-ground support you can count on.", icon: "badge" },
      { title: "Long-Term Partnership", description: "Building lasting relationships, not just one-time projects.", icon: "link" },
    ],
  },
  howIWork: {
    eyebrow: "HOW I WORK",
    headingTop: "Personalized Support",
    headingBottom: "from Start to Success.",
    description:
      "I take the time to understand your goals, listen to your needs, and design practical solutions tailored to your situation. With local knowledge and a trusted network, I provide hands-on support at every step — from planning to execution and beyond.",
    caption: "More than a service provider — a true local partner.",
    cta: { label: "Let's Work Together", href: "/contact#consultation" },
    image: "/images/AnhSanPham8.webp",
  },
  vision: {
    eyebrow: "A LONG-TERM VISION",
    headingTop: "Growing Together",
    headingBottom: "in Vietnam.",
    description:
      "I'm committed to supporting your journey today and in the long run — helping you build opportunities, create value, and achieve sustainable success in Vietnam.",
    image: "/images/AnhSanPham7.webp",
  },
};

// ── Contact page ─────────────────────────────────────────────────────────────
export const contactData = {
  hero: {
    eyebrow: "CONTACT",
    headingTop: "Let's Discuss Your Plans",
    headingAccent: "in Vietnam.",
    description:
      "Whether you're exploring opportunities, planning a move, or need local support — I'm here to help. Get in touch and let's find the right solution for you.",
    image: "/images/AnhSanPham8.webp",
    scriptLine1: "Your Local Partner",
    scriptLine2: "in Vietnam",
  },
  form: {
    eyebrow: "SEND A MESSAGE",
    heading: "Book a Free Consultation",
    description: "Tell me about your needs, and I'll get back to you as soon as possible — usually within 24 hours.",
    interests: [
      "Vietnam Market Entry",
      "Trade & Sourcing",
      "Local Representation",
      "Relocation & Housing",
      "Local Address & Logistics",
      "Something else / Not sure yet",
    ],
    submitLabel: "Send Message",
    privacyNote: "Your information is kept confidential and will only be used to respond to your inquiry.",
  },
  info: {
    eyebrow: "OTHER WAYS TO REACH ME",
    heading: "Contact Information",
    description: "Feel free to reach out through any of the channels below. I'm always happy to connect.",
    items: [
      { icon: "pin", title: "Location", lines: ["Ho Chi Minh City, Vietnam", "(Serving clients locally and internationally)"] },
      { icon: "phone", title: "Phone / WhatsApp / Viber / Zalo", lines: ["+84 334 095 326"], href: "https://wa.me/84334095326" },
      { icon: "mail", title: "Email", lines: ["alice.nguyen.lawbiz@gmail.com"], href: "mailto:alice.nguyen.lawbiz@gmail.com" },
      { icon: "clock", title: "Working Hours", lines: ["Mon – Fri: 8:00 – 18:00 (GMT+7)", "Sat: 8:00 – 12:00 (GMT+7)", "(Responses usually within 24 hours)"] },
    ],
  },
  location: {
    eyebrow: "FIND US",
    headingTop: "Our Location",
    headingBottom: "in Ho Chi Minh City",
    description:
      "I'm based in Ho Chi Minh City and work directly on the ground with trusted partners, suppliers, officials, and local teams.",
    mapsQuery: "Ho Chi Minh City, Vietnam",
    supportImage: "/images/service_business.jpg",
    supportCaptionTitle: "On-the-ground support",
    supportCaptionText: "for real results.",
    cityImage: "/images/saigon_cityhall.jpg",
    cityCaption: "Strategically located in the heart of Ho Chi Minh City to provide fast, reliable, and hands-on support.",
  },
  faq: {
    eyebrow: "FREQUENTLY ASKED QUESTIONS",
    heading: "Quick Answers",
    description: "Not sure what you need yet? Here are some common questions.",
    items: [
      {
        q: "Is the consultation really free?",
        a: "Yes. The first 30-minute consultation is completely free, with no obligation. We'll talk through your situation and I'll suggest practical next steps.",
      },
      {
        q: "What happens after I send the form?",
        a: "I personally review every message and reply within 24 hours (business days) to schedule a call at a time that suits your time zone.",
      },
      {
        q: "Can I discuss multiple services?",
        a: "Absolutely. Many clients combine business setup, sourcing and relocation — we can cover everything in one conversation and plan it together.",
      },
      {
        q: "Do you work with international clients?",
        a: "Yes — most of my clients are foreign companies, investors and expats. I work in English and coordinate locally on your behalf, wherever you are.",
      },
    ],
  },
};

// ── Service detail pages (/services/[slug]) ──────────────────────────────────
// Sub-services follow the client brief (docs/description_alice.docx). Each offering can
// take an optional `image` to render a photo header on its card.
const serviceWhyAlice = {
  eyebrow: "WHY ALICE & CO.?",
  headingTop: "Your Trusted Local Partner",
  headingBottom: "in Vietnam.",
  description:
    "With local knowledge, a trusted network, and international experience, I provide practical solutions and hands-on support to help you succeed in Vietnam.",
  pillars: [
    { icon: "users", title: "Local Expertise", description: "Deep understanding of local procedures and business culture." },
    { icon: "pin", title: "On-the-Ground Support", description: "Real execution, not just advice." },
    { icon: "chat", title: "Clear Communication", description: "Smooth and transparent updates at every step." },
    { icon: "link", title: "Long-Term Partnership", description: "Ongoing support as your business grows." },
  ],
};

export const servicePages = [
  {
    slug: "market-entry",
    title: "Vietnam Market Entry",
    metaDescription:
      "Market research, company setup, business licensing, office search, recruitment, legal and business development — enter Vietnam with a trusted local partner.",
    hero: {
      eyebrow: "VIETNAM MARKET ENTRY",
      headingTop: "Enter Vietnam",
      headingAccent: "with Confidence.",
      description:
        "From market research to company setup, licensing, and operational support — I help you establish and grow your business in Vietnam with local expertise and hands-on execution.",
      image: "/images/AnhSanPham7.webp",
      imagePosition: "68% 20%",
      imageAlt: "Ho Chi Minh City skyline and Landmark 81 at twilight",
    },
    intro: {
      eyebrow: "WHY ENTER VIETNAM?",
      headingTop: "A Market Full",
      headingBottom: "of Opportunities.",
      description:
        "Vietnam offers a dynamic economy, a young and skilled workforce, and a strategic location in Southeast Asia. With the right partner, you can enter this market with clarity and confidence — avoiding common pitfalls and saving valuable time.",
      cta: "Let's Discuss Your Plans",
      image: "/images/AnhSanPham.png",
      imageAlt: "Saigon River and the Ho Chi Minh City skyline at sunset",
      highlights: [
        { icon: "trend", text: "Stable economic growth" },
        { icon: "globe", text: "Strategic location in Southeast Asia" },
        { icon: "users", text: "Young and skilled workforce" },
        { icon: "cart", text: "Growing consumer market" },
      ],
    },
    offerings: {
      eyebrow: "WHAT I CAN HELP WITH",
      headingTop: "Comprehensive Support",
      headingBottom: "for Your Market Entry.",
      description:
        "I provide end-to-end support tailored to your business goals, so you can focus on your core business while I handle the local details.",
      items: [
        { icon: "chart", title: "Market Research", description: "Understand market trends, competitors, and opportunities." },
        { icon: "document", title: "Company Setup", description: "Choose the right structure and handle the full registration process." },
        { icon: "shield", title: "Business Licensing", description: "Obtain the necessary licenses and stay compliant with local regulations." },
        { icon: "building", title: "Office Search", description: "Find and secure the right office space for your business." },
        { icon: "users", title: "Recruitment Support", description: "Connect with local talent and build your team." },
        { icon: "scale", title: "Legal & Compliance", description: "Work with trusted legal partners to reduce risk." },
        { icon: "handshake", title: "Business Development", description: "Identify partners, meet clients, and explore growth opportunities." },
      ],
    },
    process: {
      eyebrow: "HOW IT WORKS",
      heading: "A Clear Process. Real Progress.",
      description: "I keep the process transparent, efficient, and tailored to your specific goals.",
      steps: [
        { icon: "chat", title: "Understand", description: "Your goals, needs and timeline." },
        { icon: "document", title: "Plan", description: "The best approach and solution." },
        { icon: "gear", title: "Execute", description: "Handle on-the-ground tasks with care." },
        { icon: "users", title: "Coordinate", description: "Work with local partners and keep you updated." },
        { icon: "chart", title: "Grow", description: "Ongoing support for your next steps." },
      ],
    },
    cta: {
      eyebrow: "READY TO ENTER VIETNAM?",
      heading: "Let's Make It Happen.",
      subtext: "Book a free 30-minute consultation to discuss your goals and find the right approach for your business.",
    },
  },
  {
    slug: "sourcing",
    title: "Trade & Sourcing",
    metaDescription:
      "Supplier sourcing, factory verification, procurement, quality inspection and trade support in Vietnam — on-site, by someone who is actually there.",
    hero: {
      eyebrow: "TRADE & SOURCING",
      headingTop: "Source in Vietnam",
      headingAccent: "with Certainty.",
      description:
        "From finding the right suppliers to verifying factories, managing procurement and inspecting quality — I am your eyes and hands on the ground, so every order meets your standards.",
      image: "/images/AnhSanPham6.webp",
      imagePosition: "55% 30%",
      imageAlt: "On-site warehouse inspection with a supplier team in Vietnam",
    },
    intro: {
      eyebrow: "WHY SOURCE FROM VIETNAM?",
      headingTop: "A Rising Hub",
      headingBottom: "for Global Supply.",
      description:
        "Vietnam has become a leading manufacturing alternative in Asia — competitive costs, skilled labour and expanding trade agreements. The challenge is knowing which suppliers you can truly rely on. That's where on-site verification makes the difference.",
      cta: "Let's Discuss Your Sourcing",
      image: "/images/AnhSanPham5.png",
      imageAlt: "Factory verification visit with production managers in Vietnam",
      highlights: [
        { icon: "factory", text: "Diverse manufacturing base" },
        { icon: "trend", text: "Competitive production costs" },
        { icon: "globe", text: "Extensive free trade agreements" },
        { icon: "ship", text: "Strong export logistics" },
      ],
    },
    offerings: {
      eyebrow: "WHAT I CAN HELP WITH",
      headingTop: "Reliable Sourcing,",
      headingBottom: "From Search to Shipment.",
      description:
        "I take care of the parts that are hard to manage from abroad — finding, checking and following up with suppliers in person.",
      items: [
        { icon: "search", title: "Supplier Sourcing", description: "Identify and shortlist qualified suppliers that match your product and volume." },
        { icon: "factory", title: "Factory Verification", description: "Visit factories in person to confirm capacity, legitimacy and working conditions." },
        { icon: "cart", title: "Procurement", description: "Manage quotes, samples, negotiation and purchase orders on your behalf." },
        { icon: "check", title: "Quality Inspection", description: "Inspect production and finished goods before they leave the factory." },
        { icon: "ship", title: "Trade Support", description: "Coordinate documents, logistics partners and export preparation." },
      ],
    },
    process: {
      eyebrow: "HOW IT WORKS",
      heading: "From Brief to Delivery.",
      description: "A transparent sourcing process with on-site checks at every critical step.",
      steps: [
        { icon: "chat", title: "Brief", description: "Your product, specs, budget and volume." },
        { icon: "search", title: "Source", description: "Research and shortlist the right suppliers." },
        { icon: "factory", title: "Verify", description: "On-site factory visits and audits." },
        { icon: "handshake", title: "Negotiate", description: "Pricing, terms and sample approval." },
        { icon: "check", title: "Inspect & Ship", description: "Quality checks and shipment follow-up." },
      ],
    },
    cta: {
      eyebrow: "READY TO SOURCE FROM VIETNAM?",
      heading: "Let's Find the Right Suppliers.",
      subtext: "Book a free 30-minute consultation to discuss your products, standards and timeline.",
    },
  },
  {
    slug: "representation",
    title: "Local Representation",
    metaDescription:
      "Local representation and business travel support in Vietnam — meetings, factory visits, negotiation, interpretation and project follow-up on your behalf.",
    hero: {
      eyebrow: "LOCAL REPRESENTATION",
      headingTop: "Your Presence in Vietnam,",
      headingAccent: "Even When You're Not Here.",
      description:
        "I attend meetings, visit factories, meet suppliers, negotiate locally and follow up on your projects — and when you do travel, I make sure every business trip runs smoothly.",
      image: "/images/AnhSanPham8.webp",
      imagePosition: "0% center",
      imagePositionMobile: "30% center",
      imageAlt: "Alice representing a client in a meeting in Ho Chi Minh City",
    },
    intro: {
      eyebrow: "WHY LOCAL REPRESENTATION?",
      headingTop: "Someone You Trust,",
      headingBottom: "Right Where It Matters.",
      description:
        "Distance, language and time zones make it hard to manage projects in Vietnam from abroad. Having a trusted representative on the ground means decisions move faster, details are not lost, and you always know what is really happening.",
      cta: "Let's Discuss Your Needs",
      image: "/images/service_business.jpg",
      imageAlt: "Modern office corridor in Ho Chi Minh City",
      highlights: [
        { icon: "pin", text: "Physically present in HCMC" },
        { icon: "chat", text: "Clear bilingual communication" },
        { icon: "clock", text: "Fast, same-time-zone action" },
        { icon: "shield", text: "Your interests protected" },
      ],
    },
    offerings: {
      eyebrow: "WHAT I CAN HELP WITH",
      headingTop: "Representation &",
      headingBottom: "Business Travel Support.",
      description:
        "Whether you need someone to act on your behalf or a partner to organise your visit, I handle the local side so you can focus on decisions.",
      items: [
        { icon: "users", title: "Attend Meetings", description: "Represent you in meetings with partners, suppliers and officials." },
        { icon: "factory", title: "Factory & Supplier Visits", description: "Visit sites in person and report back with photos and clear notes." },
        { icon: "handshake", title: "Local Negotiation", description: "Negotiate terms locally with cultural and legal awareness." },
        { icon: "check", title: "Project Follow-up", description: "Track progress, chase deadlines and keep projects moving." },
        { icon: "calendar", title: "Meeting Coordination", description: "Plan and schedule meetings around your business trip." },
        { icon: "chat", title: "Interpretation", description: "Professional English–Vietnamese interpretation in meetings and visits." },
        { icon: "car", title: "Transportation", description: "Arrange reliable local transport between meetings and sites." },
        { icon: "briefcase", title: "Local Business Assistance", description: "Practical help with anything you need done during your stay." },
      ],
    },
    process: {
      eyebrow: "HOW IT WORKS",
      heading: "On Your Behalf, Step by Step.",
      description: "You stay in control — I act locally and keep you informed at every stage.",
      steps: [
        { icon: "chat", title: "Brief", description: "Your objectives, priorities and limits." },
        { icon: "document", title: "Prepare", description: "Research, agenda and logistics." },
        { icon: "users", title: "Represent", description: "Attend, visit and negotiate for you." },
        { icon: "mail", title: "Report", description: "Clear notes, photos and next steps." },
        { icon: "check", title: "Follow Up", description: "Push actions through to completion." },
      ],
    },
    cta: {
      eyebrow: "NEED SOMEONE ON THE GROUND?",
      heading: "Let Me Represent You Locally.",
      subtext: "Book a free 30-minute consultation to discuss what you need handled in Vietnam.",
    },
  },
  {
    slug: "relocation",
    title: "Relocation & Housing",
    metaDescription:
      "Moving to Ho Chi Minh City? Home search, viewings, lease negotiation and move-in support for expats and families — from search to move-in and beyond.",
    hero: {
      eyebrow: "RELOCATION & HOUSING",
      headingTop: "Find a Home.",
      headingAccent: "Feel at Home.",
      description:
        "Finding an apartment is easy. Finding the right one, understanding the contract, negotiating with the landlord and getting everything ready before you move in is another story. I help you from search to move-in.",
      image: "/images/challenge_bg.jpg",
      imagePosition: "60% center",
      imageAlt: "Bright riverside apartment overlooking the Ho Chi Minh City skyline",
    },
    intro: {
      eyebrow: "MOVING TO VIETNAM?",
      headingTop: "Settle In",
      headingBottom: "Without the Stress.",
      description:
        "A new country, a new language and unfamiliar rental practices can make moving overwhelming. With a trusted local partner, you get honest advice, protected interests and a home that is ready when you are.",
      cta: "Let's Talk About Your Move",
      image: "/images/service_relocation.jpg",
      imageAlt: "Modern residence with a swimming pool",
      highlights: [
        { icon: "home", text: "Homes matched to your lifestyle" },
        { icon: "document", text: "Contracts explained clearly" },
        { icon: "handshake", text: "Fair terms with landlords" },
        { icon: "key", text: "Ready when you arrive" },
      ],
    },
    offerings: {
      eyebrow: "WHAT I CAN HELP WITH",
      headingTop: "From Search",
      headingBottom: "to Move-in — and Beyond.",
      description: "Practical, personal support for expats, professionals and families relocating to Ho Chi Minh City.",
      items: [
        { icon: "search", title: "Home Search & Shortlist", description: "Search and shortlist properties that fit your needs and budget." },
        { icon: "eye", title: "Property Viewings", description: "Arrange and attend viewings, in person or by video call." },
        { icon: "document", title: "Contract Review", description: "Understand every clause of your lease before you sign." },
        { icon: "handshake", title: "Lease Negotiation", description: "Negotiate rent, terms and inclusions with the landlord." },
        { icon: "key", title: "Move-in Assistance", description: "Handover, inventory checks, utilities and set-up." },
        { icon: "heart", title: "After-Move Support", description: "Continued help with the landlord and daily life after you move in." },
      ],
    },
    process: {
      eyebrow: "HOW IT WORKS",
      heading: "Six Steps to Your New Home.",
      description: "A clear, personal process — I stay with you from the first call until you feel at home.",
      steps: [
        { icon: "chat", title: "Understand", description: "Your needs, budget and preferred areas." },
        { icon: "search", title: "Search", description: "Search and shortlist properties." },
        { icon: "eye", title: "View", description: "Arrange and attend viewings." },
        { icon: "handshake", title: "Negotiate", description: "Support negotiation and the contract." },
        { icon: "key", title: "Move In", description: "Assist with move-in and handover." },
        { icon: "heart", title: "Support", description: "Continue supporting you after you move in." },
      ],
    },
    specialOffer: {
      eyebrow: "SPECIAL OFFER",
      heading: "Arriving in Vietnam before you've found a home?",
      lead: "I can represent you locally.",
      description:
        "I search, inspect, communicate, negotiate and coordinate the rental process on your behalf so your home can be ready when you arrive.",
      cta: "Find My Home",
    },
    cta: {
      eyebrow: "MOVING TO HO CHI MINH CITY?",
      heading: "Let's Find Your Home.",
      subtext: "Book a free 30-minute consultation to talk about your move, your budget and your timeline.",
    },
  },
  {
    slug: "local-address",
    title: "Local Address & Logistics",
    metaDescription:
      "A reliable local address in Vietnam — mail and package receiving, short-term storage, and sending & forwarding within Vietnam or overseas.",
    hero: {
      eyebrow: "LOCAL ADDRESS & LOGISTICS",
      headingTop: "A Local Address",
      headingAccent: "You Can Rely On.",
      description:
        "Mail. Packages. Storage. Sending. A reliable local address and practical support for your life and work in Vietnam — even before you have an office.",
      image: "/images/AnhSanPham9.webp",
      imagePosition: "0% center",
      imagePositionMobile: "28% center",
      imageAlt: "Alice receiving and checking client documents and packages",
    },
    intro: {
      eyebrow: "NEED A LOCAL ADDRESS IN VIETNAM?",
      headingTop: "A Trusted Base",
      headingBottom: "on the Ground.",
      description:
        "Whether you live abroad, travel often or are setting up your business, you need somewhere safe to receive documents and deliveries — and someone responsible to handle them properly.",
      cta: "Let's Discuss Your Needs",
      image: "/images/service_trade.jpg",
      imageAlt: "Container port handling international shipments",
      highlights: [
        { icon: "pin", text: "Legitimate local address" },
        { icon: "shield", text: "Secure, careful handling" },
        { icon: "mail", text: "Prompt notifications" },
        { icon: "plane", text: "Domestic & overseas forwarding" },
      ],
    },
    offerings: {
      eyebrow: "WHAT I CAN HELP WITH",
      headingTop: "Mail. Packages.",
      headingBottom: "Storage. Sending.",
      description: "Practical, dependable support so nothing important gets lost while you are away.",
      items: [
        { icon: "pin", title: "Local Address", description: "A local presence before you have a physical office." },
        { icon: "mail", title: "Mail Receiving", description: "Letters and official documents received and recorded." },
        { icon: "package", title: "Package Receiving", description: "Deliveries and online orders received on your behalf." },
        { icon: "luggage", title: "Short-term Storage", description: "Safe storage for luggage and belongings." },
        { icon: "plane", title: "Sending & Forwarding", description: "Forward items within Vietnam or overseas." },
        { icon: "ship", title: "Logistics Support", description: "Coordinate couriers and shipping partners for you." },
      ],
    },
    process: {
      eyebrow: "HOW IT WORKS",
      heading: "Simple, Safe, Reliable.",
      description: "A straightforward routine so you always know where your items are.",
      steps: [
        { icon: "chat", title: "Set Up", description: "Agree on your address and preferences." },
        { icon: "package", title: "Receive", description: "Mail and packages received for you." },
        { icon: "mail", title: "Notify", description: "Photo and update sent to you." },
        { icon: "luggage", title: "Store", description: "Kept safely until you need them." },
        { icon: "plane", title: "Forward", description: "Sent on within Vietnam or abroad." },
      ],
    },
    cta: {
      eyebrow: "NEED A LOCAL ADDRESS?",
      heading: "Let's Set It Up.",
      subtext: "Book a free 30-minute consultation to discuss what you need received, stored or sent.",
    },
  },
].map((page) => ({ ...page, why: serviceWhyAlice }));
