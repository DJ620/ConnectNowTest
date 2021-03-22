import React, { useState, useEffect } from 'react';
import { GameData } from "../utils/API";

const GameInfo: React.FC<GameData> = ({id, first_release_date, name, rating, summary}) => {
    const [formattedDate, setFormattedDate] = useState("");
    const [displayRating, setDisplayRating] = useState(0);

    useEffect(() => {
        const date = new Date(first_release_date);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        setFormattedDate(`${day}/${month}/${year}`);
        // const newRating = rating
    }, []);

    const styles = {
        panel: {
            backgroundColor: "#0e1a2b"
        },
        rating: {
            backgroundColor: "#5692e8",
            borderRadius: "30px",
            fontSize: "30px",
            width: "50px",
            height: "50px" 
        }
    }
    return (
        <div className="row align-items-center mb-2 mx-5" style={styles.panel}>
            <div className="col-11">
            <h3>{name}</h3>
            <p>Release Date: {formattedDate}</p>
            <p>[Summary] {summary}</p>
            </div>
            <div className="col-1">
                <p className="text-center pt-1" style={styles.rating}>{rating.toString()[0]}</p>
            </div>
        </div>
    )
}

export default GameInfo;
