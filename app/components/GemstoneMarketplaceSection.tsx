import GemstoneRecommendationWidget from "./GemstoneRecommendationWidget";

type Gemstone = {
  name: string;
  planet: string;
  priceRange: string;
  benefits: string;
  image: string;
  badge: string;
};

const GEMSTONES: Gemstone[] = [
  {
    name: "Blue Sapphire",
    planet: "Saturn",
    priceRange: "₹25,000 – ₹2,50,000",
    benefits: "Recommended for disciplined growth, karmic relief, and focused progress in career and finances.",
    image:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=900&q=80",
    badge: "Premium Neelam · Lab Certified",
  },
  {
    name: "Yellow Sapphire",
    planet: "Jupiter",
    priceRange: "₹18,000 – ₹1,80,000",
    benefits: "Supports wisdom, wealth attraction, marriage prospects, and graceful expansion of opportunities.",
    image:
      "https://images.unsplash.com/photo-1606318313647-1370b1f4a8f1?auto=format&fit=crop&w=900&q=80",
    badge: "Pukhraj · Guru Strengthener",
  },
  {
    name: "Emerald",
    planet: "Mercury",
    priceRange: "₹15,000 – ₹1,20,000",
    benefits: "Enhances communication, business intelligence, trade, education, and sharp decision-making.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    badge: "Panna · Budh Enhancer",
  },
  {
    name: "Ruby",
    planet: "Sun",
    priceRange: "₹20,000 – ₹2,00,000",
    benefits: "Ignites confidence, leadership, royal authority, and radiant self-expression.",
    image:
      "https://images.unsplash.com/photo-1574663817369-f747d3970902?auto=format&fit=crop&w=900&q=80",
    badge: "Manik · Surya Balancer",
  },
  {
    name: "Pearl",
    planet: "Moon",
    priceRange: "₹8,000 – ₹65,000",
    benefits: "Brings emotional balance, inner peace, nurturing energy, and mental calmness.",
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155223f3f8?auto=format&fit=crop&w=900&q=80",
    badge: "Moti · Chandra Healer",
  },
  {
    name: "Red Coral",
    planet: "Mars",
    priceRange: "₹12,000 – ₹95,000",
    benefits: "Boosts courage, stamina, initiative, and victorious energy in competitive environments.",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
    badge: "Moonga · Mangal Activator",
  },
  {
    name: "Diamond",
    planet: "Venus",
    priceRange: "₹35,000 – ₹4,00,000",
    benefits: "Aligns love, luxury, artistic success, relationships, and refined enjoyment of life.",
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=80",
    badge: "Heera · Shukra Intensifier",
  },
  {
    name: "Hessonite",
    planet: "Rahu",
    priceRange: "₹14,000 – ₹1,10,000",
    benefits: "Stabilizes sudden karmic shifts, removes confusion, and supports unconventional success.",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=900&q=80",
    badge: "Gomed · Rahu Balancer",
  },
  {
    name: "Cat's Eye",
    planet: "Ketu",
    priceRange: "₹16,000 – ₹1,25,000",
    benefits: "Protects from hidden enemies, psychic disturbances, and accelerates spiritual growth.",
    image:
      "https://images.unsplash.com/photo-1511389026070-a14ae610a1be?auto=format&fit=crop&w=900&q=80",
    badge: "Lehsunia · Ketu Protector",
  },
];

export default function GemstoneMarketplaceSection() {
  return (
    <section
      id="gemstones"
      className="gem-marketplace-section"
      aria-labelledby="gem-marketplace-heading"
    >
      <div className="gem-marketplace-bg" aria-hidden="true">
        <div className="gem-marketplace-stars gem-marketplace-stars-back" />
        <div className="gem-marketplace-stars gem-marketplace-stars-front" />
        <div className="gem-marketplace-nebula gem-marketplace-nebula-left" />
        <div className="gem-marketplace-nebula gem-marketplace-nebula-right" />
        <div className="gem-marketplace-orbit-ring" />
        <div className="gem-marketplace-orbit-core" />
        <div className="gem-marketplace-particles" />
      </div>

      <div className="section-shell gem-marketplace-shell">
        <header className="gem-marketplace-header">
          <p className="section-kicker gem-kicker">Premium Gemstone Marketplace</p>
          <h2 id="gem-marketplace-heading" className="section-title gem-heading">
            Certified Gemstones for Planetary Balance
          </h2>
          <p className="gem-subheading">
            Discover authentic, astrologically recommended gemstones that align with your planetary
            energies and support your spiritual journey.
          </p>
        </header>

        <GemstoneRecommendationWidget />

        <section className="gem-grid-section" aria-label="Premium gemstone marketplace">
          <div className="gem-grid">
            {GEMSTONES.map((gem) => (
              <article key={gem.name} className="gem-card">
                <div className="gem-card-media">
                  <div
                    className="gem-card-image"
                    style={{ backgroundImage: `url(${gem.image})` }}
                    aria-hidden="true"
                  />
                  <div className="gem-card-orbit" aria-hidden="true" />
                  <span className="gem-auth-badge">{gem.badge}</span>
                </div>

                <div className="gem-card-body">
                  <div className="gem-card-header">
                    <h3 className="gem-card-title">{gem.name}</h3>
                    <p className="gem-card-planet">Associated Planet: {gem.planet}</p>
                  </div>
                  <p className="gem-card-benefits">{gem.benefits}</p>
                  <div className="gem-card-meta">
                    <span className="gem-card-price">{gem.priceRange}</span>
                    <span className="gem-card-cert">100% Natural · Lab Certified</span>
                  </div>
                  <div className="gem-card-actions">
                    <button className="gem-btn gem-btn-primary">View Details</button>
                    <button className="gem-btn gem-btn-secondary">Consult Astrologer</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="gem-trust-strip"
          aria-label="Why buy gemstones from VedAstraa"
        >
          <div className="gem-trust-item">
            <div className="gem-trust-icon" aria-hidden="true">
              ✦
            </div>
            <div>
              <p className="gem-trust-title">100% Natural &amp; Lab Certified</p>
              <p className="gem-trust-text">Every gemstone is lab tested with traceable certification.</p>
            </div>
          </div>
          <div className="gem-trust-item">
            <div className="gem-trust-icon" aria-hidden="true">
              ☉
            </div>
            <div>
              <p className="gem-trust-title">Astrologer-Recommended</p>
              <p className="gem-trust-text">Curated based on your unique birth chart and planetary needs.</p>
            </div>
          </div>
          <div className="gem-trust-item">
            <div className="gem-trust-icon" aria-hidden="true">
              ◈
            </div>
            <div>
              <p className="gem-trust-title">Custom Rings &amp; Pendants</p>
              <p className="gem-trust-text">Handcrafted settings in gold, silver, or panchdhatu.</p>
            </div>
          </div>
          <div className="gem-trust-item">
            <div className="gem-trust-icon" aria-hidden="true">
              🛡
            </div>
            <div>
              <p className="gem-trust-title">Secure Shipping</p>
              <p className="gem-trust-text">Tamper-proof packaging with authenticity certificate.</p>
            </div>
          </div>
        </section>

        <section
          className="gem-spotlight"
          aria-label="Featured gemstone spotlight"
        >
          <div className="gem-spotlight-media" aria-hidden="true">
            <div className="gem-spotlight-glow" />
            <div className="gem-spotlight-ring gem-spotlight-ring-outer" />
            <div className="gem-spotlight-ring gem-spotlight-ring-inner" />
            <div className="gem-spotlight-orb" />
          </div>
          <div className="gem-spotlight-copy">
            <p className="gem-spotlight-kicker">Featured Planetary Remedy</p>
            <h3 className="gem-spotlight-title">Blue Sapphire for Saturn Alignment</h3>
            <p className="gem-spotlight-text">
              A carefully selected Blue Sapphire (Neelam) can accelerate disciplined success, support
              karmic cleansing, and align you with Saturn&apos;s higher wisdom—when prescribed after
              a detailed birth-chart review.
            </p>
            <ul className="gem-spotlight-list">
              <li>Ideal for career stability and long-term growth</li>
              <li>Recommended only after astrological suitability check</li>
              <li>Available in fine cuts with custom ring and pendant designs</li>
            </ul>
            <button className="gem-spotlight-cta">Shop Now</button>
          </div>
        </section>

        <section
          className="gem-steps"
          aria-label="How gemstone recommendation works"
        >
          <h3 className="gem-steps-heading">How Gemstone Recommendation Works</h3>
          <div className="gem-steps-grid">
            <div className="gem-step">
              <div className="gem-step-number">01</div>
              <h4 className="gem-step-title">Enter Birth Details</h4>
              <p className="gem-step-text">
                Share your Name, Date of Birth, Time of Birth, and Birthplace so we can calculate your
                precise birth chart.
              </p>
            </div>
            <div className="gem-step">
              <div className="gem-step-number">02</div>
              <h4 className="gem-step-title">Astrologer Analysis</h4>
              <p className="gem-step-text">
                Our Vedic astrologers study your planetary strengths, weaknesses, and current dashas
                to determine suitable gemstones.
              </p>
            </div>
            <div className="gem-step">
              <div className="gem-step-number">03</div>
              <h4 className="gem-step-title">Receive Certified Recommendation</h4>
              <p className="gem-step-text">
                You receive a curated list of certified gemstones, exact carat range, metal, and
                wearing instructions—tailored just for you.
              </p>
            </div>
          </div>
        </section>

        <section className="gem-luxury-cta">
          <div className="gem-luxury-cta-inner">
            <div className="gem-luxury-copy">
              <p className="gem-luxury-kicker">Luxury Spiritual Commerce</p>
              <h3 className="gem-luxury-title">
                Unlock the Power of Planetary Energies — Discover Your Perfect Gemstone Today
              </h3>
            </div>
            <div className="gem-luxury-actions">
              <button className="gem-luxury-btn gem-luxury-btn-primary">Find My Gemstone</button>
              <button className="gem-luxury-btn gem-luxury-btn-secondary">Browse All Gemstones</button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

