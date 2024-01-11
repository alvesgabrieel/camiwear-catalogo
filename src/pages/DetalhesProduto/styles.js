import styled from "styled-components";
import { colors } from "../../styles";

export const mainContent = styled.div`
  @media (min-width: 700px) {
    padding: 32px;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  padding: 16px;
  border-radius: 64px;
`;

export const DetailsProdutContent = styled.div`
  padding: 24px;

  > h3 {
    margin: 8px 0px;
  }

  > h2 {
    margin-bottom: 16px;
  }
`;

export const ProdutContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PriceContent = styled.div`
  border: 1px solid #576f85;
  border-radius: 16px;
  padding: 12px;

  > p {
    color: #576f85;
    font-weight: bold;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const CorButton = styled.button`
  padding: 8px;
  background-color: ${colors.primary};
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const SendButton = styled.button`
  margin-top: 32px;
`;
