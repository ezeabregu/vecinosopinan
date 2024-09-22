import styled from "styled-components";

export const ContainerAbout = styled.div`
  width: 100vw;
  height: auto;
  padding: 2rem;
  background-color: var(--fondo);
  color: var(--blanco);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 800px) {
    margin: auto;
    padding: 3rem;
  }
`;

export const ContainerParrafo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  max-width: 700px;

  p {
    font-size: 1.3rem;
    font-weight: 500;
    text-align: justify;
  }

  label {
    font-size: 1.3rem;
    font-weight: 500;
  }

  ul {
    font-size: 1.3rem;
    font-weight: 400;
    text-align: left;
  }

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
  }
`;

export const ContainerTitle = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
    label {
      font-size: 3rem;
      font-weight: 700;
    }
  }
`;
