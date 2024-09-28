import React from "react";
import {
  ContainerLogin,
  ContainerForm,
  ErrorStyled,
  ContainerSingup,
} from "./singupStyles";
import { Formik, Field, ErrorMessage } from "formik";
import { validationSingup } from "../../../formik/validationSchema";
import { initialValuesSingup } from "../../../formik/initiailValues";
import { useNavigate } from "react-router-dom";

const Singup = () => {
  const navigate = useNavigate();

  return (
    <>
      <ContainerLogin>
        <Formik
          initialValues={initialValuesSingup}
          validationSchema={validationSingup}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <ContainerForm>
            <h3>VECINOS OPINAN</h3>
            <div>
              {/* <label htmlFor="">Contraseña</label> */}
              <Field type="text" name="name" placeholder="Nombre completo" />
              <ErrorMessage name="name" component={ErrorStyled} />
            </div>
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
            <div>
              <span>
                Al registrarte, aceptas nuestras Condiciones, nuestra Política
                de privacidad y nuestra Política de cookies.
              </span>
            </div>
            <button type="submit">Registrarte</button>
          </ContainerForm>
        </Formik>
        <ContainerSingup>
          <p>
            ¿Tienes una cuenta?{" "}
            <span onClick={() => navigate("/accounts/login")}>Entrar</span>
          </p>
        </ContainerSingup>
      </ContainerLogin>
    </>
  );
};

export default Singup;