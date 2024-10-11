import React, { useEffect, useState } from "react";
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
import { Barrios } from "../../data/barrios";
import RatingForm from "../../components/ratingForm/RatingForm";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { useSelector } from "react-redux";

// Datos de ejemplo
const userComments = [
  // {
  //   id: 1,
  //   date: "2024-03-15",
  //   stars: 4,
  //   comment: "Excelente producto",
  //   neighborhood: 1,
  //   photo:
  //     "https://w7.pngwing.com/pngs/945/530/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png",
  //   username: "Nair Abregu",
  // },
  // {
  //   id: 2,
  //   date: "2024-03-10",
  //   stars: 5,
  //   comment: "Muy recomendable",
  //   neighborhood: 169,
  //   photo:
  //     "https://w7.pngwing.com/pngs/945/530/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png",
  //   username: "Nair Abregu",
  // },
];

const allComments = [
  ...userComments,
  {
    id: 3,
    date: "2024-03-20",
    stars: 3,
    comment: "Bueno, pero mejorable",
    neighborhood: 169,
    photo:
      "https://w7.pngwing.com/pngs/415/459/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png",
    username: "Tomito",
  },
  {
    id: 4,
    date: "2024-03-05",
    stars: 5,
    neighborhood: 169,
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

const CommentsList = ({ comments, idNeighborhood }) => (
  <ContainerCommentsList>
    {comments.map((comment) =>
      idNeighborhood === comment.neighborhood ? (
        <CommentCard key={comment.id} comment={comment} />
      ) : null
    )}
  </ContainerCommentsList>
);

const CommentsListUser = ({ comments }) => (
  <ContainerCommentsList>
    {comments.map((comment) => (
      <CommentCard key={comment.id} comment={comment} />
    ))}
  </ContainerCommentsList>
);

const Comments = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const [activeTab, setActiveTab] = useState("user-comments");

  const [idNeighborhood, setIdNeighborhood] = useState();
  const [barrioSelectedRating, setBarrioSelectedRating] = useState(false);
  const [nombreBarrio, setNombreBarrio] = useState();

  const buscarBarrio = (e) => {
    let index = e.target.selectedIndex;
    //console.log(e.target.options[index].text); // obtiene el texto de la opción seleccionada
    Barrios.map((barrio) => {
      return e.target.options[index].text === barrio.nombre
        ? (setIdNeighborhood(barrio.id),
          setBarrioSelectedRating(true),
          setNombreBarrio(barrio.nombre))
        : null;
    });
  };

  const barriosOrdenados = [...Barrios].sort((b, a) =>
    a.nombre < b.nombre ? 1 : a.nombre > b.nombre ? -1 : 0
  );

  const [comentarios, setComentarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const email = currentUser.email;

  useEffect(() => {
    const fetchComentarios = async (email) => {
      try {
        const response = await axios.get(`${BASE_URL}/auth/userComments`, {
          params: { email },
        });
        setComentarios(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    fetchComentarios(email);
  }, [email]);

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
          onClick={() => {
            setActiveTab("all-comments");
            setIdNeighborhood("");
            setBarrioSelectedRating(false);
          }}
        >
          Todos los Comentarios
        </button>
      </ContainerTabs>
      <ContainerTabsContent>
        {activeTab === "user-comments" && (
          <ContainerCommentSeccion>
            <h2>Mis Comentarios</h2>
            {error ? <p>Error: {error}</p> : null}
            {cargando ? (
              <p>Cargando...</p>
            ) : (
              <CommentsListUser comments={comentarios} />
            )}
          </ContainerCommentSeccion>
        )}
        {activeTab === "all-comments" && (
          <ContainerCommentSeccion>
            <h2>Todos los Comentarios</h2>
            <form action="#">
              <select name="barrios" id="barrios" onChange={buscarBarrio}>
                <option value="">SELECCIONÁ TU BARRIO</option>
                {barriosOrdenados?.map((barrio) => {
                  return (
                    <option value={barrio.nombre} key={barrio.nombre}>
                      {barrio.nombre}
                    </option>
                  );
                })}
              </select>
            </form>
            {barrioSelectedRating ? (
              <div>
                <RatingForm
                  nombreBarrio={nombreBarrio}
                  idNeighborhood={idNeighborhood}
                />
              </div>
            ) : null}
            <CommentsList
              comments={allComments}
              idNeighborhood={idNeighborhood}
              nombreBarrio={nombreBarrio}
            />
          </ContainerCommentSeccion>
        )}
      </ContainerTabsContent>
    </ContainerCommentsStyled>
  );
};

export default Comments;
