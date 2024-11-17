import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  CloseButton,
  ModalContent,
  LinkButton,
} from "./modalStyled";
import { useSelector } from "react-redux";

const Modal = ({ show, handleClose }) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <ModalOverlay show={show}>
      <ModalContainer>
        <ModalHeader>
          <span>Estás registrado?</span>
          <CloseButton onClick={handleClose}>×</CloseButton>
        </ModalHeader>
        <ModalContent>
          <p>
            Inicia sesión para ver los comentarios sobre los barrios y dejar el
            tuyo.
          </p>
          {currentUser ? (
            <LinkButton to="/accounts/account">IR</LinkButton>
          ) : (
            <LinkButton to="/accounts/login">IR</LinkButton>
          )}
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
