import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerHome = styled.div`
  width: 100vw;
  height: auto;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--NoBlanco);
  color: var(--blanco);
`;

export const ContainerHeroe = styled.div`
  width: 80%;
  border: none;
  border-radius: 10px;
  margin: 1rem;
  background: var(--blanco);
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    width: 90%;
    flex-direction: column-reverse;
    margin: 0;
  }
`;

export const ContainerHeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  width: 50%;
  padding: 0 5rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    //letter-spacing: 2px;
    background: linear-gradient(var(--amarilloOscuro), var(--amarillo));
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-stroke-width: 1.2px;
    -webkit-text-stroke-color: var(--blanco);
  }
  p {
    color: #131415;
    //max-width: 650px;
    text-align: start;
    font-size: 1rem;
    //line-height: 40px;
  }

  @media (max-width: 800px) {
    align-items: center;
    gap: 20px;
    margin: 1rem auto;
    width: 100%;
    padding: 10px;
    h1 {
      font-size: 2.6rem;
    }
    p {
      width: 100%;
      font-size: 1.2rem;
      text-align: center;
    }
  }
`;

export const LinkButton = styled(Link)`
  width: 200px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  background-color: var(--amarilloOscuro);
  border: none;
  border-radius: 5px;
  color: var(--NoBlanco);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;

export const ContainerHeroImage = styled.div`
  width: 50%;
  border-radius: 0 10px 10px 0;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    transition: scale 400ms;

    &:hover {
      scale: 120%;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    img {
      overflow: hidden;
    }
  }
`;
