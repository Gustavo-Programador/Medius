import React, { useState, useEffect } from 'react';
import './ProcessosPendentes.css';

const ProcessosPendentes = () => {
  const [processos, setProcessos] = useState([]);
  const [selectedProcesso, setSelectedProcesso] = useState(null);

  useEffect(() => {
    // Função para buscar processos pendentes do banco de dados ou API
    const fetchProcessos = async () => {
      // Código para buscar processos
    };
    fetchProcessos();
  }, []);

  const handleMarkReviewed = (processoId) => {
    // Lógica para marcar o processo como revisado
  };

  return (
    <div className="processos-pendentes-container">
      <h2>Processos Pendentes</h2>
      <div className="process-list">
        {processos.map(proc => (
          <div key={proc.id} onClick={() => setSelectedProcesso(proc)}>
            <h3>{proc.title}</h3>
            <p>{proc.summary}</p>
          </div>
        ))}
      </div>

      {selectedProcesso && (
        <div className="process-details">
          <h3>{selectedProcesso.title}</h3>
          <p>{selectedProcesso.content}</p>
          <button onClick={() => handleMarkReviewed(selectedProcesso.id)}>Marcar como Revisado</button>
        </div>
      )}
    </div>
  );
};

export default ProcessosPendentes;
