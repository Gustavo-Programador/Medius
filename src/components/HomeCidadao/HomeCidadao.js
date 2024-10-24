import React, { useState } from 'react';
import './HomeCidadao.css';

const HomeCidadao = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    console.log("Usuário desconectado.");
  };

  const goToAccountDetails = () => {
    window.location.href = '/detalhes-conta';
  };

  return (
    <div className="header-cidadao">
      <div className="logo" translate='no'>Medius</div>
      <div className="header-buttons">
        <button>Iniciar Mediação/Conciliação</button>
        <button>Acompanhar Mediação/Conciliação</button>
        <button className="inactive">Buscar Advogados (em breve)</button>

        <div className="profile-icon" onClick={toggleDropdown}>
          <img src="mediacao-app\src\components\img\iconeusuario.png" alt="Profile" />
          {dropdownOpen && (
            <div className="dropdown">
              <button onClick={goToAccountDetails}>Detalhes da Conta</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeCidadao;
