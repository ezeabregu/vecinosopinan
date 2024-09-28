import styled from "styled-components";
import { Form } from "formik";

export const ContainerLogin = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  padding: 2rem;
  background-color: var(--NoBlanco);
  color: var(--blanco);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

export const ContainerForm = styled(Form)`
  width: 300px;
  height: auto;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--amarilloOscuro);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  h3 {
    font-size: 1.4rem;
    padding-bottom: 15px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .divRecordar {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }

  button {
    margin-top: 15px;
    width: 50%;
    background-color: var(--amarilloOscuro);
    border: 1px solid var(--blanco);
    color: var(--blanco);
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
      background-color: var(--amarillo);
      color: #fff;
    }
  }
  input {
    background-color: var(--blanco);
    border: 1px solid var(--blanco);
    color: #000;
    padding: 10px 20px;
  }
  label {
    font-size: 0.8rem;
  }

  span {
    font-size: 0.7rem;
  }
`;

export const ErrorStyled = styled.span`
  font-size: 0.6rem;
  color: red;
`;

export const ContainerSingup = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--amarilloOscuro);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  p {
    font-size: 0.8rem;
    span {
      color: royalblue;
      cursor: pointer;
    }
  }
`;
