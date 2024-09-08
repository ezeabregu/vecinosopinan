import styled from "styled-components";

export const ContainerRatingFormStyled = styled.div`
  width: 300px;
  margin: 0 auto;
  text-align: center;

  button {
    padding: 10px 20px;
    border: none;
    background-color: var(--fondoOscuro);
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--fondoOscuro);
    border: 1px solid white;
  }
`;

export const ContainerStarStyled = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;

  .star {
    cursor: pointer;
    color: white;
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
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;
