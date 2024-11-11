import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Cabeçalho */}
      <header className="home-header">
        <h1>Plataforma de Gestão Judicial</h1>
        <nav>
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register')}>Cadastro</button>
        </nav>
      </header>

      {/* Seção de Introdução */}
      <section className="intro-section">
        <h2>Inovação e Eficiência para o Sistema Judicial</h2>
        <p>Uma plataforma dedicada a juízes e funcionários públicos, projetada para agilizar e organizar a gestão de processos e documentos judiciais.</p>
        <div className="intro-buttons">
          <button onClick={() => navigate('/login')}>Acessar como Juiz</button>
          <button onClick={() => navigate('/login')}>Acessar como Funcionário</button>
        </div>
      </section>

      {/* Seção de Funcionalidades */}
      <section className="features-section">
        <h3>Funcionalidades Principais</h3>
        <ul>
          <li>Gestão de Processos e Audiências</li>
          <li>Consulta e Análise de Documentos</li>
          <li>Notificações Automáticas e Atualizações de Prazo</li>
          <li>Controle de Segurança e Criptografia</li>
        </ul>
      </section>

      {/* Seção de Perfis de Usuário */}
      <section className="user-profiles-section">
        <h3>Benefícios para Juízes e Funcionários Públicos</h3>
        <div className="profile">
          <h4>Para Juízes:</h4>
          <p>Acesso facilitado aos processos, ferramentas de gerenciamento de audiências e comunicação direta com os funcionários.</p>
        </div>
        <div className="profile">
          <h4>Para Funcionários Públicos:</h4>
          <p>Organização de documentos e processos, notificações automáticas e facilidades para suporte jurídico.</p>
        </div>
      </section>

      {/* Seção de Segurança */}
      <section className="security-section">
        <h3>Segurança e Confiabilidade</h3>
        <p>Implementação de autenticação JWT e criptografia avançada para garantir a proteção de dados e um ambiente seguro para a gestão judicial.</p>
      </section>

      {/* Perguntas Frequentes */}
      <section className="faq-section">
        <h3>Perguntas Frequentes</h3>
        <div className="faq">
          <h4>Como faço o cadastro?</h4>
          <p>Utilize a opção de cadastro na tela inicial, fornecendo suas credenciais profissionais.</p>
        </div>
        <div className="faq">
          <h4>Posso acessar a plataforma de qualquer dispositivo?</h4>
          <p>Sim, a plataforma é compatível com computadores e dispositivos móveis.</p>
        </div>
        <div className="faq">
          <h4>Como recuperar meu acesso?</h4>
          <p>Clique em "Esqueceu a senha?" na tela de login para recuperação.</p>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="home-footer">
        <p>© 2024 Plataforma de Gestão Judicial - Todos os direitos reservados.</p>
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
