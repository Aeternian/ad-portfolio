import React from 'react'
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Desde 2017
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="8" text="Años" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="+6" text="Proyectos" />
      </div>
      <p className="text-center text-white">
        Con más de 7 años en el análisis y desarrollo de aplicaciones user-frendly a medida.
      </p>
      <ExperienceInfo number="3" text="Empresas Multinacionales"/>
    </div>
  );
};

export default ExperienceTopLeft;