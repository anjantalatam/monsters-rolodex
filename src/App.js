import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/cardList/CardList";

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <div className="App">
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
