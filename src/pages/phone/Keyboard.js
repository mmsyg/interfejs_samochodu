import React, { useState, useEffect } from 'react';
import peopleData from './contacts.json';
import phone from "../../assets/5.svg";
import {Link } from 'react-router-dom';
import del from "../../assets/delete.svg";

const Keyboard = ({ isCalling, setIsCalling,phoneNumber,setPhoneNumber }) => {

    const toggleState = () => {
        setPhoneNumber(input);
        if(input){
        setIsCalling(!isCalling);}
        
      };

    const [input, setInput] = useState(phoneNumber);
    const [suggestions, setSuggestions] = useState([]);
    const maxLength = 11;


    
    const handleSuggestionClick = (phone) => {
        // Remove spaces from the phone number
        const phoneWithoutSpaces = phone.replace(/\s+/g, '');
        setInput(phoneWithoutSpaces);
    };
    
    
    const handleButtonClick = (value) => {
        if (input.length < maxLength) {
            setInput(input + value);
        }
    };

    
    const handleDelete = () => {
        setInput(input.slice(0, -1));
    };

    // Function to generate display with _ for empty spaces
    const displayInput = () => {
        let display = input.padEnd(maxLength, '_');
        return display.split('').map((char, index) => <span key={index}>{char}</span>);
    };


    useEffect(() => {
        if (input) {
            const filteredSuggestions = peopleData
                .filter(person => 
                    person.phone.replace(/\s+/g, '').startsWith(input.replace(/_/g, '').replace(/\s+/g, ''))
                )
                .map(person => ({
                    name: person.name,
                    phone: person.phone // Spacje zachowane dla wyświetlenia
                }));
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    }, [input]);
    

    return (
        <div className="phone_keyboard">
            <div className="keyboard_numeric">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '#', '0'].map((button) => (
                    <div key={button} className="num_button" onClick={() => handleButtonClick(button)}>
                        <p>{button}</p>
                    </div>
                ))}
                <div className="num_button" onClick={handleDelete}>
                <img src={del} alt={`six`} className='nav_img'/>
                </div>
            </div>
           {/* Display the input or _ for empty spaces */}
           <div className="number" id="phone-number">
                +{displayInput()}
            </div>

            {/* Display suggestions with names */}
            <div className="suggestions">
              
                {suggestions.length > 0 ? (
                    suggestions.map((suggestion, index) => (
                        <div key={index} className='suggestion_single' onClick={() => handleSuggestionClick(suggestion.phone)}>
                            <p className="name">{suggestion.name}</p>
                            <p className="phoneNumber">{suggestion.phone}</p>
                        </div>
                    ))
                ) : (
                    <div className='text'> 
                        <p className="noSuggestions">Brak pasujących numerów</p>
                    </div>
                )}
            </div>
           <div className='ring'><div onClick={toggleState} className='ring_button'><img src={phone} alt={`six`} className='nav_img'/></div></div>
        </div>
    );
};

export default Keyboard;
