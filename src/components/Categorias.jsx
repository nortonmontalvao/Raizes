function Categorias() {
  const categorias = [
    {
      titulo: "Unidades",
      texto: "Cardápio varia conforme cidade, estoque e estrutura da cozinha.",
    },
    {
      titulo: "Fidelidade",
      texto: "Pedidos acumulam pontos para descontos e campanhas consentidas.",
    },
    {
      titulo: "Pagamento",
      texto: "Checkout representa envio e retorno de um provedor externo.",
    },
    {
      titulo: "LGPD",
      texto: "Dados pessoais e promocionais dependem de consentimento claro.",
    },
  ];

  return (
    <section className="categorias">
      <div className="section-title">
        <p className="eyebrow">Requisitos do protótipo</p>
        <h2>Fluxo preparado para avaliação</h2>
      </div>

      <div className="cards">
        {categorias.map((categoria) => (
          <article className="card" key={categoria.titulo}>
            <h3>{categoria.titulo}</h3>
            <p>{categoria.texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Categorias;
