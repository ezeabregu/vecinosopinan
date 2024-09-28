import styled from "styled-components";

export const ContainerError = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  padding: 2rem;
  background-color: var(--NoBlanco);
  color: var(--amarilloOscuro);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 5rem;
  }
  span {
    font-weight: 800;
  }
`;
