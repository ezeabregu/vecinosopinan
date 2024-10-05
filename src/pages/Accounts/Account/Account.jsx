import React, { useEffect, useState } from "react";
import { ContainerAccount, ContainerAccountTitle } from "./accountStyles";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import { verifyUser } from "../../../axios/axiosUser";
import Comments from "../../../components/comments/Comments";

const Account = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [codeVerify, setCodeVerify] = useState("");

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
          <input
            type="text"
            placeholder="Verificar cuenta"
            value={codeVerify}
            onChange={(e) => setCodeVerify(e.target.value)}
          />
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
      <Comments />
    </ContainerAccount>
  );
};

export default Account;
