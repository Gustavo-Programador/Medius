import axios from 'axios';
import { useEffect, useState } from 'react';
import './DetalhesConta.css';

const DetalhesConta = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = JSON.parse(localStorage.getItem('usuarioLogado')).userId;
        if (!userId) throw new Error('ID do usuário não encontrado no localStorage.');

        const response = await axios.get(`http://localhost:5000/api/usuario/${userId}`);
        setUserData(response.data);
      } catch (err) {
        console.error('Erro ao buscar dados do usuário:', err);
        setError('Erro ao buscar dados do usuário.');
      }
    };
    
    fetchUserData();
  }, []);

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }
    try {
      const userId = JSON.parse(localStorage.getItem('usuarioLogado')).userId;
      await axios.put(`http://localhost:5000/api/usuario/${userId}/senha`, { senha: newPassword });
      setError("Senha atualizada com sucesso!");
      setIsEditingPassword(false);
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.error("Erro ao atualizar senha:", err);
      setError("Erro ao atualizar senha.");
    }
  };

  return (
    <div className="detalhes-conta-container">
      <div className="titulo-container">
        <h1 className="detalhes-conta-title">Detalhes da Conta</h1>
      </div>
      
      <div className="detalhes-conta-content">
        {error && <p className="error-message">{error}</p>}
        {userData ? (
          <div className="detalhes-info">
            <div className="detalhe-item"><strong>Email:</strong> <span>{userData.email}</span></div>
            <div className="detalhe-item"><strong>CPF:</strong> <span>{userData.cpf}</span></div>
            <div className="detalhe-item"><strong>Telefone:</strong> <span>{userData.telefone}</span></div>
            <div className="detalhe-item"><strong>Nome Completo:</strong> <span>{userData.nome_completo}</span></div>
            <div className="detalhe-item">
              <strong>Senha:</strong> 
              <span>******</span>
              <button onClick={() => setIsEditingPassword(!isEditingPassword)} className="edit-password-btn">Alterar Senha</button>
            </div>
            {isEditingPassword && (
              <div className="password-change-form">
                <label>Nova Senha:</label>
                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                <label>Confirme a Nova Senha:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button onClick={handlePasswordChange} className="save-password-btn">Salvar</button>
              </div>
            )}
          </div>
        ) : (
          <p>Carregando...</p>
        )}
      </div>

      <div className="voltar-container">
        <button onClick={() => window.history.back()} className="back-button">Voltar</button>
      </div>
    </div>
  );
};

export default DetalhesConta;
