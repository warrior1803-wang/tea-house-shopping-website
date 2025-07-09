import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F4F8E8] border-t border-[#E6E9D8] py-4 px-8 flex flex-col md:flex-row items-center justify-between text-[#8CA382] text-base mt-0">
      <div className="mb-2 md:mb-0">
        © 2025,{" "}
        <Link href="/" className="underline hover:text-[#384734]">
          TEAHouse Powered by Next.js
        </Link>
      </div>
      <div className="flex space-x-8">
        <a href="#" className="hover:text-[#384734]">
          Licenses
        </a>
        <a href="#" className="hover:text-[#384734]">
          Privacy
        </a>
        <a href="#" className="hover:text-[#384734]">
          Terms
        </a>
      </div>
    </footer>
  );
}
