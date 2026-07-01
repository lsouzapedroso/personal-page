import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer border-t border-[#441925]/30 bg-[#12060F] text-[#DEF7D1]/50">
      <div className="container mx-auto p-12 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <Logo fillColor="#FF3B00" className="w-8 h-auto opacity-75" />
          <span className="font-neutral font-bold tracking-tighter text-white">LUIZ CARLOS.</span>
        </div>
        
        {/* Credits */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs text-[#DEF7D1]/55">
          <span>
            Layout by{" "}
            <a 
              href="https://www.instagram.com/craca.criativa/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#ff3b00] hover:text-white transition-colors duration-200 font-bold"
            >
              @craca.criativa
            </a>
          </span>
          <span className="hidden sm:inline text-[#441925]/50">•</span>
          <span>
            Development by{" "}
            <a 
              href="https://github.com/lsouzapedroso" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#ff3b00] hover:text-white transition-colors duration-200 font-bold"
            >
              @lsouzapedroso
            </a>
          </span>
        </div>

        <p className="text-sm tracking-tight">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;