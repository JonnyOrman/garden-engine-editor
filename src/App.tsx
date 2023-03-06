import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import CreateNewGame from "./game/CreateNewGame";
import EditGame from "./game/EditGame";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import GameWriter from "./game/GameWriter";
import GameReader from "./game/GameReader";
import GameJsonWriter from "./game/GameDataWriter";
import GameJsonReader from "./game/GameDataReader";
import GameFilePathProvider from "./game/GameFilePathProvider";
import JsonSerialiser from "./JsonSerialiser";
import JsonParser from "./JsonParser";

function App() {
  const [name, setName] = useState("");
  const [gameFilePathProvider, setGameFilePathProvider] = useState(new GameFilePathProvider('FILE_PATH/content.json'));
  const [gameJsonWriter, setGameJsonWriter] = useState(new GameJsonWriter(gameFilePathProvider));
  const [gameJsonReader, setGameJsonReader] = useState(new GameJsonReader(gameFilePathProvider));
  const [jsonSerialiser, setJsonSerialiser] = useState(new JsonSerialiser());
  const [jsonParser, setJsonParser] = useState(new JsonParser());
  const [gameWriter, setGameWriter] = useState(new GameWriter(jsonSerialiser, gameJsonWriter));
  const [gameReader, setGameReader] = useState(new GameReader(gameJsonReader, jsonParser));

  return (
    <Container fluid className="h-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-new-game" element={<CreateNewGame gameWriter={gameWriter} />} />
          <Route path="/edit-game" element={<EditGame gameWriter={gameWriter} gameReader={gameReader} />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
