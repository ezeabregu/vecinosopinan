import styled from "styled-components";

export const ContainerCommentsStyled = styled.div`
  max-width: 800px;
  margin: 1rem auto;
  padding: 20px;

  @media (max-width: 800px) {
    margin: 1rem 0;
    padding: 0;
  }
`;

export const ContainerTabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  button {
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: var(--amarilloOscuro);
    color: var(--blanco);
    font-size: 1rem;
    padding: 5px 20px;
    &:hover {
      background-color: var(--amarillo);
    }
  }

  .tab {
    padding: 10px 20px;
    border: none;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .tab.active {
    background-color: var(--amarilloOscuro);
  }

  @media (max-width: 800px) {
  }
`;

export const ContainerTabsContent = styled.div`
  background-color: var(--NoBlanco);
  border: 1px solid #ddd;
  padding: 20px;

  @media (max-width: 800px) {
    padding: 10px 0;
  }
`;

export const ContainerCommentSeccion = styled.div`
  form {
    margin: 10px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }

  select {
    border: 1px solid var(--amarilloOscuro);
    border-radius: 5px;
    padding: 10px;
    background-color: var(--amarilloOscuro);
    color: var(--NoBlanco);
    font-size: 1rem;
    font-weight: 500;
    scrollbar-width: thin;
  }

  @media (max-width: 800px) {
    select {
      width: 100%;
      padding: 10px;
    }
    option {
      padding: 10px;
    }
  }
`;

export const ContainerCommentsCard = styled.div`
  border: 1px solid #e0e0e0;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: var(--blanco);
  min-height: 100px;
  overflow: hidden;
`;

export const ContainerComment = styled.div`
  padding: 0 2rem;
  p {
    text-align: start;
  }

  @media (max-width: 800px) {
    padding: 0 0.2rem;
    p {
      text-align: justify;
    }
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
  padding: 0 2rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 15px;
  }

  @media (max-width: 800px) {
    padding: 0 0.2rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h4 {
    margin: 0;
    font-size: 10px;
  }
  p {
    font-size: 8px;
    color: #777;
  }

  @media (max-width: 800px) {
    h4 {
      font-size: 13px;
    }
    p {
      font-size: 10px;
    }
  }
`;

export const StarRating = styled.div`
  /* margin-bottom: 10px; */

  p {
    font-size: 14px;
    line-height: 1.4;
  }

  .star-filled {
    color: #ffc107;
  }
  .star-empty {
    color: #e0e0e0;
  }

  @media (max-width: 800px) {
    text-align: start;
  }
`;

export const ContainerData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const ContainerCommentsList = styled.div`
  display: grid;
  //grid-template-columns: 1fr 1fr;
  //grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-columns: 1fr;
  gap: 10px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 5px;
  }
`;

export const ContainerLikes = styled.div`
  width: 95%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
`;

export const ButtonLike = styled.button`
  background-color: #34bf49;
  width: auto;
  height: 20px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: var(--NoBlanco);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 5px;
`;
export const ButtonDislike = styled.button`
  background-color: #ff4c4c;
  width: auto;
  padding: 0 5px;
  height: 20px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: var(--NoBlanco);
  font-weight: 600;

  :disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;
