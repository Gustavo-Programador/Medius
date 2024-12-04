import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Trash2, BarChart2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const InteractiveAgenda = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    date: '',
    title: '',
    description: '',
    deadline: '',
    priority: 'normal',
    status: 'pendente'
  });
  const [notifications, setNotifications] = useState([]);

  // Adicionar novo evento
  const handleAddEvent = () => {
    if (newEvent.date && newEvent.title) {
      const eventToAdd = {
        ...newEvent,
        id: Date.now(),
        createdAt: new Date()
      };
      setEvents([...events, eventToAdd]);
      
      createNotification(eventToAdd);
      
      setNewEvent({
        date: '',
        title: '',
        description: '',
        deadline: '',
        priority: 'normal',
        status: 'pendente'
      });
    }
  };

  // Criar notificação
  const createNotification = (event) => {
    const notification = {
      id: event.id,
      message: `Novo evento criado: ${event.title}`,
      date: event.date,
      deadline: event.deadline,
      priority: event.priority
    };
    setNotifications([...notifications, notification]);
  };

  // Remover notificação
  const removeNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  // Remover evento
  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
    setNotifications(notifications.filter(n => n.id !== id));
  };

  // Atualizar status do evento
  const updateEventStatus = (id, newStatus) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, status: newStatus } : event
    ));
  };

  // Preparar dados para o gráfico
  const prepareChartData = () => {
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    
    return daysOfWeek.map((day, index) => {
      const dayEvents = events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getDay() === index;
      });

      return {
        day,
        pendentes: dayEvents.filter(e => e.status === 'pendente').length,
        concluidas: dayEvents.filter(e => e.status === 'concluida').length,
        total: dayEvents.length
      };
    });
  };

  // Renderização dos dias do mês
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    const startingDayOfWeek = firstDay.getDay();

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const daysInMonth = getDaysInMonth(currentDate);
  const chartData = prepareChartData();

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white shadow-lg rounded-lg grid grid-cols-3 gap-4">
      {/* Coluna da Agenda */}
      <div className="col-span-2 pr-4">
        {/* Navegação de Mês */}
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={() => setCurrentDate(prev => {
              const newDate = new Date(prev);
              newDate.setMonth(newDate.getMonth() - 1);
              return newDate;
            })} 
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft />
          </button>
          <h2 className="text-2xl font-bold">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <button 
            onClick={() => setCurrentDate(prev => {
              const newDate = new Date(prev);
              newDate.setMonth(newDate.getMonth() + 1);
              return newDate;
            })} 
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Formulário de Criação de Evento */}
        <div className="mb-4 grid grid-cols-3 gap-2">
          <input 
            type="text" 
            placeholder="Título do Evento"
            value={newEvent.title}
            onChange={(e) => setNewEvent(prev => ({...prev, title: e.target.value}))}
            className="border p-2 rounded"
          />
          <input 
            type="date" 
            value={newEvent.date}
            onChange={(e) => setNewEvent(prev => ({...prev, date: e.target.value}))}
            className="border p-2 rounded"
          />
          <select 
            value={newEvent.status}
            onChange={(e) => setNewEvent(prev => ({...prev, status: e.target.value}))}
            className="border p-2 rounded"
          >
            <option value="pendente">Pendente</option>
            <option value="concluida">Concluída</option>
          </select>
          <select 
            value={newEvent.priority}
            onChange={(e) => setNewEvent(prev => ({...prev, priority: e.target.value}))}
            className="border p-2 rounded"
          >
            <option value="baixa">Baixa Prioridade</option>
            <option value="normal">Prioridade Normal</option>
            <option value="alta">Alta Prioridade</option>
          </select>
          <input 
            type="text" 
            placeholder="Descrição (opcional)"
            value={newEvent.description}
            onChange={(e) => setNewEvent(prev => ({...prev, description: e.target.value}))}
            className="border p-2 rounded col-span-2"
          />
          <button 
            onClick={handleAddEvent}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Adicionar Evento
          </button>
        </div>

        {/* Grade do Calendário */}
        <div className="grid grid-cols-7 gap-1 text-center">
          {weekDays.map(day => (
            <div key={day} className="font-bold text-gray-600 text-sm">{day}</div>
          ))}
          {daysInMonth.map((day, index) => (
            <div 
              key={day ? day.toISOString() : `empty-${index}`} 
              className={`border p-1 min-h-[100px] relative ${!day ? 'bg-gray-100' : ''}`}
            >
              {day && (
                <>
                  <div className="text-xs font-bold mb-1">
                    {day.getDate()}
                  </div>
                  {events
                    .filter(event => {
                      const eventDate = new Date(event.date);
                      return eventDate.toDateString() === day.toDateString();
                    })
                    .map(event => (
                      <div 
                        key={event.id} 
                        className={`rounded p-1 mb-1 text-xs flex justify-between items-center
                          ${event.priority === 'alta' ? 'bg-red-100' : 
                            event.priority === 'baixa' ? 'bg-green-100' : 'bg-blue-100'}`}
                      >
                        <div>
                          <div className="font-semibold">{event.title}</div>
                          <div className={`text-xs font-medium ${
                            event.status === 'pendente' ? 'text-yellow-600' : 'text-green-600'
                          }`}>
                            {event.status === 'pendente' ? 'Pendente' : 'Concluída'}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => updateEventStatus(
                              event.id, 
                              event.status === 'pendente' ? 'concluida' : 'pendente'
                            )}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            {event.status === 'pendente' ? '✓' : '↩'}
                          </button>
                          <button 
                            onClick={() => handleDeleteEvent(event.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))
                  }
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Coluna de Estatísticas e Gráfico */}
      <div className="col-span-1 pl-4 border-l">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <BarChart2 className="mr-2" /> Resumo de Tarefas
          </h3>
          <div className="grid grid-cols-3 gap-2 mb-4 text-center">
            <div className="bg-blue-100 p-3 rounded">
              <div className="text-sm text-gray-600">Total</div>
              <div className="text-2xl font-bold">{events.length}</div>
            </div>
            <div className="bg-yellow-100 p-3 rounded">
              <div className="text-sm text-gray-600">Pendentes</div>
              <div className="text-2xl font-bold">
                {events.filter(e => e.status === 'pendente').length}
              </div>
            </div>
            <div className="bg-green-100 p-3 rounded">
              <div className="text-sm text-gray-600">Concluídas</div>
              <div className="text-2xl font-bold">
                {events.filter(e => e.status === 'concluida').length}
              </div>
            </div>
          </div>
        </div>

        {/* Gráfico Interativo */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pendentes" stackId="a" fill="#fbbf24" name="Pendentes" />
              <Bar dataKey="concluidas" stackId="a" fill="#10b981" name="Concluídas" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAgenda;