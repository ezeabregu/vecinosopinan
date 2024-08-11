import styled from "styled-components";

export const ContainerFooter = styled.div`
  background-color: var(--fondoOscuro);
  color: var(--blanco);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    font-size: 0.7rem;
  }
`;
