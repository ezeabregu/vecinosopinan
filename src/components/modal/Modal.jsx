import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  CloseButton,
  ModalContent,
  LinkButton,
} from "./modalStyled";

const Modal = ({ show, handleClose }) => {
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
          <LinkButton to="/accounts/login">IR</LinkButton>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
