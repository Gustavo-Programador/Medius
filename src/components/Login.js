import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    userType: 'Cidadão', // Tipo de usuário selecionado
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'E-mail é obrigatório';
    if (!formData.senha) newErrors.senha = 'Senha é obrigatória';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Redirecionar para a home correta com base no tipo de usuário
      if (formData.userType === 'Cidadão') {
        navigate('/home-cidadao');
      } else if (formData.userType === 'Advogado') {
        navigate('/home-advogado');
      } else if (formData.userType === 'Mediador/Conciliador') {
        navigate('/home-mediador');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="back-button" onClick={() => navigate('/')}>
          <span>&larr;</span>
        </div>
        <h2 translate='no'>LOGIN</h2>
        <form onSubmit={handleLogin}>
          <label>
            E-mail:
            <input type="email" name="email" placeholder="Digite seu e-mail" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            Senha:
            <input type="password" name="senha" placeholder="Digite sua senha" value={formData.senha} onChange={handleChange} />
            {errors.senha && <span className="error">{errors.senha}</span>}
          </label>
          <label>
            Tipo de Usuário:
            <select name="userType" value={formData.userType} onChange={handleChange}>
              <option value="Cidadão">Cidadão</option>
              <option value="Advogado">Advogado</option>
              <option value="Mediador/Conciliador">Mediador/Conciliador</option>
            </select>
          </label>
          <a href="/register">Não tem login? Faça seu cadastro</a>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
