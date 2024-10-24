import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login';
import Register from './components/Register';
import HomeCidadao from './components/HomeCidadao/HomeCidadao';
import DetalhesConta from './components/HomeCidadao/DetalhesConta';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home-cidadao" element={<HomeCidadao />} />
        <Route path="/detalhes-conta" element={<DetalhesConta/>}/>
        {/* Outras rotas para advogado e mediador */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
