import { getGameByIdOrSlug } from "../services/api/data";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const GameDetail = () => {
  const [gameDetail, setGameDetail] = useState(null);

  const location = useLocation().pathname.split("/")[2];
  const data = getGameByIdOrSlug(location);

  console.log(data);

  useEffect(() => {
    setGameDetail(data);
  }, [data]);


  return (
    <section>
      <h1></h1>
    </section>
  );
};

export default GameDetail;