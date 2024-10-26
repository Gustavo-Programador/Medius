// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        senha,
      });
  
      if (response.status === 200) {
        const { redirectUrl } = response.data;
        navigate(redirectUrl); // Redireciona para a página com base no tipo de usuário
      }
    } catch (error) {
      console.log('Erro no login:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login - Sistema Judiciário Digital</h2>
      <form className="auth-form" onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />

        <button type="submit" className="auth-button">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
