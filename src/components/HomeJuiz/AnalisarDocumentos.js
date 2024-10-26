import React, { useState, useEffect } from 'react';
import './AnalisarDocumentos.css';

const AnalisarDocumentos = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);

  useEffect(() => {
    // Função para buscar documentos do banco de dados ou API
    const fetchDocuments = async () => {
      // Código para buscar documentos
    };
    fetchDocuments();
  }, []);

  const handleApprove = (documentId) => {
    // Lógica para aprovar o documento
  };

  const handleReject = (documentId) => {
    // Lógica para rejeitar o documento
  };

  return (
    <div className="analisar-documentos-container">
      <h2>Analisar Documentos</h2>
      <div className="document-list">
        {documents.map(doc => (
          <div key={doc.id} onClick={() => setSelectedDocument(doc)}>
            <h3>{doc.title}</h3>
            <p>{doc.summary}</p>
          </div>
        ))}
      </div>

      {selectedDocument && (
        <div className="document-details">
          <h3>{selectedDocument.title}</h3>
          <p>{selectedDocument.content}</p>
          <button onClick={() => handleApprove(selectedDocument.id)}>Aprovar</button>
          <button onClick={() => handleReject(selectedDocument.id)}>Rejeitar</button>
        </div>
      )}
    </div>
  );
};

export default AnalisarDocumentos;
