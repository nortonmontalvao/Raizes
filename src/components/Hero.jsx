import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Pedidos web, app e totem</p>
        <h1>Raízes do Nordeste</h1>
        <p>
          Cardápio por unidade, retirada rápida, benefícios de fidelidade e
          pagamento externo simulado em uma única jornada.
        </p>

        <div className="actions">
          <Link className="btn primary" to="/cardapio">
            Fazer pedido
          </Link>
          <Link className="btn secondary" to="/login">
            Entrar no clube
          </Link>
        </div>
      </div>

      <img src={heroImage} alt="Mesa com comida regional nordestina" />
    </section>
  );
}

export default Hero;
