import React from "react";
import { motion } from "framer-motion";

const words = ["Resolutivo", "Rápido aprendizaje", "Trabajo en equipo"];

const SubHeroSection = () => {
  return (
    <div className="w-full overflow-hidden border-y border-lightGrey bg-brown py-8">
      <motion.div
        className="flex gap-8 text-lightGrey uppercase xl:text-4xl md:text-2xl sm:text-4xl whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      >
        {words.map((word, index) => (
          <p key={index} className="px-4">
            {word}
          </p>
        ))}
      </motion.div>
    </div>
  );
};

export default SubHeroSection;
