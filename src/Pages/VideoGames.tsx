import React, { useState, useEffect } from 'react';
import GameInfo from '../components/GameInfo';
import { GameData, getGameData } from '../utils/API';

function VideoGames() {
    const [allGames, setAllGames] = useState<GameData[]>([]);

    useEffect(() => {
        getGameData().then(games => setAllGames(games));
    }, []);

    if (allGames.length < 1) {
        return <p>Loading games...</p>
    };

    return (
        <div>
            {allGames.map(game => (
                <GameInfo
                    id={game.id}
                    first_release_date={game.first_release_date}
                    name={game.name}
                    rating={game.rating}
                    summary={game.summary}
                />
            ))}
        </div>
    )
}

export default VideoGames;
