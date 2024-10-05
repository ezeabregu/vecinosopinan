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
  ContainerCommentsList,
} from "./commentsStyles";

// Datos de ejemplo
const userComments = [
  {
    id: 1,
    date: "2024-03-15",
    stars: 4,
    comment: "Excelente producto",
    photo:
      "https://w7.pngwing.com/pngs/945/530/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png",
    username: "Nair Abregu",
  },
  {
    id: 2,
    date: "2024-03-10",
    stars: 5,
    comment: "Muy recomendable",
    photo:
      "https://w7.pngwing.com/pngs/945/530/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png",
    username: "Nair Abregu",
  },
];

const allComments = [
  ...userComments,
  {
    id: 3,
    date: "2024-03-20",
    stars: 3,
    comment: "Bueno, pero mejorable",
    photo:
      "https://w7.pngwing.com/pngs/415/459/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png",
    username: "Tomito",
  },
  {
    id: 4,
    date: "2024-03-05",
    stars: 5,
    comment: "Increíble servicio",
    photo:
      "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_user_white_tone_icon_159359.png",
    username: "Taykan",
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
  <ContainerCommentsList>
    {comments.map((comment) => (
      <CommentCard key={comment.id} comment={comment} />
    ))}
  </ContainerCommentsList>
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
