import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#012545",
  gray: "#c3c3c3",
  priceContentColor: "#576f85",
  whatsappColor: "#25d366",
  whatsappColorHover: "#128c7e",
};

const EstiloGlobal = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
    }

    a:visited {
        color: ${colors.primary}; 
    }
`;

export default EstiloGlobal;
