import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer border-t border-[#441925]/30 bg-[#12060F] text-[#DEF7D1]/50">
      <div className="container mx-auto p-12 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <Logo fillColor="#FF3B00" className="w-8 h-auto opacity-75" />
          <span className="font-black tracking-tighter text-white">LUIZ CARLOS.</span>
        </div>
        <p className="text-sm tracking-tight">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;