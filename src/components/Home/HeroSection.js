import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Resolvendo Conflitos de Forma Simples e Eficiente</h1>
        <p>
          Mediação online para evitar sobrecarga do sistema judiciário.
          Resolva disputas antes de irem a julgamento.
        </p>
      </div>
      {/* Contêiner para as imagens lado a lado */}
      <div className="hero-images">
        <img src={require('../img/Balanca.png')} alt="Balanca" className="hero-image" />
        <img src={require('../img/Martelo.png')} alt="Martelo" className="hero-image" />
        <img src={require('../img/Juri.png')} alt="Juri" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;
