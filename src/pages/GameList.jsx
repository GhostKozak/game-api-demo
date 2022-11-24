import React, { useState } from "react";
import { useEffect } from "react";
import { getGames } from "../services/api/data";
import ReleaseGame from "../components/ReleaseGame";

import GameCard from "../components/GameCard";
import { Link } from "react-router-dom";

const GameList = () => {
  const [games, setGames] = useState(null);
  const data = getGames();

  useEffect(() => {
    setGames(data);
  }, [data]);

  //Functions 
  return (
    <div className='p-5 mt-32'>
      <h1 className='mb-4'>Game List</h1>

      <div className='container mx-auto grid grid-cols-4 gap-4'>
        {
          (games && games.map((game) => <Link to={'/games/' + game.id }><GameCard key={game.id} game={game} /></Link>))
        }
      </div>
      < ReleaseGame />
    </div >
  );
};

export default GameList;