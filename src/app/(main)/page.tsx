"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "@/versions/v2/components/HeroSection";
import AboutSection from "@/versions/v2/components/AboutSection";
import IntroLoader from "@/versions/v2/components/IntroLoader";
import Navbar from "@/versions/v2/components/Navbar";
import Footer from "@/versions/v2/components/Footer";

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

      <main className="w-full min-h-screen bg-[#12060F] overflow-x-hidden flex flex-col justify-between">
        <Navbar loading={loading} />
        <div className="flex-grow">
          <HeroSection loading={loading} />
          <AboutSection />
        </div>
        <Footer />
      </main>
    </>
  );
}