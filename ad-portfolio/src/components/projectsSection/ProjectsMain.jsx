import React from 'react'
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

const projects = [
    {
      name: "Constructora Bersur",
      year: "Mar2016",
      align: "right",
      image: "/images/b.jpg",
      link: "#",
    },
    {
      name: "TrocaGames",
      year: "Sept2024",
      align: "left",
      image: "/images/TCLogoAm.jpg",
      link: "#",
    },
    {
      name: "Mi Portfolio",
      year: "Ene2025",
      align: "right",
      image: "/images/portfolioimg.jpg",
      link: "#",
    },
  ];

const ProjectsMain = () => {
  return (
    <div div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
       variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />

      </motion.div>

   
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
      {projects.map((project, index) =>{
        return   <SingleProject    
        key={index}
        name={project.name}
        year={project.year}
        align={project.align}
        image={project.image}
        />
      })}
      </div>
    </div>
  )
}

export default ProjectsMain
