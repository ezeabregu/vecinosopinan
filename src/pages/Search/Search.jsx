import React from "react";
import { ContainerSearch, MapResponsive } from "./searchStyles";
import Iframe from "react-iframe";

const Search = () => {
  return (
    <ContainerSearch>
      <MapResponsive>
        {Iframe ? (
          <Iframe
            src="https://www.google.com/maps/d/embed?mid=1jOvKnOgVTvHtdZODbsv_Hh59ixpm_dY&ehbc=2E312F"
            // width="640"
            // height="480"
          ></Iframe>
        ) : (
          <p>Cargando mapa...</p>
        )}
      </MapResponsive>
    </ContainerSearch>
  );
};

export default Search;
