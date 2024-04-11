"use client"
import React, {useTransition, useState} from 'react'
import Image from "next/image";
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex">
      <ul className="list-disc pl-2" style={{ width: "50%" }}>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>Bootstrap</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
      </ul>
      <ul className="list-disc pl-2" style={{ width: "50%" }}>
        <li>React Native</li>
        <li>NextJS</li>
        <li>NodeJS</li>
        <li>ExpressJS</li>
        <li>Mysql</li>
        <li>PHP</li>
        <li>Version Control & Git</li>
      </ul>
    </div>
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
    <section className='text-white' id="about">
      <div className='md:grid md:grid-cols-2 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/about-me.png" alt="about me" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-mono text-white my-8">About Me</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE] mb-8"> 
            I have started learning coding by moving Karel dog in a virtual two dimensional world. After that, i found some
            great courses on Udemy, Youtube etc. and started diving in a tech ocean. It was hard (still not easy to be honest),
            but the desire to be become developer was stronger. I am still learning,  building some web/mobile apps, but most of
            them are tutorial based. I am quick learner and always looking for expand my knowledge
            and skills. My previous knowledge and experience is mainly based on courses and tutorials, 
            so i am looking for a real world projects and to learn more from my future senior colleagues.
          </p>
          <div className="flex flex-row justify-start my-4">
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
          <div className="my-10">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
