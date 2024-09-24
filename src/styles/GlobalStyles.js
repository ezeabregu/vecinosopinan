import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --fondo: #0097A7;
    --fondoOscuro:#007993;
    --blanco: #fff;
    --amarillo: #feba02;
    --amarilloOscuro: #ff9900;
    --NoBlanco: #f6f6f5;
}
html{
        scroll-behavior: smooth;
    }
    body{
        font-family: "Poppins", sans-serif;
        overflow-x: hidden;
    }
`;
