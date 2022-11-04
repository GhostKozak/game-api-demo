import axios from "axios";
import { useEffect, useState } from "react";

export const getGames = () => {
  const [games, setGames] = useState(null);

  useEffect(() => {

    axios.get(`${import.meta.env.VITE_BASE_URL}games${import.meta.env.VITE_API_KEY}`)
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((reason) => console.log(reason));

  }, []);

  return games;
};

export const getGameByIdOrSlug = (idOrSlug) => {
  const [game, setGame] = useState(null);
useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}games/${idOrSlug}${import.meta.env.VITE_API_KEY}`)
      .then((response) => {
        setGame(response.data);
      })
      .catch((reason) => console.log(reason));
  }, []);

  return game;
};