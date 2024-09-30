import styled from "styled-components";

export const ContainerAccount = styled.div`
  height: calc(100vh - 80px);
  padding: 1rem;
`;

export const ContainerAccountTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  button {
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: var(--amarilloOscuro);
    color: var(--blanco);
    font-size: 1rem;
    padding: 5px 20px;
    &:hover {
      background-color: var(--amarillo);
    }
  }
`;
