"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Careers", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container flex items-center justify-between h-20">
        <div className="flex items-center gap-2">
          {/* Logo representation based on the screenshot */}
          <div className="w-10 h-10 bg-primary rounded-lg flex items-end justify-center">
            <svg
              width="24"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white mb-0.5"
            >
              <path
                d="M5 21V5C5 4.5 5.5 4 6 4H18C18.5 4 19 4.5 19 5V21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 21V16C9 15.5 9.5 15 10 15H14C14.5 15 15 15.5 15 16V21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21H3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="9" r="1" fill="currentColor" />
              <circle cx="15" cy="9" r="1" fill="currentColor" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-secondary tracking-tight">
            TAMS
          </span>
        </div>

        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold text-gray-700 transition-colors ${
                link.name === "Home" || link.name === "Features"
                  ? "hover:text-primary"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hidden md:block text-sm font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Login
          </Link>
          <Link
            href="#"
            className="btn-primary py-2.5 px-6 shadow-md shadow-primary/20"
          >
            Book a Demo
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden p-2 text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-6 h-6"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-100 py-6 px-4 animate-in slide-in-from-top duration-300 shadow-xl">
          <div className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-semibold text-gray-700 py-2 transition-colors ${
                  link.name === "Home" || link.name === "Features"
                    ? "hover:text-primary"
                    : "opacity-50 hover:opacity-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-2 border-gray-100" />
            <Link
              href="#"
              className="text-base font-bold text-primary py-2 text-center border border-primary/20 rounded-full"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

