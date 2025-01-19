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
  ContainerData,
  ContainerComment,
  ContainerLikes,
  ButtonLike,
  ButtonDislike,
} from "./commentsStyles";
import { Barrios } from "../../data/barrios";
import RatingForm from "../../components/ratingForm/RatingForm";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { useSelector } from "react-redux";
import { PiUserCircleLight } from "react-icons/pi";
import Spinner from "../spinner/Spinner";
import { FaTrashCan } from "react-icons/fa6";

const formatFechaYHora = (fecha) => {
  return new Date(fecha).toLocaleString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const deleteComment = async (id, email) => {
  try {
    const response = await axios.delete(`${BASE_URL}/auth/commentDelete`, {
      params: { id, email },
    });
    console.log(response.data.msg);
    alert("El comentario se eliminó correctamente!");
  } catch (error) {
    console.error("Error al eliminar el comentario:", error.response.data.msg);
  } finally {
    window.location.reload();
  }
};

const CommentCard = ({ comment, currentUser }) => {
  // Estado para el contador de "likes"
  const [likeCount, setLikeCount] = useState(comment.likes || 0);
  const [dislikeCount, setDislikeCount] = useState(comment.dislikes || 0);
  const [hasVoted, setHasVoted] = useState(false); // Para verificar si ya votó
  const [userChoice, setUserChoice] = useState(null); // Para almacenar si eligió like o dislike
  // Incrementar el contador de "likes"
  const handleLikeClick = () => {
    if (!hasVoted) {
      setLikeCount(likeCount + 1);
      setUserChoice("like");
      setHasVoted(true);
    } else if (userChoice === "dislike") {
      setDislikeCount(dislikeCount - 1);
      setLikeCount(likeCount + 1);
      setUserChoice("like");
    }
  };
  const handleDislikeClick = () => {
    if (!hasVoted) {
      setDislikeCount(dislikeCount + 1);
      setUserChoice("dislike");
      setHasVoted(true);
    } else if (userChoice === "like") {
      setLikeCount(likeCount - 1);
      setDislikeCount(dislikeCount + 1);
      setUserChoice("dislike");
    }
  };

  return (
    <ContainerCommentsCard>
      <CommentHeader>
        {/* <img src={comment.photo} alt={"User"} /> */}
        <ContainerData>
          <PiUserCircleLight size={60} />
          <UserInfo>
            {currentUser ? (
              <h4>{currentUser?.name}</h4>
            ) : (
              <h4>{comment.person?.toUpperCase()}</h4>
            )}
            <p>{formatFechaYHora(comment.date)}</p>

            {Barrios.map((barrio) =>
              comment.idNeighborhood === barrio.id ? (
                <p>{barrio.nombre}</p>
              ) : null
            )}
            <StarRating>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < comment.rating ? "star-filled" : "star-empty"}
                />
              ))}
            </StarRating>
          </UserInfo>
        </ContainerData>
        {currentUser ? (
          <FaTrashCan
            style={{ color: "red" }}
            onClick={() => deleteComment(comment.id, currentUser.email)}
          />
        ) : null}
      </CommentHeader>
      <ContainerComment>
        <p>{comment.comment}</p>
      </ContainerComment>
      <ContainerLikes>
        <ButtonLike onClick={handleLikeClick}>{likeCount}</ButtonLike>
        <ButtonDislike onClick={handleDislikeClick}>
          {dislikeCount}
        </ButtonDislike>
      </ContainerLikes>
    </ContainerCommentsCard>
  );
};

const CommentsList = ({ comments }) => {
  const sortedComments = comments
    ? comments.sort((a, b) => new Date(b.date) - new Date(a.date))
    : [];
  return (
    <ContainerCommentsList>
      {sortedComments && sortedComments.length > 0 ? (
        sortedComments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))
      ) : (
        <p
          style={{
            textAlign: "center",
            gridColumn: "1 / -1",
            color: "grey",
            margin: "1rem",
          }}
        >
          No hay comentarios disponibles.
        </p>
      )}
    </ContainerCommentsList>
  );
};

const CommentsListUser = ({ comments, currentUser }) => {
  const sortedComments = comments
    ? comments.sort((a, b) => new Date(b.date) - new Date(a.date))
    : [];
  return (
    <ContainerCommentsList>
      {sortedComments && sortedComments.length > 0 ? (
        sortedComments?.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            currentUser={currentUser}
          />
        ))
      ) : (
        <p
          style={{
            textAlign: "center",
            gridColumn: "1 / -1",
            color: "grey",
            margin: "3rem",
          }}
        >
          Aún no comentaste un barrio
        </p>
      )}
    </ContainerCommentsList>
  );
};

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
        //console.log(response.data);

        setComentariosBarrio(response.data);
      } catch (err) {
        console.log(err.message);
        setComentariosBarrio([]);
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
              // <p>Cargando...</p>
              <Spinner />
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
