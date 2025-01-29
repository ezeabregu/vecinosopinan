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
          <span>
            ¿Quieres ver los comentarios de los barrios? Regístrate ahora
          </span>
          <CloseButton onClick={handleClose}>×</CloseButton>
        </ModalHeader>
        <ModalContent>
          <p>
            ¡Hola! Si deseas conocer más detalles sobre cada barrio, incluyendo
            los comentarios y opiniones de otros usuarios, te invitamos a
            registrarte. En este mapa solo podrás ver la ubicación de los
            barrios, pero una vez registrado, podrás acceder a los comentarios
            directamente desde tu perfil de usuario. ¡No pierdas la oportunidad
            de obtener toda la información que necesitas!
          </p>
          {currentUser ? (
            <LinkButton to="/accounts/account">Registrarse</LinkButton>
          ) : (
            <LinkButton to="/accounts/login">Iniciar sesión</LinkButton>
          )}
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
