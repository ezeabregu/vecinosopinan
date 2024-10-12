import styled, { keyframes } from "styled-components";

export const bounce = keyframes`
    0%, 100% {
        transform: scale(0);
    }
    50% {
        transform: scale(1);
    }
`;

export const SpinnerContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  margin: auto;
`;

export const Bounce = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--amarilloOscuro);
  position: absolute;
  top: 0;
  left: 0;
  animation: ${bounce} 2s infinite ease-in-out;

  &:nth-child(2) {
    animation-delay: -1s;
  }
`;
