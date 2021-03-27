import React, { useState, useEffect } from "react";
import { GameData } from "../../utils/API";
import "./GameInfo.css";

const GameInfo: React.FC<GameData> = ({
  id,
  first_release_date,
  name,
  rating,
  summary,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [formattedDate, setFormattedDate] = useState("");
  const [summaryPreview, setSummaryPreview] = useState(summary);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  useEffect(() => {
    const date = new Date(first_release_date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    setFormattedDate(`${day}/${month}/${year}`);
  }, []);

  useEffect(() => {
    if (width < 755) {
      if (summary.split(" ").length > 30) {
        let shortened = summary.split(" ");
        shortened.splice(20);
        setSummaryPreview(shortened.join(" ") + "...");
      };
    } else {
      if (summary.split(" ").length > 55) {
        let shortened = summary.split(" ");
        shortened.splice(55);
        setSummaryPreview(shortened.join(" ") + "...");
      };
    }
  }, [width]);

  return (
    <div className="row align-items-center mb-2 ml-lg-5 panel">
      <div className="col-2 black"></div>
      <div className="col-9 pb-4">
        <h5 className="white">{name}</h5>
        <p className="mt-n1">Release Date: {formattedDate}</p>
        <p>[Summary] {summaryPreview}</p>
      </div>
      <div className="col-1 mt-n4 pl-md-4 pl-lg-0 pl-xl-5">
        <p className="text-center pt-1 rating">{rating.toString()[0]}</p>
      </div>
    </div>
  );
};

export default GameInfo;
