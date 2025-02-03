import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">Sobre Mi</h2>
      <p className="text-white">
        Hola! Soy Aldo, cuento con más de 7 años de
        experiencia en análisis y desarrollo software para empresas
        nacionales y multinacionales, destacando el uso de la herramienta GeneXus.
        Domino lenguajes como JavaScript, C#, Java, Php, SQL, Kotlin, entre otros.
        Además, cuento con formación en administración contable y metodologías ágiles,
        lo que me permite abordar los proyectos desde una perspectiva técnica y estratégica.
      </p>
      <button
        className="border border-orang rounded-full py-2 px-4 text-lg flex items-center mt-10
          hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan "
      >
        Mis Proyectos
      </button>
    </div>
  );
};

export default AboutMeText;
