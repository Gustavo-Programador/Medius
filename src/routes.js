import React from 'react'; 
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login&Registro/Login';
import Register from './components/Login&Registro/Register';
import HomeJuiz from './components/HomeJuiz/HomeJuiz';
import ProcessosPendentes from './components/HomeJuiz/ProcessosPendentes';
import GerenciarAudiencias from './components/HomeJuiz/GerenciarAudiencias';
import AnalisarDocumentos from './components/HomeJuiz/AnalisarDocumentos';
import DetalhesConta from './components/HomeJuiz/DetalhesConta';
import HomeCidadao from './components/HomeCidadao/HomeCidadao';
import HomeAdvogado from './components/HomeAdvogado/HomeAdvogado';


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
        <Route path="/processos" element={<ProcessosPendentes />} />
        <Route path="/audiencias" element={<GerenciarAudiencias />} />
        <Route path="/documentos" element={<AnalisarDocumentos />} />
        <Route path="/detalhes-da-conta" element={<DetalhesConta />} />
        {/* Rota para redirecionar caso nenhuma das rotas acima seja correspondente */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
