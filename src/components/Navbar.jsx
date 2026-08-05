import { Link, NavLink } from "react-router-dom";
import { useCarrinho } from "../context/CarrinhoContext";

function Navbar() {
  const { carrinho } = useCarrinho();
  const quantidade = carrinho.reduce((soma, item) => soma + item.quantidade, 0);

  return (
    <nav className="navbar">
      <Link className="brand" to="/">
        Raízes do Nordeste
      </Link>

      <div className="menu">
        <NavLink to="/">Início</NavLink>
        <NavLink to="/cardapio">Cardápio</NavLink>
        <NavLink to="/status">Status</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink className="cart-link" to="/carrinho">
          Carrinho
          {quantidade > 0 && <span>{quantidade}</span>}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
