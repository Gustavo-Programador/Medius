import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  // Função para lidar com navegação
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-container">
      {/* Cabeçalho */}
      <header className="dashboard-header">
        <div className="header-title">
          <h1>Plataforma de Gestão Judicial</h1>
        </div>
        <button
          onClick={() => handleNavigate("/login")}
          className="logout-button"
        >
          Sair
        </button>
      </header>

      {/* Destaques */}
      <section className="dashboard-highlights">
        <h2>Destaques</h2>
        <div className="highlight-cards">
          <div className="card">
            <h3>Notificações</h3>
            <p>3 novos prazos vencendo esta semana.</p>
          </div>
          <div className="card">
            <h3>Documentos Pendentes</h3>
            <p>12 documentos aguardando revisão.</p>
          </div>
        </div>
      </section>

      {/* Acesso Rápido */}
      <section className="dashboard-access">
        <h2>Acesso Rápido</h2>
        <div className="access-grid">
          <button
            onClick={() => handleNavigate("/pesquisadocumentos")}
            className="access-button"
          >
            Pesquisa de Documentos
          </button>
          <button
            onClick={() => handleNavigate("/casosativos")}
            className="access-button"
          >
            Organização de Documentos
          </button>
          <button
            onClick={() => handleNavigate("/consultajurisprudencia")}
            className="access-button"
          >
            Consulta de Jurisprudências
          </button>
          <button
            onClick={() => handleNavigate("/gestaoprazos")}
            className="access-button"
          >
            Gestão de Prazos
          </button>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="dashboard-features">
        <h2>Funcionalidades</h2>
        <div className="features-grid">
          <div
            className="feature-item"
            onClick={() => handleNavigate("/pesquisadocumentos")}
          >
            <h4>Pesquisa de Documentos</h4>
            <p>Encontre arquivos importantes relacionados aos casos.</p>
          </div>
          <div
            className="feature-item"
            onClick={() => handleNavigate("/casosativos")}
          >
            <h4>Organização de Documentos</h4>
            <p>Envie, visualize e categorize documentos processuais.</p>
          </div>
          <div
            className="feature-item"
            onClick={() => handleNavigate("/consultajurisprudencia")}
          >
            <h4>Consulta de Jurisprudências</h4>
            <p>Acesse precedentes jurídicos e decisões relevantes.</p>
          </div>
          <div
            className="feature-item"
            onClick={() => handleNavigate("/gestaoprazos")}
          >
            <h4>Gestão de Tarefas e Prazos</h4>
            <p>Acompanhe compromissos e receba alertas de vencimento.</p>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="dashboard-footer">
        <p>&copy; 2024 Plataforma de Gestão Judicial. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
