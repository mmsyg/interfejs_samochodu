import { useState, useEffect } from "react";
import React from "react";
import Keyboard from "./Keyboard";
import call from "../../assets/Call.png";
import pause from "../../assets/pause.png";
import mute from "../../assets/MicrophoneSlash.png";
import person from "../../assets/people.png";
import DelayedLink from "../../components/DelayedLink";
import peopleData from './contacts.json'; // Import the JSON data

const Call = ({ isCalling, setIsCalling, phoneNumber, setPhoneNumber }) => {

  const toggleState = () => {
    setIsCalling(!isCalling);
  };

  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(true);
  const [isButton3Pressed, setIsButton3Pressed] = useState(false);

  const handleButton3Click = () => {
    setIsButton3Pressed(!isButton3Pressed); // Zmienia stan na przeciwny
  };

  const [isButton3Pressed2, setIsButton3Pressed2] = useState(false);

  const handleButton3Click2 = () => {
    setIsButton3Pressed2(!isButton3Pressed2); // Zmienia stan na przeciwny
  };
  useEffect(() => {
    let interval;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  // Function to format time
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  };

  // Function to find the contact name from the JSON data
  const getContactName = (phoneNumber) => {

    const contact = peopleData.find(person => person.phone.replace(/\s+/g, '') === phoneNumber);
    console.log("Found Contact:", contact);

    return contact ? contact.name : "Nieznany";
};

  const contactName = getContactName(phoneNumber);

  return (
    <div className="call">
      <div className="photo_name">
        <div className="image"><img className="icon" src={person} alt='person'></img></div>
        <div className="name_numer">
            <p className="name_call">{contactName}</p> {/* Display the contact name */}
            <p className="number_call">+{phoneNumber}</p>
            <p className="stoper_call">{formatTime(time)}</p>
        </div>
      </div>
      <div className="buttons">
        <div onClick={() => {setTimerOn(false); setTimeout(() => { toggleState() }, 2000); }} className="red_button">
            <img className="icon" src={call} alt='call'></img>
        </div>
        <div onClick={handleButton3Click} className={`button3 ${isButton3Pressed ? 'pressed1' : ''}`}><img className="icon" src={pause} alt='pause'></img></div>
        <div onClick={handleButton3Click2} className={`button3 ${isButton3Pressed2 ? 'pressed2' : ''}`}><img className="icon" src={mute} alt='mute'></img></div>
      </div>
    </div>
  );
};

export default Call;
