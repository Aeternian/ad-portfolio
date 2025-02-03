import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

const experiences = [
    {
      job: "Desarrollador GeneXus jr.",
      company: "Constructora Bersur",
      date: "2016-2018",
      responsibilities: [
        "Creación de reportes.",
        "Modificación de pantallas de usuario.",
        "Creación de pantallas simples.",
        "Documentación y pruebas.",
      ],
    },
    {
        job: "Desarrollador GeneXus Sr.",
        company: "Metlife",
        date: "2018-2023",
        responsibilities: [
          "Análisis y desarrollo de Gestión de Pólizas.",
          "Modificaciones y mejoras en el sistema de gestión de clientes.",
          "Análisis y cálculos de comisiones.",
          "Documentación y pruebas.",
      ],
    },
    {
        job: "Desarrollador GeneXus Sr.",
        company: "Tarwah",
        date: "2023-2024",
        responsibilities: [
          "Análisis desarrollo e implementación de Social media APIs.",
          "Modificaciones y mejoras en pantallas de usuarios.",
          "Documentación y pruebas.",
      ],
    },
  ];
  

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) =>{
        return (<>
       <SingleExperience key={index} experience={experience} />
       {index < 2 ? (
        <motion.div
        variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
        >  <FaArrowRight className="text-6xl text-orange lg:block sm:hidden"/> </motion.div>
      
      ):("") }
       </> 
        );
      })}

    </div>
  );
};

export default AllExperience;
