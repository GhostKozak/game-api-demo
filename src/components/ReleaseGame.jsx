import React from "react";

const ReleaseGame = () => {
  return (
    <div className="relative overflow-hidden">
      <img src="https://external-preview.redd.it/T8vBbUk_0DqZnRheuVmWkc5HzVfHtmY7VfniCyEWHVU.jpg?auto=webp&s=5eeafb1f350412e872a867d8c41702d09f46f472" alt="" className="object-cover object-center blur-sm absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto flex p-32 ">

        <div className="flex flex-col justify-center items-start">
          <h1 className="text-5xl font-black mb-2">WITCHER 3 <br /> <span className="text-amber-400">IS RELEASED!</span> </h1>
          <p className="text-base text-white mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, provident.</p>
          <a className="inline-block py-3 px-5 text-amber-400 hover:text-white font-bold uppercase relative transition-all after:transition-all after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:-z-10 after:bg-amber-400 hover:after:h-12" href="#">Read More</a>
        </div>

        <img className="w-[500px] h-auto ml-auto" src="https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg" alt="" />

      </div>
    </div>
  );
};

export default ReleaseGame;