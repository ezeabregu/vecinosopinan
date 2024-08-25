import React from "react";
import { ContainerLogin, ContainerForm } from "./loginStyles";

const Login = () => {
  return (
    <ContainerLogin>
      <ContainerForm>
        <form action="">
          <h3>Iniciar sesión</h3>
          <div>
            <label htmlFor="">Correo electrónico</label>
            <input type="text" placeholder="Ingrese email" />
          </div>
          <div>
            <label htmlFor="">Contraseña</label>
            <input type="password" placeholder="Ingrese contraseña" />
          </div>
          <div className="divRecordar">
            <input type="checkbox" name="" id="" />
            <label htmlFor=""> Recordarme</label>
          </div>
          <button>Inicia sesión</button>
        </form>
      </ContainerForm>
    </ContainerLogin>
  );
};

export default Login;
