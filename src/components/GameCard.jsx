import React from "react";
import { getPlatformImage, colorizeMetaCritic } from "../util";
import { AiFillTags } from "react-icons/ai";

const GameCard = ({ game }) => {
  return (
    <div className='w-full h-[440px] overflow-hidden relative shadow-lg' key={game.id}>
      <div className='relative h-full before:opacity-60 before:bg-black before:w-full before:h-full before:absolute before:top-0 before:left-0 before:z-10'>
        <img src={game.background_image} alt="" className='w-full h-full mx-auto aspect-square object-cover object-top' />
      </div>
      <div className='absolute left-0 bottom-0 px-8 py-10 transition-all text-white z-20 w-full'>
        <h1 className='font-black uppercase'>{game.name}</h1>
        <div className='flex w-full'>
          <p className='flex items-baseline gap-1'> <AiFillTags />
            {
              game.genres.map((genre, index) => {
                if (index < 3) {
                  return (<span className='text-base capitalize' key={genre.id}>{genre.name}</span>);
                } else {
                  return;
                }
              })
            }
          </p>
          <p className='flex gap-2 ml-auto'>
            {
              game.platforms
                .filter(plat => (plat.platform.id === 1 || plat.platform.id === 4 || plat.platform.id === 187))
                .sort((a, b) => a.platform.id > b.platform.id)
                .map(plat => <span className='flex items-end' key={plat.platform.id}>{getPlatformImage(plat.platform.id)} </span>)
            }
          </p>
        </div>
      </div>
      <div className={`p-15 absolute right-2 top-2 z-20 ${colorizeMetaCritic(game.metacritic)}`} >{game.metacritic} / 100</div>
    </div>
  );
};

export default GameCard;