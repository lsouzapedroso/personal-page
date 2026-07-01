import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface IntroLoaderProps {
  onComplete: () => void;
}

const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [fillOpacity, setFillOpacity] = useState(0);
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    // Fill the logo after outline is drawn
    const fillTimer = setTimeout(() => {
      setFillOpacity(1);
    }, 1500);

    // Show glow shortly after fill begins
    const glowTimer = setTimeout(() => {
      setShowGlow(true);
    }, 1800);

    // Call onComplete after animations finish
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(glowTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-transparent overflow-hidden pointer-events-none"
    >
      {/* Top-Left Triangle Panel */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        exit={{ x: "-100%", y: "-100%" }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2 }}
        className="absolute inset-0 bg-[#12060F] z-0 pointer-events-auto"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      {/* Bottom-Right Triangle Panel */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        exit={{ x: "100%", y: "100%" }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2 }}
        className="absolute inset-0 bg-[#12060F] z-0 pointer-events-auto"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      />

      {/* Glow background effect */}
      <motion.div 
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute w-[500px] h-[500px] rounded-full bg-[#ff3b00] opacity-5 blur-[120px] pointer-events-none z-10" 
      />
      
      <motion.div 
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ ease: "easeInOut", duration: 0.6 }}
        className="w-[300px] md:w-[450px] relative z-10 px-4"
      >
        <motion.svg
          id="Camada_2"
          data-name="Camada 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 736.49 361.8"
          animate={showGlow ? {
            filter: [
              "drop-shadow(0 0 0px rgba(255, 59, 0, 0))",
              "drop-shadow(0 0 35px rgba(255, 59, 0, 0.7))"
            ]
          } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <g id="Camada_1-2" data-name="Camada 1">
            <motion.path
              d="M347.37,361.8H14.43c-7.97,0-14.43-6.46-14.43-14.43V14.43C0,6.46,6.46,0,14.43,0h329c9.35,0,16.23,8.76,14.02,17.85l-38.77,158.96c-.51,2.08,1.07,4.09,3.21,4.09h25.49c7.97,0,14.43,6.46,14.43,14.43v152.04c0,7.97-6.46,14.43-14.43,14.43Z"
              stroke="#ff3b00"
              strokeWidth="4"
              fill="#ff3b00"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ 
                pathLength: 1, 
                fillOpacity: fillOpacity 
              }}
              transition={{
                pathLength: { duration: 1.5, ease: "easeInOut" },
                fillOpacity: { duration: 0.8, ease: "easeOut" }
              }}
            />
            <motion.path
              d="M721.84,361.8h-332.5c-8.09,0-14.65-6.56-14.65-14.65V14.65c0-8.09,6.56-14.65,14.65-14.65h332.5c8.09,0,14.65,6.56,14.65,14.65v130.85c0,7.13-5.13,13.23-12.16,14.44l-98.88,17.04c-2.38.41-2.08,3.92.34,3.92h96.06c8.09,0,14.65,6.56,14.65,14.65v151.6c0,8.09-6.56,14.65-14.65,14.65Z"
              stroke="#ff3b00"
              strokeWidth="4"
              fill="#ff3b00"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ 
                pathLength: 1, 
                fillOpacity: fillOpacity 
              }}
              transition={{
                pathLength: { duration: 1.5, ease: "easeInOut", delay: 0.2 },
                fillOpacity: { duration: 0.8, ease: "easeOut" }
              }}
            />
          </g>
        </motion.svg>
      </motion.div>
      
      {/* Subtle loader text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.6, 0],
          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        exit={{ 
          opacity: 0,
          transition: { duration: 0.5 }
        }}
        className="absolute bottom-12 text-[#DEF7D1]/40 text-xs tracking-widest font-mono uppercase z-10"
      >
        LSOUZAPEDROSO.DEV • PORTFOLIO
      </motion.div>
    </motion.div>
  );
};

export default IntroLoader;
