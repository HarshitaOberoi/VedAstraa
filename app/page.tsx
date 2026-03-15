const navItems = [
  "Home",
  "Astrology",
  "Attend",
  "Magic",
  "Events",
  "Tarotscopes",
  "Pages",
  "Contact",
];

const trustItems = [
  {
    icon: "VA",
    title: "Verified Astrologers",
    description: "Experienced practitioners offering real Vedic guidance.",
    image: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: "AG",
    title: "Authentic Gemstones",
    description: "Carefully sourced spiritual remedies and energized stones.",
    image: "https://images.unsplash.com/photo-1520121401995-928cd50d4e27?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: "AP",
    title: "Accurate Predictions",
    description: "Insightful analysis grounded in trusted ancient sciences.",
    image: "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: "SC",
    title: "Secure Consultations",
    description: "Private, protected, and convenient sessions with experts.",
    image: "https://images.unsplash.com/photo-1601006626938-f91039860c18?q=80&w=800&auto=format&fit=crop"
  },
];

const services = [
  {
    title: "Vedic Astrology",
    description:
      "Deep birth chart analysis to uncover your personality, life path, career prospects, marriage compatibility, and planetary influences.",
    button: "Learn More",
    image:
      "https://images.unsplash.com/photo-1515942661900-94b3d1972591?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Numerology",
    description:
      "Understand how numbers influence your life path, personality, relationships, and success.",
    button: "Explore Numerology",
    image:
      "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tarot Card Reading",
    description:
      "Get intuitive guidance on love, career, finances, and life decisions through tarot card readings.",
    button: "Get a Reading",
    image:
      "https://images.unsplash.com/photo-1766766462775-3a6fd522e138?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
  },
  {
    title: "Vastu Consultation",
    description:
      "Harmonize your home or workplace with Vastu principles to attract prosperity, peace, and positive energy.",
    button: "Consult a Vastu Expert",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Energy Healing",
    description:
      "Balance your chakras and cleanse your aura through powerful spiritual healing sessions.",
    button: "Start Healing",
    image:
      "https://images.unsplash.com/photo-1767610679392-5bcb618dbc29?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
  },
];


const consultationModes = [
  "Chat consultations",
  "Phone consultations",
  "Video sessions",
];

const dashboardItems = [
  "Daily horoscope",
  "Planetary influences",
  "Lucky numbers and colors",
  "Personalized remedies",
  "Gemstone recommendations",
];

const gemstoneFeatures = [
  "Lab-certified gemstones",
  "Customized rings and pendants",
  "Personalized gemstone recommendations",
  "Authenticity certificates",
];

const academyJourney = [
  {
    title: "Vedic Astrology Certification",
    icon: "zodiac-wheel",
    detail: "Decode planetary cycles, charts, and karmic patterns.",
    image: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Numerology Mastery",
    icon: "numerology",
    detail: "Study sacred number systems for personality and destiny.",
    image: "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Tarot Reading Course",
    icon: "tarot-card",
    detail: "Develop symbolic intuition through archetypal card reading.",
    image: "https://images.unsplash.com/photo-1601006626938-f91039860c18?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Vastu Shastra Training",
    icon: "vastu-grid",
    detail: "Learn energetic space alignment for homes and studios.",
    image: "https://images.unsplash.com/photo-1503387762-592eea58f4e8?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Spiritual Healing Practices",
    icon: "lotus-healing",
    detail: "Explore subtle energy work, balance, and ritual care.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
  },
];

const academyFeatures = [
  {
    title: "Structured Online Learning",
    icon: "structured-learning",
  },
  {
    title: "Live Workshops",
    icon: "live-workshops",
  },
  {
    title: "Certification Programs",
    icon: "certification",
  },
  {
    title: "Mentorship Opportunities",
    icon: "mentorship",
  },
];

const astrologyTools = [
  "Birth Chart Calculator",
  "Kundli Matching",
  "Numerology Calculator",
  "Moon Sign Finder",
  "Tarot Card Draw",
];

const zodiacSigns = [
  { name: "Aries", icon: "aries" },
  { name: "Taurus", icon: "taurus" },
  { name: "Gemini", icon: "gemini" },
  { name: "Cancer", icon: "cancer" },
  { name: "Leo", icon: "leo" },
  { name: "Virgo", icon: "virgo" },
  { name: "Libra", icon: "libra" },
  { name: "Scorpio", icon: "scorpio" },
  { name: "Sagittarius", icon: "sagittarius" },
  { name: "Capricorn", icon: "capricorn" },
  { name: "Aquarius", icon: "aquarius" },
  { name: "Pisces", icon: "pisces" },
];

const zodiacIconPaths: Record<string, string[]> = {
  aries: [
    "M12 5a5 5 0 1 0 -4 8",
    "M16 13a5 5 0 1 0 -4 -8",
    "M12 21l0 -16",
  ],
  taurus: [
    "M6 3a6 6 0 0 0 12 0",
    "M6 15a6 6 0 1 0 12 0a6 6 0 1 0 -12 0",
  ],
  gemini: [
    "M3 3a21 21 0 0 0 18 0",
    "M3 21a21 21 0 0 1 18 0",
    "M7 4.5l0 15",
    "M17 4.5l0 15",
  ],
  cancer: [
    "M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
    "M15 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
    "M3 12a10 6.5 0 0 1 14 -6.5",
    "M21 12a10 6.5 0 0 1 -14 6.5",
  ],
  leo: [
    "M13 17a4 4 0 1 0 8 0",
    "M3 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
    "M7 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
    "M7 7c0 3 2 5 2 9",
    "M15 7c0 4 -2 6 -2 10",
  ],
  virgo: [
    "M3 4a2 2 0 0 1 2 2v9",
    "M5 6a2 2 0 0 1 4 0v9",
    "M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5",
    "M12 21a7 5 0 0 0 7 -5v-2a3 3 0 0 0 -6 0",
  ],
  libra: [
    "M5 20l14 0",
    "M5 17h5v-.3a7 7 0 1 1 4 0v.3h5",
  ],
  scorpio: [
    "M3 4a2 2 0 0 1 2 2v9",
    "M5 6a2 2 0 0 1 4 0v9",
    "M9 6a2 2 0 0 1 4 0v10a3 3 0 0 0 3 3h5l-3 -3m0 6l3 -3",
  ],
  sagittarius: [
    "M4 20l16 -16",
    "M13 4h7v7",
    "M6.5 12.5l5 5",
  ],
  capricorn: [
    "M4 4a3 3 0 0 1 3 3v9",
    "M7 7a3 3 0 0 1 6 0v11a3 3 0 0 1 -3 3",
    "M13 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
  ],
  aquarius: [
    "M3 10l3 -3l3 3l3 -3l3 3l3 -3l3 3",
    "M3 17l3 -3l3 3l3 -3l3 3l3 -3l3 3",
  ],
  pisces: [
    "M5 3a21 21 0 0 1 0 18",
    "M19 3a21 21 0 0 0 0 18",
    "M5 12l14 0",
  ],
};

function ZodiacIcon({ icon, label }: { icon: string; label: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="zodiac-glyph-svg"
      role="img"
      aria-label={label}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {zodiacIconPaths[icon].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

function AcademyIcon({ icon, label }: { icon: string; label: string }) {
  switch (icon) {
    case "zodiac-wheel":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <circle cx="12" cy="12" r="8.5" className="academy-icon-stroke" />
          <circle cx="12" cy="12" r="4.25" className="academy-icon-stroke academy-icon-fade" />
          <path d="M12 3.5v17M3.5 12h17M6.2 6.2l11.6 11.6M17.8 6.2L6.2 17.8" className="academy-icon-stroke academy-icon-fade" />
          <circle cx="12" cy="12" r="1.25" className="academy-icon-fill" />
        </svg>
      );
    case "numerology":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <path d="M12 3l2.6 5.4L21 9.2l-4.6 4.2 1.2 6.4L12 17l-5.6 2.8 1.2-6.4L3 9.2l6.4-.8L12 3Z" className="academy-icon-stroke" />
          <path d="M9.35 14.2c1.1-1.3 2.3-2.65 5.3-5.45" className="academy-icon-stroke academy-icon-fade" />
          <path d="M9.2 9.5h2.5v5.3" className="academy-icon-stroke" />
        </svg>
      );
    case "tarot-card":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <rect x="5" y="3.5" width="14" height="17" rx="2.5" className="academy-icon-stroke" />
          <path d="M12 7.5l1.35 2.7 3 .45-2.15 2.1.5 3-2.7-1.45-2.7 1.45.5-3-2.15-2.1 3-.45L12 7.5Z" className="academy-icon-stroke academy-icon-fade" />
          <path d="M8.2 18h7.6" className="academy-icon-stroke academy-icon-fade" />
        </svg>
      );
    case "vastu-grid":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <rect x="4" y="4" width="16" height="16" rx="1.5" className="academy-icon-stroke" />
          <path d="M9.33 4v16M14.67 4v16M4 9.33h16M4 14.67h16" className="academy-icon-stroke academy-icon-fade" />
          <path d="M4 4l16 16M20 4L4 20" className="academy-icon-stroke academy-icon-fade" />
        </svg>
      );
    case "lotus-healing":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <path d="M12 7.2c1.5-2 3.1-2.95 4.8-3.2.1 2.55-.8 4.65-2.9 6.05" className="academy-icon-stroke" />
          <path d="M12 7.2c-1.5-2-3.1-2.95-4.8-3.2-.1 2.55.8 4.65 2.9 6.05" className="academy-icon-stroke" />
          <path d="M12 8.1c2.45-1.35 4.95-.95 6.8.85-1.55 2.25-3.8 3.35-6.8 3.35-3 0-5.25-1.1-6.8-3.35 1.85-1.8 4.35-2.2 6.8-.85Z" className="academy-icon-stroke academy-icon-fade" />
          <path d="M8 15.4c1.05 1.65 2.4 2.6 4 2.6s2.95-.95 4-2.6" className="academy-icon-stroke" />
          <path d="M12 12.3v5.7" className="academy-icon-stroke academy-icon-fade" />
        </svg>
      );
    case "structured-learning":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <rect x="4" y="5" width="16" height="14" rx="2.5" className="academy-icon-stroke" />
          <path d="M8 9h8M8 12h8M8 15h5" className="academy-icon-stroke academy-icon-fade" />
        </svg>
      );
    case "live-workshops":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <rect x="4" y="6" width="10" height="12" rx="2" className="academy-icon-stroke" />
          <path d="M14 10l5-2v8l-5-2z" className="academy-icon-stroke academy-icon-fade" />
        </svg>
      );
    case "certification":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <circle cx="12" cy="10" r="5" className="academy-icon-stroke" />
          <path d="M10 14.5l-1 5 3-1.7 3 1.7-1-5" className="academy-icon-stroke academy-icon-fade" />
          <path d="M10.2 10.2l1.2 1.2 2.5-2.5" className="academy-icon-stroke" />
        </svg>
      );
    case "mentorship":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <circle cx="9" cy="9" r="3" className="academy-icon-stroke" />
          <circle cx="16.5" cy="10.5" r="2.5" className="academy-icon-stroke academy-icon-fade" />
          <path d="M4.5 18c.9-2.65 2.8-4 5.7-4s4.8 1.35 5.7 4" className="academy-icon-stroke" />
          <path d="M14.5 18c.45-1.55 1.65-2.35 3.6-2.35 1 0 1.8.2 2.4.65" className="academy-icon-stroke academy-icon-fade" />
        </svg>
      );
    default:
      return null;
  }
}
const whyChooseItems = [
  {
    title: "Verified Experts",
    description:
      "Every astrologer on our platform undergoes strict verification to ensure credibility and experience.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Transparent Predictions",
    description:
      "We maintain transparency through ratings, reviews, and prediction performance tracking.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Authentic Products",
    description:
      "All gemstones and spiritual products are certified and sourced from trusted suppliers.",
    image: "https://images.unsplash.com/photo-1520121401995-928cd50d4e27?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Personalized Experience",
    description:
      "Your birth details power a fully personalized spiritual journey.",
    image: "https://images.unsplash.com/photo-1464802686167-b939a67a06a1?auto=format&fit=crop&w=800&q=80"
  },
];

const testimonials = [
  {
    name: "Amit Sharma",
    review:
      "VedAstraa helped me understand my career path through detailed birth chart analysis. The guidance was extremely accurate.",
  },
  {
    name: "Priya Mehta",
    review:
      "The tarot reading gave me clarity during a difficult time. The astrologer was very insightful and compassionate.",
  },
  {
    name: "Rahul Verma",
    review:
      "I purchased a gemstone recommended by my astrologer and noticed positive changes in my life.",
  },
];

const howItWorksSteps = [
  {
    step: "Step 1",
    title: "Create Your Birth Profile",
    description:
      "Enter your birth details to generate your personalized astrology dashboard.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: "Step 2",
    title: "Explore Insights",
    description:
      "Receive daily predictions, remedies, and spiritual guidance.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: "Step 3",
    title: "Consult Experts",
    description:
      "Book chat, call, or video sessions with verified astrologers.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: "Step 4",
    title: "Enhance Your Journey",
    description:
      "Purchase recommended gemstones or enroll in spiritual courses.",
    image: "https://images.unsplash.com/photo-1493673272479-a20888bcee10?auto=format&fit=crop&w=800&q=80"
  },
];

const footerColumns = [
  {
    title: "VedAstraa",
    links: ["About Us", "Our Mission", "Blog", "Careers"],
  },
  {
    title: "Services",
    links: [
      "Vedic Astrology",
      "Numerology",
      "Tarot Reading",
      "Vastu Consultation",
      "Energy Healing",
    ],
  },
  {
    title: "Academy",
    links: [
      "Astrology Courses",
      "Tarot Certification",
      "Numerology Course",
      "Vastu Training",
    ],
  },
  {
    title: "Support",
    links: [
      "Contact Us",
      "FAQs",
      "Refund Policy",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
  {
    title: "Connect",
    links: ["Instagram", "YouTube", "Facebook"],
  },
];

export default function Home() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <nav className="nav-bar">
          {navItems.slice(0, 4).map((item) => (
            <a
              key={item}
              href="#"
              className={`nav-link ${item === "Home" ? "active" : ""}`}
            >
              {item}
            </a>
          ))}

          <a href="#" className="brand-mark">
            VedAstraa
          </a>

          {navItems.slice(4).map((item) => (
            <a key={item} href="#" className="nav-link">
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-vignette" />
          <div className="starfield starfield-back" />
          <div className="starfield starfield-front" />
          <div className="dust dust-one" />
          <div className="dust dust-two" />
          <div className="nebula nebula-left" />
          <div className="nebula nebula-right" />
          <div className="crescent" />

          <section className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">Ancient insight, modern guidance</p>
              <h1>Discover Your Destiny Through Ancient Wisdom</h1>
              <p className="hero-text">
                VedAstraa combines the timeless sciences of Vedic Astrology,
                Numerology, Tarot, and Vastu with modern technology to deliver
                accurate guidance, personalized consultations, and authentic
                spiritual products.
              </p>
              <div className="hero-actions">
                <a href="#" className="btn btn-primary">
                  Get Your Free Birth Chart
                </a>
                <a href="#" className="btn btn-secondary">
                  Consult an Expert
                </a>
              </div>
            </div>

            <aside className="quick-form-card">
              <p className="form-kicker">Quick Form</p>
              <h2>Enter Your Birth Details</h2>
              <form className="birth-form">
                <label className="field">
                  <span>Name</span>
                  <input type="text" placeholder="Your full name" />
                </label>
                <label className="field">
                  <span>Date of Birth</span>
                  <input type="date" />
                </label>
                <label className="field">
                  <span>Time of Birth</span>
                  <input type="time" />
                </label>
                <label className="field">
                  <span>Place of Birth</span>
                  <input type="text" placeholder="City, State, Country" />
                </label>
                <button type="submit" className="btn btn-primary form-submit">
                  Generate My Kundli
                </button>
              </form>
            </aside>
          </section>

        </section>
        
        <section className="trust-section">
          <div className="section-shell">
            <p className="trust-heading">
              Trusted by thousands seeking clarity and spiritual guidance
            </p>
            <div className="trust-grid">
              {trustItems.map((item) => (
                <article key={item.title} className="trust-card">
                  <div
                    className="trust-card-bg"
                    style={{ backgroundImage: `url(${item.image})` }}
                    aria-hidden="true"
                  />
                  <div className="trust-card-content">
                    <div className="trust-icon" aria-hidden="true">
                      {item.icon}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="services-atmosphere" aria-hidden="true">
            <span className="services-cloudscape" />
          </div>
          <div className="section-shell">
            <p className="section-kicker">Our Services</p>
            <h2 className="section-title">
              Spiritual Guidance for Every Aspect of Life
            </h2>
            <p className="section-intro">
              VedAstraa offers expert consultations across multiple spiritual
              sciences to help you navigate life&apos;s important decisions with
              clarity and confidence.
            </p>

            <div className="services-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div
                    className="service-media"
                    style={{ backgroundImage: `url(${service.image})` }}
                    aria-hidden="true"
                  />
                  <div className="service-card-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href="#" className="btn btn-secondary service-btn">
                      {service.button}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experts-section">
          <div className="section-shell experts-shell">
            <div className="experts-showcase">
              <div className="experts-visual" aria-hidden="true">
                <div className="experts-portrait" />
                <div className="experts-candle" />
              </div>

              <div className="experts-panel">
                <div className="experts-copy">
                  <p className="section-kicker">Consult Verified Experts</p>
                  <h2 className="section-title">Connect With Verified Astrologers</h2>
                  <p className="section-body">
                    Our experts are carefully vetted to ensure experience,
                    authenticity, and accurate guidance. Choose from astrologers,
                    numerologists, tarot readers, and Vastu consultants.
                  </p>
                  <ul className="feature-list experts-feature-list">
                    {consultationModes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a href="#" className="btn btn-primary experts-cta">
                    Browse Astrologers
                  </a>
                </div>

                <div className="experts-grid">
                  <div className="expert-mini-card">
                    <span>Astrology</span>
                    <strong>Birth Charts</strong>
                  </div>
                  <div className="expert-mini-card">
                    <span>Tarot</span>
                    <strong>Guided Readings</strong>
                  </div>
                  <div className="expert-mini-card">
                    <span>Vastu</span>
                    <strong>Space Harmony</strong>
                  </div>
                  <div className="expert-mini-card">
                    <span>Numerology</span>
                    <strong>Life Path Insights</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="gemstones-section">
          {/* Sacred geometry background */}
          <div className="gem-bg" aria-hidden="true">
            <svg className="gem-sacred-geo" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="400,80 680,560 120,560" stroke="rgba(228,175,86,0.10)" strokeWidth="1" fill="none"/>
              <polygon points="400,720 120,240 680,240" stroke="rgba(228,175,86,0.10)" strokeWidth="1" fill="none"/>
              <polygon points="400,140 630,520 170,520" stroke="rgba(228,175,86,0.07)" strokeWidth="1" fill="none"/>
              <polygon points="400,660 170,280 630,280" stroke="rgba(228,175,86,0.07)" strokeWidth="1" fill="none"/>
              <circle cx="400" cy="400" r="280" stroke="rgba(228,175,86,0.06)" strokeWidth="1" fill="none"/>
              <circle cx="400" cy="400" r="180" stroke="rgba(228,175,86,0.04)" strokeWidth="1" fill="none"/>
            </svg>
            <svg className="gem-zodiac-wheel" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="300" cy="300" r="270" stroke="rgba(228,175,86,0.08)" strokeWidth="1" fill="none" strokeDasharray="4 8"/>
              <circle cx="300" cy="300" r="240" stroke="rgba(228,175,86,0.05)" strokeWidth="1" fill="none"/>
              {Array.from({length:12}).map((_,i)=>{
                const a = i*30*Math.PI/180;
                const x1=300+230*Math.cos(a), y1=300+230*Math.sin(a);
                const x2=300+270*Math.cos(a), y2=300+270*Math.sin(a);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(228,175,86,0.12)" strokeWidth="1"/>;
              })}
              {Array.from({length:12}).map((_,i)=>{
                const a = (i*30-15)*Math.PI/180;
                const tx=300+255*Math.cos(a), ty=300+255*Math.sin(a);
                const symbols = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'];
                return <text key={i} x={tx} y={ty} textAnchor="middle" dominantBaseline="middle" fontSize="14" fill="rgba(228,175,86,0.22)">{symbols[i]}</text>;
              })}
            </svg>

            {/* Lush Wavy silver grey lines - 80 paths for dense shimmery effect */}
            <svg className="gem-wavy-lines" viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              {Array.from({length: 80}).map((_, i) => {
                const xOffset = 250 + (i * 9); // Dense but spaced across 1000px
                const waveAmp = 55 + (i % 10) * 6; // Rhythmic sinusoidal amplitude
                return (
                  <path 
                    key={i}
                    d={`M ${xOffset} 0 
                       C ${xOffset + waveAmp} 200, ${xOffset - waveAmp} 400, ${xOffset} 600
                       S ${xOffset + waveAmp} 800, ${xOffset} 1000`}
                    stroke={`rgba(235, 235, 250, ${0.3 + (i % 8) * 0.08})`}
                    strokeWidth={1.8 + (i % 4) * 0.6}
                    opacity={0.7 + (i % 12) * 0.02}
                  />
                );
              })}
            </svg>
          </div>

          <div className="section-shell gem-two-col">
            {/* LEFT: Copy Column */}
            <div className="gem-copy-col">
              <p className="section-kicker">Certified Gemstone Marketplace</p>
              <h2 className="section-title gem-headline">Authentic Gemstones for Planetary Balance</h2>
              <p className="section-body gem-desc">
                Gemstones play a significant role in Vedic astrology. VedAstraa
                offers 100% natural and certified gemstones recommended by
                experts based on your birth chart.
              </p>
              <ul className="gem-feature-list">
                {[
                  {icon:"⬡", label:"Lab-certified gemstones"},
                  {icon:"✦", label:"Personalized gemstone recommendations"},
                  {icon:"◈", label:"Customized rings and pendants"},
                  {icon:"❋", label:"Authenticity certificates"},
                ].map(f=>(
                  <li key={f.label} className="gem-feature-item">
                    <span className="gem-feature-icon" aria-hidden="true">{f.icon}</span>
                    <span>{f.label}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="btn btn-primary gem-cta">
                Shop Gemstones
              </a>
            </div>

            {/* RIGHT: Big B&W image panel */}
            <div className="gem-image-panel" aria-label="Gemstone astrology visual">
              <div className="gem-image-frame">
                <img src="/gemstone-bg.png" alt="Luxury gemstones on Vedic astrology chart" className="gem-bg-img"/>

                {/* Gold sacred geometry SVG overlay on image */}
                <svg className="gem-img-overlay-svg" viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="300" cy="210" r="160" stroke="rgba(228,175,86,0.22)" strokeWidth="1" strokeDasharray="5 10"/>
                  <circle cx="300" cy="210" r="110" stroke="rgba(228,175,86,0.15)" strokeWidth="1" strokeDasharray="3 7"/>
                  <polygon points="300,60 480,330 120,330" stroke="rgba(228,175,86,0.18)" strokeWidth="1" fill="none"/>
                  <polygon points="300,360 120,90 480,90" stroke="rgba(228,175,86,0.13)" strokeWidth="1" fill="none"/>
                  <circle cx="300" cy="210" r="12" stroke="rgba(228,175,86,0.45)" strokeWidth="1.5" fill="rgba(228,175,86,0.08)"/>
                  <circle cx="300" cy="210" r="3" fill="rgba(228,175,86,0.65)"/>
                  {Array.from({length:8}).map((_,i)=>{
                    const a=i*45*Math.PI/180;
                    return <line key={i} x1={300+14*Math.cos(a)} y1={210+14*Math.sin(a)} x2={300+22*Math.cos(a)} y2={210+22*Math.sin(a)} stroke="rgba(228,175,86,0.35)" strokeWidth="1"/>;
                  })}
                  <path d="M20,20 L60,20 M20,20 L20,60" stroke="rgba(228,175,86,0.4)" strokeWidth="1.5" fill="none"/>
                  <path d="M580,20 L540,20 M580,20 L580,60" stroke="rgba(228,175,86,0.4)" strokeWidth="1.5" fill="none"/>
                  <path d="M20,400 L60,400 M20,400 L20,360" stroke="rgba(228,175,86,0.4)" strokeWidth="1.5" fill="none"/>
                  <path d="M580,400 L540,400 M580,400 L580,360" stroke="rgba(228,175,86,0.4)" strokeWidth="1.5" fill="none"/>
                </svg>

                {/* Top certified badge */}
                <div className="gem-img-badge">
                  <span>✦</span> Certified &amp; Authentic
                </div>

                {/* Bottom: 3 gemstone label cards */}
                <div className="gem-img-chips">
                  <div className="gem-chip gem-chip-ruby">
                    <span className="gem-chip-symbol">☉</span>
                    <div>
                      <strong>Ruby</strong>
                      <em>Sun · Manik</em>
                    </div>
                  </div>
                  <div className="gem-chip gem-chip-emerald">
                    <span className="gem-chip-symbol">☿</span>
                    <div>
                      <strong>Emerald</strong>
                      <em>Mercury · Panna</em>
                    </div>
                  </div>
                  <div className="gem-chip gem-chip-sapphire">
                    <span className="gem-chip-symbol">♄</span>
                    <div>
                      <strong>Blue Sapphire</strong>
                      <em>Saturn · Neelam</em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-shell split-panel dashboard-panel">
            <div className="dashboard-visual">
              <div className="dashboard-card main-dashboard-card">
                <p>VedAstraa Dashboard</p>
                <strong>Personalized for your birth profile</strong>
                <span>Daily guidance, remedies, and aligned recommendations.</span>
              </div>
              <div className="dashboard-card side-dashboard-card">
                <p>Today&apos;s Cosmic Snapshot</p>
                <strong>Favorable energies are rising</strong>
              </div>
            </div>

            <div className="split-copy">
              <p className="section-kicker">Personalized Spiritual Insights</p>
              <h2 className="section-title">Your Personalized Spiritual Dashboard</h2>
              <p className="section-body">
                Once you create your birth profile, VedAstraa generates insights
                tailored specifically to you.
              </p>
              <ul className="feature-list feature-list-columns">
                {dashboardItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#" className="btn btn-primary">
                Create My Profile
              </a>
            </div>
          </div>
        </section>

        <section className="academy-section">
          <div className="section-shell academy-shell">
            <div className="academy-ornament academy-ornament-left" aria-hidden="true" />
            <div className="academy-ornament academy-ornament-right" aria-hidden="true" />

            <div className="academy-panel">
              <div className="academy-journey-panel">
                <div className="showcase-chip">VedAstraa Academy</div>
                <div className="academy-journey-header">
                  <p className="academy-overline">Sacred Learning Path</p>
                  <h2 className="academy-journey-title">
                    A refined spiritual curriculum designed as a living journey.
                  </h2>
                </div>

                <div className="academy-timeline" aria-label="VedAstraa Academy course timeline">
                  <span className="academy-timeline-line" aria-hidden="true" />
                  {academyJourney.map((milestone, index) => (
                    <article key={milestone.title} className="academy-milestone">
                      <div
                        className="academy-milestone-bg"
                        style={{ backgroundImage: `url(${milestone.image})` }}
                        aria-hidden="true"
                      />
                      <div className="academy-milestone-content">
                        <div className="academy-milestone-marker" aria-hidden="true">
                          <AcademyIcon icon={milestone.icon} label={milestone.title} />
                        </div>
                        <div className="academy-milestone-copy">
                          <span className="academy-milestone-step">Milestone {index + 1}</span>
                          <h3>{milestone.title}</h3>
                          <p>{milestone.detail}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="academy-visual-panel">
                <div className="academy-visual-frame">
                  <div className="academy-visual-sky" aria-hidden="true">
                    <span className="academy-visual-ring academy-visual-ring-outer" />
                    <span className="academy-visual-ring academy-visual-ring-middle" />
                    <span className="academy-visual-ring academy-visual-ring-inner" />
                    <span className="academy-visual-grid" />
                    <span className="academy-visual-sage" />
                    <span className="academy-visual-particles academy-visual-particles-one" />
                    <span className="academy-visual-particles academy-visual-particles-two" />
                  </div>

                  <div className="academy-copy">
                    <p className="section-kicker">Learn Ancient Spiritual Sciences</p>
                    <p className="academy-visual-chip">Luxury spiritual academy</p>
                    <h2 className="section-title">Immersive wisdom for modern seekers.</h2>
                    <p className="section-body">
                      Enter a carefully structured learning space where timeless
                      sciences, live guidance, and contemplative practice come
                      together in a polished online academy experience.
                    </p>

                    <div className="academy-feature-badges">
                      {academyFeatures.map((feature) => (
                        <div key={feature.title} className="academy-feature-badge">
                          <span className="academy-feature-icon" aria-hidden="true">
                            <AcademyIcon icon={feature.icon} label={feature.title} />
                          </span>
                          <span>{feature.title}</span>
                        </div>
                      ))}
                    </div>

                    <a href="#" className="btn btn-primary academy-cta">
                      Explore Courses
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tools-section">
          <div className="section-shell">
            <p className="section-kicker">Astrology Tools</p>
            <h2 className="section-title">Free Astrology Tools</h2>
            <p className="section-intro">
              Explore powerful tools to gain quick insights into your destiny.
            </p>
            <div className="tools-grid">
              {astrologyTools.map((tool) => (
                <article key={tool} className="tool-card">
                  <div className="tool-icon" aria-hidden="true" />
                  <h3>{tool}</h3>
                </article>
              ))}
            </div>
            <a href="#" className="btn btn-primary section-cta">
              Try Astrology Tools
            </a>
          </div>
        </section>

        <section className="horoscope-section">
          <div className="section-shell">
            <div className="horoscope-layout">
              <div className="zodiac-grid">
                {zodiacSigns.map((sign) => (
                  <article key={sign.name} className="zodiac-card">
                    <div className="zodiac-glyph">
                      <ZodiacIcon icon={sign.icon} label={sign.name} />
                    </div>
                    <h3>{sign.name}</h3>
                  </article>
                ))}
              </div>
              <div className="horoscope-copy">
                <p className="section-kicker">Daily Horoscope</p>
                <h2 className="section-title">Today&apos;s Horoscope</h2>
                <p className="section-intro">
                  Check what the stars have planned for you today.
                </p>
                <a href="#" className="btn btn-primary section-cta">
                  View Full Horoscope
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="why-section">
          <div className="section-shell">
            <p className="section-kicker">Why Choose VedAstraa</p>
            <h2 className="section-title">Why Thousands Trust VedAstraa</h2>
            <div className="why-grid">
              {whyChooseItems.map((item) => (
                <article key={item.title} className="why-card">
                  <div
                    className="why-card-bg"
                    style={{ backgroundImage: `url(${item.image})` }}
                    aria-hidden="true"
                  />
                  <div className="why-card-content">
                    <div className="why-badge" aria-hidden="true">
                      {item.title.slice(0, 2).toUpperCase()}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="section-shell">
            <p className="section-kicker">Testimonials</p>
            <h2 className="section-title">What Our Users Say</h2>
            <div className="testimonials-grid">
              {testimonials.map((item) => (
                <article key={item.name} className="testimonial-card">
                  <div className="testimonial-stars" aria-hidden="true">
                    *****
                  </div>
                  <p>{item.review}</p>
                  <h3>{item.name}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="how-section">
          <div className="section-shell">
            <p className="section-kicker">How VedAstraa Works</p>
            <h2 className="section-title">A Clear Path to Spiritual Guidance</h2>
            <div className="how-grid">
              {howItWorksSteps.map((item) => (
                <article key={item.step} className="how-card">
                  <div
                    className="how-card-bg"
                    style={{ backgroundImage: `url(${item.image})` }}
                    aria-hidden="true"
                  />
                  <div className="how-card-content">
                    <p className="how-step">{item.step}</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-shell cta-shell">
            <p className="section-kicker">Call To Action</p>
            <h2 className="section-title">Start Your Spiritual Journey Today</h2>
            <p className="section-intro">
              Discover what the stars have planned for you and receive
              personalized guidance from trusted experts.
            </p>
            <div className="hero-actions cta-actions">
              <a href="#" className="btn btn-primary">
                Get My Free Kundli
              </a>
              <a href="#" className="btn btn-secondary">
                Consult an Astrologer
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-shell">
          {footerColumns.map((column) => (
            <div key={column.title} className="footer-column">
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}











