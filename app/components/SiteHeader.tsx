"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems: Array<{ label: string; href: string }> = [
  { label: "Home", href: "/" },
  { label: "Consult Experts", href: "#consult-experts" },
  { label: "Services", href: "/services" },
  { label: "Gemstones", href: "/gemstones" },
  { label: "Academy", href: "#academy" },
  { label: "Horoscope", href: "#horoscope" },
  { label: "Tools", href: "#tools" },
  { label: "Blog", href: "#" },
  { label: "Membership", href: "#" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="nav-bar" aria-label="Primary navigation">
        {navItems.slice(0, 4).map((item) => {
          const isActive = item.href !== "#" && pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`nav-link ${isActive ? "active" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}

        <Link href="/" className="brand-mark" aria-label="VedAstraa home">
          <div className="static-shooting-star" aria-hidden="true">
            <div className="shooting-star-ray"></div>
            <div className="shooting-star-ray"></div>
            <div className="shooting-star-ray"></div>
            <div className="shooting-star-ray"></div>
            <div className="shooting-star-ray"></div>
            <div className="shooting-star-ray"></div>
          </div>
          VedAs<span className="logo-star-t" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" fill="currentColor" />
            </svg>
          </span>raa
        </Link>

        {navItems.slice(4).map((item) => {
          const isActive = item.href !== "#" && pathname === item.href;
          const isPlaceholder = item.href === "#";
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`nav-link ${isActive ? "active" : ""}`}
              aria-disabled={isPlaceholder ? "true" : undefined}
              tabIndex={isPlaceholder ? -1 : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

