import React, { SetStateAction, Dispatch, useState, useEffect } from "react";
import "./Filter.css";
import { GameData } from "../../utils/API";

type Props = {
  allGames: GameData[];
  filteredGames: GameData[];
  setFilteredGames: Dispatch<SetStateAction<GameData[]>>;
};

const Filter: React.FC<Props> = ({
  allGames,
  filteredGames,
  setFilteredGames,
}) => {
  const [nameSearch, setNameSearch] = useState("");
  const [minScore, setMinScore] = useState(1);
  const [sortBy, setSortBy] = useState("Release Date");

  useEffect(() => {
      let search = [...allGames];
    if (nameSearch) {
      search = search.filter((game: GameData) => game.name.includes(nameSearch));
    };
    if (minScore > 1) {
        search = search.filter((game: GameData) => game.rating >= minScore * 10);
    }
    switch (sortBy) {
        case "Score":
            setFilteredGames(sortByScore(search));
            break;
        case "Name":
            setFilteredGames(sortByName(search));
            break;
        default:
            setFilteredGames(sortByDate(search));
    };
  }, [nameSearch, minScore, sortBy]);

  const sortByDate = (games: GameData[]) => {
    return games.sort(
      (a: GameData, b: GameData) => a.first_release_date - b.first_release_date
    );
  };

  const sortByScore = (games: GameData[]) => {
      return games.sort(
          (a: GameData, b: GameData) => a.rating - b.rating
      );
  };

  const sortByName = (games: GameData[]) => {
      return games.sort(
          (a: GameData, b: GameData) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            } else {
                return 0;
            }
        }
      );
  };

  return (
    <div className="px-3 background">
      <h6 className="white pt-4 pb-4">Filter Results</h6>
      <p className="white">Name (contains)</p>
      <input
        type="text"
        placeholder="Text string"
        className="mb-4 input"
        onChange={(e) => setNameSearch(e.target.value)}
      />
      <p className="white">Minimum Score</p>
      <input
        type="number"
        placeholder="1 - 10"
        min="1"
        max="10"
        className="mb-4 input"
        onChange={e => setMinScore(+e.target.value)}
      />
      <p className="white">Order By</p>
      <div className="row selectrow">
        <div className="col-1">
          <button className="arrow">
            <span className="fas fa-arrow-up" />
          </button>
        </div>
        <div className="col-10 d-flex justify-content-end">
          <select className="select pt-1" onChange={e => setSortBy(e.target.value)}>
            <option value="Release Date" className="option">
              Release Date
            </option>
            <option value="Score" className="option">
              Score
            </option>
            <option value="Name" className="option">
              Name
            </option>
          </select>
        </div>
      </div>
      <div className="row d-flex justify-content-end">
        <button className="mr-3 mt-2 mb-4 clear">Clear</button>
      </div>
    </div>
  );
};

export default Filter;
