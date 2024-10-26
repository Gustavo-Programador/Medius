import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DetalhesConta.css';

const DetalhesConta = () => {
  const [userData, setUserData] = useState(null); // Dados do usuário
  const [senhaAntiga, setSenhaAntiga] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');
  const navigate = useNavigate();

  // Fetch para obter dados do usuário autenticado
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/usuario', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Token JWT no header
          },
        });
        const data = await response.json();

        if (response.ok) {
          setUserData(data); // Definir dados do usuário se tudo estiver OK
        } else {
          setMensagemErro(data.error || 'Erro ao carregar os dados do usuário');
        }
      } catch (error) {
        setMensagemErro('Erro ao buscar dados do usuário.');
      }
    };

    fetchUserData();
  }, []);

  // Função para alterar senha
  const handleAlterarSenha = async (e) => {
    e.preventDefault();
    setMensagemErro('');
    setMensagemSucesso('');

    try {
      const response = await fetch('/api/usuario/alterar-senha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ senhaAntiga, novaSenha }),
      });

      const result = await response.json();

      if (!response.ok) {
        setMensagemErro(result.error || 'Erro ao alterar a senha');
      } else {
        setMensagemSucesso('Senha alterada com sucesso!');
        setSenhaAntiga('');
        setNovaSenha('');
      }
    } catch (error) {
      setMensagemErro('Erro ao alterar a senha.');
    }
  };

  // Função de logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove o token do localStorage
    navigate('/'); // Redireciona para a Home
  };

  if (!userData) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="detalhes-conta-container">
      <div className="detalhes-conta-content">
        <h2>Detalhes da Conta</h2>
        <div className="detalhe-item">
          <strong>Nome Completo:</strong> <span>{userData.nome_completo}</span>
        </div>
        <div className="detalhe-item">
          <strong>Email:</strong> <span>{userData.email}</span>
        </div>
        <div className="detalhe-item">
          <strong>CPF:</strong> <span>{userData.cpf}</span>
        </div>
        <div className="detalhe-item">
          <strong>Telefone:</strong> <span>{userData.telefone}</span>
        </div>

        <h3>Alterar Senha</h3>
        <form onSubmit={handleAlterarSenha}>
          <div className="form-group">
            <label>Senha Antiga:</label>
            <input
              type="password"
              value={senhaAntiga}
              onChange={(e) => setSenhaAntiga(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Nova Senha:</label>
            <input
              type="password"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit">Alterar Senha</button>
        </form>

        {mensagemErro && <p className="erro">{mensagemErro}</p>}
        {mensagemSucesso && <p className="sucesso">{mensagemSucesso}</p>}

        <button onClick={handleLogout}>Sair</button>
      </div>
    </div>
  );
};

export default DetalhesConta;
