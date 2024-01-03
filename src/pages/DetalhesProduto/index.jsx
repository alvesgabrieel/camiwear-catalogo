import { useParams } from "react-router-dom";
import Produtos from "../../Produtos";

const DetalhesProduto = () => {
  const { id } = useParams();

  // Converta o ID para um número, pois ele vem da URL como string
  const productId = parseInt(id, 10);

  // Encontre o produto com base no ID
  const produto = Produtos[productId];

  return (
    <div>
      <h2>Detalhes do Produto</h2>
      <p>{produto.titulo}</p>
      <p>R${produto.preço}</p>
      <img src={produto.imagem} alt={`Imagem do produto ${produto.titulo}`} />
      {/* Adicione mais informações conforme necessário */}
    </div>
  );
};

export default DetalhesProduto;
