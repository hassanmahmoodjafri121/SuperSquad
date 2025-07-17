import React from "react";
import "../index.css";

const Squad = ({ squad, removeFromSquad }) => {
  return (
    <div className="squad-section">
      <h2>🛡️ Super Squad</h2>
      {squad.length === 0 ? (
        <p>No heroes in squad.</p>
      ) : (
        <div className="squad-list">
          {squad.map((hero) => (
            <div className="hero-card" key={hero.id}>
              <img
                src={hero.image}
                alt={hero.name}
                className="hero-image"
              />
              <h3>{hero.name}</h3>
              <p>Power: {hero.power}</p>
              <p>Rank: {hero.rank}</p>
              <button onClick={() => removeFromSquad(hero.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Squad;
