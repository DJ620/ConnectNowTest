import React, { useState, useEffect } from 'react';
import GameInfo from '../components/GameInfo';
import { GameData, getGameData } from '../utils/API';

function VideoGames() {
    const [allGames, setAllGames] = useState<GameData[]>([]);

    useEffect(() => {
        getGameData().then(games => setAllGames(games));
    }, []);

    useEffect(() => {
        console.log(allGames);
    }, [allGames]);

    return (
        <div>
            
        </div>
    )
}

export default VideoGames;
