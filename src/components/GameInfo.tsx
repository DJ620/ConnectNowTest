import React, { useState, useEffect } from 'react';
import { GameData } from "../utils/API";

const GameInfo: React.FC<GameData> = ({id, first_release_date, name, rating, summary}) => {
    const [formattedDate, setFormattedDate] = useState<String>("");
    useEffect(() => {
        const date = new Date(first_release_date);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        setFormattedDate(`${day}/${month}/${year}`);
    }, []);
    return (
        <div>
            <h3>{name}</h3>
            <p>Release Date: {formattedDate}</p>
            <p>[Summary] {summary}</p>
        </div>
    )
}

export default GameInfo;
