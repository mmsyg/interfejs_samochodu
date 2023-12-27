import React, { useState } from 'react';
import { ReactComponent as Arrow } from "../assets/Arrow.svg";
import fan from "../assets/fan_icon.svg";
import brake from "../assets/brake_icon.svg";
import control from "../assets/control_icon.svg";
import heater from "../assets/heater_icon.svg";
import lock from "../assets/lock_icon.svg";
import battery from "../assets/battery_icon.svg";
import nitro from "../assets/nitro_icon.svg";

const ButtonsMini = () => {

    const [activeButtons, setActiveButtons] = useState(new Set());
    const [degree, setDegree] = useState(21);
    const [upClicked, setUpClicked] = useState(false);
    const [downClicked, setDownClicked] = useState(false);
    const [buttonClicked, setButtonClicked] = useState({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    });
  
    const handleArrowClick = (upOrDown) => {
      let newDegree = upOrDown === 1 ? degree + 1 : degree - 1;
      newDegree = Math.min(Math.max(newDegree, 14), 34);
      setDegree(newDegree);
      upOrDown === 1 ? setUpClicked(true) : setDownClicked(true);
  
      const interval = setInterval(() => {
        newDegree = upOrDown === 1 ? newDegree + 1 : newDegree - 1;
        newDegree = Math.min(Math.max(newDegree, 14), 34);
        setDegree(newDegree);
      }, 100); // Zmiana wartości co 100ms
  
      const clear = () => {
        clearInterval(interval);
        upOrDown === 1 ? setUpClicked(false) : setDownClicked(false);
      };
  
      // Przerywamy interval i resetujemy stan kliknięcia po puszczeniu klawisza myszy
      document.addEventListener("mouseup", clear);
      document.addEventListener("mouseleave", clear);
    };
  
    const handleButtonClick = (buttonNumber) => {
      const updatedButtons = new Set(activeButtons);
  
      if (updatedButtons.has(buttonNumber)) {
        updatedButtons.delete(buttonNumber);
      } else {
        updatedButtons.add(buttonNumber);
      }
  
      setActiveButtons(updatedButtons);
  
      const updatedButtonClicked = { ...buttonClicked };
      updatedButtonClicked[buttonNumber] = true;
      setButtonClicked(updatedButtonClicked);
  
      setTimeout(() => {
        const resetButtonClicked = { ...buttonClicked };
        resetButtonClicked[buttonNumber] = false;
        setButtonClicked(resetButtonClicked);
      }, 300); // Resetuj stan po 300ms (czas animacji)
    };
  
    const buttonStyles = (buttonNumber) => {
      return {
        backgroundColor: activeButtons.has(buttonNumber) ? "#163359" : "#303945",
      };
    };


    return (  <div className="buttons_mini">
    <div
      className={buttonClicked[1] ? "button clicked" : "button"} // Dodaj warunkową klasę CSS
      style={buttonStyles(1)}
      onMouseDown={() => handleButtonClick(1)}
    >
      {" "}
      <img src={fan} alt="fan_icon" className="icon" />
    </div>
    <div className="button2">
      <Arrow
        className={downClicked ? "arrow_down clicked" : "arrow_down"}
        onMouseDown={() => handleArrowClick(0)}
        onMouseUp={() => setDownClicked(false)}
      />

      <p className="degree">{degree + "°C"}</p>
      <Arrow
        className={upClicked ? "arrow_up clicked" : "arrow_up"}
        onMouseDown={() => handleArrowClick(1)}
        onMouseUp={() => setUpClicked(false)}
      />
    </div>
    <div
      className={buttonClicked[2] ? "button clicked" : "button"}
      style={buttonStyles(2)}
      onMouseDown={() => handleButtonClick(2)}
    ><img src={lock} alt="fan_icon" className="icon" /></div>
    <div
      className={buttonClicked[3] ? "button clicked" : "button"}
      style={buttonStyles(3)}
      onMouseDown={() => handleButtonClick(3)}
    ><img src={heater} alt="fan_icon" className="icon" /></div>
    <div
      className={buttonClicked[4] ? "button clicked" : "button"} // Dodaj warunkową klasę CSS
      style={buttonStyles(4)}
      onMouseDown={() => handleButtonClick(4)}
    ><img src={control} alt="fan_icon" className="icon" /></div>
    <div className="button2"><img src={brake} alt="fan_icon" className="icon" />
    <img src={battery} alt="fan_icon" className="icon" /></div>
    <div
      className={buttonClicked[5] ? "button clicked" : "button"} // Dodaj warunkową klasę CSS
      style={buttonStyles(5)}
      onMouseDown={() => handleButtonClick(5)}
    ><img src={nitro} alt="fan_icon" className="icon" /></div>
  </div> );
}
 
export default ButtonsMini;