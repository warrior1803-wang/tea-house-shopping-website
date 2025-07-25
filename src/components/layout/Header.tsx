"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const cartCount = useSelector((state: RootState) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll handler
  const handleSmoothScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  // Smooth scroll to top
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#3A3F1D] py-4 px-8 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/TEAHOUSElogo2.png"
          alt="TEAHouse Logo"
          width={70}
          height={70}
        />
      </div>
      {/* Burger Icon for Mobile */}
      <button
        className="md:hidden text-[#D6FF5C] text-3xl focus:outline-none"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>
      {/* Navigation */}
      <nav className="hidden md:flex space-x-8">
        {pathname === "/" ? (
          <a
            href="#top"
            className="text-[#D6FF5C] text-lg font-medium hover:underline cursor-pointer"
            onClick={handleScrollTop}
          >
            HOME
          </a>
        ) : (
          <Link
            href="/"
            className="text-[#D6FF5C] text-lg font-medium hover:underline"
          >
            HOME
          </Link>
        )}
        <Link
          href="/products"
          className="text-[#D6FF5C] text-lg font-medium hover:underline"
        >
          PRODUCTS
        </Link>
        {pathname === "/" ? (
          <a
            href="#about"
            className="text-[#D6FF5C] text-lg font-medium hover:underline cursor-pointer"
            onClick={handleSmoothScroll("about")}
          >
            ABOUT
          </a>
        ) : (
          <Link
            href="/?scrollTo=about"
            className="text-[#D6FF5C] text-lg font-medium hover:underline"
          >
            ABOUT
          </Link>
        )}
        {pathname === "/" ? (
          <a
            href="#contact"
            className="text-[#D6FF5C] text-lg font-medium hover:underline cursor-pointer"
            onClick={handleSmoothScroll("contact")}
          >
            CONTACT
          </a>
        ) : (
          <Link
            href="/?scrollTo=contact"
            className="text-[#D6FF5C] text-lg font-medium hover:underline"
          >
            CONTACT
          </Link>
        )}
        <Link href="/login" className="text-[#D6FF5C] text-lg font-medium hover:underline cursor-pointer">
          LOGIN
        </Link>
        <Link href="/cart" className="text-[#D6FF5C] text-lg font-medium hover:underline cursor-pointer">
          CART{cartCount > 0 && <span className="ml-1 bg-[#D6FF5C] text-[#384734] rounded-full px-2 text-sm font-bold align-middle">{cartCount}</span>}
        </Link>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-[#3A3F1D] flex flex-col items-center py-6 space-y-4 md:hidden shadow-lg z-50">
          {pathname === "/" ? (
            <a
              href="#top"
              className="text-[#D6FF5C] text-lg font-medium hover:underline cursor-pointer"
              onClick={handleScrollTop}
            >
              HOME
            </a>
          ) : (
            <Link
              href="/"
              className="text-[#D6FF5C] text-lg font-medium hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </Link>
          )}
          <Link
            href="/products"
            className="text-[#D6FF5C] text-lg font-medium hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            PRODUCTS
          </Link>
          {pathname === "/" ? (
            <a
              href="#about"
              className="text-[#D6FF5C] text-lg font-medium hover:underline cursor-pointer"
              onClick={handleSmoothScroll("about")}
            >
              ABOUT
            </a>
          ) : (
            <Link
              href="/?scrollTo=about"
              className="text-[#D6FF5C] text-lg font-medium hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              ABOUT
            </Link>
          )}
          {pathname === "/" ? (
            <a
              href="#contact"
              className="text-[#D6FF5C] text-lg font-medium hover:underline cursor-pointer"
              onClick={handleSmoothScroll("contact")}
            >
              CONTACT
            </a>
          ) : (
            <Link
              href="/?scrollTo=contact"
              className="text-[#D6FF5C] text-lg font-medium hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              CONTACT
            </Link>
          )}
          <Link href="/login" className="text-[#D6FF5C] text-lg font-medium hover:underline cursor-pointer" onClick={() => setMenuOpen(false)}>
            LOGIN
          </Link>
          <Link href="/cart" className="text-[#D6FF5C] text-lg font-medium hover:underline cursor-pointer" onClick={() => setMenuOpen(false)}>
            CART{cartCount > 0 && <span className="ml-1 bg-[#D6FF5C] text-[#384734] rounded-full px-2 text-sm font-bold align-middle">{cartCount}</span>}
          </Link>
        </nav>
      )}
    </header>
  );
}
