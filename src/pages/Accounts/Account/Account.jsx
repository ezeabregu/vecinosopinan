import React from "react";
import { ContainerAccount } from "./accountStyles";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <ContainerAccount>
      <h2>Inicio de sesion exitoso</h2>
      <h2>Bienvenido {currentUser.name}</h2>
      <button
        onClick={() => {
          dispatch(setCurrentUser(null));
          navigate("/");
        }}
      >
        Salir
      </button>
    </ContainerAccount>
  );
};

export default Account;
