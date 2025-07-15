import React from "react";

const HeroList = ({ heroes, addToSquad }) => {
  return (
    <div>
      <h2>Available Heroes</h2>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id} style={{ margin: "10px 0" }}>
            <strong>{hero.name}</strong> - {hero.power}
            <button
              onClick={() => addToSquad(hero)}
              style={{ marginLeft: "10px" }}
            >
              Add to Squad
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroList;