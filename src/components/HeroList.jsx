import React from 'react';
import '../index.css';

const HeroList = ({ heroes, addToSquad }) => {
  return (
    <div className="hero-list-container">
      {heroes.map((hero) => (
        <div key={hero.id} className="hero-card">
          <img src={hero.image} alt={hero.name} className="hero-image" />
          <h3>{hero.name}</h3>
          <p>{hero.power}</p>
          <p>Rank: {hero.rank}</p>
          <button onClick={() => addToSquad(hero)}>Add to Squad</button>
        </div>
      ))}
    </div>
  );
};

export default HeroList;
