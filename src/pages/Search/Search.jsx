import React, { useEffect, useState } from "react";
import {
  ContainerSearch,
  MapResponsive,
  ContainerBarriosList,
} from "./searchStyles";
import Iframe from "react-iframe";
import { Barrios } from "../../data/barrios";
// import RatingForm from "../../components/ratingForm/RatingForm";
// import { motion } from "framer-motion";
//import { useSelector } from "react-redux";
import Modal from "../../components/modal/Modal";

const Search = () => {
  //const currentUser = useSelector((state) => state.user.currentUser);
  const [userLocation, setUserLocation] = useState(null);
  //const [barrioSelectedRating, setBarrioSelectedRating] = useState(false);
  //const [nombreBarrio, setNombreBarrio] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  let linkMapWithLocation =
    "https://www.google.com/maps/d/embed?mid=1jOvKnOgVTvHtdZODbsv_Hh59ixpm_dY&ehbc=2E312F";

  if (userLocation == null) {
    setUserLocation(linkMapWithLocation);
  }

  // const getUserLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         setUserLocation({ latitude, longitude });

  //         if (userLocation !== null) {
  //           linkMapWithLocation = `https://www.google.com/maps/d/embed?mid=1jOvKnOgVTvHtdZODbsv_Hh59ixpm_dY&ehbc=2E312F&ll=${userLocation.latitude}%2C${userLocation.longitude}&z=11`;
  //         }
  //       },
  //       (error) => {
  //         console.log("Error al obtener la localización del usuario:", error);
  //       }
  //     );
  //   } else {
  //     console.log("La geolocalización no es soportada por este navegador.");
  //   }

  //   return linkMapWithLocation;
  // };

  const buscarBarrio = (e) => {
    let index = e.target.selectedIndex;
    //console.log(e.target.options[index].text); // obtiene el texto de la opción seleccionada
    Barrios.map((barrio) => {
      return e.target.options[index].text === barrio.nombre
        ? setUserLocation(barrio.ubicacion)
        : // setBarrioSelectedRating(true),
          // setNombreBarrio(barrio.nombre))
          null;
    });
  };

  const barriosOrdenados = [...Barrios].sort((b, a) =>
    a.nombre < b.nombre ? 1 : a.nombre > b.nombre ? -1 : 0
  );

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <ContainerSearch>
      <div>
        <Modal show={isModalOpen} handleClose={toggleModal} />
      </div>
      <ContainerBarriosList>
        <h2>Buscá tu barrio</h2>
        <form action="#">
          <select name="barrios" id="barrios" onChange={buscarBarrio}>
            <option>SELECCIONÁ TU BARRIO</option>
            {barriosOrdenados?.map((barrio) => {
              return (
                <option value={barrio.nombre} key={barrio.nombre}>
                  {barrio.nombre}
                </option>
              );
            })}
          </select>
        </form>
        {/* <button onClick={getUserLocation()}>¿Dónde estoy?</button> */}
      </ContainerBarriosList>
      {/* {barrioSelectedRating && currentUser ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <RatingForm nombreBarrio={nombreBarrio} />
        </motion.div>
      ) : null} */}
      <MapResponsive>
        {Iframe ? (
          <div>
            <Iframe
              src={userLocation}
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              style={{
                border: "none",
              }}
            ></Iframe>
          </div>
        ) : (
          <p>Cargando mapa...</p>
        )}
      </MapResponsive>
    </ContainerSearch>
  );
};

export default Search;
