import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <div className="header-logo">
          <h1>Tribunal de Justiça - Gestão Judicial</h1>
        </div>
        <nav className="header-nav">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register')}>Cadastro</button>
        </nav>
      </header>

      {/* Acesso Rápido */}
      <section className="quick-access">
        <h2>Bem-vindo(a)</h2>
        <p>
          Plataforma dedicada a juízes e funcionários públicos, com ferramentas
          modernas e práticas para a gestão judicial.
        </p>
        <div className="quick-links">
          <div className="quick-link" onClick={() => navigate('/consulta')}>
            <h4>Consulta Processual</h4>
            <p>Acesse e gerencie processos judiciais.</p>
          </div>
          <div className="quick-link" onClick={() => navigate('/jurisprudencia')}>
            <h4>Jurisprudência</h4>
            <p>Encontre decisões e precedentes importantes.</p>
          </div>
          <div className="quick-link" onClick={() => navigate('/notificacoes')}>
            <h4>Notificações</h4>
            <p>Receba atualizações automáticas sobre processos.</p>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="highlights">
        <h3>Por que usar a nossa plataforma?</h3>
        <div className="highlights-content">
          <div className="highlight-item">
            <h4>Segurança</h4>
            <p>Criptografia avançada e autenticação segura.</p>
          </div>
          <div className="highlight-item">
            <h4>Facilidade</h4>
            <p>Interface intuitiva e acessível para todos os usuários.</p>
          </div>
          <div className="highlight-item">
            <h4>Eficiência</h4>
            <p>Automatização de tarefas e notificações importantes.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>&copy; 2024 Tribunal de Justiça - Todos os direitos reservados.</p>
        <nav>
          <a href="/privacidade">Política de Privacidade</a>
          <a href="/contato">Contato</a>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
