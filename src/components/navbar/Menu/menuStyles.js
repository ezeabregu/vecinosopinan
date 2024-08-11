import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkContainerStyled = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--fondoOscuro);
  color: var(--blanco);
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 801px) {
    display: none;
  }
`;

export const NavLinkContainer = styled(NavLink)`
  text-decoration: none;
  color: var(--blanco);
  padding: 0.6rem;
`;
