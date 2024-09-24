import React from "react";
import { ContainerLogin, ContainerForm } from "./loginStyles";

const Login = () => {
  return (
    <ContainerLogin>
      <ContainerForm>
        <form>
          <h3>INICIAR SESIÓN</h3>
          <div>
            <label htmlFor="">Correo electrónico</label>
            <input type="email" name="email" placeholder="Ingrese email" />
          </div>
          <div>
            <label htmlFor="">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Ingrese contraseña"
            />
          </div>
          <div className="divRecordar">
            <input type="checkbox" name="" id="" />
            <label htmlFor=""> Recordarme</label>
          </div>
          <button type="submit">Inicia sesión</button>
        </form>
      </ContainerForm>
    </ContainerLogin>
  );
};

export default Login;
