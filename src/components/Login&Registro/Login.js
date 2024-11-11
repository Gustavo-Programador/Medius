import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha: password }),
      });
      const data = await response.json();

      if (response.ok) {
        // Armazenar informações do usuário no LocalStorage, se necessário
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/dashboard'); // Redireciona para a Dashboard.js
      } else {
        setError(data.error || 'Erro de autenticação');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      setError('Erro no servidor. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Bem-vindo</h2>
      <p className="auth-subtitle">Por favor, insira seus dados para entrar</p>
      {error && <p className="auth-error">{error}</p>}
      <form onSubmit={handleLogin} className="auth-form">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Digite seu email"
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Digite sua senha"
        />

        <button type="submit" className="auth-button">Entrar</button>
      </form>
      <p className="auth-footer">
        Não possui uma conta? <span onClick={() => navigate('/register')}>Cadastre-se</span>
      </p>
    </div>
  );
};

export default Login;
