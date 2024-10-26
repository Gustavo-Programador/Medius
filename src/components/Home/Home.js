import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Sistema Judiciário Digital</h1>
        <nav>
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register')}>Cadastro</button>
        </nav>
      </header>

      <section className="hero-section">
        <h2>Transformando a Justiça com Inovação Digital</h2>
        <p>Facilitando o acesso à justiça para cidadãos, advogados e juízes através de tecnologia eficiente e segura.</p>
        <div className="hero-buttons">
          <button onClick={() => navigate('/login')}>Acessar como Cidadão</button>
          <button onClick={() => navigate('/login')}>Acessar como Juiz</button>
          <button onClick={() => navigate('/login')}>Acessar como Empresa Jurídica</button>
        </div>
      </section>

      <section className="features-section">
        <h3>Principais Funcionalidades</h3>
        <ul>
          <li>Gestão de Processos Judiciais</li>
          <li>Envio e Recebimento de Documentos</li>
          <li>Notificações Automáticas por E-mail e SMS</li>
          <li>Segurança e Criptografia de Dados</li>
          <li>Gerenciamento de Audiências</li>
        </ul>
      </section>

      <section className="benefits-section">
        <h3>Benefícios</h3>
        <p>Simplificação de processos judiciais, economia de tempo e aumento da segurança jurídica.</p>
      </section>

      <footer className="home-footer">
        <p>© 2024 Sistema Judiciário Digital - Todos os direitos reservados.</p>
        <nav>
          <a href="/politica-privacidade">Política de Privacidade</a>
          <a href="/termos-uso">Termos de Uso</a>
          <a href="/contato">Contato</a>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
