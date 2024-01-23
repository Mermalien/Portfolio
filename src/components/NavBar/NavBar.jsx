import "./NavBar.css";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

export const NavBar = () => {
  const [open, setIsOpen] = useState(false);
  const handleNav = () => {
    setIsOpen(!open);
  };

  return (
    <div className="menu">
      <AiOutlineMenu
        className={`hamburguer ${open ? "open" : ""}`}
        onClick={handleNav}
      />
      {open && (
        <div className="open-menu">
          <a onClick={handleNav} href="#contact" className="a-contact">
            <AiOutlineMail className="react-icon" />
            <span>Contacto</span>
          </a>

          <a onClick={handleNav} href="#skills" className="a-skills">
            <GrProjects className="react-icon" />
            <span>Formación</span>
          </a>

          <a onClick={handleNav} href="#projects" className="a-projects">
            <AiOutlineProject className="react-icon" />
            <span>Proyectos</span>
          </a>

          <a onClick={handleNav} href="#about" className="a-about">
            <BsPerson className="react-icon" />
            <span>Sobre mi</span>
          </a>
        </div>
      )}
    </div>
  );
};
