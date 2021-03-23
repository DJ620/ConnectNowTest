import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

function Header() {
    const history = useHistory();
    const [video, setVideo] = useState(true);
    const [contact, setContact] = useState(false);

    const handleVideo = () => {
        setVideo(true);
        setContact(false);
        history.push("/");
    };

    const handleContact = () => {
        setContact(true);
        setVideo(false);
        history.push("/contact");
    };

  return (
    <div className="container mb-5">
    <div className="row mt-5 ml-2 ml-lg-0 montserrat white">
      <div className="col-12 col-lg-4 mb-3 mt-lg-5">
        <h3 className="label video" onClick={handleVideo}>VIDEO GAMES{video ? <span className="echo videoEcho">VIDEO</span> : null}</h3>
      </div>
      <div className="col-12 col-lg-4 mt-lg-5">
        <h3 className="label contact" onClick={handleContact}>CONTACT{contact ? <span className="echo contactEcho">CONTACT</span> : null}</h3>
      </div>
    </div>
    </div>
  );
}

export default Header;
