import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import CreateNewGame from "./CreateNewGame";
import EditGame from "./EditGame";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import JsonGameWriter from "./JsonGameWriter";
import JsonGameReader from "./JsonGameReader";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [gameWriter, setGameWriter] = useState(new JsonGameWriter());
  const [gameReader, setGameReader] = useState(new JsonGameReader());

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

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
