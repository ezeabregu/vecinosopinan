import React, { useState } from "react";
import {
  ContainerRatingFormStyled,
  ContainerStarStyled,
  ContainerCommentStyled,
} from "./ratingFormStyles";
import { FaStar } from "react-icons/fa";

const RatingForm = ({ nombreBarrio }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, como llamar a una API
    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
    setSubmitted(true);
  };

  return (
    <>
      <ContainerRatingFormStyled>
        <h2>{`Puntúa el barrio ${nombreBarrio}`}</h2>
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
