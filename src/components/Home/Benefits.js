import React from 'react';
import './Benefits.css';

const Benefits = () => {
  return (
    <section id="benefits">
      <h2>Por que escolher a mediação?</h2>
      <div className="benefits-container">
        <div>
          <span role="img" aria-label="Resolução rápida">⚡</span> {/* Emoji de raio para Resolução rápida */}
          <h3>Resolução rápida</h3>
          <p>Conflitos resolvidos em menos tempo que o tradicional</p>
        </div>
        <div>
          <span role="img" aria-label="Acesso a advogados">🛡</span> {/* Emoji de balança para Acesso a advogados */}
          <h3>Acesso a advogados</h3>
          <p>Consulte advogados especializados quando necessário</p>
        </div>
        <div>
          <span role="img" aria-label="Acompanhamento em tempo real">⏱️</span> {/* Emoji de relógio para Acompanhamento */}
          <h3>Acompanhamento em tempo real</h3>
          <p>Veja o status do seu caso em tempo real</p>
        </div>
      </div>
      <div className="how-it-works">
        <h2>Como Funciona?</h2>
        <p>Passo 1: Cadastre-se ou faça login</p>
        <p>Passo 2: Preencha os detalhes do conflito e inicie a mediação</p>
        <p>Passo 3: Se necessário consulte um advogado</p>
        <p>Passo 4: Acompanhe o status do seu caso</p>
      </div>
    </section>
  );
};

export default Benefits;
