import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeJuiz.css';

const HomeJuiz = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove dados de autenticação
    navigate('/'); // Redireciona para a página inicial
  };

  const handleAccessAudiences = () => {
    navigate('/audiencias'); // Navegação correta para a rota definida no routes.js
  };

  return (
    <div className="home-juiz-container">
      <header className="home-juiz-header">
        <h1>Sistema Judiciário Digital</h1>

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

      <main className="home-juiz-main">
        <h2>Bem-vindo, Juiz!</h2>
        <p>
          No Sistema Judiciário Digital, você tem acesso rápido e seguro às ferramentas
          essenciais para o gerenciamento de processos e audiências.
        </p>

        <section className="home-juiz-actions">
          <div className="action-card">
            <h3>Painel de Audiências</h3>
            <p>Visualize, agende ou gerencie suas audiências de maneira prática.</p>
            <button onClick={handleAccessAudiences} className="action-button">Acessar Audiências</button>
          </div>

          <div className="action-card">
            <h3>Processos Pendentes</h3>
            <p>Acompanhe todos os processos em que você é o responsável.</p>
            <button onClick={() => navigate('/processos')} className="action-button">Acessar Processos</button>
          </div>

          <div className="action-card">
            <h3>Documentos e Movimentações</h3>
            <p>Revise e atualize documentos associados aos processos.</p>
            <button onClick={() => navigate('/documentos')} className="action-button">Acessar Documentos</button>
          </div>

          <div className="action-card">
            <h3>Notificações</h3>
            <p>Receba notificações importantes sobre prazos e atualizações em tempo real.</p>
          </div>
        </section>

        <section className="resources-section">
          <h3>Central de Ajuda e Documentação</h3>
          <p>
            Encontre guias e manuais que explicam cada funcionalidade em detalhes.
          </p>
        </section>
      </main>

      <footer className="home-juiz-footer">
        <p>&copy; 2024 Sistema Judiciário Digital - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomeJuiz;
