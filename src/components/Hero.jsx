import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";
import { AiFillTags } from "react-icons/ai";
import { FaTv } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { getPlatformImageFromText } from "../util";

const Hero = () => {
  const [gamesData, setGamesData] = useState([]);
  const featuredGamesId = [
    "god-of-war-ragnarok",
    "call-of-duty-modern-warfare-ii",
    "stalker-2",
    "overwatch-2"
  ]

  useEffect(() => {
    const fetchData = async (_id) => {
      const initialData = await fetch(`https://api.rawg.io/api/games/${_id}?key=498b3a2f06b2424e90f97a1c191051f7`);
      const jsonResponse = await initialData.json();
      //setGameDetail(jsonResponse);
      //console.log("jsonResponse : ", jsonResponse)
      return jsonResponse;
      
    };
    featuredGamesId.forEach(async game => {
      //console.log("game : ", game);
      let data = await fetchData(game);
      setGamesData(oldData => [...oldData, data]);
    })
  }, [])

  return (
    <section id="hero" className="overflow-hidden relative">
      <Swiper modules={[EffectFade, Pagination]} effect="fade" pagination={{ clickable: true }}  >
        {
          gamesData ?
          gamesData.sort((a,b) => a.name[0] > b.name[0]).map(game => (
            <SwiperSlide key={game.id} className="bg-center bg-cover h-screen flex items-center relative">
              <div className="absolute -z-10 before:bg-black before:opacity-50 before:absolute before:w-full before:h-full before:top-0 before:left-0 w-full h-full">
                <img src={game.background_image} alt="" className="w-full h-full object-cover object-center" />
              </div>
              <div className={`container mx-auto flex flex-col justify-center items-center py-80 text-white`} >
                <div className="flex gap-10 mb-6">
                  <p className="flex items-center gap-2 align-middle">
                    <FaTv className="text-amber-400" />
                    {
                      game.parent_platforms.slice(0, 3).map(item => (
                        <a href="#" key={item.platform.id} className="transition-colors hover:text-amber-400 inline-block py-2">{item.platform.name}</a>
                      ))
                    }
                  </p>
                  <p className="flex items-center gap-2 align-middle">
                    <AiFillTags className="text-amber-400" />
                    {
                      game.genres.slice(0, 2).map(tag => (
                        <a href="#" key={tag.id} className="transition-colors hover:text-amber-400 inline-block py-2">{tag.name}</a>
                      ))
                    }
                    <a href="#" className="transition-colors hover:text-amber-400 inline-block py-2">Adventure</a>
                  </p>
                </div>
                <h1 className="text-6xl font-black uppercase text-center mb-8">{game.name}</h1>
                <p className="max-w-4xl text-center mb-11 line-clamp-3" >{game.description.replace(/(<([^>]+)>)/ig, '')}</p> {/* dangerouslySetInnerHTML={{__html: game.description}} */}
                <Link to={"/games/" + game.id} className="inline-block py-3 px-5 text-white hover:text-amber-400 font-bold uppercase relative transition-all after:transition-all after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:-z-10 after:bg-white hover:after:bg-amber-400 ">game details</Link>
              </div>
            </SwiperSlide>
          )) : null
        }
      </Swiper>
    </section>
  );
};

export default Hero;