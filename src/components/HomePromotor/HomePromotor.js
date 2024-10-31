import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePromotor.css';

const HomePromotor = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Redireciona para a página inicial
  };

  const handleAccessProcesses = () => {
    navigate('/processos'); // Navegação para a rota de processos
  };

  const handleAccessDocuments = () => {
    navigate('/documentos-promotor'); // Rota específica de documentos do Promotor
  };

  const handleAccessAudiences = () => {
    navigate('/audiencias-promotor'); // Rota específica de audiências do Promotor
  };

  return (
    <div className="home-promotor-container">
      <header className="home-promotor-header">
        <h1>Sistema Judiciário Digital - Promotor</h1>
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

      <main className="home-promotor-main">
        <h2>Bem-vindo, Promotor!</h2>
        <section className="home-promotor-actions">
          <div className="action-card">
            <h3>Processos</h3>
            <p>Visualize e gerencie os processos em que está envolvido.</p>
            <button onClick={handleAccessProcesses} className="action-button">Acessar Processos</button>
          </div>

          <div className="action-card">
            <h3>Documentos e Provas</h3>
            <p>Envie e acesse documentos e evidências importantes.</p>
            <button onClick={handleAccessDocuments} className="action-button">Acessar Documentos</button>
          </div>

          <div className="action-card">
            <h3>Calendário de Audiências</h3>
            <p>Veja as audiências programadas e gerencie sugestões de datas.</p>
            <button onClick={handleAccessAudiences} className="action-button">Acessar Audiências</button>
          </div>
        </section>
      </main>

      <footer className="home-promotor-footer">
        <p>&copy; 2024 Sistema Judiciário Digital - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePromotor;
