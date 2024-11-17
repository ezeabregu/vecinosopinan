import styled from "styled-components";
import { Link } from "react-router-dom";

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  backdrop-filter: ${(props) => (props.show ? "blur(5px)" : "none")};
  -webkit-backdrop-filter: ${(props) => (props.show ? "blur(5px)" : "none")};
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  max-width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #aaa;
  &:hover {
    color: #000;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  font-size: 16px;
  color: #333;
  p {
    text-align: start;
    color: #333;
  }
`;

export const LinkButton = styled(Link)`
  width: 50px;
  padding: 5px;
  background-color: var(--amarilloOscuro);
  border: none;
  border-radius: 5px;
  color: var(--NoBlanco);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;
