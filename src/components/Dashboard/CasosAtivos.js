import React, { useState, useEffect } from 'react';
import './CasosAtivos.css';
import axios from 'axios';

const CasosAtivos = () => {
  const [pastas, setPastas] = useState([]);
  const [novaPasta, setNovaPasta] = useState('');
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [novaNota, setNovaNota] = useState('');
  const [arquivos, setArquivos] = useState([]);
  const [file, setFile] = useState(null);

  // Fetch inicial de pastas
  useEffect(() => {
    fetchPastas();
  }, []);

  useEffect(() => {
    if (selectedFolder) fetchArquivos(selectedFolder);
  }, [selectedFolder]);

  const fetchPastas = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/casos/pastas');
      setPastas(response.data);
    } catch (error) {
      console.error('Erro ao buscar pastas:', error);
    }
  };

  const fetchArquivos = async (folderId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/casos/pastas/${folderId}/arquivos`);
      setArquivos(response.data);
    } catch (error) {
      console.error('Erro ao buscar arquivos:', error);
    }
  };

  const handleCriarPasta = async () => {
    if (!novaPasta.trim()) return;
    try {
      const response = await axios.post('http://localhost:5000/api/casos/pastas/criar', { nome: novaPasta });
      setPastas([...pastas, response.data]);
      setNovaPasta('');
    } catch (error) {
      console.error('Erro ao criar pasta:', error);
    }
  };

  const handleAdicionarNota = async () => {
    if (!novaNota.trim() || !selectedFolder) return;
    try {
      await axios.post(`http://localhost:5000/api/casos/pastas/${selectedFolder}/notas`, { texto: novaNota });
      fetchPastas();
      setNovaNota('');
    } catch (error) {
      console.error('Erro ao adicionar nota:', error);
    }
  };

  const handleUploadArquivo = async () => {
    if (!file || !selectedFolder) return;
    const formData = new FormData();
    formData.append('arquivo', file);

    try {
      await axios.post(`http://localhost:5000/api/casos/pastas/${selectedFolder}/arquivos`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      fetchArquivos(selectedFolder);
      setFile(null);
    } catch (error) {
      console.error('Erro ao fazer upload do arquivo:', error);
    }
  };

  const handleExcluirArquivo = async (fileId) => {
    try {
      await axios.delete(`http://localhost:5000/api/casos/arquivos/${fileId}`);
      fetchArquivos(selectedFolder);
    } catch (error) {
      console.error('Erro ao excluir arquivo:', error);
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

      <main className="casos-main">
        <div className="pastas-list">
          <h2>Pastas</h2>
          {pastas.map((pasta) => (
            <div
              key={pasta.id}
              className={`pasta-item ${selectedFolder === pasta.id ? 'active' : ''}`}
              onClick={() => setSelectedFolder(pasta.id)}
            >
              <h3>{pasta.nome}</h3>
            </div>
          ))}
        </div>

        <div className="pasta-detalhes">
          {selectedFolder ? (
            <>
              <h2>Detalhes da Pasta</h2>
              <textarea
                placeholder="Adicionar nova anotação..."
                value={novaNota}
                onChange={(e) => setNovaNota(e.target.value)}
              />
              <button onClick={handleAdicionarNota}>Adicionar Nota</button>

              <div className="upload-arquivo">
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <button onClick={handleUploadArquivo}>Upload Arquivo</button>
              </div>

              <div className="lista-arquivos">
                <h3>Arquivos</h3>
                {arquivos.map((arquivo) => (
                  <div key={arquivo.id} className="arquivo-item">
                    <a href={`http://localhost:5000/uploads/${arquivo.nome}`} target="_blank" rel="noopener noreferrer">
                      {arquivo.nome}
                    </a>
                    <button onClick={() => handleExcluirArquivo(arquivo.id)}>Excluir</button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p>Selecione uma pasta para visualizar os detalhes.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default CasosAtivos;
