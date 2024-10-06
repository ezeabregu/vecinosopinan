import React, { useState } from "react";
import {
  ContainerRatingFormStyled,
  ContainerStarStyled,
  ContainerCommentStyled,
} from "./ratingFormStyles";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { useSelector } from "react-redux";

const RatingForm = ({ nombreBarrio, idNeighborhood }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = currentUser.email;
    // Aquí puedes manejar el envío del formulario, como llamar a una API
    //console.log(rating, comment, idNeighborhood);
    try {
      const response = await axios.patch(`${BASE_URL}/auth/comment`, {
        email,
        idNeighborhood,
        rating,
        comment,
      });
      //console.log("Datos enviados:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
    setSubmitted(true);
  };

  return (
    <>
      <ContainerRatingFormStyled>
        <h2>Puntúa el barrio</h2>
        <h2>{`${nombreBarrio}`}</h2>
        <form onSubmit={handleSubmit}>
          <ContainerStarStyled>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${rating >= star ? "filled" : ""}`}
                onClick={() => handleStarClick(star)}
              >
                <FaStar />
              </span>
            ))}
          </ContainerStarStyled>
          <ContainerCommentStyled>
            <textarea
              placeholder="Dejá tu comentario aquí..."
              value={comment}
              onChange={handleCommentChange}
            />
          </ContainerCommentStyled>
          <button type="submit">Enviar</button>
        </form>
        {submitted && <p>¡Gracias por tu comentario!</p>}
      </ContainerRatingFormStyled>
    </>
  );
};

export default RatingForm;
