import React, { useState } from "react";
import "./ConsultaJurisprudencia.css";

const ConsultaJurisprudencia = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [court, setCourt] = useState("todos");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchJurisprudencia = async () => {
    setLoading(true);

    try {
      // Simulação de API com dados estáticos - Substitua por uma chamada real
      const dummyResults = [
        {
          id: 1,
          title: "Ação Direta de Inconstitucionalidade 12345",
          court: "STF",
          date: "2024-10-15",
          summary: "Decisão sobre a constitucionalidade de um artigo.",
        },
        {
          id: 2,
          title: "Recurso Especial 67890",
          court: "STJ",
          date: "2023-09-20",
          summary: "Definição de precedente sobre contrato de locação.",
        },
      ];

      const filteredResults = dummyResults.filter(
        (item) =>
          (court === "todos" || item.court === court) &&
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setResults(filteredResults);
    } catch (error) {
      console.error("Erro ao buscar jurisprudências:", error);
    }

    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchJurisprudencia();
  };

  return (
    <div className="consulta-jurisprudencia-container">
      {/* Cabeçalho */}
      <header className="consulta-header">
        <h1>Consulta de Jurisprudências</h1>
      </header>

      {/* Formulário de Pesquisa */}
      <form className="consulta-form" onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="search">Termo de Pesquisa</label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Digite o número ou assunto da jurisprudência..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="court">Tribunal</label>
          <select
            id="court"
            value={court}
            onChange={(e) => setCourt(e.target.value)}
          >
            <option value="todos">Todos</option>
            <option value="STF">STF</option>
            <option value="STJ">STJ</option>
          </select>
        </div>

        <button type="submit" className="search-button">
          Pesquisar
        </button>
      </form>

      {/* Resultados */}
      <section className="results-section">
        <h2>Resultados</h2>
        {loading ? (
          <p className="loading">Carregando...</p>
        ) : results.length > 0 ? (
          <ul className="results-list">
            {results.map((item) => (
              <li key={item.id} className="result-item">
                <h3>{item.title}</h3>
                <p>Tribunal: {item.court}</p>
                <p>Data: {item.date}</p>
                <p>Resumo: {item.summary}</p>
                <button className="view-button">Detalhes</button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-results">Nenhuma jurisprudência encontrada.</p>
        )}
      </section>
    </div>
  );
};

export default ConsultaJurisprudencia;
