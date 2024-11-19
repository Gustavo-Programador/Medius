import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const handleCasosAtivos = () => {
    navigate('/casosativos'); // Caminho corrigido
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-title">
          <h1>Plataforma de Gestão Judicial</h1>
        </div>
        <button onClick={handleLogout} className="logout-button">Sair</button>
      </header>

      {/* Resumo */}
      <section className="dashboard-summary">
        <h2>Resumo Geral</h2>
        <div className="summary-cards">
          <div className="card" onClick={handleCasosAtivos}>
            <h3>Casos Ativos</h3>
            <p>150 casos em andamento.</p>
            <button className="access-button">Acessar</button>
          </div>
          <div className="card">
            <h3>Documentos Processados</h3>
            <p>432 documentos analisados este mês.</p>
          </div>
          <div className="card">
            <h3>Notificações</h3>
            <p>8 novas notificações pendentes.</p>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="dashboard-features">
        <h2>Funcionalidades</h2>
        <div className="features-grid">
          <div className="feature-item" onClick={handleCasosAtivos}>
            <h4>Casos Ativos</h4>
            <p>Gerencie e acompanhe casos em andamento.</p>
          </div>
          <div className="feature-item" onClick={() => navigate('/documentos')}>
            <h4>Documentos</h4>
            <p>Pesquise e organize documentos judiciais.</p>
          </div>
          <div className="feature-item" onClick={() => navigate('/notificacoes')}>
            <h4>Notificações</h4>
            <p>Receba atualizações automáticas sobre seus casos.</p>
          </div>
          <div className="feature-item" onClick={() => navigate('/jurisprudencia')}>
            <h4>Jurisprudência</h4>
            <p>Acesse decisões importantes e precedentes.</p>
          </div>
          <div className="feature-item" onClick={() => navigate('/prazos')}>
            <h4>Prazos</h4>
            <p>Controle seus compromissos e prazos processuais.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>&copy; 2024 Plataforma de Gestão Judicial. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
