import axios from "axios";

export type GameData = {
    id: Number;
    first_release_date: number;
    name: string;
    rating: Number;
    summary: String;
    formattedDate?: Date;
};

export const getGameData = async () => {
    const allGames = await axios.get("https://public.connectnow.org.uk/applicant-test/");
    return allGames.data;
};
