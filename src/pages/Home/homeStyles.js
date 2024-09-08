import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  background-color: var(--fondo);
  color: var(--blanco);
  h2 {
    font-size: 2.5rem;
  }

  h1 {
    font-size: 5rem;
    font-weight: 800;
    letter-spacing: 2px;
    background: linear-gradient(#00112c, var(--fondoOscuro));
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-stroke-width: 1.2px;
    -webkit-text-stroke-color: var(--blanco);
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
    span {
      font-size: 3.5rem;
      letter-spacing: 8px;
    }
    p {
      margin-top: 1rem;
      width: 90%;
      font-size: 1rem;
      line-height: 25px;
      text-align: justify;
    }
  }
`;
