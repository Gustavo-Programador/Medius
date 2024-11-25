import React, { useState } from "react";
import "./PesquisaDocumentos.css";

const PesquisaDocumentos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("todos");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulação de busca de documentos - Substitua pela integração com a API
    const dummyResults = [
      { id: 1, title: "Contrato de Trabalho", category: "Contrato", date: "2024-01-15" },
      { id: 2, title: "Laudo Técnico", category: "Laudo", date: "2024-02-20" },
      { id: 3, title: "Petição Inicial", category: "Petição", date: "2024-03-10" },
    ];

    const filteredResults = dummyResults.filter((doc) =>
      (filter === "todos" || doc.category === filter) &&
      doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <div className="pesquisa-documentos-container">
      {/* Cabeçalho */}
      <header className="pesquisa-documentos-header">
        <h1>Pesquisa de Documentos</h1>
      </header>

      {/* Formulário de Pesquisa */}
      <form className="pesquisa-form" onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="search">Termo de Pesquisa</label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Digite o nome do documento..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="filter">Categoria</label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="todos">Todos</option>
            <option value="Contrato">Contrato</option>
            <option value="Laudo">Laudo</option>
            <option value="Petição">Petição</option>
          </select>
        </div>

        <button type="submit" className="search-button">
          Pesquisar
        </button>
      </form>

      {/* Resultados */}
      <section className="results-section">
        <h2>Resultados</h2>
        {results.length > 0 ? (
          <ul className="results-list">
            {results.map((doc) => (
              <li key={doc.id} className="result-item">
                <h3>{doc.title}</h3>
                <p>Categoria: {doc.category}</p>
                <p>Data: {doc.date}</p>
                <button className="view-button">Visualizar</button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-results">Nenhum documento encontrado.</p>
        )}
      </section>
    </div>
  );
};

export default PesquisaDocumentos;
