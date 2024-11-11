import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MeuComponente from './componentes/MeuComponente';
import MenuNavegacao from './componentes/MenuNavegacao';
import FormPost from './componentes/FormPost';
import ListaPosts from './componentes/ListaPosts';

function App() {
  return (
    <BrowserRouter>
      <div>
        <MenuNavegacao />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<ListaPosts />} />
            <Route path="/novo-post" element={<FormPost />} />
            <Route path="/editar-post/:id" element={<FormPost />} />
          </Routes>
        </div>
        <MeuComponente />
      </div>
    </BrowserRouter>
  );
}

export default App;
