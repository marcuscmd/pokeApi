import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Pokemon } from './pages/Pokemon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/pokemon' element={<Pokemon />} />
        <Route path='/*' element={<h2>Error: 404</h2>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

