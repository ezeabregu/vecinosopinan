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
  } catch (error) {
    console.error("Error al eliminar el comentario:", error.response.data.msg);
  }
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
      {currentUser ? (
        <FaTrashCan
          onClick={() => deleteComment(comment.id, currentUser.email)}
        />
      ) : null}
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
    {comments && comments.length > 0 ? (
      comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))
    ) : (
      <p
        style={{
          textAlign: "center",
          gridColumn: "1 / -1",
          color: "gray",
          margin: "1rem",
        }}
      >
        No hay comentarios disponibles.
      </p>
    )}
  </ContainerCommentsList>
);

const CommentsListUser = ({ comments, currentUser }) => (
  <ContainerCommentsList>
    {comments?.map((comment) => (
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
