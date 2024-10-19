import React, { useState } from "react";
import {
  ContainerRatingFormStyled,
  ContainerStarStyled,
  ContainerCommentStyled,
  TituloFinal,
  ContainerIconClose,
  ContainerTitle,
} from "./ratingFormStyles";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";
import { commentUser } from "../../axios/axiosUser";
import { RiCloseCircleFill } from "react-icons/ri";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import SpinnerNew from "../spinnerNew/SpinnerNew";

const RatingForm = ({ nombreBarrio, idNeighborhood }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const email = currentUser.email;
    const person = currentUser.name;

    const user = await commentUser(
      email,
      idNeighborhood,
      rating,
      comment,
      person
    );
    if (user) {
      dispatch(
        setCurrentUser({
          ...user.usuario,
          comment: [idNeighborhood, rating, comment, person],
        })
      );
    }
    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
    setSubmitted(true);
    setIsSubmitting(false);
    console.log(currentUser);
  };

  const [isVisible, setIsVisible] = useState(true);
  const handleClickClose = () => {
    setIsVisible(!isVisible);
  };

  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiSelect = (emoji) => {
    setComment((prevText) => prevText + emoji.native);
    setShowPicker(false); // Cerrar el picker después de seleccionar
  };

  return (
    <>
      {submitted ? (
        <TituloFinal>¡Gracias por tu comentario!</TituloFinal>
      ) : (
        isVisible && (
          <ContainerRatingFormStyled>
            <ContainerIconClose>
              <RiCloseCircleFill
                size={30}
                className="iconClose"
                onClick={handleClickClose}
              />
            </ContainerIconClose>
            <ContainerTitle>
              <h2>Comenta sobre el barrio: {`${nombreBarrio}`}</h2>
            </ContainerTitle>
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
                {/* <Picker data={data} onEmojiSelect={console.log} /> */}
                <button
                  type="button"
                  onClick={() => setShowPicker(!showPicker)}
                >
                  {showPicker ? "Cerrar" : "🙂"}
                </button>
                {showPicker && (
                  <Picker
                    // onSelect={handleEmojiSelect}
                    data={data}
                    onEmojiSelect={handleEmojiSelect}
                    style={{ position: "absolute", zIndex: 1 }}
                  />
                )}
              </ContainerCommentStyled>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? <SpinnerNew /> : "Enviar"}
              </button>
            </form>
          </ContainerRatingFormStyled>
        )
      )}
    </>
  );
};

export default RatingForm;
