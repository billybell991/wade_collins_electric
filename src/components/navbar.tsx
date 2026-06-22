"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-dark/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Logo />
          
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href ? "text-brand-yellow" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <a href="tel:6134020933" className="flex items-center gap-2 bg-brand-yellow/10 hover:bg-brand-yellow/20 text-brand-yellow px-4 py-2 rounded-full font-semibold transition-colors border border-brand-yellow/20">
              <Phone className="w-4 h-4" />
              613-402-0933
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-300">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-20 left-0 w-full bg-brand-dark border-b border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 ${
                    pathname === link.href ? "text-brand-yellow" : "text-slate-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:6134020933" className="flex items-center justify-center gap-2 bg-brand-yellow/10 text-brand-yellow px-4 py-3 rounded-xl font-semibold mt-2 border border-brand-yellow/20">
                <Phone className="w-5 h-5" />
                613-402-0933
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
