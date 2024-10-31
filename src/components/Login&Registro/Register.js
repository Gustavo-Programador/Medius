// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      nome_completo: nomeCompleto,
      email,
      cpf,
      telefone,
      senha,
      role: tipoUsuario,
    };

    try {
      const response = await axios.post("http://localhost:5000/register", userData);

      if (response.status === 201) {
        const { redirectUrl, userId } = response.data;

        // Salva o userId no localStorage após o registro bem-sucedido
        localStorage.setItem("usuarioLogado", JSON.stringify({ userId }));
        navigate(redirectUrl); // Redireciona para a página com base no tipo de usuário
      }
    } catch (error) {
      console.error('Erro no registro:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Registro - Sistema Judiciário Digital</h2>
      <form className="auth-form" onSubmit={handleRegister}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="cpf">CPF:</label>
        <input type="text" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} required />

        <label htmlFor="telefone">Número de Telefone:</label>
        <input type="text" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />

        <label htmlFor="nomeCompleto">Nome Completo:</label>
        <input type="text" id="nomeCompleto" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} required />

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />

        <label>Tipo de Usuário:</label>
        <select value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)} required>
          <option value="">Selecione o tipo de usuário</option>
          <option value="juiz">Juiz</option>
          <option value="cidadao">Cidadão</option>
          <option value="empresa_juridica">Empresa Jurídica</option>
        </select>

        <button type="submit" className="auth-button">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
