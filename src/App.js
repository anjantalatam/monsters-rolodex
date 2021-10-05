import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [monsters, setMonsters] = useState([
    { name: "Pikachu", id: "mon1" },
    { name: "Bulbasaur", id: "mon2" },
    { name: "Charmander", id: "mon3" },
  ]);
  return (
    <div className="App">
      {monsters.map((monster) => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))}
    </div>
  );
}

export default App;
