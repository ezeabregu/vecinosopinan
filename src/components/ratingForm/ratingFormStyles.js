import styled from "styled-components";

export const ContainerRatingFormStyled = styled.div`
  width: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 3rem;
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
`;

export const ContainerCommentStyled = styled.div`
  margin-bottom: 1rem;
  textarea {
    width: 100%;
    height: 100px;
    padding: 0.5rem;
    border: 1px solid var(--amarilloOscuro);
    border-radius: 4px;
  }
`;
