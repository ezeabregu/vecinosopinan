import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --fondo: #0097A7;
    --fondoOscuro:#007993;
    --blanco: #fff;
}
html{
        scroll-behavior: smooth;
    }
    body{
        font-family: "Poppins", sans-serif;
        overflow-x: hidden;
    }
`;
