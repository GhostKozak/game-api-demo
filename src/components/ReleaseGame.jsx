import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ReleaseGame = () => {

  const [game, setGame] = useState();
  const date = new Date();
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.toLocaleDateString("en",{day: "2-digit"});
  const today = y + "-" + (m + 1) + "-" + d;

  useEffect(() => {
    const getGameByReleaseDate = async (_id) => {
      const initialData = await fetch(`https://api.rawg.io/api/games?ordering=-added&dates=2022-12-01,${today}&page_size=1&key=${import.meta.env.VITE_RAWG_IO_API_KEY}`);
      const jsonResponse = await initialData.json();
      setGame(jsonResponse.results[0]);
    };

    getGameByReleaseDate();

  }, [])

  return (
    <>
    {
      game ? (
        <div className="relative overflow-hidden">
          <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full before:absolute before:w-full before:h-full before:z-10 before:bg-black/50">
            <img src={game.background_image} alt="" className="w-full h-full object-cover object-center blur-sm" />
          </div>
          <div className="container mx-auto flex p-32 ">

            <div className="flex flex-col justify-center items-start">
              <h1 className="text-5xl text-white font-bold mb-2 uppercase">{game.name} <br /> <span className="text-amber-400">IS RELEASED!</span> </h1>
              {game.description ? (<p className="text-base text-white mb-2">{game.description.replace(/(<([^>]+)>)/ig, '')}</p>) : null}
              <Link to={"/games/" + game.slug} className="inline-block py-3 px-5 text-amber-400 hover:text-white font-bold uppercase relative transition-all after:transition-all after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:-z-10 after:bg-amber-400 hover:after:h-12">Read More</Link>
            </div>

            <img className="w-[500px] h-auto ml-auto" src={game.background_image} alt="" />

          </div>
        </div>
      ) : null
    }
    </>
  );
};

export default ReleaseGame;