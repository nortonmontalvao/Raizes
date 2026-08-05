import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cardapio from "./pages/Cardapio/Cardapio";
import Produto from "./pages/Produto/Produto";
import Carrinho from "./pages/Carrinho/Carrinho";
import Login from "./pages/Login/Login";
import Pagamento from "./pages/Pagamento/Pagamento";
import StatusPedido from "./pages/StatusPedido/StatusPedido";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/status" element={<StatusPedido />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
