import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Issues } from './pages/Issues';


const Rotas: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/issues" element={<Issues />} />

    </Routes>
  );
};

export default Rotas;
