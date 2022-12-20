import React, { useState } from "react";
import { useEffect } from "react";
import ReleaseGame from "../components/ReleaseGame";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import GameCard from "../components/GameCard";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const GameList = () => {
  const [games, setGames] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_IO_API_KEY}&page=1

  useEffect(() => {
    const fetchGames = async (_page) => {
      const initialData = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_IO_API_KEY}&page=${_page}`);
      const jsonResponse = await initialData.json();
      setGames(jsonResponse.results);
    };

    fetchGames(pageNumber);
  }, [pageNumber]);

  const increasePage = () => {
    setPageNumber(page => page + 1);
    window.scrollTo(0, 0);
  };

  const decreasePage = () => {
    if ((pageNumber - 1) === 0) return;
    setPageNumber(page => page - 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className=' mt-32'>
      <div className="container mx-auto p-5">
      <h1 className="text-6xl text-center font-black text-zinc-800 mb-8"><span className="text-amber-400">GAMES</span> PAGE</h1>

      <div className='grid grid-cols-4 gap-4 mb-5'>
        {
          (games && games.map((game) => <Link to={'/games/' + game.id } key={game.id} ><GameCard key={game.id} game={game} /></Link>))
        }
      </div>
      <Pagination increaseMethod={increasePage} decreaseMethod={decreasePage} currentPage={pageNumber} />
      </div>
      <ReleaseGame/>
    </div >
  );
};

export default GameList;