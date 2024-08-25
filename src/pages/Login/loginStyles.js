import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  padding: 2rem;
  background-color: var(--fondo);
  color: var(--blanco);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled.form`
  width: 300px;
  height: 300px;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--fondoOscuro);
  display: flex;
  justify-content: center;
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
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  button {
    width: 100%;
    background-color: #fff;
    border: 1px solid var(--blanco);
    color: var(--fondoOscuro);
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
      background-color: var(--fondoOscuro);
      color: #fff;
    }
  }
  input {
    background-color: var(--fondoOscuro);
    border: 1px solid var(--blanco);
    color: var(--blanco);
    border-radius: 5px;
    padding: 10px 20px;
  }
  label {
    font-size: 0.8rem;
  }
`;
