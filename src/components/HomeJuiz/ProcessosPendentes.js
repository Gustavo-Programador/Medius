import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProcessosPendentes.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Select, MenuItem } from '@mui/material';

const ProcessosPendentes = () => {
  const [processos, setProcessos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [statusFiltro, setStatusFiltro] = useState('');

  useEffect(() => {
    const fetchProcessos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/processos/pendentes');
        setProcessos(response.data);
      } catch (err) {
        console.error("Erro ao buscar processos pendentes:", err);
      }
    };
    fetchProcessos();
  }, []);

  return (
    <div className="processos-pendentes-container">
      <h1>Processos Pendentes</h1>

      <div className="filtros-container">
        <TextField
          label="Buscar por título"
          variant="outlined"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="filtro-textfield"
        />
        <Select
          label="Filtrar por Status"
          value={statusFiltro}
          onChange={(e) => setStatusFiltro(e.target.value)}
          className="filtro-select"
        >
          <MenuItem value="">Todos</MenuItem>
          <MenuItem value="prioridade">Prioridade</MenuItem>
          <MenuItem value="prazo">Prazo</MenuItem>
          <MenuItem value="aguardando">Aguardando</MenuItem>
        </Select>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Prazo</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {processos
              .filter(processo => processo.titulo.includes(filtro) && (statusFiltro ? processo.status === statusFiltro : true))
              .map((processo) => (
                <TableRow key={processo.id}>
                  <TableCell>{processo.titulo}</TableCell>
                  <TableCell>{processo.status}</TableCell>
                  <TableCell>{processo.prazo}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary">Visualizar</Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProcessosPendentes;
