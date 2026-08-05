/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);
  const [unidade, setUnidade] = useState("recife");
  const [pedido, setPedido] = useState(null);
  const [consentimentoLgpd, setConsentimentoLgpd] = useState(false);

  function adicionarProduto(produto) {
    setCarrinho((itens) => {
      const itemAtual = itens.find((item) => item.id === produto.id);

      if (itemAtual) {
        return itens.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item,
        );
      }

      return [...itens, { ...produto, quantidade: 1 }];
    });
  }

  function removerProduto(id) {
    setCarrinho((itens) => itens.filter((produto) => produto.id !== id));
  }

  function alterarQuantidade(id, quantidade) {
    if (quantidade <= 0) {
      removerProduto(id);
      return;
    }

    setCarrinho((itens) =>
      itens.map((item) => (item.id === id ? { ...item, quantidade } : item)),
    );
  }

  function limparCarrinho() {
    setCarrinho([]);
  }

  const total = useMemo(
    () =>
      carrinho.reduce(
        (soma, produto) => soma + produto.preco * produto.quantidade,
        0,
      ),
    [carrinho],
  );

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        total,
        unidade,
        pedido,
        consentimentoLgpd,
        adicionarProduto,
        removerProduto,
        alterarQuantidade,
        limparCarrinho,
        setUnidade,
        setPedido,
        setConsentimentoLgpd,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
