import React from "react";
import { LinkContainerStyled, NavLinkContainer } from "./menuStyles";

const menuStyles = () => {
  return (
    <>
      <LinkContainerStyled>
        <NavLinkContainer to="/map">Buscar</NavLinkContainer>
        <NavLinkContainer to="/about">Sobre nosotros</NavLinkContainer>
        <NavLinkContainer to="/login">Iniciar sesión</NavLinkContainer>
      </LinkContainerStyled>
    </>
  );
};

export default menuStyles;
