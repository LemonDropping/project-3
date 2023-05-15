// client/src/pages/Home.js

import React from 'react';
import GameData from '../components/games/GameData';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* ... existing code ... */}
      <div>
        {GameData.map((game, index) => (
          <div key={index}>
            <h2>{game.name}</h2>
            <img src={`${process.env.PUBLIC_URL}/${game.thumbnail}`} alt={`${game.name} thumbnail`} />
            <Link to={`/games/${game.name.toLowerCase()}`}>
              <button>Play {game.name}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
