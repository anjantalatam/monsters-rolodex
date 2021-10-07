import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/cardList/CardList";
import SearchBox from "./components/searchBox/SearchBox";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="title">Monsters Rolodex</h1>
      <SearchBox placeholder="Search Monster" handleChange={handleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
