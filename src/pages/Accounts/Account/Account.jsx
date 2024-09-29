import React from "react";
import {} from "./accountStyles";
import { useSelector } from "react-redux";

const Account = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div>
      <h2>`Bienvenido ${currentUser.name}`</h2>
    </div>
  );
};

export default Account;
