// MusicPlayer.js

import React, { useState, useEffect } from "react";
import Radio_Zet from "../assets/Radio_Zet.png";
import Rmf_Fm from "../assets/Rmf_Fm.png";
import Tokfm from "../assets/Tok_Fm.png";
import pauseIcon from "../assets/pause.png";
import playIcon from "../assets/play.png";
import nowyswiat from "../assets/rnswiat.jpeg";
import rightArrowIcon from "../assets/right.png";
import leftArrowIcon from "../assets/left.png";
import RadioMini from "../components/RadioMini";
import "../css/Radio.css";

const MusicPlayer = ({ station, onChangeStation }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentArtist, setCurrentArtist] = useState("");
  const [currentSong, setCurrentSong] = useState("");
  const stations = ["Radio_Zet", "Rmf_Fm", "Tokfm", "nowy_swiat"];
  const stationIndex = stations.indexOf(station);
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  const changeStation = (direction) => {
    let newStationIndex;

    if (direction === "prev") {
      newStationIndex = (stationIndex - 1 + stations.length) % stations.length;
    } else if (direction === "next") {
      newStationIndex = (stationIndex + 1) % stations.length;
    }

    const newStation = stations[newStationIndex];

    onChangeStation(newStation);
  };

  // Użyj efektu do aktualizacji informacji o obecnie granej piosence przy zmianie stacji
  useEffect(() => {
    const { artist, title } = getCurrentlyPlayingInfo(station);
    setCurrentArtist(artist);
    setCurrentSong(title);
  }, [station]);

  return (
    <div className="music-player">
      <div className="station-navigation">
        <img
          src={leftArrowIcon}
          alt="Poprzednia stacja"
          onClick={() => changeStation("prev")}
          className="arrow-button"
        />
        <img
          src={rightArrowIcon}
          alt="Następna stacja"
          onClick={() => changeStation("next")}
          className="arrow-button"
        />
      </div>
      <h2 className="now-playing">Teraz grane</h2>
      <h1 className="station-name">{getStationName(station)}</h1>
      <div className="station-logo">
        {/* Dodaj obrazy logo dla każdej stacji */}
        <img
          src={getStationLogo(station)}
          alt={`${station} Logo`}
          className="station-logo-img"
        />
      </div>
      <div className="current-song">
        <p>
          <strong>Artist:</strong> {currentArtist}
        </p>
        <p>
          <strong>Song:</strong> {currentSong}
        </p>
      </div>
    </div>
  );
};

const getStationLogo = (station) => {
  // Dodaj ścieżki do obrazów logo dla każdej stacji
  switch (station) {
    case "Radio_Zet":
      return Radio_Zet;
    case "Rmf_Fm":
      return Rmf_Fm;
    case "Tokfm":
      return Tokfm;
    case "nowy_swiat":
      return nowyswiat;
    default:
      return "";
  }
};
const getStationName = (station) => {
  switch (station) {
    case "Radio_Zet":
      return "Radio Zet";
    case "Rmf_Fm":
      return " Radio RMF FM";
    case "Tokfm":
      return "Radio TOK FM";
    case "nowy_swiat":
      return "Radio Nowy Świat";
    default:
      return "";
  }
};

const getCurrentlyPlayingInfo = (station) => {
  switch (station) {
    case "Radio_Zet":
      return { artist: "Taylor Swift", title: "Is It Over Now?" };
    case "Rmf_Fm":
      return { artist: "Kendrick Lamar", title: "HUMBLE." };
    case "Tokfm":
      return { artist: "Coldplay", title: "Viva La Vida" };
    case "nowy_swiat":
      return { artist: "Adele", title: "Rolling in the Deep" };
    default:
      return { artist: "", title: "" };
  }
};

export default MusicPlayer;
