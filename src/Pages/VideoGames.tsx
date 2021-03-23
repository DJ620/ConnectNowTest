import React, { useState, useEffect } from "react";
import Filter from "../components/Filter/Filter";
import GameInfo from "../components/GameInfo/GameInfo";
import { GameData, getGameData } from "../utils/API";

function VideoGames() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(true);
  const [allGames, setAllGames] = useState<GameData[]>([]);
  const [filteredGames, setFilteredGames] = useState<GameData[]>([]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  useEffect(() => {
    getGameData().then((games) => {
        setIsLoading(false);
        let alphabeticalGames = games.sort((a: GameData,b:GameData) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            } else {
                return 0;
            }
        });
        setAllGames(alphabeticalGames);
        setFilteredGames([...alphabeticalGames].sort((a: GameData,b: GameData) => a.first_release_date - b.first_release_date));
    });
  }, []);

  return (
    <div className="row mx-5">
      <div className="col-3">
        <Filter allGames={allGames} filteredGames={filteredGames} setFilteredGames={setFilteredGames}/>
      </div>
      <div className="col-9">
        {isLoading ? <p className="ml-5">Loading...</p> : filteredGames.length > 0 ? filteredGames.map((game) => (
          <GameInfo
            id={game.id}
            first_release_date={game.first_release_date}
            name={game.name}
            rating={game.rating}
            summary={game.summary}
          />
        )) : <p className="ml-5">No results matching your search</p>}
      </div>
    </div>
  );
}

export default VideoGames;
