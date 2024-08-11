import styled from "styled-components";

export const ContainerSearch = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  padding: 2rem;
  background-color: var(--fondo);
  color: var(--blanco);
  display: flex;
  justify-content: center;

  p {
    color: var(--blanco);
  }
`;

export const MapResponsive = styled.div`
  overflow: hidden;
  padding-bottom: 400px;
  position: relative;
  height: 80vh;
  width: 80vw;
  max-width: 1300px;

  Iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;
