import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Lógica para o logout (exemplo: limpar dados do usuário)
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Plataforma de Gestão Judicial</h1>
        <button onClick={handleLogout} className="logout-button">Sair</button>
      </header>

      {/* Conteúdo Principal */}
      <main className="dashboard-content">
        <div className="card">
          <h2>Casos Ativos</h2>
          <p>Acompanhe e gerencie os casos em andamento.</p>
          <button className="card-button">Visualizar Casos</button>
        </div>

        <div className="card">
          <h2>Pesquisa de Documentos</h2>
          <p>Encontre documentos e casos semelhantes para análise.</p>
          <button className="card-button">Pesquisar Documentos</button>
        </div>

        <div className="card">
          <h2>Consulta de Provas</h2>
          <p>Organize e visualize provas e documentos dos casos.</p>
          <button className="card-button">Ver Provas</button>
        </div>

        <div className="card">
          <h2>Anotações e Destaques</h2>
          <p>Faça anotações e destaque trechos importantes nos documentos.</p>
          <button className="card-button">Gerenciar Anotações</button>
        </div>

        <div className="card">
          <h2>Notificações</h2>
          <p>Receba atualizações sobre mudanças nos documentos dos casos.</p>
          <button className="card-button">Ver Notificações</button>
        </div>

        <div className="card">
          <h2>Consulta a Jurisprudência</h2>
          <p>Acesse precedentes e decisões anteriores para consulta.</p>
          <button className="card-button">Consultar Jurisprudência</button>
        </div>

        <div className="card">
          <h2>Datas e Prazos</h2>
          <p>Acompanhe os prazos processuais e compromissos importantes.</p>
          <button className="card-button">Ver Prazos</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>&copy; 2024 Plataforma de Gestão Judicial. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
