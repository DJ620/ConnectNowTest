import React, { useState, useEffect } from "react";
import Filter from "../components/Filter/Filter";
import GameInfo from "../components/GameInfo/GameInfo";
import { GameData, getGameData } from "../utils/API";

function VideoGames() {
  const [isLoading, setIsLoading] = useState(true);
  const [allGames, setAllGames] = useState<GameData[]>([]);
  const [filteredGames, setFilteredGames] = useState<GameData[]>([]);

  // Queries the video game API and then sorts the games first alphabetically and then by release date
  useEffect(() => {
    getGameData().then((games) => {
      setIsLoading(false);
      let alphabeticalGames = games.sort((a: GameData, b: GameData) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
      setAllGames(alphabeticalGames);
      setFilteredGames(
        [...alphabeticalGames].sort(
          (a: GameData, b: GameData) =>
            a.first_release_date - b.first_release_date
        )
      );
    });
  }, []);

  return (
    <div className="row">
      <div className="col-12 col-lg-2 mb-5">
        <Filter
          allGames={allGames}
          filteredGames={filteredGames}
          setFilteredGames={setFilteredGames}
        />
      </div>
      <div className="col-12 col-lg-10">
        {/* Until all game data has arrived from the API call, the user will simply see the word "loading..." */}
        {isLoading ? (
          <p className="ml-5">Loading...</p>
        ) : filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <GameInfo
              key={game.name}
              id={game.id}
              first_release_date={game.first_release_date}
              name={game.name}
              rating={game.rating}
              summary={game.summary}
            />
          ))
        ) : (
          // If the filter results come up empty, this message will be displayed to the user
          <p className="ml-5">No results matching your search</p>
        )}
      </div>
    </div>
  );
}

export default VideoGames;
