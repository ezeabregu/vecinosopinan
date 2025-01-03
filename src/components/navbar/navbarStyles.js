import styled from "styled-components";

export const ContainerNavbar = styled.div`
  width: 100vw;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--amarilloOscuro);
  color: var(--blanco);
`;

export const ContainerIconHome = styled.div`
  img {
    width: 80px;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    p {
      font-size: 0.7rem;
    }
  }
`;

export const NavbarSection = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  p {
    cursor: pointer;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    cursor: pointer;
  }

  button {
    background-color: var(--amarilloOscuro);
    border: 1px solid var(--blanco);
    color: var(--blanco);
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      background-color: var(--amarillo);
    }
  }

  label {
    cursor: pointer;
    border: 1px solid var(--NoBlanco);
    border-radius: 4px;
    padding: 5px 8px;
  }

  @media (max-width: 800px) {
    ul {
      display: none;
    }
  }
`;

export const MenuBurger = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;
