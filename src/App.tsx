import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import CreateNewGame from "./CreateNewGame";
import EditGame from "./EditGame";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create-new-game" element={<CreateNewGame />} />
          <Route exact path="/edit-game" element={<EditGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
