import React, { useState } from 'react';
import './DetalhesConta.css';

const DetalhesConta = () => {
  const [userInfo, setUserInfo] = useState({
    nome: 'Nome do Usuário',
    email: 'email@exemplo.com',
    telefone: '999999999',
    senha: '********', // Senha censurada
    foto: '' // Ícone temporário
  });

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo({ ...userInfo, foto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="detalhes-conta-container">
      <h2>Detalhes da Conta</h2>
      <div className="foto-section">
        <img src={userInfo.foto} alt="Profile" />
        <input type="file" accept="image/*" onChange={handleFotoChange} />
      </div>
      <div className="user-details">
        <label>Nome:</label>
        <input type="text" name="nome" value={userInfo.nome} onChange={handleInputChange} />
        
        <label>Email:</label>
        <input type="email" name="email" value={userInfo.email} onChange={handleInputChange} />
        
        <label>Telefone:</label>
        <input type="tel" name="telefone" value={userInfo.telefone} onChange={handleInputChange} />
        
        <label>Senha:</label>
        <input type="password" name="senha" value={userInfo.senha} disabled />
      </div>
    </div>
  );
};

export default DetalhesConta;
