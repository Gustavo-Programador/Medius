import React from 'react';
import './HomeJuiz.css';

const HomeJuiz = () => {
  return (
    <div className="home-juiz-container">
      <header className="home-juiz-header">
        <h1>Sistema Judiciário Digital</h1>
        <nav className="home-juiz-nav">
          <ul>
            <li><a href="/audiencias">Gerenciar Audiências</a></li>
            <li><a href="/processos">Processos Pendentes</a></li>
            <li><a href="/documentos">Enviar/Receber Documentos</a></li>
          </ul>
          <div className="home-juiz-profile">
            <img src="/path/to/default-profile-icon.png" alt="Perfil Juiz" className="profile-icon"/>
            <div className="dropdown-content">
              <a href="/detalhes-da-conta">Detalhes da Conta</a>
              <a href="/logout">Sair</a>
            </div>
          </div>
        </nav>
      </header>

      <section className="home-juiz-main">
        <h2>Bem-vindo, Juiz!</h2>
        <p>Aqui você pode gerenciar seus processos e audiências de forma rápida e segura.</p>

        <div className="home-juiz-actions">
          <div className="action-card">
            <h3>Gerenciar Audiências</h3>
            <p>Acompanhe, marque ou cancele audiências.</p>
            <a href="/audiencias" className="action-button">Acessar</a>
          </div>

          <div className="action-card">
            <h3>Processos Pendentes</h3>
            <p>Veja todos os processos em andamento e tome decisões rapidamente.</p>
            <a href="/processos" className="action-button">Acessar</a>
          </div>

          <div className="action-card">
            <h3>Enviar/Receber Documentos</h3>
            <p>Envie e receba documentos jurídicos de maneira segura.</p>
            <a href="/documentos" className="action-button">Acessar</a>
          </div>
        </div>
      </section>

      <footer className="home-juiz-footer">
        <p>&copy; 2024 Sistema Judiciário Digital. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomeJuiz;
