import React from "react";
import { ContainerError } from "./Error404styles";
import { CgSmileSad } from "react-icons/cg";

const Error404 = () => {
  return (
    <ContainerError>
      <CgSmileSad size={150} />
      <h2>404</h2>
      <span>PAGE NOT FOUND</span>
    </ContainerError>
  );
};

export default Error404;
