import styled from "styled-components";

export const MainContent = styled.div`
    margin-top: 16px;

    ul {
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* Define duas colunas com largura igual */
        gap: 16px; /* Adiciona um espaçamento entre os itens */
    }

    li {
        margin-bottom: 16px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 16px;
        
        p{
            padding: 4px;
        }

        p:nth-child(2){
            color: #595959;
        }

        p:nth-child(3){
            font-weight: bold;
        }
    }

    img {
        max-width: 100%;
        border-radius: 16px;
    }
`