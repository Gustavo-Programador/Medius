import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeCidadao.css';

const HomeCidadao = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Redireciona para a página inicial
  };

  const handleAccessProcesses = () => {
    navigate('/processos-cidadao'); // Rota para visualizar os processos do cidadão
  };

  const handleAccessDocuments = () => {
    navigate('/documentos-cidadao'); // Rota para visualizar documentos do cidadão
  };

  const handleAccessAudiences = () => {
    navigate('/audiencias-cidadao'); // Rota para visualizar audiências do cidadão
  };

  return (
    <div className="home-cidadao-container">
      <header className="home-cidadao-header">
        <h1>Sistema Judiciário Digital - Cidadão</h1>
        <div className="menu-hamburguer">
          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <nav className="menu-dropdown">
            <ul>
              <li><a href="/detalhes-da-conta">Detalhes da Conta</a></li>
              <li><button onClick={handleLogout}>Sair da conta</button></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="home-cidadao-main">
        <h2>Bem-vindo, Cidadão!</h2>
        <section className="home-cidadao-actions">
          <div className="action-card">
            <h3>Processos</h3>
            <p>Acompanhe seus processos e atualizações importantes.</p>
            <button onClick={handleAccessProcesses} className="action-button">Acessar Processos</button>
          </div>

          <div className="action-card">
            <h3>Documentos e Provas</h3>
            <p>Visualize e faça o download de documentos relevantes.</p>
            <button onClick={handleAccessDocuments} className="action-button">Acessar Documentos</button>
          </div>

          <div className="action-card">
            <h3>Calendário de Audiências</h3>
            <p>Consulte datas de audiências e opções de participação remota.</p>
            <button onClick={handleAccessAudiences} className="action-button">Acessar Audiências</button>
          </div>
        </section>
      </main>

      <footer className="home-cidadao-footer">
        <p>&copy; 2024 Sistema Judiciário Digital - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomeCidadao;
