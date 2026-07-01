import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = ["PHP", "Laravel", "PostgreSQL", "Docker", "React", "TypeScript", "Next.js", "Tailwind CSS"];

  return (
    <section className="bg-[#12060F] text-[#DEF7D1] py-20 px-6 md:px-12 lg:px-20" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Stylized Terminal Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col h-full justify-center"
        >
          <span className="text-[#ff3b00] font-black tracking-widest text-xs uppercase mb-2">
            Descoberta & Trajetória
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
            Sobre Mim
          </h2>
          <p className="text-base lg:text-lg text-[#DEF7D1]/70 mb-8 leading-relaxed">
            Trabalho com desenvolvimento de software voltado para performance, infraestrutura e arquitetura escalável. 
            Tenho experiência prática unindo o dinamismo e design do front-end com a robustez do back-end, 
            utilizando tecnologias modernas como Next.js, Laravel e Docker. Meu foco é projetar e automatizar fluxos de trabalho 
            que garantam entregas eficientes e de alta qualidade.
          </p>

          {/* Skill Tag Cloud */}
          <div>
            <h4 className="text-xs font-black uppercase text-[#DEF7D1]/40 tracking-wider mb-4">
              Tech Stack Principal
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
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;