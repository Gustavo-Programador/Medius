import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './GerenciarAudiencias.css';
import { Autocomplete, TextField, Chip } from '@mui/material';

const GerenciarAudiencias = ({ userId }) => {
  const [audiencias, setAudiencias] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [newAudiencia, setNewAudiencia] = useState({
    data: '',
    hora: '',
    local: '',
    descricao: '',
    tipoParticipante: 'cidadao',
    participantes: [],
    id_juiz: userId
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [allParticipantes, setAllParticipantes] = useState([]);

  // Função para buscar audiências
  const fetchAudiencias = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/audiencias');
      setAudiencias(response.data);
    } catch (err) {
      console.error("Erro ao buscar audiências:", err);
      setError("Erro ao buscar audiências.");
    }
  };

  // Função para buscar participantes
  const fetchParticipantes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/participantes');
      setAllParticipantes(response.data);
    } catch (err) {
      console.error("Erro ao buscar participantes:", err);
      setError("Erro ao buscar participantes.");
    }
  };

  useEffect(() => {
    fetchAudiencias();
    fetchParticipantes();
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAudiencia({ ...newAudiencia, [name]: value });
  };

  // Função de validação
  const validateForm = () => {
    const { hora, local, tipoParticipante, participantes } = newAudiencia;
    if (!hora || !local || !tipoParticipante || participantes.length === 0) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      setTimeout(() => setError(''), 3000); // Limpa o erro após 3 segundos
      return false;
    }
    return true;
  };

  // Função para agendar audiência
  const handleAgendarAudiencia = async () => {
    if (!validateForm()) return;

    try {
      const dataFormatada = selectedDate.toISOString().split('T')[0];
      const horaFormatada = newAudiencia.hora;

      await axios.post('http://localhost:5000/api/audiencias/gerenciar/criar', {
        id_juiz: newAudiencia.id_juiz,
        data_audiencia: `${dataFormatada} ${horaFormatada}:00`,
        local: newAudiencia.local,
        descricao: newAudiencia.descricao,
        participantes: newAudiencia.participantes,
        tipo_participante: newAudiencia.tipoParticipante
      });

      setSuccessMessage("Audiência agendada com sucesso!");
      setTimeout(() => setSuccessMessage(''), 3000); // Limpa a mensagem de sucesso após 3 segundos

      setNewAudiencia({ data: '', hora: '', local: '', descricao: '', tipoParticipante: 'cidadao', participantes: [], id_juiz: userId });
      fetchAudiencias(); // Atualiza a lista de audiências
    } catch (err) {
      console.error("Erro ao agendar audiência:", err);
      setError("Erro ao agendar audiência. Verifique se todos os campos estão preenchidos corretamente.");
      setTimeout(() => setError(''), 3000); // Limpa o erro após 3 segundos
    }
  };

  return (
    <div className="gerenciar-audiencias-container">
      <h1 className="title">Gerenciar Audiências</h1>

      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileContent={({ date, view }) =>
            audiencias.some(aud => new Date(aud.data_audiencia).toDateString() === date.toDateString())
              ? <span className="audiencia-dot"></span>
              : null
          }
        />
      </div>

      <div className="audiencia-form">
        <h2>Agendar Nova Audiência</h2>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        
        <label>Data:</label>
        <input type="text" value={selectedDate.toLocaleDateString('pt-BR')} readOnly />
        
        <label>Hora:</label>
        <input type="time" name="hora" value={newAudiencia.hora} onChange={handleInputChange} />

        <label>Local:</label>
        <input
          type="text"
          name="local"
          value={newAudiencia.local}
          onChange={handleInputChange}
        />

        <label>Descrição:</label>
        <textarea
          name="descricao"
          value={newAudiencia.descricao}
          onChange={handleInputChange}
        />

        <label>Participantes:</label>
        <Autocomplete
          multiple
          options={allParticipantes}
          getOptionLabel={(option) => option.nome_completo}
          value={newAudiencia.participantes.map(id => allParticipantes.find(p => p.id === id))}
          onChange={(event, newValue) => {
            setNewAudiencia({ 
              ...newAudiencia, 
              participantes: newValue.map(participante => participante.id) 
            });
          }}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip label={option.nome_completo} {...getTagProps({ index })} />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Digite para adicionar"
            />
          )}
        />

        <label>Tipo de Participante:</label>
        <select
          name="tipoParticipante"
          value={newAudiencia.tipoParticipante}
          onChange={handleInputChange}
        >
          <option value="cidadao">Cidadão</option>
          <option value="empresa_juridica">Empresa Jurídica</option>
        </select>

        <button onClick={handleAgendarAudiencia} className="agendar-btn">Agendar</button>
      </div>
    </div>
  );
};

export default GerenciarAudiencias;
