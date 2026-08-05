import Navbar from "../../components/Navbar";
import ProductCard from "../../components/Product.Card";
import { useCarrinho } from "../../context/CarrinhoContext";
import produtos, { unidades } from "../../data/produtos";

function Cardapio() {
  const { unidade, setUnidade } = useCarrinho();
  const unidadeAtual = unidades.find((item) => item.id === unidade);
  const produtosDaUnidade = produtos.filter((produto) =>
    produto.unidades.includes(unidade),
  );

  return (
    <>
      <Navbar />

      <main className="page">
        <section className="page-header">
          <div>
            <p className="eyebrow">Cardápio dinâmico</p>
            <h1>Escolha a unidade para ver produtos disponíveis</h1>
            <p>{unidadeAtual.descricao}</p>
          </div>

          <label className="field compact">
            Unidade
            <select value={unidade} onChange={(e) => setUnidade(e.target.value)}>
              {unidades.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nome}
                </option>
              ))}
            </select>
          </label>
        </section>

        <section className="promo-band">
          <strong>Campanha ativa:</strong> compre 3 itens e ganhe 10% de
          desconto na próxima visita pelo programa de fidelidade.
        </section>

        <div className="lista-produtos">
          {produtosDaUnidade.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Cardapio;
