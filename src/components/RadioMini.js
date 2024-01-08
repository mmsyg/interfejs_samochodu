// RadioMini.js
import React from "react";
import { Link } from "react-router-dom";
import rnswiat from "../assets/rnswiat.jpeg";
import "../css/RadioMini.css"; // Dodaj link do pliku ze stylami

const station = "Nowy Świat";
const artist = "Adele";
const song = "Rolling in the Deep";

const RadioMini = () => {
  return (
    <Link to="/3" className="current-playing-info-link">
      <div className="current-playing-info">
        <img
          src={rnswiat}
          alt={`${station} Logo`}
          className="station-logo-img"
        />
        <div className="text-info">
          <h2 className="station-name">{station}</h2>
          <p className="song">{artist}</p>
          <p>{song}</p>
        </div>
      </div>
    </Link>
  );
};

export default RadioMini;
