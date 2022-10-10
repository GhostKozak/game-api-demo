import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";
import { AiFillTags } from "react-icons/ai";
import { FaTv } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section id="hero" className="overflow-hidden relative">
      <Swiper modules={[EffectFade, Pagination]} effect="fade" pagination={{ clickable: true }}  >
        <SwiperSlide className="bg-center bg-cover h-screen flex items-center bg-[url(https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg)] relative before:bg-black before:opacity-20 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:-z-10">
          <div className="container mx-auto flex flex-col justify-center items-center py-80 text-white ">
            <div className="flex gap-10 mb-6">
              <p className="flex items-center gap-2">
                <FaTv className="text-amber-400" />
                <a href="#" className="transition-colors hover:text-amber-400 inline-block py-2">Steam</a>
                <a href="#" className="transition-colors hover:text-amber-400 inline-block py-2">Uplay</a>
              </p>
              <p className="flex items-center gap-2">
                <AiFillTags className="text-amber-400" />
                <a href="#" className="transition-colors hover:text-amber-400 inline-block py-2">Action</a>
                <a href="#" className="transition-colors hover:text-amber-400 inline-block py-2">Adventure</a>
              </p>
            </div>
            <h1 className="text-6xl font-black uppercase text-center mb-8">God of War</h1>
            <p className="max-w-4xl text-center mb-11">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, culpa error. Eligendi eius molestiae, est esse quae numquam eaque necessitatibus? Sint ut saepe eveniet provident autem vero veritatis, possimus nisi.</p>
            <button type="submit" className="inline-block py-3 px-5 text-white hover:text-amber-400 font-bold uppercase relative transition-all after:transition-all after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:-z-10 after:bg-white hover:after:bg-amber-400 ">game details</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover h-screen flex items-center bg-[url(https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg)] relative before:bg-black before:opacity-20 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:-z-10">
          <div className="container mx-auto flex flex-col justify-center items-center py-80 text-white ">
            <div className="flex gap-10 mb-6">
              <p className="flex items-center gap-2">
                <FaTv className="text-amber-400" />
                <a href="#" className="transition-colors hover:text-amber-400 inline-block py-2">Steam</a>
                <a href="#" className="transition-colors hover:text-amber-400 inline-block py-2">Uplay</a>
              </p>
              <p className="flex items-center gap-2">
                <AiFillTags className="text-amber-400" />
                <a href="#" className="transition-colors hover:text-amber-400 inline-block py-2">Action</a>
                <a href="#" className="transition-colors hover:text-amber-400 inline-block py-2">Adventure</a>
              </p>
            </div>
            <h1 className="text-6xl font-black uppercase text-center mb-8">Red Dead Redemption</h1>
            <p className="max-w-4xl text-center mb-11">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, culpa error. Eligendi eius molestiae, est esse quae numquam eaque necessitatibus? Sint ut saepe eveniet provident autem vero veritatis, possimus nisi.</p>
            <button type="submit" className="inline-block py-3 px-5 text-white hover:text-amber-400 font-bold uppercase relative transition-all after:transition-all after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:-z-10 after:bg-white hover:after:bg-amber-400 ">game details</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover h-screen flex items-center bg-[url(https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg)] relative before:bg-black before:opacity-20 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:-z-10">
          <div className="container mx-auto flex flex-col justify-center items-center py-80 text-white ">
            <div className="flex gap-10 mb-6">
              <p className="flex items-center gap-2">
                <FaTv className="text-amber-400" />
                <a href="#" className="transition-colors hover:text-amber-400 inline-block py-2">Steam</a>
                <a href="#" className="transition-colors hover:text-amber-400 inline-block py-2">Uplay</a>
              </p>
              <p className="flex items-center gap-2">
                <AiFillTags className="text-amber-400" />
                <a href="#" className="transition-colors hover:text-amber-400 inline-block py-2">Action</a>
                <a href="#" className="transition-colors hover:text-amber-400 inline-block py-2">Adventure</a>
              </p>
            </div>
            <h1 className="text-6xl font-black uppercase text-center mb-8">The Witcher 3</h1>
            <p className="max-w-4xl text-center mb-11">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, culpa error. Eligendi eius molestiae, est esse quae numquam eaque necessitatibus? Sint ut saepe eveniet provident autem vero veritatis, possimus nisi.</p>
            <button type="submit" className="inline-block py-3 px-5 text-white hover:text-amber-400 font-bold uppercase relative transition-all after:transition-all after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:-z-10 after:bg-white hover:after:bg-amber-400 ">game details</button>
          </div>
        </SwiperSlide>
      </Swiper>

    </section>
  );
};

export default Hero;