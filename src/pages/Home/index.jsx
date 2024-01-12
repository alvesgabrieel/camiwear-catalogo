import ListaProdutos from "../../components/ListaProdutos";

import * as S from "./styles";
import logo from "../../assets/imgs/CAMIWEAR-logo-nobg.png";

const Home = () => {
  return (
    <>
      <S.CatalogContent>
        <S.ImgContentCatalog>
          <img src={logo} alt="logotipo camiwear" />
        </S.ImgContentCatalog>
        <h1>Olá, seja bem vindo(a)</h1>
        <p>Compras somente pelo whatsapp</p>
        <ListaProdutos />
      </S.CatalogContent>
    </>
  );
};

export default Home;
