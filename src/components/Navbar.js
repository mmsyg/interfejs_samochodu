import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import zero from "../assets/0.svg";
import one from "../assets/1.svg";
import two from "../assets/2.svg";
import three from "../assets/3.svg";
import four from "../assets/4.svg";
import five from "../assets/5.svg";
import six from "../assets/6.svg";

const Navbar = (props) => {
  const [activeButton, setActiveButton] = useState(props.id);



  // Tablica obiektów zawierających numery i odpowiadające im importowane obrazy SVG
  const buttons = [
    { number: 0, image: zero },
    { number: 1, image: one },
    { number: 2, image: two },
    { number: 3, image: three },
    { number: 4, image: four },
    { number: 5, image: five },
    { number: 6, image: six },
  ];

  useEffect(() => {
    
    const buttonsElements = document.getElementsByClassName('nav_buttons');
    for (let i = 0; i < buttonsElements.length; i++) {
      buttonsElements[i].style.backgroundColor = activeButton === parseInt(buttonsElements[i].getAttribute('data-button-number'), 10) ? '#212730' : 'initial';
    }
  }, [activeButton]);

  return (
    <div className="navbar">
      {buttons.map((button) => (
        <Link to={`/${button.number}`} key={button.number} className='nav_buttons' data-button-number={button.number} >
          {/* Używamy importowanego obrazu SVG dla każdego przycisku */}
          <img src={button.image} alt={`svg${button.number}`} className='nav_img'/>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
