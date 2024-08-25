import React from "react";
import { ContainerHome } from "./homeStyles";

const Home = () => {
  return (
    <ContainerHome>
      <div>
        <img src="../../images/heroVecinosOpinan.jpg" alt="Hero" />
      </div>
      <div>
        <h1>
          Bienvenidos a <span>Vecinos Opinan</span>
        </h1>
        <p>
          En este espacio, los vecinos tienen la oportunidad de compartir sus
          experiencias y opiniones respecto al barrio donde se encuentre.
          Creemos que cada voz cuenta y que a través de opiniones y experiencias
          se puede conocer un barrio.
        </p>
        <p>
          Únete y descubre lo que otros piensan. Comparte tus propias historias
          del barrio.
        </p>
      </div>
    </ContainerHome>
  );
};

export default Home;
