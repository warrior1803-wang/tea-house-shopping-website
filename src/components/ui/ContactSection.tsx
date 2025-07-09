"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full min-h-[60vh] bg-[#F4F8E8] flex flex-col md:flex-row"
    >
      <div className="border-t border-[#E6E9D8]" />
      {/* Left: Heading + Image */}
      <div className="md:w-1/2 flex flex-col justify-center items-center p-10">
        <h1 className="text-[#384734] text-5xl font-light mb-8 w-full text-left">
          Contact Us
        </h1>
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/contact.jpg"
              alt="Contact"
              fill
              className="object-cover rounded-lg"
            />
            <div
              className="absolute bottom-6 left-6 text-white text-3xl font-bold tracking-widest"
              style={{ letterSpacing: "0.1em" }}
            >
              <span className="block leading-none">TEA</span>
              <span className="block leading-none">House.</span>
            </div>
          </div>
        </div>
      </div>
      {/* Right: Contact Methods */}
      <div className="md:w-1/2 flex flex-col justify-center items-start p-10 gap-12">
        <div className="flex items-center gap-6">
          <span className="w-20 h-20 rounded-full bg-[#A7C48B] flex items-center justify-center">
            {/* Instagram icon (official look) */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="none" />
              <rect
                x="10"
                y="10"
                width="20"
                height="20"
                rx="6"
                stroke="#D6FF5C"
                strokeWidth="2.5"
              />
              <circle
                cx="20"
                cy="20"
                r="5.5"
                stroke="#D6FF5C"
                strokeWidth="2.5"
              />
              <circle cx="26.5" cy="13.5" r="1.5" fill="#D6FF5C" />
            </svg>
          </span>
          <span className="text-[#384734] text-2xl">@total_east_asian</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="w-20 h-20 rounded-full bg-[#A7C48B] flex items-center justify-center">
            {/* Email icon (envelope, more standard) */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="none" />
              <rect
                x="10"
                y="15"
                width="20"
                height="10"
                rx="3"
                stroke="#D6FF5C"
                strokeWidth="2.5"
              />
              <polyline
                points="13,18 20,23 27,18"
                fill="none"
                stroke="#D6FF5C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[#384734] text-2xl">
            total_east_asian@gmail.com
          </span>
        </div>
      </div>
    </section>
  );
}
