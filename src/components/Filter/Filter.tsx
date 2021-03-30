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
  const [minScore, setMinScore] = useState(0);
  const [sortBy, setSortBy] = useState("Release Date");
  const [option1, setOption1] = useState("Score");
  const [option2, setOption2] = useState("Name");
  const [showOptions, setShowOptions] = useState(false);
  const [up, setUp] = useState(true);

  useEffect(() => {
    let search = [...allGames];
    if (nameSearch) {
      search = search.filter((game: GameData) =>
        game.name.includes(nameSearch)
      );
    }
    if (minScore > 0) {
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
    }
  }, [nameSearch, minScore, sortBy, up]);

  const sortByDate = (games: GameData[]) => {
    return games.sort(
      (a: GameData, b: GameData) => up ? a.first_release_date - b.first_release_date : b.first_release_date - a.first_release_date
    );
  };

  const sortByScore = (games: GameData[]) => {
    return games.sort((a: GameData, b: GameData) => up ? a.rating - b.rating : b.rating - a.rating);
  };

  const sortByName = (games: GameData[]) => {
    return games.sort((a: GameData, b: GameData) => {
      if (up ? a.name < b.name : b.name < a.name) {
        return -1;
      } else if (up ? a.name > b.name : b.name < a.name) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const handleSort = (sort: string) => {
    if (option1 === sort) {
      setOption1(sortBy);
    } else {
      setOption2(sortBy);
    }
    setSortBy(sort);
    setShowOptions(false);
  };

  const handleClear = () => {
    setNameSearch("");
    setMinScore(0);
    setUp(true);
    if (sortBy !== "Release Date") {
      if (option1 === "Release Date") {
        setOption1(sortBy);
      } else {
        setOption2(sortBy);
      };
      setSortBy("Release Date");
    };
    setShowOptions(false);
  };

  return (
    <div className="px-3 background">
      <h5 className="white pt-4 pb-4">Filter Results</h5>
      <p className="white">Name (contains)</p>
      <input
        type="text"
        placeholder="Text string"
        className="mb-4 input"
        value={nameSearch}
        onChange={(e) => setNameSearch(e.target.value)}
      />
      <div className="row">
        <div className="col-12 col-sm-3 col-lg-12">
          <p className="white">Minimum Score</p>
          <input
            type="number"
            placeholder="1 - 10"
            min="1"
            max="10"
            className="mb-4 pl-1 input"
            value={minScore > 0 ? minScore : "1 - 10"}
            onChange={(e) => setMinScore(+e.target.value)}
          />
        </div>
        <div className="col-12 col-sm-8 col-lg-12">
          <p className="white">Order By</p>
          <div className="row selectrow">
            <div className="col-1">
              <button className="arrow" onClick={() => setUp(!up)}>
                <span className={up ? "fas fa-arrow-up" : "fas fa-arrow-down"} />
              </button>
            </div>
            <div className="col-10 col-xl-10">
              <div className="select">
                <p
                  className="selected pt-1 pl-1"
                  onClick={() => setShowOptions(!showOptions)}
                >
                  {sortBy}
                  <span className="fas fa-caret-down float-right pr-2 pt-1" />
                </p>
                {showOptions ? (
                  <div className="pl-1 options">
                    <p
                      className="mb-2 pt-2 option"
                      onClick={() => handleSort(option1)}
                    >
                      {option1}
                    </p>
                    <p
                      className="pb-lg-1 option"
                      onClick={() => handleSort(option2)}
                    >
                      {option2}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-1 col-lg-12">
          <div className="row d-flex justify-content-end">
            <button
              className="mr-3 mt-lg-2 mb-lg-4 clear"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
