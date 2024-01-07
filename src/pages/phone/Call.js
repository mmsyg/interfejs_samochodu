import { useState, useEffect } from "react";
import React from "react";
import Keyboard from "./Keyboard";
import call from "../../assets/Call.png";
import pause from "../../assets/Pause.png";
import mute from "../../assets/MicrophoneSlash.png";
import person from "../../assets/people.png";
import DelayedLink from "../../components/DelayedLink";
const Call = ({ isCalling, setIsCalling }) => {

  const toggleState = () => {
    setIsCalling(!isCalling);
  };

    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(true);
  
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
      
      // Dodatkowa funkcja do formatowania czasu
      const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = ((time % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      };
  return (
    <div className="call">
      <div className="photo_name">
        <div className="image"><img className="icon" src={person} alt='person'></img></div>
        <div className="name_numer">
            <p className="name_call">John Pork</p>
            <p className="number_call">+123456789</p>
        <p className="stoper_call">{formatTime(time)}</p>
      {/* <button onClick={() => setTimerOn(true)}>Start</button>
      <button onClick={() => setTimerOn(false)}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button> */}
        </div>
      </div>
      <div className="buttons">
        <div onClick={() => {setTimerOn(false); setTimeout(() => {

  toggleState()
}, 2000); }} className="red_button"><img className="icon" src={call} alt='call'></img></div>
        <div className="button3"><img className="icon" src={pause} alt='pause'></img></div>
        <div className="button3"><img className="icon" src={mute} alt='mute'></img></div>
      </div>
    </div>
  );
};

export default Call;
