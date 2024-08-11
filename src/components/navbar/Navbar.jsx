import React, { useState } from "react";
import { ContainerNavbar, NavbarSection, MenuBurger } from "./navbarStyles";
import { useNavigate } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { IoCloseCircle } from "react-icons/io5";
import Menu from "./Menu/Menu";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState();

  return (
    <>
      <ContainerNavbar>
        <NavbarSection>
          <p onClick={() => navigate("/")}>Vecinos Opinan</p>

          <ul>
            <li onClick={() => navigate("/map")}>Buscar</li>
            <li onClick={() => navigate("/about")}>Sobre nosotros</li>
            <li>
              <button onClick={() => navigate("/login")}>Iniciar sesión</button>
            </li>
          </ul>

          <MenuBurger onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoCloseCircle style={{ fontSize: "2rem" }} />
            ) : (
              <CiMenuKebab style={{ fontSize: "2rem" }} />
            )}
          </MenuBurger>
        </NavbarSection>
      </ContainerNavbar>
      {isOpen ? <Menu /> : null}
    </>
  );
};

export default Navbar;
