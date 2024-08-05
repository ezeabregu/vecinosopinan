import React from "react";
import { ContainerSearch } from "./searchStyles";
import Iframe from "react-iframe";

const Search = () => {
  return (
    <ContainerSearch>
      {Iframe ? (
        <Iframe
          url="https://www.google.com/maps/d/u/0/viewer?mid=1jOvKnOgVTvHtdZODbsv_Hh59ixpm_dY&ll=-31.3822691176836%2C-64.20128424999999&z=11"
          width="640"
          height="480"
          id=""
          className=""
          display="block"
          position="relative"
        ></Iframe>
      ) : (
        <p>Cargando mapa...</p>
      )}
    </ContainerSearch>
  );
};

export default Search;
