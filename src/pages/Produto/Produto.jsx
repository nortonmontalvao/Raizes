import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useCarrinho } from "../../context/CarrinhoContext";
import produtos from "../../data/produtos";

function Produto() {
  const { id } = useParams();
  const { adicionarProduto } = useCarrinho();
  const produto = produtos.find((item) => item.id === Number(id));

  if (!produto) {
    return (
      <>
        <Navbar />
        <main className="page narrow">
          <h1>Produto não encontrado</h1>
          <Link className="btn primary" to="/cardapio">
            Voltar ao cardápio
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="page product-detail">
        <img src={produto.imagem} alt={produto.nome} />

        <section>
          <span className="badge">{produto.destaque}</span>
          <h1>{produto.nome}</h1>
          <p>
            Produto regional preparado conforme disponibilidade da unidade
            selecionada. O estoque e pequenas variações da receita podem mudar
            por cidade.
          </p>
          <dl className="details-list">
            <div>
              <dt>Categoria</dt>
              <dd>{produto.categoria}</dd>
            </div>
            <div>
              <dt>Fidelidade</dt>
              <dd>{produto.pontos} pontos</dd>
            </div>
            <div>
              <dt>Preço</dt>
              <dd>R$ {produto.preco.toFixed(2).replace(".", ",")}</dd>
            </div>
          </dl>
          <button onClick={() => adicionarProduto(produto)}>
            Adicionar ao carrinho
          </button>
        </section>
      </main>
    </>
  );
}

export default Produto;
