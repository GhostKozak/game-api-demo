import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading.jsx";
import ProgressRing from "../components/ProgressRing";
import { FaExternalLinkAlt } from "react-icons/fa";
import { getPlatformImageFromText } from "../util.jsx";

const GameDetail = () => {
  const [gameDetail, setGameDetail] = useState(null);
  const [gameScreenshots, setGameScreenshots] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async (_id) => {
      const initialData = await fetch(`https://api.rawg.io/api/games/${_id}?key=498b3a2f06b2424e90f97a1c191051f7`);
      const jsonResponse = await initialData.json();
      setGameDetail(jsonResponse);
    };
    const fetchScreenshots = async (_id) => {
      const initialData = await fetch(`https://api.rawg.io/api/games/${_id}/screenshots?key=498b3a2f06b2424e90f97a1c191051f7`);
      const jsonResponse = await initialData.json();
      setGameScreenshots(jsonResponse.results);
    };
    fetchData(id);
    fetchScreenshots(id);

  }, []);

  if (gameDetail) {
    return (
      <section>
        <div className="relative">
          <img src={gameDetail.background_image} alt="" />
          <div className="absolute top-40 right-9 text-white">
            <ProgressRing percent={gameDetail.metacritic} />
          </div>
        </div>

        <div className="container mx-auto py-6">
          <div className="flex gap-2">
            <span className="bg-slate-600 px-2 rounded text-white font-light">{gameDetail.released}</span>
            {
              gameDetail.parent_platforms.map(item => (
                <span key={item.platform.id} className="flex justify-center items-center" >{getPlatformImageFromText(item.platform.name)}</span>
              ))
            }
            <span>Avarage Playtime: {gameDetail.playtime} Hours</span>
          </div>
          <div className="flex text-gray-700 relative group mb-6">
            <h1 className="text-6xl font-bold leading-none">{gameDetail.name}</h1>
            <a href={gameDetail.website} className="ml-5 absolute top-0 -left-16 text-2xl align-text-top p-3 opacity-0 group-hover:opacity-100 transition-opacity" ><FaExternalLinkAlt /></a>
          </div>
          <div className="grid gap-3" dangerouslySetInnerHTML={{__html: gameDetail.description}} ></div>
          <div className="grid grid-cols-3 gap-2 my-9">
            {
              gameScreenshots.map(image => (
                <img src={image.image} />
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