import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <h1>Sistema Judiciário Digital</h1>
        <nav>
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register')}>Cadastro</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h2>Transformando a Justiça com Inovação Digital</h2>
        <p>Facilitando o acesso à justiça para cidadãos, advogados e juízes através de tecnologia eficiente e segura.</p>
        <div className="hero-buttons">
          <button onClick={() => navigate('/login')}>Acessar como Cidadão</button>
          <button onClick={() => navigate('/login')}>Acessar como Juiz</button>
          <button onClick={() => navigate('/login')}>Acessar como Empresa Jurídica</button>
        </div>
      </section>

      {/* Features Section */}
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

      {/* User Profiles Section */}
      <section className="user-profiles-section">
        <h3>Como o Sistema Judiciário Digital Ajuda Cada Perfil de Usuário</h3>
        <div className="profile">
          <h4>Para Juízes:</h4>
          <p>Visualize processos, organize audiências, revise documentos e mantenha comunicação com promotores e cidadãos.</p>
        </div>
        <div className="profile">
          <h4>Para Promotores:</h4>
          <p>Acompanhe processos, envie documentos e comunique-se com juízes de maneira prática e organizada.</p>
        </div>
        <div className="profile">
          <h4>Para Cidadãos:</h4>
          <p>Acompanhe processos, receba notificações e envie documentos diretamente pela plataforma.</p>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="step-by-step-section">
        <h3>Como Usar o Sistema Judiciário Digital</h3>
        <div className="step">
          <h4>1. Cadastro</h4>
          <p>Registre-se com informações básicas, garantindo segurança e proteção de dados.</p>
        </div>
        <div className="step">
          <h4>2. Acesso ao Painel</h4>
          <p>Veja o painel personalizado para seu perfil de usuário, com acesso rápido a processos e documentos.</p>
        </div>
        <div className="step">
          <h4>3. Gerenciamento de Documentos</h4>
          <p>Envie, receba e visualize documentos com facilidade e segurança.</p>
        </div>
        <div className="step">
          <h4>4. Notificações e Alertas</h4>
          <p>Mantenha-se atualizado com notificações automáticas sobre novas movimentações e prazos importantes.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h3>O que nossos usuários dizem</h3>
        <blockquote>"A organização de processos nunca foi tão fácil!" - Juíza Maria S.</blockquote>
        <blockquote>"Um sistema completo que facilita o trabalho do promotor." - Promotor João P.</blockquote>
        <blockquote>"Simples e acessível para acompanhar processos!" - Cidadão Ana M.</blockquote>
      </section>

      {/* Technical and Security Section */}
      <section className="security-section">
        <h3>Segurança e Confiabilidade</h3>
        <p>Utilizamos autenticação JWT e criptografia de ponta a ponta para garantir que seus dados estejam sempre seguros.</p>
        <p>Compatível com dispositivos móveis e computadores para um uso acessível em qualquer plataforma.</p>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h3>Perguntas Frequentes</h3>
        <div className="faq">
          <h4>Como faço o cadastro?</h4>
          <p>Você pode realizar o cadastro na página inicial, fornecendo suas informações básicas.</p>
        </div>
        <div className="faq">
          <h4>É seguro utilizar o sistema?</h4>
          <p>Sim, todos os dados são protegidos com criptografia e autenticação segura.</p>
        </div>
        <div className="faq">
          <h4>Como recuperar minha senha?</h4>
          <p>Vá até a página de login e clique em "Esqueceu a senha?" para instruções de recuperação.</p>
        </div>
      </section>

      {/* Footer */}
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
