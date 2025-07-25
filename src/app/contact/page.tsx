import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="w-full min-h-screen bg-[#F4F8E8] flex flex-col md:flex-row">
      {/* Left: Heading + Image */}
      <div className="md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10">
        <h1 className="text-[#384734] text-4xl md:text-5xl font-bold mb-6 md:mb-8 w-full text-left">
          Contact Us
        </h1>
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-xs md:max-w-md aspect-square">
            <Image
              src="/contact.jpg"
              alt="Contact"
              fill
              className="object-cover rounded-lg"
            />
            <div
              className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white text-2xl md:text-3xl font-bold tracking-widest"
              style={{ letterSpacing: "0.1em" }}
            >
              <span className="block leading-none">TEA</span>
              <span className="block leading-none">House.</span>
            </div>
          </div>
        </div>
      </div>
      {/* Right: Contact Methods */}
      <div className="md:w-1/2 flex flex-col justify-center items-start p-6 md:p-10 gap-8 md:gap-12">
        <div className="flex flex-col xs:flex-row items-center gap-2 xs:gap-6 w-full">
          <span className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#A7C48B] flex items-center justify-center mb-2 xs:mb-0">
            {/* Instagram icon (official look) */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-10 md:h-10 w-8 h-8"
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
          <span className="text-[#384734] text-lg md:text-2xl break-all text-center xs:text-left">@total_east_asian</span>
        </div>
        <div className="flex flex-col xs:flex-row items-center gap-2 xs:gap-6 w-full">
          <span className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#A7C48B] flex items-center justify-center mb-2 xs:mb-0">
            {/* Email icon (envelope) */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-10 md:h-10 w-8 h-8"
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
              <path
                d="M12 17l8 6 8-6"
                stroke="#D6FF5C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[#384734] text-lg md:text-2xl break-all text-center xs:text-left">
            total_east_asian@gmail.com
          </span>
        </div>
      </div>
    </section>
  );
}
