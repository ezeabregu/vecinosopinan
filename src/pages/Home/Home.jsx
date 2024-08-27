import React from "react";
import { ContainerHome } from "./homeStyles";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <ContainerHome>
      <div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 10 }}
        >
          <h2>Bienvenidos a</h2>
          <h1>Vecinos Opinan</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            En este espacio, los vecinos tienen la oportunidad de compartir sus
            experiencias y opiniones respecto al barrio donde se encuentre.
            Creemos que cada voz cuenta y que a través de opiniones y
            experiencias se puede conocer un barrio.
          </p>
          <p>
            Únete y descubre lo que otros piensan. Comparte tus propias
            historias del barrio.
          </p>
        </motion.div>
      </div>
    </ContainerHome>
  );
};

export default Home;
