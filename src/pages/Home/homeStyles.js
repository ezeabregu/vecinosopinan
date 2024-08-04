import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100vw;
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: var(--verde);
  color: var(--blanco);

  h1 {
    font-size: 2.5rem;
  }

  span {
    font-weight: 800;
    letter-spacing: 2px;
  }
  p {
    max-width: 500px;
    text-decoration: center;
    font-size: 1.3rem;
    line-height: 40px;
  }
`;
