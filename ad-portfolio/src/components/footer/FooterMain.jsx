import React from "react";
import { Link } from "react-scroll";

const links = [
  { link: "Sobre Mi", section: "about" },
  { link: "Tecnologías", section: "skills" },
  { link: "Experiencia", section: "experience" },
  { link: "Proyectos", section: "projects" },
  { link: "Contacto", section: "contact" },
];

const FooterMain = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-lightGrey">Aldo Díaz García</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {links.map((item, index) => (
            <li key={index}>
              <Link
                to={item.section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-130} // Ajusta según la altura del navbar
                className="hover:text-white transition-all duration-500 cursor-pointer"
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © 2025 ADGarcía | Todos los derechos reservados.
      </p>
    </div>
  );
};

export default FooterMain;
