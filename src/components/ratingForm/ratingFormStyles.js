import styled from "styled-components";

export const ContainerRatingFormStyled = styled.div`
  width: 90%;
  margin: 10px auto;
  text-align: center;
  padding: 1rem;
  border: 1px solid var(--amarilloOscuro);
  border-radius: 10px;

  button {
    padding: 10px 20px;
    border: none;
    background-color: var(--amarilloOscuro);
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--amarilloOscuro);
    border: 1px solid white;
  }

  p {
    color: var(--amarilloOscuro);
  }

  @media (max-width: 800px) {
    width: 100%;
    padding: 7px;
    h2 {
      font-size: 0.8rem;
    }
  }
`;

export const TituloFinal = styled.p`
  margin: 5rem;
  color: var(--amarilloOscuro);
  font-size: 2rem;
`;

export const ContainerStarStyled = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;

  .star {
    cursor: pointer;
    color: gray;
    transition: color 0.3s;
  }

  .star.filled {
    color: #f39c12;
  }

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const ContainerCommentStyled = styled.div`
  margin-bottom: 1rem;
  textarea {
    width: 100%;
    height: 100px;
    padding: 0.5rem;
    border: 1px solid var(--amarilloOscuro);
    border-radius: 4px;
    resize: vertical;
  }
`;

export const ContainerIconClose = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--amarilloOscuro);

  .iconClose {
    cursor: pointer;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  h2 {
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }
`;
