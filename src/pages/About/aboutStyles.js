import styled from "styled-components";

export const ContainerAbout = styled.div`
  width: 100vw;
  height: auto;
  padding: 2rem;
  background-color: var(--NoBlanco);
  color: #131415;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 800px) {
    margin: auto;
    padding: 1rem;
  }
`;

export const ContainerParrafo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  max-width: 700px;

  p {
    font-size: 1rem;
    font-weight: 500;
    text-align: justify;
  }

  label {
    font-size: 1rem;
    font-weight: 500;
  }

  ul {
    font-size: 1rem;
    font-weight: 400;
    text-align: left;
  }

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
  }

  strong {
    color: var(--amarilloOscuro);
  }

  @media (max-width: 800px) {
    strong {
      color: var(--amarilloOscuro);
    }

    li {
      align-items: start;
    }
  }
`;

export const ContainerTitle = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
    label {
      color: var(--amarilloOscuro);
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;
