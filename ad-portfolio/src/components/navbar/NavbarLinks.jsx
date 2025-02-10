import React from "react";
import { Link } from "react-scroll";

const links = [
  { link: "Sobre Mi", section: "about" },
  { link: "Tecnologías", section: "skills" },
  { link: "Experiencia", section: "experience" },
  { link: "Proyectos", section: "projects" },
  { link: "Contacto", section: "contact" },
];

const NavbarLinks = ({ setMenuOpen }) => {
  const handleClick = () => {
    setMenuOpen(false); // Cierra el menú al hacer clic en cualquier enlace
  };

  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-bold text-center lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4">
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            to={link.section}
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            onClick={handleClick} // Cierra el menú al hacer clic
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
