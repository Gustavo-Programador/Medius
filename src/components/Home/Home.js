import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>⚖️ Sistema Judiciário Digital</h1>
        <nav>
          <button onClick={() => navigate('/login')}>🔑 Login</button>
          <button onClick={() => navigate('/register')}>📝 Cadastro</button>
        </nav>
      </header>

      <section className="hero-section">
        <h2>🚀 Transformando a Justiça com Inovação Digital</h2>
        <p>💻 Facilitando o acesso à justiça para cidadãos, advogados e juízes através de tecnologia eficiente e segura.</p>
        <div className="hero-buttons">
          <button onClick={() => navigate('/login')}>🧑‍⚖️ Acessar como Cidadão</button>
          <button onClick={() => navigate('/login')}>👨‍⚖️ Acessar como Juiz</button>
          <button onClick={() => navigate('/login')}>🏢 Acessar como Empresa Jurídica</button>
        </div>
      </section>

      <section className="features-section">
        <h3>🔍 Principais Funcionalidades</h3>
        <ul>
          <li>🗂️ Gestão de Processos Judiciais</li>
          <li>📤 Envio e Recebimento de Documentos</li>
          <li>🔔 Notificações Automáticas por E-mail e SMS</li>
          <li>🔒 Segurança e Criptografia de Dados</li>
          <li>📅 Gerenciamento de Audiências</li>
        </ul>
      </section>

      <section className="benefits-section">
        <h3>🎯 Benefícios</h3>
        <p>🌐 Simplificação de processos judiciais, economia de tempo e aumento da segurança jurídica para todos.</p>
        <ul>
          <li>🚀 Processos mais rápidos e eficientes</li>
          <li>🔒 Privacidade e segurança dos dados garantidas</li>
          <li>🕒 Acompanhamento em tempo real</li>
          <li>🤝 Conectividade com diferentes perfis de usuários</li>
        </ul>
      </section>

      <section className="testimonial-section">
        <h3>📣 Depoimentos</h3>
        <p>"🧑‍⚖️ A plataforma facilitou meu trabalho como juiz, economizando horas!" - Juiz</p>
        <p>"💼 Como advogado, posso enviar documentos com segurança e agilidade." - Advogado</p>
        <p>"👩‍💼 Acessível e fácil de usar, melhorando o acesso à justiça para todos." - Cidadã</p>
      </section>

      <footer className="home-footer">
        <p>© 2024 Sistema Judiciário Digital - Todos os direitos reservados.</p>
        <nav>
          <a href="/politica-privacidade">🔒 Política de Privacidade</a>
          <a href="/termos-uso">📜 Termos de Uso</a>
          <a href="/contato">📞 Contato</a>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
