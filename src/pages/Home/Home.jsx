import React from "react";
import {
  ContainerHome,
  ContainerHeroe,
  ContainerHeroText,
  ContainerHeroImage,
  LinkButton,
} from "./homeStyles";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import heroImg from "../../assets/img/hero.jpg";

const Home = () => {
  return (
    <ContainerHome>
      <ContainerHeroe>
        <ContainerHeroText>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 10 }}
          >
            {/* <h1>VECINOS OPINAN</h1> */}
            <div class="contenedorLogo">
              <img src="VO.png" alt="Logo" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              En este espacio, los vecinos tienen la oportunidad de compartir
              sus experiencias y opiniones respecto al barrio donde se
              encuentren. Creemos que cada voz cuenta y que a través de
              opiniones y experiencias se puede conocer un barrio.
            </p>
            <p>
              Únete y descubre lo que otros piensan. Comparte tus propias
              historias del barrio.
            </p>
            <LinkButton to="/about">
              Sobre nosotros <IoIosArrowRoundForward size={30} />
            </LinkButton>
          </motion.div>
        </ContainerHeroText>
        <ContainerHeroImage>
          <img src={heroImg} alt="inicio" />
        </ContainerHeroImage>
      </ContainerHeroe>
    </ContainerHome>
  );
};

export default Home;
