import { createGlobalStyle } from 'styled-components'

export const colors = {
    primary: "#012545",
  };
  

const EstiloGlobal = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
`

export default EstiloGlobal