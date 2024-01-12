import { useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Produtos from "../../Produtos";

import * as S from "./styles";

const DetalhesProduto = () => {
  const [selectePeça, setSelectedPeça] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const { id } = useParams();

  // >>> PARÂMETRO DOS ID DOS PRODUTOS

  // Converter o ID para um número, pois ele vem da URL como string
  const productId = parseInt(id, 10);

  // Encontrar o produto com base no ID
  const produto = Produtos[productId];

  // >>> LÓGICA PARA SELECIONAR COR E TAMANHO E ENVIAR A MENSAGEM

  const handlePeçaClick = (nomePeça) => {
    setSelectedPeça(nomePeça);
  };

  const handleColorClick = (cor) => {
    setSelectedColor(cor);
  };

  const handleSendClick = () => {
    const numeroTelefone = +5584991943788;
    let mensagem = `Olá, estou interessado no produto ${produto.titulo}. \n`;

    if (selectePeça && selectedColor) {
      mensagem += `Peça: ${selectePeça}\nCor: ${selectedColor}`;
    } else if (selectePeça) {
      mensagem += `Peça: ${selectePeça}`;
    } else if (selectedColor) {
      mensagem += `Cor: ${selectedColor}`;
    }

    mensagem += "\nPor favor, você poderia me ajudar?";

    const mensagemCodificada = encodeURIComponent(mensagem);
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagemCodificada}`;

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
        {produto.imagem.map((imagem, index) => (
          <S.Img
            key={index}
            src={imagem}
            alt={`Imagem ${index + 1} do produto ${produto.titulo}`}
          />
        ))}
      </Slider>
      <S.DetailsProdutContent>
        <S.ProdutContent>
          <h2>{produto.titulo}</h2>
          <S.PriceContent>
            <p>R${produto.preço}</p>
          </S.PriceContent>
        </S.ProdutContent>
        <h2>Selecione um cor ou peça: </h2>
        <h3>Peças</h3>
        <div>
          {produto.preçoPeça.map((peça, index) => (
            <S.OptionsContainer key={index}>
              {Object.entries(peça).map(([nomePeça, valorPeça]) => (
                <div key={nomePeça} onClick={() => handlePeçaClick(nomePeça)}>
                  <S.CorButton isSelected={nomePeça === selectePeça}>
                    {nomePeça}: R$ {valorPeça}
                  </S.CorButton>
                </div>
              ))}
            </S.OptionsContainer>
          ))}
        </div>
        <h3>Cores disponíveis</h3>
        <S.OptionsContainer>
          {produto.cores.map((cor, index) => (
            <S.CorButton
              key={index}
              onClick={() => handleColorClick(cor)}
              isSelected={cor === selectedColor}
            >
              {cor}
            </S.CorButton>
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
