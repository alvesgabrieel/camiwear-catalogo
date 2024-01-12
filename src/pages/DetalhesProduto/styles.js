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
  border: 1px solid ${colors.priceContentColor};
  border-radius: 16px;
  padding: 12px;

  > p {
    color: ${colors.priceContentColor};
    font-weight: bold;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const ButtonColor = styled.button`
  padding: 8px;
  background-color: ${(props) =>
    props.isSelected ? colors.gray : colors.primary};
  color: ${(props) => (props.isSelected ? "black" : "white")};
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const SendButton = styled.button`
  margin-top: 32px;
  background-color: ${colors.whatsappColor};
  color: #ffffff;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${colors.whatsappColorHover};
  }
`;
