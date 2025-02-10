import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import SingleSkill from './SingleSkill';
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";


const skills = [
    {
      skill: "HTML",
      icon: FaHtml5,
    },
    {
      skill: "CSS",
      icon: FaCss3Alt,
    },
    {
      skill: "JavaScript",
      icon: IoLogoJavascript,
    },
    {
      skill: "TypeScript",
      icon: SiTypescript,
    },
    {
      skill: "ReactJS",
      icon: FaReact,
    },
    {
      skill: "PhP",
      icon: FaPhp,
    },
    {
      skill: "Laravel",
      icon: FaLaravel,
    },
    {
      skill: "NextJS",
      icon: SiNextdotjs,
    },
    {
      skill: "TailwindCSS",
      icon: RiTailwindCssFill,
    },
    {
        skill: "Kotlin",
        icon: TbBrandKotlin,
      },
  ];

  const AllSkills = () => {
    return (
      <div>
        <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
          {skills.map((item, index) => {
            return (
              <motion.div
                variants={fadeIn("up", `0.${index}`)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
                key={index}
              >
                <SingleSkill
                  key={index}
                  text={item.skill}
                  imgSvg={<item.icon />}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

export default AllSkills
