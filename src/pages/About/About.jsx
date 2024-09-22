import React from "react";
import {
  ContainerAbout,
  ContainerParrafo,
  ContainerTitle,
} from "./aboutStyles";
import { FaSlideshare } from "react-icons/fa";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { FaPeopleGroup } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <ContainerAbout>
        <ContainerTitle>
          <label htmlFor="">Sobre nosotros</label>
        </ContainerTitle>
        <ContainerParrafo>
          <p>
            Bienvenidos a <strong>Vecinos Opinan</strong> creemos que la mejor
            forma de conocer un barrio es a través de las experiencias y
            recomendaciones de quienes lo llaman hogar. Por eso, hemos creado un
            espacio donde los vecinos pueden compartir sus opiniones, consejos y
            recomendaciones sobre los barrios donde viven.
          </p>
          <p>
            Nuestro objetivo es construir una comunidad en línea donde los
            vecinos puedan intercambiar información valiosa y útil sobre los
            barrios, sin ánimo de fomentar insultos, acosos o chismes. Queremos
            crear un ambiente de respeto, confianza y buen trato, donde todos se
            sientan cómodos compartiendo sus experiencias y escuchando las de
            otros.
          </p>
          <label htmlFor="">¿Qué esperamos de ti?</label>
          <ul>
            <li>
              <FaSlideshare size={40} /> Comparte tus experiencias y opiniones
              sobre tu barrio de manera respetuosa y constructiva
            </li>
            <li>
              <LiaHandsHelpingSolid size={30} /> Ayuda a otros vecinos con tus
              consejos y recomendaciones
            </li>
            <li>
              <FaPeopleGroup size={30} /> Mantén un ambiente de respeto y
              consideración hacia los demás
            </li>
          </ul>
          <label htmlFor="">¡Gracias por ser parte de nuestra comunidad!</label>
        </ContainerParrafo>
      </ContainerAbout>
    </>
  );
};

export default About;
