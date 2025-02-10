import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn"; 
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full bg-black items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px]">
        <NavbarLogo />
        {/* Pasamos setMenuOpen a NavbarLinks */}
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks setMenuOpen={setMenuOpen} />
        </div>
        <NavbarBtn /> 
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-orange border-[0.5px]">
        <button
          className="text-2xl p-3 border border-orange rounded-full text-white" 
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
