import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/cardList/CardList";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <div className="App">
      <input
        type="search"
        placeholder="Search Monster"
        onChange={(e) => setSearchField(e.target.value)}
      />
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
