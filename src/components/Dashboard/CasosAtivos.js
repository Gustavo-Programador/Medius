import React, { useState, useEffect, useCallback } from 'react';
import './CasosAtivos.css';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/casos';

const CasosAtivos = () => {
  const [pastas, setPastas] = useState([]);
  const [novaPasta, setNovaPasta] = useState('');
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [novaNota, setNovaNota] = useState('');
  const [notas, setNotas] = useState([]);
  const [arquivos, setArquivos] = useState([]);
  const [file, setFile] = useState(null);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const fetchPastas = useCallback(async () => {
    try {
      const { data } = await axios.get(`${API_URL}/pastas-com-arquivos`);
      setPastas(data);
    } catch (error) {
      console.error('Erro ao buscar pastas:', error);
    }
  }, []);

  const fetchArquivos = useCallback(() => {
    if (!selectedFolder) return;
    const pasta = pastas.find((pasta) => pasta.id === selectedFolder);
    setArquivos(pasta ? pasta.arquivos : []);
  }, [pastas, selectedFolder]);

  const fetchNotas = useCallback(async () => {
    if (!selectedFolder) return;
    try {
      const { data } = await axios.get(`${API_URL}/pastas/${selectedFolder}/notas`);
      setNotas(data);
    } catch (error) {
      console.error('Erro ao buscar notas:', error);
    }
  }, [selectedFolder]);

  useEffect(() => {
    fetchPastas();
  }, [fetchPastas]);

  useEffect(() => {
    if (selectedFolder) {
      fetchArquivos();
      fetchNotas();
    }
  }, [selectedFolder, fetchArquivos, fetchNotas]);

  const handleCriarPasta = async () => {
    if (!novaPasta.trim()) {
      setFeedback({ type: 'error', message: 'O nome da pasta não pode estar vazio.' });
      return;
    }

    try {
      const { data } = await axios.post(`${API_URL}/pastas/criar`, { nome: novaPasta });
      setPastas([...pastas, data]);
      setNovaPasta('');
      setFeedback({ type: 'success', message: 'Pasta criada com sucesso!' });
    } catch (error) {
      setFeedback({ type: 'error', message: 'Erro ao criar pasta.' });
    }
  };

  const handleAdicionarNota = async () => {
    if (!novaNota.trim()) {
      setFeedback({ type: 'error', message: 'A nota não pode estar vazia.' });
      return;
    }

    try {
      const { data } = await axios.post(`${API_URL}/pastas/${selectedFolder}/notas`, { texto: novaNota });
      setNotas([...notas, data]);
      setNovaNota('');
      setFeedback({ type: 'success', message: 'Nota adicionada com sucesso!' });
    } catch (error) {
      setFeedback({ type: 'error', message: 'Erro ao adicionar nota.' });
    }
  };

  const handleUploadArquivo = async () => {
    if (!file) {
      setFeedback({ type: 'error', message: 'Selecione um arquivo para enviar.' });
      return;
    }

    const formData = new FormData();
    formData.append('arquivo', file);

    try {
      const { data } = await axios.post(`${API_URL}/pastas/${selectedFolder}/arquivos`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setArquivos([...arquivos, data]);
      setFile(null);
      setFeedback({ type: 'success', message: 'Arquivo enviado com sucesso!' });
    } catch (error) {
      setFeedback({ type: 'error', message: 'Erro ao enviar arquivo.' });
    }
  };

  const handleExcluirArquivo = async (fileId) => {
    try {
      await axios.delete(`${API_URL}/arquivos/${fileId}`);
      setArquivos(arquivos.filter((arquivo) => arquivo.id !== fileId));
      setFeedback({ type: 'success', message: 'Arquivo excluído com sucesso!' });
    } catch (error) {
      setFeedback({ type: 'error', message: 'Erro ao excluir arquivo.' });
    }
  };

  const handleExcluirNota = async (notaId) => {
    try {
      await axios.delete(`${API_URL}/notas/${notaId}`);
      setNotas(notas.filter((nota) => nota.id !== notaId));
      setFeedback({ type: 'success', message: 'Nota excluída com sucesso!' });
    } catch (error) {
      setFeedback({ type: 'error', message: 'Erro ao excluir nota.' });
    }
  };

  return (
    <div className="casos-container">
      <header className="casos-header">
        <h1>Casos Ativos</h1>
        <div className="nova-pasta">
          <input
            type="text"
            placeholder="Nome da nova pasta"
            value={novaPasta}
            onChange={(e) => setNovaPasta(e.target.value)}
          />
          <button onClick={handleCriarPasta}>Criar Pasta</button>
        </div>
      </header>

      {feedback.message && (
        <div className={`feedback ${feedback.type}`}>{feedback.message}</div>
      )}

      <main className="casos-main">
        <aside className="pastas-list">
          <h2>Pastas</h2>
          {pastas.map((pasta) => (
            <div
              key={pasta.id}
              className={`pasta-item ${selectedFolder === pasta.id ? 'active' : ''}`}
              onClick={() => setSelectedFolder(pasta.id)}
            >
              {pasta.nome}
            </div>
          ))}
        </aside>

        <section className="pasta-detalhes">
          {selectedFolder ? (
            <div className="detalhes-wrapper">
              <h2>Detalhes da Pasta</h2>

              <div className="notas-section">
                <h3>Anotações</h3>
                <ul className="notas-list">
                  {notas.map((nota) => (
                    <li key={nota.id}>
                      {nota.texto}
                      <button onClick={() => handleExcluirNota(nota.id)}>Excluir</button>
                    </li>
                  ))}
                </ul>
                <textarea
                  placeholder="Adicionar nova anotação..."
                  value={novaNota}
                  onChange={(e) => setNovaNota(e.target.value)}
                />
                <button onClick={handleAdicionarNota}>Adicionar Nota</button>
              </div>

              <div className="arquivos-section">
                <h3>Arquivos</h3>
                <div className="upload-wrapper">
                  <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                  <button onClick={handleUploadArquivo}>Upload Arquivo</button>
                </div>
                <ul className="arquivos-list">
                  {arquivos.map((arquivo) => (
                    <li key={arquivo.id}>
                      <a href={arquivo.caminho} target="_blank" rel="noopener noreferrer">
                        {arquivo.nome}
                      </a>
                      <button onClick={() => handleExcluirArquivo(arquivo.id)}>Excluir</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <p>Selecione uma pasta para visualizar os detalhes.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default CasosAtivos;
