import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading.jsx";
import ProgressRing from "../components/ProgressRing";
import { FaExternalLinkAlt } from "react-icons/fa";
import { colorizeMetaCritic, getPlatformImageFromText } from "../util.jsx";

const GameDetail = () => {
  const [gameDetail, setGameDetail] = useState(null);
  const [gameScreenshots, setGameScreenshots] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    const fetchData = async (_id) => {
      const initialData = await fetch(`https://api.rawg.io/api/games/${_id}?key=${import.meta.env.VITE_RAWG_IO_API_KEY}`);
      const jsonResponse = await initialData.json();
      setGameDetail(jsonResponse);
    };
    const fetchScreenshots = async (_id) => {
      const initialData = await fetch(`https://api.rawg.io/api/games/${_id}/screenshots?key=${import.meta.env.VITE_RAWG_IO_API_KEY}`);
      const jsonResponse = await initialData.json();
      setGameScreenshots(jsonResponse.results);
    };
    fetchData(id);
    fetchScreenshots(id);

  }, []);

  if (gameDetail) {
    return (
      <section className="bg-black text-white">
        <div className="relative overflow-hidden max-h-[70vh] before:absolute before:w-full before:h-5/6 before:left-0 before:bottom-0 before:bg-gradient-to-b before:from-transparent before:to-black z-0">
          <img src={gameDetail.background_image} alt="" className="w-full h-auto object-cover" />
          <div className="absolute top-40 right-9 text-white">
          <div className={`p-15 absolute right-3 top-3 z-20 border rounded flex justify-center items-center backdrop-blur-md backdrop-brightness-75 w-16 h-16 group-hover:-right-full text-3xl ${colorizeMetaCritic(gameDetail.metacritic)}`} >{gameDetail.metacritic}</div>
          </div>
        </div>

        <div className="container mx-auto py-6 relative z-10 -mt-80">
          <div className="flex gap-2">
            <span className="bg-slate-800 px-2 rounded text-white font-light">{gameDetail.released}</span>
            {
              gameDetail.parent_platforms.map(item => (
                <span key={item.platform.id} className="flex justify-center items-center" >{getPlatformImageFromText(item.platform.name)}</span>
              ))
            }
            <span>Avarage Playtime: {gameDetail.playtime} Hours</span>
          </div>
          <div className="flex relative group mb-6">
            <h1 className="text-6xl font-bold leading-none">{gameDetail.name}</h1>
            <a href={gameDetail.website} className="ml-5 absolute top-0 -left-16 text-2xl align-text-top p-3 opacity-0 group-hover:opacity-100 transition-opacity" ><FaExternalLinkAlt /></a>
          </div>
          <div className="grid gap-3" dangerouslySetInnerHTML={{__html: gameDetail.description}} ></div>
          <div className="grid grid-cols-3 gap-2 my-9">
            {
              gameScreenshots &&
                gameScreenshots.map(image => (
                  <img src={image.image} key={image.id} />
                ))
            }
          </div>
        </div>
      </section>
    );
  } else {
    return <Loading />;
  }

};

export default GameDetail;