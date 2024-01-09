import React, { useState } from 'react';
import contactsData from './contacts.json'
import left from "../../assets/arrow_left.png";
import right from "../../assets/arrow_right.png";

const getRandomClass = () => {
    const classes = ['punkt1_v2', 'punkt2_v2', 'punkt3_v2'];
    return classes[Math.floor(Math.random() * classes.length)];
  };
const Latest = ({ setPhoneNumber, setActiveComponent }) => {
    const contactsPerTile = 6; //maksymalna liczba kontaktów na kafelek
    const maxTilesPerPage = 2; //maksymalna licba kafelków na stronę
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const handleContactClick = (phone) => {
      const phoneWithoutSpaces = phone.replace(/\s+/g, '');
      setPhoneNumber(phoneWithoutSpaces);
      setActiveComponent("component1"); // Zakładając, że "component1" to Keyboard
  };

  

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
// Filtruj kontakty przed ich podziałem
const filteredContacts = contactsData
  .filter(contact => contact.name.toLowerCase().includes(searchTerm.toLowerCase()))
  .reverse(); 

  const tiles = chunkContacts(filteredContacts, contactsPerTile);
  const pages = chunkContacts(tiles, maxTilesPerPage);


  //funkcje do nawigacji między stronami
  const goToNextPage = () => setCurrentPage(currentPage + 1);
  const goToPreviousPage = () => setCurrentPage(currentPage - 1);

  

  
  
  return (<div>  <input
  type="text"
  placeholder="Szukaj..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className='search'
/>
    <div className="contacts">
    
    <div className="tiles2">
            {pages[currentPage] ? (
                pages[currentPage].map((tile, tileIndex) => (
                    <div className="tile2" key={tileIndex}>
                        <ul>
                            {tile.map((contact, contactIndex) => (
                                <li className={getRandomClass()} key={contactIndex} onClick={() => handleContactClick(contact.phone)}>
                                    <p className="name_contact">{contact.name}</p>
                                    <p className="phoneNumber_contact">{contact.phone}</p>
                                </li> 
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>Brak danych do wyświetlenia</p>
            )}
        </div>
      <div className="pagination">
        {currentPage > 0 && (
          <img className='arrow_right' src={left} alt='left' onClick={goToPreviousPage}/>
        )}
        {currentPage < pages.length - 1 && (
        <img className='arrow_left' src={right} alt='right' onClick={goToNextPage}/>
        )}
      </div>
    </div></div>
  );
};

export default Latest;
