import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = () => {
    document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <nav>
        <ul>
          <li className="brand" translate="no">Medius</li> {/* Nome da marca no topo com o atributo translate="no" */}
          <li><button onClick={scrollToSection}>Como funciona?</button></li>
          <li translate='no'><a href="/login">Login</a></li>
          <li><a href="/register">Cadastre-se</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
