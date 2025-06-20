// components/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-xl md:text-2xl font-extrabold tracking-tight text-blue-500 flex items-center gap-2"
        >
          <span className="text-white">Muhammad Raja Zahran</span>
          <span className="text-neutral-500 text-base hidden md:inline">
            /backend.dev
          </span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1 md:gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative px-3 py-1.5 rounded-md text-sm font-semibold
                transition-all duration-150
                ${
                  pathname === link.href
                    ? "text-blue-400 bg-neutral-800"
                    : "text-neutral-300 hover:text-blue-400 hover:bg-neutral-900"
                }
              `}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute left-1/2 -bottom-1 w-2 h-2 bg-blue-500 rounded-full -translate-x-1/2"></span>
              )}
            </a>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FiX size={24} className="text-white" />
          ) : (
            <FiMenu size={24} className="text-white" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-neutral-950/95 backdrop-blur z-40 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-bold px-6 py-3 rounded transition-all duration-150 ${
                pathname === link.href
                  ? "text-blue-400 bg-neutral-800"
                  : "text-neutral-300 hover:text-blue-400 hover:bg-neutral-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      {/* Overlay for closing menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}