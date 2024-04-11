"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ThreeJS T-shirt configurator",
    description: "This app allows you to customize a t-shirt: upload your logo, change color etc.",
    image: "/images/projects/T-shirtConfigurator.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Lev4n/project_threejs_ai",
    previewUrl: "https://project-threejs-tshirt.vercel.app/",
  },
  {
    id: 2,
    title: "carHub",
    description: "carHub allows you to find a car for rent that suits your personal needs. You can filter by make, model, fuel type and year. ",
    image: "/images/projects/carHub.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Lev4n/carHub",
    previewUrl: "https://car-hub-lounge.vercel.app/",
  },
  {
    id: 3,
    title: "Metaversus",
    description: "Next13 With Framer Motion & Tailwind CSS",
    image: "/images/projects/Metaversus.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Lev4n/Metaversus",
    previewUrl: "https://metaversus-mocha.vercel.app/",
  },
  {
    id: 4,
    title: "React Native Jobs",
    description: "React Native project using Node.js, React Native, Axios, Expo and Stylesheet!",
    image: "/images/projects/JobSearchApp.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Lev4n/react-native-jobs",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-mono text-white mt-10 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: index * 0.4 }}
          >
            <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            />
          </motion.li>

        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
