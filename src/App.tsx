import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CreateNewGame from './game/CreateNewGame';
import EditGame from './game/EditGame';
import React from 'react';
import Component from './components/Component';

function App() {
  return (
    <Component>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-new-game" element={<CreateNewGame />} />
          <Route path="/edit-game" element={<EditGame />} />
        </Routes>
      </BrowserRouter>
    </Component>
  );
}

export default App;
