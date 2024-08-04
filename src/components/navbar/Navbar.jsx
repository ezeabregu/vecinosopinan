import React from "react";
import { ContainerNavbar, NavbarSection } from "./navbarStyles";

const Navbar = () => {
  return (
    <ContainerNavbar>
      <NavbarSection>
        Vecinos Opinan
        <ul>
          <li>Buscar</li>
          <li>Sobre Nosotros</li>
        </ul>
        <button>Login</button>
      </NavbarSection>
    </ContainerNavbar>
  );
};

export default Navbar;
