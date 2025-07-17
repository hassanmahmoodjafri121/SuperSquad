import React, { useState } from "react";
import HeroList from "./components/HeroList";
import Squad from "./components/Squad";
import heroes from "./data/heroes";
import "./index.css";

function App() {
  const [squad, setSquad] = useState([]);

  const addToSquad = (hero) => {
    if (!squad.find((h) => h.id === hero.id)) {
      setSquad([...squad, hero]);
    }
  };

  const removeFromSquad = (id) => {
    setSquad(squad.filter((hero) => hero.id !== id));
  };

  return (
    <div className="app-container">
      <h1>🦸‍♂️ SuperSquad</h1>
      <div className="content">
        <HeroList heroes={heroes} addToSquad={addToSquad} />
        <Squad squad={squad} removeFromSquad={removeFromSquad} />
      </div>
    </div>
  );
}

export default App;
