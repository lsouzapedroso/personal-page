import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Logo from "./Logo";

interface HeroSectionProps {
  loading: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ loading }) => {
  // Animation variants for staggered text reveal
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
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

  return (
    <section className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-[#12060F]">
      {/* Left Column - Mint Green */}
      <div className="lg:col-span-7 text-[#12060F] flex flex-col justify-between p-8 md:p-12 lg:p-16 pt-28 lg:pt-32 min-h-[60vh] lg:min-h-screen relative select-none overflow-hidden">
        {/* Animated Background Layer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={loading ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#DEF7D1] z-0"
        />
        
        {/* Top Header - Info */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={loading ? "hidden" : "show"}
          className="flex justify-between items-start w-full z-10 relative"
        >
          <motion.h2 
            variants={itemVariants}
            className="font-black text-2xl md:text-3xl tracking-tighter"
          >
            LUIZ CARLOS.
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="text-right font-black text-xs md:text-sm tracking-tighter leading-none flex flex-col uppercase"
          >
            <span>Backend</span>
            <span>Software</span>
            <span>Engineer</span>
          </motion.div>
        </motion.div>

        {/* Center Logo & Superimposed Description */}
        <div className="relative w-full max-w-[620px] mx-auto flex-grow flex flex-col justify-center my-8 lg:my-0 z-10">
          {/* Giant Logo */}
          <motion.div
            layoutId="main-logo"
            className="w-full opacity-90"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2 }}
          >
            <Logo fillColor="#FF3B00" className="w-full h-auto" />
          </motion.div>
          
          {/* Superimposed Description Text */}
          <div className="absolute bottom-[10%] left-[2%] right-[2%] pointer-events-none z-10">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={loading ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
              className="font-black text-[7vw] sm:text-[5vw] lg:text-[2.2vw] leading-[1.05] tracking-tighter uppercase text-[#12060F]"
            >
              A Software Developer Dedicated
              <br />
              To Creating Impactful, Efficient,
              <br />
              And Scalable Software Solutions.
            </motion.p>
          </div>
        </div>
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
        
        <div className="relative flex items-center justify-center z-10">
          {/* Circular Photo Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={loading ? { scale: 0.9, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden relative border-[6px] border-[#12060F] shadow-2xl"
          >
            {/* Grainy Greyscale Portrait */}
            <Image
              src="/images/v2/foto.png"
              alt="Luiz Carlos"
              width={420}
              height={420}
              priority
              className="w-full h-full object-cover grayscale contrast-125 brightness-100 scale-105"
            />
            
            {/* Overlay Small Logo on bottom-middle of the circle */}
            <div className="absolute bottom-[22%] left-1/2 transform -translate-x-1/2 w-[30%] pointer-events-none">
              <Logo 
                fillColor="#FF3B00" 
                className="w-full h-auto drop-shadow-[0_6px_12px_rgba(0,0,0,0.5)]" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;