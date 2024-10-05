import React from "react";
import {
  ContainerAccount,
  ContainerAccountTitle,
  ErrorStyled,
  ContainerVerify,
} from "./accountStyles";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import { Formik, ErrorMessage, Field } from "formik";
import { verifyUser } from "../../../axios/axiosUser";
import { validationVerify } from "../../../formik/validationSchema";
import { initialValuesVerify } from "../../../formik/initiailValues";
import Comments from "../../../components/comments/Comments";

const Account = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <ContainerAccount>
      <ContainerAccountTitle>
        <h2>
          Hola {currentUser.name}{" "}
          {currentUser.verified === true ? (
            <MdVerified style={{ color: "#ff9900" }} />
          ) : null}
        </h2>
        <Formik
          initialValues={initialValuesVerify}
          validationSchema={validationVerify}
          onSubmit={async (values, actions) => {
            const user = await verifyUser(currentUser.email, values.code);
            if (user) {
              dispatch(
                setCurrentUser({
                  ...user.usuario,
                  token: user.token,
                  verified: true,
                })
              );
            }
            actions.resetForm();
          }}
        >
          {currentUser.verified === true ? null : (
            <ContainerVerify>
              <Field
                type="text"
                name="code"
                id="code"
                placeholder="Verificar cuenta"
              />
              <ErrorMessage name="code" component={ErrorStyled}></ErrorMessage>
            </ContainerVerify>
          )}
        </Formik>
        <button
          onClick={() => {
            dispatch(setCurrentUser(null));
            navigate("/");
          }}
        >
          Salir
        </button>
      </ContainerAccountTitle>
      <Comments />
    </ContainerAccount>
  );
};

export default Account;
