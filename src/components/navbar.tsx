"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { num: "01", name: "Services", href: "/services" },
  { num: "02", name: "Testimonials", href: "/testimonials" },
  { num: "03", name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(10,10,10,0.85)] backdrop-blur-md border-b border-line">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <Logo />

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-4 py-2 text-sm transition-colors ${
                    active ? "text-white" : "text-dim hover:text-white"
                  }`}
                >
                  <span className="font-mono text-[0.6rem] text-mute mr-2 align-middle">
                    {link.num}
                  </span>
                  <span className="align-middle">{link.name}</span>
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-px bg-accent" />
                  )}
                </Link>
              );
            })}
            <a
              href="tel:6134020933"
              className="ml-3 flex items-center gap-2 px-4 py-2 border border-line-2 hover:border-accent hover:text-accent text-white transition-colors text-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-mono tracking-wider">613.402.0933</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-line bg-bg-1">
          <div className="px-6 py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 border-b border-line text-sm flex items-baseline gap-3 ${
                  pathname === link.href ? "text-accent" : "text-dim"
                }`}
              >
                <span className="font-mono text-[0.6rem] text-mute">{link.num}</span>
                {link.name}
              </Link>
            ))}
            <a
              href="tel:6134020933"
              className="mt-4 flex items-center justify-center gap-2 py-3 bg-accent text-black font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="font-mono tracking-wider">613.402.0933</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
