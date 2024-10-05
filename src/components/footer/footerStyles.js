import styled from "styled-components";

export const ContainerFooter = styled.div`
  background-color: var(--amarilloOscuro);
  color: var(--blanco);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    font-size: 0.7rem;
  }
`;
