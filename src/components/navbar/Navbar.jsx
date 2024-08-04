import React from "react";
import { ContainerNavbar, NavbarSection } from "./navbarStyles";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
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
      </NavbarSection>
    </ContainerNavbar>
  );
};

export default Navbar;
