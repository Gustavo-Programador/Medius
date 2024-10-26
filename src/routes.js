import React from 'react'; 
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login&Registro/Login';
import Register from './components/Login&Registro/Register';
import HomeJuiz from './components/HomeJuiz/HomeJuiz';
import HomeCidadao from './components/HomeCidadao/HomeCidadao';
import HomeAdvogado from './components/HomeEmpresa/HomeAdvogado';
import DetalhesConta from './components/HomeCidadao/DetalhesConta';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home-juiz" element={<HomeJuiz />} />
        <Route path="/home-cidadao" element={<HomeCidadao />} />
        <Route path="/home-advogado" element={<HomeAdvogado />} />
        <Route path="/detalhes-conta" element={<DetalhesConta />} />
        {/* Rota para redirecionar caso nenhuma das rotas acima seja correspondente */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
