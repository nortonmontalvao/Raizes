import { Link } from "react-router-dom";
import { useCarrinho } from "../context/CarrinhoContext";

function ProductCard({ produto }) {
  const { adicionarProduto } = useCarrinho();

  return (
    <article className="produto-card">
      <Link to={`/produto/${produto.id}`}>
        <img src={produto.imagem} alt={produto.nome} />
      </Link>

      <div className="produto-info">
        <span className="badge">{produto.destaque}</span>
        <h3>{produto.nome}</h3>
        <p>{produto.categoria}</p>
        <strong>R$ {produto.preco.toFixed(2).replace(".", ",")}</strong>
        <small>{produto.pontos} pontos no clube</small>

        <button onClick={() => adicionarProduto(produto)}>
          Adicionar ao carrinho
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
