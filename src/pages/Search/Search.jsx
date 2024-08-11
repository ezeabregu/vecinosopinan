import React from "react";
import {
  ContainerSearch,
  MapResponsive,
  ContainerBarriosList,
} from "./searchStyles";
import Iframe from "react-iframe";
import { Barrios } from "../../data/barrios";

const Search = () => {
  return (
    <ContainerSearch>
      <ContainerBarriosList>
        <h2>Buscá tu barrio</h2>
        <form action="#">
          <select name="barrios" id="barrios">
            {Barrios?.map((barrio) => {
              return <option value={barrio.nombre}>{barrio.nombre}</option>;
            })}
          </select>
        </form>
      </ContainerBarriosList>
      <MapResponsive>
        {Iframe ? (
          <Iframe src="https://www.google.com/maps/d/embed?mid=1jOvKnOgVTvHtdZODbsv_Hh59ixpm_dY&ehbc=2E312F"></Iframe>
        ) : (
          <p>Cargando mapa...</p>
        )}
      </MapResponsive>
    </ContainerSearch>
  );
};

export default Search;
