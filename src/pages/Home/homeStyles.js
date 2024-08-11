import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: var(--fondo);
  color: var(--blanco);

  h1 {
    font-size: 2.5rem;
  }

  span {
    font-weight: 800;
    letter-spacing: 2px;
  }
  p {
    max-width: 650px;
    text-decoration: center;
    font-size: 1.3rem;
    line-height: 40px;
  }

  @media (max-width: 800px) {
    padding: 2rem;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 0.8rem;
      line-height: 20px;
    }
  }
`;
