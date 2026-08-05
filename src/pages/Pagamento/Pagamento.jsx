import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useCarrinho } from "../../context/CarrinhoContext";
import { unidades } from "../../data/produtos";

function Pagamento() {
  const navigate = useNavigate();
  const {
    carrinho,
    total,
    unidade,
    consentimentoLgpd,
    limparCarrinho,
    setPedido,
  } = useCarrinho();
  const [metodo, setMetodo] = useState("pix");
  const [processando, setProcessando] = useState(false);
  const [erro, setErro] = useState("");
  const unidadeAtual = unidades.find((item) => item.id === unidade);

  function finalizarPedido(event) {
    event.preventDefault();

    if (carrinho.length === 0) {
      setErro("Inclua ao menos um produto antes de solicitar pagamento.");
      return;
    }

    setErro("");
    setProcessando(true);

    window.setTimeout(() => {
      const novoPedido = {
        id: `RN-${Date.now().toString().slice(-6)}`,
        unidade: unidadeAtual.nome,
        metodo,
        total,
        status: "Pagamento aprovado",
        retirada: "15 a 20 minutos",
      };

      setPedido(novoPedido);
      limparCarrinho();
      navigate("/status");
    }, 1200);
  }

  return (
    <>
      <Navbar />

      <main className="page checkout">
        <section>
          <p className="eyebrow">Integração externa</p>
          <h1>Pagamento do pedido</h1>
          <p>
            A Raízes do Nordeste não processa o pagamento diretamente. O sistema
            envia a solicitação ao provedor, aguarda retorno e atualiza o status.
          </p>

          <form className="form-panel" onSubmit={finalizarPedido}>
            <label className="field">
              Metodo de pagamento
              <select value={metodo} onChange={(e) => setMetodo(e.target.value)}>
                <option value="pix">Pix</option>
                <option value="cartao">Cartão de crédito</option>
                <option value="debito">Cartão de débito</option>
              </select>
            </label>

            <div className="privacy-note">
              <strong>LGPD:</strong> dados de pagamento são tratados pelo
              provedor externo. A loja registra somente resultado, valor,
              unidade e identificador do pedido.
              {consentimentoLgpd && (
                <span> Consentimento promocional ativo para fidelidade.</span>
              )}
            </div>

            {erro && <p className="error">{erro}</p>}

            <button disabled={processando} type="submit">
              {processando ? "Aguardando provedor..." : "Solicitar pagamento"}
            </button>
          </form>
        </section>

        <aside className="summary">
          <h2>Pedido</h2>
          <div className="summary-line">
            <span>Unidade</span>
            <strong>{unidadeAtual.nome}</strong>
          </div>
          <div className="summary-line">
            <span>Total</span>
            <strong>R$ {total.toFixed(2).replace(".", ",")}</strong>
          </div>
          <Link className="btn secondary full" to="/carrinho">
            Voltar ao carrinho
          </Link>
        </aside>
      </main>
    </>
  );
}

export default Pagamento;
