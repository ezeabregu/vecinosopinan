import React from "react";
import {
  ContainerLogin,
  ContainerForm,
  ErrorStyled,
  ContainerSingup,
} from "./loginStyles";
import { Formik, Field, ErrorMessage } from "formik";
import { validationLogin } from "../../../formik/validationSchema";
import { initialValuesLogin } from "../../../formik/initiailValues";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <ContainerLogin>
        <Formik
          initialValues={initialValuesLogin}
          validationSchema={validationLogin}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <ContainerForm>
            <h3>VECINOS OPINAN</h3>
            <div>
              {/* <label htmlFor="">Correo electrónico</label> */}
              <Field
                type="email"
                name="email"
                placeholder="Correo electrónico"
              />
              <ErrorMessage name="email" component={ErrorStyled} />
            </div>
            <div>
              {/* <label htmlFor="">Contraseña</label> */}
              <Field type="password" name="password" placeholder="Contraseña" />
              <ErrorMessage name="password" component={ErrorStyled} />
            </div>
            <button type="submit">Entrar</button>
          </ContainerForm>
        </Formik>
        <ContainerSingup>
          <p>
            ¿No tienes una cuenta?{" "}
            <span onClick={() => navigate("/accounts/singup")}>Regístrate</span>
          </p>
        </ContainerSingup>
      </ContainerLogin>
    </>
  );
};

export default Login;