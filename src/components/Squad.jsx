import React from "react";

const Squad = ({ squad, removeFromSquad }) => {
  return (
    <div>
      <h2>Super Squad</h2>
      {squad.length === 0 ? (
        <p>No heroes in squad.</p>
      ) : (
        <ul>
          {squad.map((hero) => (
            <li key={hero.id} style={{ margin: "10px 0" }}>
             <strong>{hero.name}</strong> (Rank: {hero.rank}) - {hero.power}

              <button
                onClick={() => removeFromSquad(hero.id)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Squad;