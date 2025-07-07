"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export default function Header() {
  const pathname = usePathname();
  const cartCount = useSelector((state: RootState) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));

  // Smooth scroll handler
  const handleSmoothScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Smooth scroll to top
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      {/* Navigation */}
      <nav className="flex space-x-8">
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
        <a className="text-[#D6FF5C] text-lg font-medium hover:underline cursor-pointer">
          LOGIN
        </a>
        <Link href="/cart" className="text-[#D6FF5C] text-lg font-medium hover:underline cursor-pointer">
          CART{cartCount > 0 && <span className="ml-1 bg-[#D6FF5C] text-[#384734] rounded-full px-2 text-sm font-bold align-middle">{cartCount}</span>}
        </Link>
      </nav>
    </header>
  );
}
