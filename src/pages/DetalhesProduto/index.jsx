import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Produtos from "../../Produtos";

import * as S from "./styles";

const DetalhesProduto = () => {
  const { id } = useParams();

  // Converter o ID para um número, pois ele vem da URL como string
  const productId = parseInt(id, 10);

  // Encontrar o produto com base no ID
  const produto = Produtos[productId];

  const handleColorClick = (cor) => {
    console.log(`cor selecionada: ${cor}`);
  };

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
    <div>
      <Slider {...settings}>
        {produto.imagem.map((imagem, index) => (
          <S.Img
            key={index}
            src={imagem}
            alt={`Imagem ${index + 1} do produto ${produto.titulo}`}
          />
        ))}
      </Slider>
      <S.MainContent>
        <S.DetailsProdutContent>
          <h2>{produto.titulo}</h2>
          <S.PriceContent>
            <p>R${produto.preço}</p>
          </S.PriceContent>
        </S.DetailsProdutContent>
        <h3>Cores disponíveis</h3>
        <S.CoresContainer>
          {produto.cores.map((cor, index) => (
            <S.CorButton key={index} onClick={() => handleColorClick(cor)}>
              {cor}
            </S.CorButton>
          ))}
        </S.CoresContainer>
      </S.MainContent>
    </div>
  );
};

export default DetalhesProduto;
