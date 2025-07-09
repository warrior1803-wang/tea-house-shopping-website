import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full h-screen flex font-sans">
      {/* Left: Olive background with content */}
      <div className="relative flex flex-col justify-center w-full md:w-1/2 h-full bg-[#3A3F1D] p-8 md:p-16">
        {/* Center: Heading */}
        <div className="flex-1 flex flex-col justify-center">
          <h1
            className="text-[#D6FF5C] text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
            style={{ lineHeight: "1.05" }}
          >
            Directly from
            <br />
            Japan to
            <br />
            Rotterdam
          </h1>
        </div>
        {/* Bottom: CTA Button */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center px-12 py-4 border-2 border-[#D6FF5C] text-[#D6FF5C] text-2xl font-medium rounded-none hover:bg-[#D6FF5C] hover:text-[#3A3F1D] transition-colors"
          >
            Shop now
            <svg
              className="ml-3 w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
      {/* Right: Background Image */}
      <div className="hidden md:block w-1/2 h-full relative">
        <Image
          src="/TEAHOUSE.jpg"
          alt="TEAHouse Background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
