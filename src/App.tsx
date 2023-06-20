import { createContext } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CreateNewGame from './game/CreateNewGame';
import EditGame from './game/EditGame';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameWriter from './game/GameWriter';
import GameReader from './game/GameReader';
import GameJsonWriter from './game/GameDataWriter';
import GameJsonReader from './game/GameDataReader';
import GameFilePathProvider from './game/GameFilePathProvider';
import JsonSerialiser from './JsonSerialiser';
import JsonParser from './JsonParser';
import React from 'react';

const gameFilePathProvider = new GameFilePathProvider('FILE_PATH/content.json');
const gameJsonWriter = new GameJsonWriter(gameFilePathProvider);
const gameJsonReader = new GameJsonReader(gameFilePathProvider);
const jsonSerialiser = new JsonSerialiser();
const jsonParser = new JsonParser();
const gameWriter = new GameWriter(jsonSerialiser, gameJsonWriter);
const gameReader = new GameReader(gameJsonReader, jsonParser);

export const GameWriterContext = createContext(gameWriter);

export const GameReaderContext = createContext(gameReader);

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
