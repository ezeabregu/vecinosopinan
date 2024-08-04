import styled from "styled-components";

export const ContainerNavbar = styled.div`
  width: 100vw;
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--fondoOscuro);
  color: var(--blanco);
`;

export const NavbarSection = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    cursor: pointer;
  }

  button {
    background-color: var(--fondoOscuro);
    border: 1px solid var(--blanco);
    color: var(--blanco);
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }
`;
