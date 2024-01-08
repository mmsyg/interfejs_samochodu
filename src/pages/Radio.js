// Radio.js

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import MusicPlayer from "../components/MusicPlayer";
import "../index.css";
import "../css/Radio.css";

import Radio_Zet from "../assets/Radio_Zet.png";
import Rmf_Fm from "../assets/Rmf_Fm.png";
import Tokfm from "../assets/Tok_Fm.png";
import nowyswiat from "../assets/rnswiat.jpeg";

const Radio = () => {
  const [selectedStation, setSelectedStation] = useState("nowy_swiat");
  const [isMusicListOpen, setMusicListOpen] = useState(false);
  const handleStationChange = (station) => {
    setSelectedStation(station);
  };

  return (
    <div className="radio_screen">
      <Navbar id={3} />
      <div className="station-list-container">
        <Topbar />

        <ul className="station-list">
          <li>
            <img
              src={Radio_Zet}
              alt="Icon 1"
              onClick={() => handleStationChange("Radio_Zet")}
            />
          </li>
          <li>
            <img
              src={Rmf_Fm}
              alt="Icon 2"
              onClick={() => handleStationChange("Rmf_Fm")}
            />
          </li>
          <li>
            <img
              src={Tokfm}
              alt="Icon 3"
              onClick={() => handleStationChange("Tokfm")}
            />
          </li>
          <li>
            <img
              src={nowyswiat}
              alt="Icon 4"
              onClick={() => handleStationChange("nowy_swiat")}
            />
          </li>
        </ul>
      </div>

      {selectedStation && (
        <MusicPlayer
          station={selectedStation}
          onChangeStation={handleStationChange}
          className="music-player"
        />
      )}
    </div>
  );
};

export default Radio;
