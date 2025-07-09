"use client";
import HeroSection from "@/components/ui/HeroSection";
import IntroductionSection from "@/components/ui/IntroductionSection";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import AboutUsSection from "@/components/ui/AboutUsSection";
import ContactSection from "@/components/ui/ContactSection";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [searchParams]);

  return (
    <div>
      <HeroSection />
      <IntroductionSection />
      <FeaturedProducts />
      <AboutUsSection />
      <ContactSection />
    </div>
  );
}
