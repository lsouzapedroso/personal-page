import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";

interface NavbarProps {
  loading: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ loading }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={loading ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#12060F]/95 backdrop-blur-md border-b border-[#441925]/30 py-3" 
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-6 py-3">
        <Link 
          href="/" 
          className={`flex items-center gap-3 font-bold tracking-tighter transition-colors duration-300 ${
            isScrolled ? "text-white" : "text-[#12060F]"
          }`}
        >
          <Logo fillColor="#FF3B00" className="w-10 h-auto" />
          <span className="font-neutral text-xl">LUIZ CARLOS.</span>
        </Link>
        <div className="menu block md:w-auto">
          <ul className="flex space-x-6 md:space-x-8 mt-0">
            <li>
              <Link
                href="#about"
                className={`block py-1 text-sm md:text-base font-medium tracking-tight transition-colors duration-200 ${
                  isScrolled 
                    ? "text-[#DEF7D1]/70 hover:text-[#98DD74]" 
                    : "text-[#12060F]/70 lg:text-[#DEF7D1]/70 hover:text-[#98DD74]"
                }`}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className={`block py-1 text-sm md:text-base font-medium tracking-tight transition-colors duration-200 ${
                  isScrolled 
                    ? "text-[#DEF7D1]/70 hover:text-[#ff3b00]" 
                    : "text-[#12060F]/70 lg:text-[#DEF7D1]/70 hover:text-[#ff3b00]"
                }`}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;