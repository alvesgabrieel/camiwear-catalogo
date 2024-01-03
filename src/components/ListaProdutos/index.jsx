import { Link } from "react-router-dom";

import Produtos from "../../Produtos";
import * as S from "./styles";

function ListaProdutos() {
  return (
    <S.MainContent>
      <ul>
        {Produtos.map((item, index) => (
          <li key={index}>
            <Link to={`/produto/${index}`}>
              <img src={item.imagem} alt={`Imagem do produto ${item.titulo}`} />
              <p>{item.titulo}</p>
              <p>R${item.preço}</p>
            </Link>
          </li>
        ))}
      </ul>
    </S.MainContent>
  );
}

export default ListaProdutos;
