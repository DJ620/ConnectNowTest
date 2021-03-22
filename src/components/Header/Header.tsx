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
    <div className="row mt-5 ml-4 ml-md-5 montserrat white">
      <div className="col-12 col-lg-3 mb-3 ml-lg-5 mt-lg-5">
        <h4 className="label video" onClick={handleVideo}>VIDEO GAMES{video ? <span className="echo videoEcho">VIDEO</span> : null}</h4>
      </div>
      <div className="col-12 col-lg-3 mt-lg-5 ml-lg-n5">
        <h4 className="label contact" onClick={handleContact}>CONTACT{contact ? <span className="echo contactEcho">CONTACT</span> : null}</h4>
      </div>
    </div>
  );
}

export default Header;
