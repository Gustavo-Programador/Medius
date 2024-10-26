import React, { useState, useEffect } from 'react';
import './GerenciarAudiencias.css';

const GerenciarAudiencias = () => {
  const [audiencias, setAudiencias] = useState([]);
  const [newAudiencia, setNewAudiencia] = useState({ date: '', time: '', details: '' });

  useEffect(() => {
    // Função para buscar audiências do banco de dados ou API
    const fetchAudiencias = async () => {
      // Código para buscar audiências
    };
    fetchAudiencias();
  }, []);

  const handleAddAudiencia = () => {
    // Lógica para adicionar nova audiência
  };

  const handleDeleteAudiencia = (audienciaId) => {
    // Lógica para deletar audiência
  };

  return (
    <div className="gerenciar-audiencias-container">
      <h2>Gerenciar Audiências</h2>
      <div className="audiencias-list">
        {audiencias.map(aud => (
          <div key={aud.id}>
            <h3>{aud.date} - {aud.time}</h3>
            <p>{aud.details}</p>
            <button onClick={() => handleDeleteAudiencia(aud.id)}>Excluir</button>
          </div>
        ))}
      </div>

      <div className="add-audiencia">
        <h3>Nova Audiência</h3>
        <input type="date" value={newAudiencia.date} onChange={(e) => setNewAudiencia({ ...newAudiencia, date: e.target.value })} />
        <input type="time" value={newAudiencia.time} onChange={(e) => setNewAudiencia({ ...newAudiencia, time: e.target.value })} />
        <textarea placeholder="Detalhes" value={newAudiencia.details} onChange={(e) => setNewAudiencia({ ...newAudiencia, details: e.target.value })} />
        <button onClick={handleAddAudiencia}>Adicionar</button>
      </div>
    </div>
  );
};

export default GerenciarAudiencias;
