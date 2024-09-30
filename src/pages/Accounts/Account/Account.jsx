import React from "react";
import { ContainerAccount, ContainerAccountTitle } from "./accountStyles";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <ContainerAccount>
      <ContainerAccountTitle>
        <h2>Hola {currentUser.name}</h2>
        <button
          onClick={() => {
            dispatch(setCurrentUser(null));
            navigate("/");
          }}
        >
          Salir
        </button>
      </ContainerAccountTitle>
    </ContainerAccount>
  );
};

export default Account;
