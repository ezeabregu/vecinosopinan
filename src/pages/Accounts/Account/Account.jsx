import React from "react";
import { ContainerAccount, ContainerAccountTitle } from "./accountStyles";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { MdVerified } from "react-icons/md";

const Account = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(currentUser.verified);

  return (
    <ContainerAccount>
      <ContainerAccountTitle>
        <h2>
          Hola {currentUser.name}{" "}
          {currentUser.verified === true ? (
            <MdVerified style={{ color: "#ff9900" }} />
          ) : null}
        </h2>
        {currentUser.verified === true ? null : (
          <input type="text" placeholder="Verificar cuenta" />
        )}
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
