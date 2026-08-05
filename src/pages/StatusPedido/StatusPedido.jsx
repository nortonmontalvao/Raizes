import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useCarrinho } from "../../context/CarrinhoContext";

function StatusPedido() {
  const { pedido } = useCarrinho();
  const etapas = [
    "Pedido recebido",
    "Pagamento aprovado",
    "Preparo iniciado",
    "Disponível para retirada",
  ];

  return (
    <>
      <Navbar />

      <main className="page narrow">
        <p className="eyebrow">Acompanhamento</p>
        <h1>Status do pedido</h1>

        {!pedido ? (
          <div className="empty-state">
            <h2>Nenhum pedido em andamento</h2>
            <p>
              Depois do pagamento, o cliente acompanha aqui a confirmação e o
              preparo para retirada.
            </p>
            <Link className="btn primary" to="/cardapio">
              Iniciar pedido
            </Link>
          </div>
        ) : (
          <section className="status-panel">
            <div className="summary-line">
              <span>Pedido</span>
              <strong>{pedido.id}</strong>
            </div>
            <div className="summary-line">
              <span>Unidade</span>
              <strong>{pedido.unidade}</strong>
            </div>
            <div className="summary-line">
              <span>Retirada estimada</span>
              <strong>{pedido.retirada}</strong>
            </div>

            <ol className="timeline">
              {etapas.map((etapa, index) => (
                <li key={etapa} className={index <= 2 ? "done" : ""}>
                  <span>{index + 1}</span>
                  {etapa}
                </li>
              ))}
            </ol>
          </section>
        )}
      </main>
    </>
  );
}

export default StatusPedido;
