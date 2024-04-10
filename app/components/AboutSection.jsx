"use client"
import React, {useTransition, useState} from 'react'
import Image from "next/image";
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>Bootstrap</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>React Native</li>
        <li>NextJS</li>
        <li>NodeJS</li>
        <li>ExpressJS</li>
        <li>Mysql</li>
        <li>PHP</li>
        <li>VS code</li>
        <li>Version Control & Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MBA - Business administration and Modern Technologies, BTU</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Coming soon ...</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/about-me.png" alt="about me" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE]"> 
            I am self-taught developer with main focus on web and mobile applications.
            I have experience working with HTML, CSS, Tailwind CSS, Bootstrap, Javascript,
            Typescript, React, React Native, NextJS, NodeJS, ExpressJS, Mysql, PHP,
            VS code, Version Control & Git. With some back end experience maybe i'll become full
            stack developer, but for now my main focus is on web and mobile applications.
            I am quick learner and always looking for expand my knowledge and skills. My previous
            knowledge and experience is mainly based on courses and tutorials, so i am looking for a real
            world projects and to learn more from my future senior colleagues.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
