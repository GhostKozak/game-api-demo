import React from "react";
import FilteredGames from "../components/FilteredGames";
import Hero from "../components/Hero";
import ReleaseGame from "../components/ReleaseGame";
import SocialBanner from "../components/SocialBanner";

const MainPage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FilteredGames />
      <ReleaseGame />
      <SocialBanner />
    </div>
  );
};

export default MainPage;