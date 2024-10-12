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
import { PiUserCircleLight } from "react-icons/pi";

const allComments = [
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

const formatFechaYHora = (fecha) => {
  return new Date(fecha).toLocaleString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const CommentCard = ({ comment, currentUser }) => (
  <ContainerCommentsCard>
    <CommentHeader>
      {/* <img src={comment.photo} alt={"User"} /> */}
      <PiUserCircleLight size={60} />
      <UserInfo>
        <h4>{currentUser?.name}</h4>
        {Barrios.map((barrio) =>
          comment.idNeighborhood === barrio.id ? <p>{barrio.nombre}</p> : null
        )}
        <p>{formatFechaYHora(comment.date)}</p>
      </UserInfo>
    </CommentHeader>
    <StarRating>
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={i < comment.rating ? "star-filled" : "star-empty"}
        />
      ))}
    </StarRating>
    <p>{comment.comment}</p>
  </ContainerCommentsCard>
);

const CommentsList = ({ comments }) => (
  <ContainerCommentsList>
    {comments?.map((comment) => (
      <CommentCard key={comment.id} comment={comment} />
    ))}
  </ContainerCommentsList>
);

const CommentsListUser = ({ comments, currentUser }) => (
  <ContainerCommentsList>
    {comments.map((comment) => (
      <CommentCard
        key={comment.id}
        comment={comment}
        currentUser={currentUser}
      />
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

  //Desde aca realizamos la busqueda de comentarios para el usuario logueado
  const [comentarios, setComentarios] = useState([]);
  //console.log(comentarios);

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

  //Desde aca realizamos la busqueda de comentarios para el barrio buscado
  const [comentariosBarrio, setComentariosBarrio] = useState([]);
  //console.log(comentariosBarrio);

  useEffect(() => {
    const fetchComentariosBarrios = async (idNeighborhood) => {
      try {
        const response = await axios.get(`${BASE_URL}/auth/commentFind`, {
          params: { idNeighborhood },
        });
        setComentariosBarrio(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    fetchComentariosBarrios(idNeighborhood);
  }, [idNeighborhood]);

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
              <CommentsListUser
                comments={comentarios.comments}
                currentUser={currentUser}
              />
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
              comments={comentariosBarrio.comments}
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
