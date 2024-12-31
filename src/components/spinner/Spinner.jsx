import React from "react";
import { SpinnerContainer, Bounce } from "./spinnerStyles";

const Spinner = ({ color }) => {
  return (
    <SpinnerContainer>
      <Bounce color={color} />
      <Bounce color={color} />
    </SpinnerContainer>
  );
};

export default Spinner;
