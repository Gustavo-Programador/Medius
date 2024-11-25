import React, { useState } from "react";
import "./GestaoPrazos.css";

const GestaoPrazos = () => {
  const [deadlines, setDeadlines] = useState([]);
  const [formData, setFormData] = useState({
    task: "",
    dueDate: "",
    description: "",
  });
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddDeadline = (e) => {
    e.preventDefault();
    if (formData.task && formData.dueDate) {
      setDeadlines([...deadlines, { ...formData, id: Date.now() }]);
      setFormData({ task: "", dueDate: "", description: "" });
      setShowForm(false);
    } else {
      alert("Por favor, preencha todas as informações obrigatórias.");
    }
  };

  const handleDeleteDeadline = (id) => {
    setDeadlines(deadlines.filter((deadline) => deadline.id !== id));
  };

  return (
    <div className="gestao-prazos-container">
      {/* Cabeçalho */}
      <header className="prazos-header">
        <h1>Gestão de Prazos</h1>
      </header>

      {/* Botão para Adicionar Prazo */}
      <div className="add-deadline-button-container">
        <button
          onClick={() => setShowForm(!showForm)}
          className="add-deadline-button"
        >
          {showForm ? "Cancelar" : "Adicionar Prazo"}
        </button>
      </div>

      {/* Formulário para Adicionar Prazo */}
      {showForm && (
        <form className="deadline-form" onSubmit={handleAddDeadline}>
          <div className="form-group">
            <label htmlFor="task">Tarefa *</label>
            <input
              type="text"
              id="task"
              name="task"
              value={formData.task}
              onChange={handleInputChange}
              placeholder="Nome da tarefa"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dueDate">Data de Vencimento *</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Descrição adicional da tarefa"
            ></textarea>
          </div>

          <button type="submit" className="save-deadline-button">
            Salvar Prazo
          </button>
        </form>
      )}

      {/* Lista de Prazos */}
      <section className="deadlines-list">
        <h2>Lista de Prazos</h2>
        {deadlines.length > 0 ? (
          <ul>
            {deadlines.map((deadline) => (
              <li key={deadline.id} className="deadline-item">
                <div>
                  <h3>{deadline.task}</h3>
                  <p>
                    <strong>Data de Vencimento:</strong> {deadline.dueDate}
                  </p>
                  {deadline.description && (
                    <p>
                      <strong>Descrição:</strong> {deadline.description}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => handleDeleteDeadline(deadline.id)}
                  className="delete-button"
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-deadlines">Nenhum prazo cadastrado.</p>
        )}
      </section>
    </div>
  );
};

export default GestaoPrazos;
