"use client";
import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import HeroSection from "@/components/ui/HeroSection";
import IntroductionSection from "@/components/ui/IntroductionSection";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import AboutUsSection from "@/components/ui/AboutUsSection";
import ContactSection from "@/components/ui/ContactSection";

function ScrollHandler() {
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

  return null;
}

export default function Home() {
  return (
    <div>
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      <HeroSection />
      <IntroductionSection />
      <FeaturedProducts />
      <AboutUsSection />
      <ContactSection />
    </div>
  );
}
