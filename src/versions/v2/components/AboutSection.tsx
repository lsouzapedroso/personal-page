import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Footer from "./Footer";

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Track if the AboutSection is currently visible in the viewport
  const isInView = useInView(containerRef, { amount: 0.3 });

  // Spring-driven variants for smooth viewport transitions
  const mockupVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 80, 
      scale: 0.95,
      transition: { type: "spring", stiffness: 45, damping: 18 }
    },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 45, damping: 18 }
    }
  };

  const bioVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      transition: { type: "spring", stiffness: 45, damping: 18 }
    },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 45, damping: 18, delay: 0.15 }
    }
  };

  const skills = ["PHP", "Laravel", "PostgreSQL", "Docker", "React", "TypeScript", "Next.js", "Tailwind CSS"];

  return (
    <section ref={containerRef} className="min-h-screen w-full snap-start bg-[#12060F] text-[#DEF7D1] flex flex-col justify-between pt-16 md:pt-24 pb-8" id="about">
      {/* Content Container Centered Vertically */}
      <div className="flex-grow flex items-center justify-center px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column: Stylized Terminal Mockup */}
          <motion.div
            variants={mockupVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="bg-[#441925]/20 rounded-xl border border-[#441925]/40 overflow-hidden shadow-2xl font-mono text-sm"
          >
            {/* Terminal Window Header */}
            <div className="bg-[#12060F] px-4 py-3 flex items-center gap-2 border-b border-[#441925]/30">
              <div className="w-3 h-3 rounded-full bg-[#ff3b00]/80" />
              <div className="w-3 h-3 rounded-full bg-[#98dd74]/80" />
              <div className="w-3 h-3 rounded-full bg-[#DEF7D1]/30" />
              <span className="text-xs text-[#DEF7D1]/40 ml-2">developer.json</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 space-y-2 text-[#DEF7D1]/90">
              <p className="text-[#98DD74]">{`{`}</p>
              <p className="pl-4">
                <span className="text-[#ff3b00]">{"\"name\""}</span>: <span className="text-[#DEF7D1]/70">{"\"Luiz Carlos\""}</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#ff3b00]">{"\"role\""}</span>: <span className="text-[#DEF7D1]/70">{"\"Backend / Software Engineer\""}</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#ff3b00]">{"\"focus\""}</span>: <span className="text-[#DEF7D1]/70">{"\"Performance & Scalability\""}</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#ff3b00]">{"\"environment\""}</span>: <span className="text-[#DEF7D1]/70">{"\"Docker, Linux, Cloud\""}</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#ff3b00]">{"\"skills\""}</span>: <span className="text-[#98DD74]">[</span>
              </p>
              <p className="pl-8 text-[#DEF7D1]/60">
                {"\"PHP/Laravel\", \"Next.js\", \"PostgreSQL\","}
              </p>
              <p className="pl-8 text-[#DEF7D1]/60">
                {"\"TypeScript\", \"Docker CI/CD\", \"APIs\""}
              </p>
              <p className="pl-4 text-[#98DD74]">{`],`}</p>
              <p className="pl-4">
                <span className="text-[#ff3b00]">{"\"passionateAbout\""}</span>: <span className="text-[#DEF7D1]/70">{"\"Clean code & robust architecture\""}</span>
              </p>
              <p className="text-[#98DD74]">{`}`}</p>
            </div>
          </motion.div>

          {/* Right Column: Bio Content */}
          <motion.div
            variants={bioVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="flex flex-col h-full justify-center"
          >
            <span className="font-neutral text-[#ff3b00] font-bold tracking-widest text-xs uppercase mb-2">
              Background & Journey
            </span>
            <h2 className="font-neutral text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter uppercase">
              About Me
            </h2>
            <p className="text-base lg:text-lg text-[#DEF7D1]/70 mb-8 leading-relaxed">
              I develop software with a strong focus on performance, infrastructure, and scalable architecture. 
              I have practical experience bridging dynamic front-end design with robust back-end systems, 
              utilizing modern technologies like Next.js, Laravel, and Docker. My focus is on designing and 
              automating workflows that ensure efficient, high-quality deliveries.
            </p>

            {/* Skill Tag Cloud */}
            <div>
              <h4 className="font-neutral text-xs font-bold uppercase text-[#DEF7D1]/40 tracking-wider mb-4">
                Core Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-bold tracking-tight rounded-md bg-[#441925]/30 border border-[#ff3b00]/20 text-[#98DD74] hover:bg-[#ff3b00]/10 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-[#441925]/30 flex gap-4">
              <a 
                href="https://github.com/lsouzapedroso" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-neutral text-xs font-bold uppercase tracking-wider text-[#ff3b00] hover:text-white transition-all duration-200"
              >
                GitHub
              </a>
              <span className="text-[#DEF7D1]/30">•</span>
              <a 
                href="https://www.linkedin.com/in/lsouzapedroso/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-neutral text-xs font-bold uppercase tracking-wider text-[#ff3b00] hover:text-white transition-all duration-200"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer at the bottom of the section */}
      <Footer />
    </section>
  );
};

export default AboutSection;