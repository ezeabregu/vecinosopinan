import React from "react";
import { ContainerLogin, ContainerForm } from "./loginStyles";

const Login = () => {
  return (
    <ContainerLogin>
      <ContainerForm>
        <form action="">
          <label htmlFor="">Usuario</label>
          <input type="text" />
          <label htmlFor="">Contraseña</label>
          <input type="password" />
          <button>Inicia sesión</button>
        </form>
      </ContainerForm>
    </ContainerLogin>
  );
};

export default Login;
