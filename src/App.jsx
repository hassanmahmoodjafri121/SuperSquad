import React, { useState } from "react";
import HeroList from "./components/HeroList";
import Squad from "./components/Squad";
import heroes from "./data/heroes";
import './index.css';


function App() {
  const [squad, setSquad] = useState([]);

  const addToSquad = (hero) => {
    if (!squad.some((h) => h.id === hero.id)) {
      setSquad([...squad, hero]);
    }
  };

  const removeFromSquad = (id) => {
    setSquad(squad.filter((hero) => hero.id !== id));
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Available Heroes</h2>
        <HeroList heroes={heroes} addToSquad={addToSquad} />
      </div>

      <div className="card">
        <h2>Super Squad (Ranked)</h2>
        <Squad
          squad={[...squad].sort((a, b) => b.rank - a.rank)}
          removeFromSquad={removeFromSquad}
        />
      </div>
    </div>
  );
}

export default App;
