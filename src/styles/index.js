import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#012545",
};

const EstiloGlobal = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
    }

    body {
        overflow-x: hidden;
    }

    a:visited {
        color: ${colors.primary}; // Cor para links visitados
    }
`;

export default EstiloGlobal;
