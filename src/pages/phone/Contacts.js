import React, { useState } from 'react';
import contactsData from './contacts.json'
import left from "../../assets/arrow_left.png";
import right from "../../assets/arrow_right.png";
const Contacts = ({ setPhoneNumber, setActiveComponent }) => {
    const contactsPerTile = 6; // Maksymalna liczba kontaktów na kafelek
    const maxTilesPerPage = 2; // Maksymalna liczba kafelków na stronę
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const handleContactClick = (phone) => {
      const phoneWithoutSpaces = phone.replace(/\s+/g, '');
      setPhoneNumber(phoneWithoutSpaces);
      setActiveComponent("component1"); // Zakładając, że "component1" to Keyboard
  };

  // Funkcja dzieląca kontakty na podtablice
  const chunkContacts = (contacts, size) =>
    contacts.reduce((acc, val, i) => {
      if (i % size === 0) {
        acc.push([]);
      }
      acc[acc.length - 1].push(val);
      return acc;
    }, []);

    // Filtruj kontakty przed ich podziałem
const filteredContacts = contactsData.filter(contact =>
  contact.name.toLowerCase().includes(searchTerm.toLowerCase())
);

// Następnie użyj `filteredContacts` zamiast `contactsData` do tworzenia kafelków i stron
const tiles = chunkContacts(filteredContacts, contactsPerTile);
const pages = chunkContacts(tiles, maxTilesPerPage);

  // Funkcje do nawigacji między stronami
  const goToNextPage = () => setCurrentPage(currentPage + 1);
  const goToPreviousPage = () => setCurrentPage(currentPage - 1);

  return (<div><input
    type="text"
    placeholder="Szukaj..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className='search'
  />
    <div className="contacts">
 
      <div className="tiles2">
        {pages[currentPage].map((tile, index) => (
          <div className="tile2" key={index}>
            <ul>
              {tile.map((contact, index) => (
                <li className='pkt' key={index}><p className="name_contact" onClick={() => handleContactClick(contact.phone)}>{contact.name} </p>
                <p className="phoneNumber_contact">{contact.phone}</p></li> 
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
    </div></div>
  );
};

export default Contacts;
