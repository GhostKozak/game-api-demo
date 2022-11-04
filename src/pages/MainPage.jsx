import React from "react";
import Hero from "../components/Hero";
import ReleaseGame from "../components/ReleaseGame";
import SocialBanner from "../components/SocialBanner";
import Loading from "../components/Loading.jsx";
import ProgressRing from "../components/ProgressRing";

const MainPage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <section className="flex justify-center py-10">
        <h1 className="text-6xl font-black text-zinc-800">FEATURED <span className="text-amber-400">GAME</span></h1>
      </section>
      <section>
        <div className="container mx-auto py-16 flex justify-center gap-6">
          {[
            ["All", "/", true],
            ["Origin", "/", false],
            ["Playstation", "/", false],
            ["Steam", "/", false],
            ["Uplay", "/", false],
            ["Xbox", "/", false],
          ].map(([title, url, active, index]) => (
            <button type="submit" key={title} className={`border py-3 px-5 font-semibold uppercase border-amber-400 hover:text-white hover:bg-amber-400 transition-colors ${active ? "text-white bg-amber-400" : "text-amber-400"}`}>{title}</button>
          ))}
        </div>
      </section>
      <Loading />
      <ProgressRing percent={70} />
      <ReleaseGame />
      <SocialBanner />
    </div>
  );
};

export default MainPage;