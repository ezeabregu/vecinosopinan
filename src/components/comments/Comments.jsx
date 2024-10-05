import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import {
  ContainerCommentsStyled,
  ContainerTabs,
  ContainerTabsContent,
  ContainerCommentSeccion,
  ContainerCommentsCard,
  CommentHeader,
  UserInfo,
  StarRating,
} from "./commentsStyles";

// Datos de ejemplo
const userComments = [
  {
    id: 1,
    date: "2024-03-15",
    stars: 4,
    comment: "Excelente producto",
    photo: "/api/placeholder/50/50",
    username: "Usuario1",
  },
  {
    id: 2,
    date: "2024-03-10",
    stars: 5,
    comment: "Muy recomendable",
    photo: "/api/placeholder/50/50",
    username: "Usuario1",
  },
];

const allComments = [
  ...userComments,
  {
    id: 3,
    date: "2024-03-20",
    stars: 3,
    comment: "Bueno, pero mejorable",
    photo: "/api/placeholder/50/50",
    username: "Usuario2",
  },
  {
    id: 4,
    date: "2024-03-05",
    stars: 5,
    comment: "Increíble servicio",
    photo: "/api/placeholder/50/50",
    username: "Usuario3",
  },
];

const CommentCard = ({ comment }) => (
  <ContainerCommentsCard>
    <CommentHeader>
      <img src={comment.photo} alt={comment.username} />
      <UserInfo>
        <h4>{comment.username}</h4>
        <p>{comment.date}</p>
      </UserInfo>
    </CommentHeader>
    <StarRating>
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={i < comment.stars ? "star-filled" : "star-empty"}
        />
      ))}
    </StarRating>
    <p>{comment.comment}</p>
  </ContainerCommentsCard>
);

const CommentsList = ({ comments }) => (
  <div>
    {comments.map((comment) => (
      <CommentCard key={comment.id} comment={comment} />
    ))}
  </div>
);

const Comments = () => {
  const [activeTab, setActiveTab] = useState("user-comments");

  return (
    <ContainerCommentsStyled>
      <ContainerTabs>
        <button
          className={`tab ${activeTab === "user-comments" ? "active" : ""}`}
          onClick={() => setActiveTab("user-comments")}
        >
          Mis Comentarios
        </button>
        <button
          className={`tab ${activeTab === "all-comments" ? "active" : ""}`}
          onClick={() => setActiveTab("all-comments")}
        >
          Todos los Comentarios
        </button>
      </ContainerTabs>
      <ContainerTabsContent>
        {activeTab === "user-comments" && (
          <ContainerCommentSeccion>
            <h2>Mis Comentarios</h2>
            <CommentsList comments={userComments} />
          </ContainerCommentSeccion>
        )}
        {activeTab === "all-comments" && (
          <ContainerCommentSeccion>
            <h2>Todos los Comentarios</h2>
            <CommentsList comments={allComments} />
          </ContainerCommentSeccion>
        )}
      </ContainerTabsContent>
    </ContainerCommentsStyled>
  );
};

export default Comments;
