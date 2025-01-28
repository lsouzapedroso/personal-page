"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface Tab {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: Tab[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
        <ul className="list-disc pl-2">
          <li>PHP</li>
          <li>Laravel</li>
          <li>PostgreSQL</li>
          <li>Docker</li>
          <li>React</li>
          <li>TypeScript</li>
        </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
        <ul className="list-disc pl-2">
          <li>State University of Midwest
              (Universidade Estadual do
              Centro-Oeste)</li>
        </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTab = TAB_DATA.find((t) => t.id === tab);

  return (
      <section className="text-white" id="about">
          <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
              <div className="rounded-e-xs">
                  <Image
                      src="/images/about-image.png"
                      width={500}
                      height={500}
                      alt="About me"
                  />
              </div>
              <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                  <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                  <p className="text-base lg:text-lg">
                      I am a passionate and skilled full-stack web developer with extensive experience in building
                      interactive, responsive, and scalable web applications.
                      Over the years, I have honed my expertise in modern technologies, including PHP, laravel, React,
                      Node.js, TypeScript, Docker, PostgreSQL, and Git.
                      My ability to quickly adapt and learn enables me to embrace new challenges and expand my technical
                      skill set.

                  </p>
                  <div className="flex flex-row justify-start mt-8">
                      {TAB_DATA.map((tabData) => (
                          <TabButton
                              key={tabData.id}
                              selectTab={() => handleTabChange(tabData.id)}
                              active={tab === tabData.id}
                          >
                              {tabData.title}
                          </TabButton>
                      ))}
                  </div>
                  <div className="mt-8">{activeTab?.content}</div>
              </div>
          </div>
      </section>
  );
};

export default AboutSection;
