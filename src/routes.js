import React from 'react'; 
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login&Registro/Login';
import Register from './components/Login&Registro/Register';
import Dashboard from './components/Dashboard/Dashboard';
import CasosAtivos from './components/Dashboard/CasosAtivos';




const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/casosativos" element={<CasosAtivos/>} />

        {/* Rota para redirecionar caso nenhuma das rotas acima seja correspondente */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
