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
          VedAstraa
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

