import styled from "styled-components";
import { GrNext } from "react-icons/gr";

import { colors } from "../../styles";

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >input {
        border-radius: 8px;
        height: 24px;
        width: 20em;
        margin-bottom: 18px;
    }

    >img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`

export const ImgContent = styled.div`
    >img {
        margin-top: 8px;
        max-width: 100%;
        width: 14em;
        height: auto;
    }
`

export const ParagraphContent = styled.div`
    >p {
        font-family: 'Playfair Display', serif;
        margin: 16px 0 8px 0;
    }
`

export const ButtonContent = styled.div`
    font-size: 30px;
    display: flex;
    align-items: center;
    color: ${colors.primary};
    cursor: pointer;
`

export const Button = styled(GrNext)`
    color: ${colors.primary};
`