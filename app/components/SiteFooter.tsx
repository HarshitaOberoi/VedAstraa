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

export default function SiteFooter() {
  return (
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
  );
}

