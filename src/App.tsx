import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CreateNewGame from './game/CreateNewGame';
import EditGame from './game/EditGame';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App() {
  return (
    <Container fluid className="h-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-new-game" element={<CreateNewGame />} />
          <Route path="/edit-game" element={<EditGame />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
