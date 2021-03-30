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

  // Eventlistener used to check size of viewport and slice off the appropriate length of the summary
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  // Function to correctly format the release date of the game
  useEffect(() => {
    const date = new Date(first_release_date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    setFormattedDate(`${day}/${month}/${year}`);
  }, []);

  // Function that shortens the displayed summary based on the width of the viewport
  useEffect(() => {
    if (width < 755) {
      if (summary.split(" ").length > 20) {
        let shortened = summary.split(" ");
        shortened.splice(20);
        setSummaryPreview(shortened.join(" ") + "...");
      }
    } else if (width < 1099) {
      if (summary.split(" ").length > 40) {
        let shortened = summary.split(" ");
        shortened.splice(40);
        setSummaryPreview(shortened.join(" ") + "...");
      }
    } else {
      if (summary.split(" ").length > 55) {
        let shortened = summary.split(" ");
        shortened.splice(55);
        setSummaryPreview(shortened.join(" ") + "...");
      }
    }
  }, [width]);

  return (
    <div>
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
      {/* This section of code is for mobile-sized screens */}
      <div className="smallPanel">
        <div className="smallBlack">
          <p className="text-center pt-1 smallRating">{rating.toString()[0]}</p>
        </div>
        <div className="px-3 py-2 smallinfo align-items-center">
          <h5 className="white">{name}</h5>
          <p className="mt-n1">Release Date: {formattedDate}</p>
          <p>[Summary] {summaryPreview}</p>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
