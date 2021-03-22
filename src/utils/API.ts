import axios from "axios";

export type GameData = {
    id: Number;
    first_release_date: Date;
    name: String;
    rating: Number;
    summary: String;
};

export const getGameData = async () => {
    const allGames = await axios.get("https://public.connectnow.org.uk/applicant-test/");
    return allGames.data;
};
