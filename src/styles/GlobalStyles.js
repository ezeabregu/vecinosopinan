import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --verde: #0abf53;
    --verdePastel: #009f4d;
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
