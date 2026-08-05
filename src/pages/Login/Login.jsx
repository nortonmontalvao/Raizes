import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useCarrinho } from "../../context/CarrinhoContext";

function Login() {
  const { consentimentoLgpd, setConsentimentoLgpd } = useCarrinho();

  return (
    <>
      <Navbar />

      <main className="page auth-layout">
        <section>
          <p className="eyebrow">Cadastro e autenticação</p>
          <h1>Entrar no Clube Raízes</h1>
          <p>
            Area conceitual para identificar o cliente, acumular pontos e
            permitir campanhas segmentadas somente com consentimento.
          </p>

          <form className="form-panel">
            <label className="field">
              E-mail
              <input placeholder="cliente@email.com" type="email" />
            </label>
            <label className="field">
              Senha
              <input placeholder="Digite sua senha" type="password" />
            </label>
            <label className="check-field">
              <input
                checked={consentimentoLgpd}
                type="checkbox"
                onChange={(e) => setConsentimentoLgpd(e.target.checked)}
              />
              Aceito receber promoções e autorizo o uso dos meus dados para o
              programa de fidelidade, conforme a LGPD.
            </label>
            <button type="button">Entrar</button>
          </form>
        </section>

        <aside className="summary">
          <h2>Privacidade</h2>
          <p>
            O consentimento é opcional. Sem ele, o cliente ainda pode comprar,
            mas não recebe campanhas personalizadas.
          </p>
          <p>
            Dados sensíveis não são solicitados nesta interface e pagamentos
            ficam sob responsabilidade do provedor externo.
          </p>
          <Link className="btn secondary full" to="/cardapio">
            Continuar sem login
          </Link>
        </aside>
      </main>
    </>
  );
}

export default Login;
