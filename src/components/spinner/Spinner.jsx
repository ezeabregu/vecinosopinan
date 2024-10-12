import React from "react";
import { SpinnerContainer, Bounce } from "./spinnerStyles";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <Bounce />
      <Bounce />
    </SpinnerContainer>
  );
};

export default Spinner;
