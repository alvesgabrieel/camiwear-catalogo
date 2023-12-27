import Produtos from "../../Produtos"

function ListaProdutos() { 

  return (
    <>
      <ul>
        {Produtos.map((item, index) => (
          <li key={index}>
            <p>Titulo: {item.titulo}</p>
            <p>Preço: R${item.preço}</p>
            <img src={item.imagem} alt={`Imagem do produto ${item.titulo}`} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListaProdutos