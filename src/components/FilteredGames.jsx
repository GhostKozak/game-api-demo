import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import Loading from "./Loading";

const FilteredGames = () => {
  const [platforms, setPlatforms] = useState();
  const [currentPlatform, setCurrentPlatform] = useState(1);
  const [apiData, setApiData] = useState([]);
  const [active, setActive] = useState(1);

  const date = new Date();
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.toLocaleDateString("en",{day: "2-digit"});
  const today = y + "-" + m + "-" + d;

  const handlePlatformChange = (_id) => {
    setCurrentPlatform(_id);
    setActive(_id);
  }

  useEffect(() => {
    const getGamesByPlatforms = async (_id) => {
      const initialData = await fetch(`https://api.rawg.io/api/games?parent_platforms=${currentPlatform}&ordering=-released&metacritic=50,100&page_size=8&key=${import.meta.env.VITE_RAWG_IO_API_KEY}`);
      const jsonResponse = await initialData.json();
      setApiData(jsonResponse.results);
    };

    const getPlatforms = async () => {
      const initialData = await fetch(`https://api.rawg.io/api/platforms/lists/parents?key=${import.meta.env.VITE_RAWG_IO_API_KEY}`);
      const jsonResponse = await initialData.json();
      setPlatforms(jsonResponse.results);
    };

    
    getGamesByPlatforms();
    getPlatforms();

  }, [currentPlatform]);

  return (
    <div className="pb-10">
      <section className="flex justify-center py-10">
        <h1 className="text-6xl font-black text-zinc-800">FEATURED <span className="text-amber-400">GAME</span></h1>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="py-16 flex justify-center gap-6">
            {
              platforms ? 
              platforms.sort((a,b) => a.id > b.id ).slice(0,8).map(platform => (
                <a onClick={() => handlePlatformChange(platform.id)} key={platform.id} className={`border py-3 px-5 font-semibold uppercase cursor-pointer border-amber-400 hover:bg-amber-400 hover:text-white transition-colors ${platform.id === active ? "text-white bg-amber-400" : "text-amber-400"}`}>{platform.name}</a>
              )) : ("Loading...")
            }
            
          </div>
          <div className="grid grid-cols-4 gap-4 mb-5">
            {apiData ? apiData.map((game) => <Link to={'/games/' + game.id }><GameCard key={game.id} game={game} /></Link>) : ("Loading...")}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FilteredGames;