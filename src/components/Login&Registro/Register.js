import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: '',
    role: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          cpf: formData.cpf,
          senha: formData.password,
          role: formData.role,
        })
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          role: formData.role
        }));
        navigate('/dashboard');
      } else {
        setError(data.error || 'Erro ao cadastrar');
      }
    } catch (error) {
      setError('Erro no servidor. Tente novamente mais tarde.');
      console.error('Erro ao registrar:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Cadastro de Usuário</h2>
      <p className="auth-subtitle">Complete o formulário para criar uma nova conta</p>
      {error && <p className="auth-error">{error}</p>}
      <form onSubmit={handleRegister} className="auth-form">
        <label htmlFor="nome">Nome Completo</label>
        <input
          type="text"
          id="nome"
          value={formData.nome}
          onChange={handleChange}
          required
          placeholder="Digite seu nome completo"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Digite seu email"
        />

        <label htmlFor="cpf">CPF</label>
        <input
          type="text"
          id="cpf"
          value={formData.cpf}
          onChange={handleChange}
          required
          placeholder="Digite seu CPF"
        />

        <label htmlFor="role">Perfil de Usuário</label>
        <select id="role" value={formData.role} onChange={handleChange} required>
          <option value="">Selecione</option>
          <option value="juiz">Juiz</option>
          <option value="funcionario_publico">Funcionário Público</option>
        </select>

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Digite sua senha"
        />

        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          type="password"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          placeholder="Confirme sua senha"
        />

        <button type="submit" className="auth-button">Cadastrar</button>
      </form>
      <p className="auth-footer">
        Já possui uma conta? <span onClick={() => navigate('/login')}>Faça login</span>
      </p>
    </div>
  );
};

export default Register;
