import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AnalisarDocumentos.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const AnalisarDocumentos = ({ processoId }) => {
  const [documentos, setDocumentos] = useState([]);

  useEffect(() => {
    const fetchDocumentos = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/processos/${processoId}/documentos`);
        setDocumentos(response.data);
      } catch (err) {
        console.error("Erro ao buscar documentos:", err);
      }
    };
    fetchDocumentos();
  }, [processoId]);

  return (
    <div className="analisar-documentos-container">
      <h1>Documentos do Processo</h1>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome do Documento</TableCell>
              <TableCell>Data de Upload</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documentos.map((documento) => (
              <TableRow key={documento.id}>
                <TableCell>{documento.nome_arquivo}</TableCell>
                <TableCell>{new Date(documento.data_upload).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => window.open(documento.url)}>Visualizar</Button>
                  <Button variant="outlined" color="secondary" onClick={() => window.open(documento.url, '_blank')}>Baixar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AnalisarDocumentos;
