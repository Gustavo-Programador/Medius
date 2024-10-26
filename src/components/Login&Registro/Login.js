import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        email,
        senha,
        tipoUsuario,
      });

      if (response.status === 200) {
        if (tipoUsuario === 'juiz') {
          navigate('/home-juiz');
        } else if (tipoUsuario === 'cidadao') {
          navigate('/home-cidadao');
        } else if (tipoUsuario === 'empresa_juridica') {
          navigate('/home-advogado');
        }
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
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <label htmlFor="tipoUsuario">Tipo de Usuário:</label>
        <select
          id="tipoUsuario"
          value={tipoUsuario}
          onChange={(e) => setTipoUsuario(e.target.value)}
          required
        >
          <option value="">Selecione o tipo de usuário</option>
          <option value="juiz">Juiz</option>
          <option value="cidadao">Cidadão</option>
          <option value="empresa_juridica">Empresa Jurídica</option>
        </select>

        <button type="submit" className="auth-button">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
