import React, { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import Image from "next/image";
import Logo from "./Logo";

interface HeroSectionProps {
  loading: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ loading }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Track if the HeroSection is currently visible in the viewport
  const isInView = useInView(containerRef, { amount: 0.3 });

  // Animation variants for staggered text reveal and exit
  const containerVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: -60,
      transition: { type: "spring", stiffness: 45, damping: 18 }
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 45,
        damping: 18,
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 15 }
    },
  };

  const photoVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -60,
      scale: 0.9,
      transition: { type: "spring", stiffness: 45, damping: 18 }
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 45, damping: 18, delay: 0.3 }
    }
  };

  return (
    <section ref={containerRef} className="min-h-screen w-full snap-start grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-[#12060F]">
      {/* Left Column - Mint Green */}
      <div className="lg:col-span-7 text-[#12060F] flex flex-col justify-between p-8 md:p-12 lg:p-16 min-h-[60vh] lg:min-h-screen relative select-none overflow-hidden">
        {/* Animated Background Layer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={loading ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#DEF7D1] z-0"
        />
        
        {/* Scroll-driven Content Wrapper */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={loading ? "hidden" : (isInView ? "show" : "hidden")}
          className="flex flex-col justify-center flex-grow z-10 relative"
        >
          {/* Center Logo & Superimposed Elements */}
          <div className="relative w-full max-w-[620px] mx-auto flex-grow flex flex-col justify-center my-8 lg:my-0">
            {/* Giant Logo */}
            <motion.div
              className="w-full opacity-90"
            >
              <Logo fillColor="#FF3B00" className="w-full h-auto" />
            </motion.div>

            {/* Superimposed Header - Top Left: LUIZ CARLOS. */}
            <div className="absolute top-[26%] sm:top-[29%] left-[-7%] sm:left-[-6%] lg:left-[-10%] pointer-events-none">
              <motion.h2 
              variants={itemVariants}
              className="font-neutral text-[3vw] sm:text-[2vw] lg:text-[1.1vw] tracking-tighter uppercase text-[#12060F]"
            >
              LUIZ CARLOS.
            </motion.h2>
          </div>

            {/* Superimposed Header - Top Right: SOFTWARE ENGINEER */}
            <div className="absolute top-[33%] right-[-7%] pointer-events-none">
              <motion.div 
                variants={itemVariants}
                className="font-neutral text-[2vw] sm:text-[1.4vw] lg:text-[0.7vw] tracking-tighter leading-[1] flex flex-col uppercase text-[#12060F]"
              >
                <span className="text-left">SOFTWARE</span>
                
                {/* O ajuste fino do alinhamento acontece neste padding (pl) */}
                <div className="flex flex-col text-left pl-[5.5em] sm:pl-[5em]">
                  <span>ENGINEER</span>
                </div>
              </motion.div>
            </div>



            {/* Superimposed Description Text */}
            <div className="absolute bottom-[27%] left-[5%] right-[5%] pointer-events-none">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={loading ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className="font-neutral font-bold text-[3.6vw] sm:text-[2.2vw] lg:text-[1.4vw] leading-[1.05] tracking-tighter uppercase text-[#12060F] text-justify"
              >
                A Software Developer Dedicated
                <br />
                To Creating Impactful, Efficient,
                <br />
                And Scalable Software Solutions.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column - Red/Orange with Greyscale Circle Photo */}
      <div className="lg:col-span-5 flex items-center justify-center p-8 md:p-12 lg:p-16 min-h-[50vh] lg:min-h-screen relative overflow-hidden">
        {/* Animated Background Layer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={loading ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#FF3B00] z-0"
        />
        
        {/* Scroll-driven Content Wrapper */}
        <motion.div 
          variants={photoVariants}
          initial="hidden"
          animate={loading ? "hidden" : (isInView ? "show" : "hidden")}
          className="relative flex items-center justify-center z-10 w-full h-full"
        >
          {/* Circular Photo Container - Original size, no border */}
          <div
            className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden relative"
          >
            {/* Grainy Greyscale Portrait */}
            <Image
              src="/images/v2/foto.png"
              alt="Luiz Carlos"
              fill
              priority
              sizes="(max-w-768px) 280px, (max-w-1024px) 350px, 420px"
              className="object-cover grayscale contrast-125 brightness-100 scale-105"
            />
            
            {/* Overlay Small Logo centered inside the circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30%] pointer-events-none">
              <Logo 
                fillColor="#FF3B00" 
                className="w-full h-auto drop-shadow-[0_6px_12px_rgba(0,0,0,0.5)]" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;