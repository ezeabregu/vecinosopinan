import React from "react";
import { ContainerNavbar, NavbarSection } from "./navbarStyles";

const Navbar = () => {
  return (
    <ContainerNavbar>
      <NavbarSection>
        Vecinos Opinan
        <ul>
          <li>Buscar</li>
          <li>Sobre nosotros</li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </NavbarSection>
    </ContainerNavbar>
  );
};

export default Navbar;
