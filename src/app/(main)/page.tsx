"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "@/versions/v2/components/HeroSection";
import AboutSection from "@/versions/v2/components/AboutSection";
import IntroLoader from "@/versions/v2/components/IntroLoader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Intro Loader handles logo loading animation */}
      <AnimatePresence>
        {loading && (
          <IntroLoader key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <main 
        className="w-full h-screen bg-[#12060F] no-scrollbar overflow-x-hidden overflow-y-auto snap-y snap-mandatory scroll-smooth"
      >
        <HeroSection loading={loading} />
        <AboutSection />
      </main>
    </>
  );
}