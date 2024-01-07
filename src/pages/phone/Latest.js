import React, { useState } from 'react';
import contactsData from './contacts.json'
import left from "../../assets/arrow_left.png";
import right from "../../assets/arrow_right.png";

const getRandomClass = () => {
    const classes = ['punkt1', 'punkt2', 'punkt3'];
    return classes[Math.floor(Math.random() * classes.length)];
  };
const Latest = () => {
    const contactsPerTile = 6; //maksymalna liczba kontaktów na kafelek
    const maxTilesPerPage = 2; //maksymalna licba kafelków na stronę
    const [currentPage, setCurrentPage] = useState(0);

  //Funkcja dzielaca kontakty na podtablice
  const chunkContacts = (contacts, size) =>
    contacts.reduce((acc, val, i) => {
      if (i % size === 0) {
        acc.push([]);
      }
      acc[acc.length - 1].push(val);
      return acc;
    }, []);
   
      const reversedContacts = [...contactsData].reverse();
    const tiles = chunkContacts(reversedContacts, contactsPerTile);

  // Podział kafelków na strony
  const pages = chunkContacts(tiles, maxTilesPerPage);

  //funkcje do nawigacji między stronami
  const goToNextPage = () => setCurrentPage(currentPage + 1);
  const goToPreviousPage = () => setCurrentPage(currentPage - 1);
  
  return (
    <div className="contacts">
      <div className="tiles2">
      {pages[currentPage].map((tile, tileIndex) => (
          <div className="tile2" key={tileIndex}>
            <ul>
              {tile.map((contact, contactIndex) => (
                <li className={getRandomClass()} key={contactIndex}>
                  <p className="name_contact">{contact.name}</p>
                  <p className="phoneNumber_contact">{contact.phone}</p>
                </li> 
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pagination">
        {currentPage > 0 && (
          <img className='arrow_right' src={left} alt='left' onClick={goToPreviousPage}/>
        )}
        {currentPage < pages.length - 1 && (
        <img className='arrow_left' src={right} alt='right' onClick={goToNextPage}/>
        )}
      </div>
    </div>
  );
};

export default Latest;
