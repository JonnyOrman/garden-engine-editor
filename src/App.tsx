import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import CreateNewGame from "./game/CreateNewGame";
import EditGame from "./game/EditGame";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import JsonGameWriter from "./game/JsonGameWriter";
import JsonGameReader from "./game/JsonGameReader";
import GameJsonWriter from "./game/GameJsonWriter";
import GameJsonReader from "./game/GameJsonReader";
import GameFilePathProvider from "./game/GameFilePathProvider";

function App() {
  const [name, setName] = useState("");
  const [gameFilePathProvider, setGameFilePathProvider] = useState(new GameFilePathProvider('FILE_PATH/content.json'));
  const [gameJsonWriter, setGameJsonWriter] = useState(new GameJsonWriter(gameFilePathProvider));
  const [gameJsonReader, setGameJsonReader] = useState(new GameJsonReader(gameFilePathProvider));
  const [gameWriter, setGameWriter] = useState(new JsonGameWriter(gameJsonWriter));
  const [gameReader, setGameReader] = useState(new JsonGameReader(gameJsonReader));

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
