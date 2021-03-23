import React, { useState, useEffect } from "react";
import Filter from "../components/Filter/Filter";
import GameInfo from "../components/GameInfo/GameInfo";
import { GameData, getGameData } from "../utils/API";

function VideoGames() {
  const [width, setWidth] = useState(window.innerWidth);
  const [allGames, setAllGames] = useState<GameData[]>([]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  useEffect(() => {
    getGameData().then((games) => setAllGames(games));
  }, []);

  if (allGames.length < 1) {
    return <p>Loading games...</p>;
  }

  return (
    <div className="row mx-5">
      <div className="col-3">
        <Filter />
      </div>
      <div className="col-9">
        {allGames.map((game) => (
          <GameInfo
            id={game.id}
            first_release_date={game.first_release_date}
            name={game.name}
            rating={game.rating}
            summary={game.summary}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoGames;
