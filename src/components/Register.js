import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    celular: '',
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
    if (!formData.nome) newErrors.nome = 'Nome completo é obrigatório';
    if (!formData.cpf) newErrors.cpf = 'CPF é obrigatório';
    if (!formData.celular) newErrors.celular = 'Número de celular é obrigatório';
    if (!formData.email) newErrors.email = 'E-mail é obrigatório';
    if (!formData.senha) newErrors.senha = 'Senha é obrigatória';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
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
    <div className="register-container">
      <div className="register-card">
        <div className="back-button" onClick={() => navigate('/')}>
          <span>&larr;</span>
        </div>
        <h2>Cadastre-se Aqui</h2>
        <form onSubmit={handleRegister}>
          <label>
            Nome completo:
            <input type="text" name="nome" placeholder="Digite seu nome completo" value={formData.nome} onChange={handleChange} />
            {errors.nome && <span className="error">{errors.nome}</span>}
          </label>
          <label>
            CPF:
            <input type="text" name="cpf" placeholder="Digite seu CPF" value={formData.cpf} onChange={handleChange} />
            {errors.cpf && <span className="error">{errors.cpf}</span>}
          </label>
          <label>
            Número de Celular:
            <input type="text" name="celular" placeholder="Digite seu número de celular" value={formData.celular} onChange={handleChange} />
            {errors.celular && <span className="error">{errors.celular}</span>}
          </label>
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
          <a href="/login">Já tem cadastro? Faça login</a>
          <button type="submit">Cadastrar-se</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
