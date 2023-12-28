import styled from "styled-components";
import { GrNext } from "react-icons/gr";

import { colors } from "../../styles";

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
    height: 100vh;

    >input {
        border-radius: 8px;
        height: 24px;
        width: 20em;
        margin-bottom: 18px;
    }

    @media (max-width: 600px) {
        >img{
            width: 100%;
            object-fit: cover;
        }
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

export const CatalogContent = styled.div`
    padding: 8px;

    h1 {
        font-size: 24px;
        font-weight: 100;
        font-style: italic;
        letter-spacing: 1px;
        margin-bottom: 4px;
    }
`

export const ImgContentCatalog = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 16px;

    img {
        max-width: 100%;
        width: 14em;
    }
`