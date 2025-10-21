"use client";

import { FAQs } from "@/components/faqs/faqs";
import { Features } from "@/components/features/features";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  
  return (
    <>
      <Hero />
      <Features />
      <FAQs />
      <Footer />
    </>
  );
}
