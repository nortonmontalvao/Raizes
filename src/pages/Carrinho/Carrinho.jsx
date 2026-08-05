import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useCarrinho } from "../../context/CarrinhoContext";
import { unidades } from "../../data/produtos";

function Carrinho() {
  const {
    carrinho,
    total,
    unidade,
    removerProduto,
    alterarQuantidade,
  } = useCarrinho();
  const unidadeAtual = unidades.find((item) => item.id === unidade);
  const pontos = carrinho.reduce(
    (soma, produto) => soma + produto.pontos * produto.quantidade,
    0,
  );

  return (
    <>
      <Navbar />

      <main className="page cart-layout">
        <section>
          <div className="page-header simple">
            <div>
              <p className="eyebrow">Retirada em {unidadeAtual.nome}</p>
              <h1>Revise seu pedido</h1>
            </div>
          </div>

          {carrinho.length === 0 ? (
            <div className="empty-state">
              <h2>Seu carrinho está vazio</h2>
              <p>Escolha uma unidade e adicione produtos ao pedido.</p>
              <Link className="btn primary" to="/cardapio">
                Ver cardapio
              </Link>
            </div>
          ) : (
            <div className="cart-items">
              {carrinho.map((produto) => (
                <article className="cart-item" key={produto.id}>
                  <img src={produto.imagem} alt={produto.nome} />
                  <div>
                    <h3>{produto.nome}</h3>
                    <p>R$ {produto.preco.toFixed(2).replace(".", ",")}</p>
                  </div>
                  <label className="field quantity">
                    Qtd.
                    <input
                      min="1"
                      type="number"
                      value={produto.quantidade}
                      onChange={(e) =>
                        alterarQuantidade(produto.id, Number(e.target.value))
                      }
                    />
                  </label>
                  <button
                    className="btn ghost"
                    onClick={() => removerProduto(produto.id)}
                  >
                    Remover
                  </button>
                </article>
              ))}
            </div>
          )}
        </section>

        <aside className="summary">
          <h2>Resumo</h2>
          <div className="summary-line">
            <span>Subtotal</span>
            <strong>R$ {total.toFixed(2).replace(".", ",")}</strong>
          </div>
          <div className="summary-line">
            <span>Pontos previstos</span>
            <strong>{pontos}</strong>
          </div>
          <p>
            O pagamento será solicitado a um serviço externo. Este protótipo
            mostra o envio, processamento e retorno visual ao cliente.
          </p>
          <Link
            className={`btn primary full ${carrinho.length === 0 ? "disabled" : ""}`}
            to={carrinho.length === 0 ? "/cardapio" : "/pagamento"}
          >
            Ir para pagamento
          </Link>
        </aside>
      </main>
    </>
  );
}

export default Carrinho;
