import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Produtos from "../../Produtos";

import * as S from "./styles";

const DetalhesProduto = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const { id } = useParams();

  // >>> PARÂMETRO DOS ID DOS PRODUTOS

  // Converter o ID para um número, pois ele vem da URL como string
  const productId = parseInt(id, 10);

  // Encontrar o produto com base no ID
  const product = Produtos[productId];

  // >>> LÓGICA PARA SELECIONAR COR E TAMANHO E ENVIAR A MENSAGEM

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSendClick = () => {
    const phoneNumber = +5584991943788;
    let message = `Olá, estou interessado no produto ${product.titulo}. \n`;

    if (selectedItem && selectedColor) {
      message += `Peça: ${selectedItem}\nCor: ${selectedColor}`;
    } else if (selectedItem) {
      message += `Peça: ${selectedItem}`;
    } else if (selectedColor) {
      message += `Cor: ${selectedColor}`;
    }

    message += "\nPor favor, você poderia me ajudar?";

    const encodedMessage = encodeURIComponent(message);
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Redirecionar para o link do WhatsApp
    window.open(linkWhatsApp, "_blank");
  };

  // >>> LÓGICA DO SLIDER

  const settings = {
    // Configurações do Slider
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <FaChevronLeft />,
    nextArrow: <FaChevronRight />,
  };

  return (
    <S.mainContent>
      <Slider {...settings}>
        {product.imagem.map((imagem, index) => (
          <S.Img
            key={index}
            src={imagem}
            alt={`Imagem ${index + 1} do produto ${product.titulo}`}
          />
        ))}
      </Slider>
      <S.DetailsProdutContent>
        <S.ProdutContent>
          <h2>{product.titulo}</h2>
          <S.PriceContent>
            <p>R${product.preço}</p>
          </S.PriceContent>
        </S.ProdutContent>
        <h2>Selecione um cor ou peça: </h2>
        <h3>Peças</h3>
        <div>
          {product.preçoPeça.map((item, index) => (
            <S.OptionsContainer key={index}>
              {Object.entries(item).map(([itemName, itemValue]) => (
                <div key={itemName} onClick={() => handleItemClick(itemName)}>
                  <S.ButtonColor isSelected={itemName === selectedItem}>
                    {itemName.charAt(0).toUpperCase() + itemName.slice(1)}: R${" "}
                    {itemValue}
                  </S.ButtonColor>
                </div>
              ))}
            </S.OptionsContainer>
          ))}
        </div>
        <h3>Cores disponíveis</h3>
        <S.OptionsContainer>
          {product.cores.map((color, index) => (
            <S.ButtonColor
              key={index}
              onClick={() => handleColorClick(color)}
              isSelected={color === selectedColor}
            >
              {color}
            </S.ButtonColor>
          ))}
        </S.OptionsContainer>
        <S.SendButton onClick={handleSendClick}>
          Enviar mensagem para o whatsapp
        </S.SendButton>
      </S.DetailsProdutContent>
    </S.mainContent>
  );
};

export default DetalhesProduto;
