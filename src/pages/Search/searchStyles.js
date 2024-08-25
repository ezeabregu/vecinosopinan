import styled from "styled-components";

export const ContainerSearch = styled.div`
  width: 100vw;
  //height: calc(100vh - 60px);
  height: auto;
  padding: 2rem;
  background-color: var(--fondo);
  color: var(--blanco);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  p {
    color: var(--blanco);
  }

  @media (max-width: 800px) {
    padding-top: 3rem;
    gap: 4rem;
    height: auto;
  }
`;

export const MapResponsive = styled.div`
  overflow: hidden;
  padding-bottom: 400px;
  position: relative;
  height: 70vh;
  width: 60vw;
  max-width: 1300px;
  border: none;
  border-radius: 10px;

  Iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

export const ContainerBarriosList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  select {
    border: none;
    border-radius: 5px;
    padding: 10px;
    background-color: var(--blanco);
    font-size: 1rem;
    font-weight: 500;
    scrollbar-width: thin;
  }

  @media (max-width: 800px) {
    select {
      width: 90%;
    }
  }
`;
