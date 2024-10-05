import styled from "styled-components";

export const ContainerCommentsStyled = styled.div`
  max-width: 800px;
  margin: 1rem auto;
  padding: 20px;
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
`;

export const ContainerTabsContent = styled.div`
  background-color: var(--NoBlanco);
  border: 1px solid #ddd;
  padding: 20px;
`;

export const ContainerCommentSeccion = styled.div`
  h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const ContainerCommentsCard = styled.div`
  border: 1px solid #e0e0e0;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: var(--blanco);
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 15px;
  }
`;

export const UserInfo = styled.div`
  h4 {
    margin: 0;
    font-size: 16px;
  }
  p {
    font-size: 12px;
    color: #777;
  }
`;

export const StarRating = styled.div`
  margin-bottom: 10px;

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
`;

export const ContainerCommentsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 5px;
  }
`;

<style jsx>{`
  .container {
  }
  .profile-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .tabs {
  }
  .tab {
    padding: 10px 20px;
    border: none;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .tab.active {
    background-color: #007bff;
    color: white;
  }
  .tab-content {
  }
  .comments-section h2 {
  }
  .comment-card {
  }
  .comment-header {
  }
  .user-photo {
  }
  .user-info h4 {
  }
  .comment-date {
  }
  .star-rating {
  }
  .star-filled {
    color: #ffc107;
  }
  .star-empty {
    color: #e0e0e0;
  }
  .comment-text {
  }
`}</style>;
