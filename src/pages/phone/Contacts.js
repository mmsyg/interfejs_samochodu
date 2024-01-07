import React, { useState } from 'react';
import contactsData from './contacts.json'
import left from "../../assets/arrow_left.png";
import right from "../../assets/arrow_right.png";
const Contacts = () => {
    const contactsPerTile = 6; // Maksymalna liczba kontaktów na kafelek
    const maxTilesPerPage = 2; // Maksymalna liczba kafelków na stronę
    const [currentPage, setCurrentPage] = useState(0);

  // Funkcja dzieląca kontakty na podtablice
  const chunkContacts = (contacts, size) =>
    contacts.reduce((acc, val, i) => {
      if (i % size === 0) {
        acc.push([]);
      }
      acc[acc.length - 1].push(val);
      return acc;
    }, []);

    const tiles = chunkContacts(contactsData, contactsPerTile);

  // Podział kafelków na strony
  const pages = chunkContacts(tiles, maxTilesPerPage);

  // Funkcje do nawigacji między stronami
  const goToNextPage = () => setCurrentPage(currentPage + 1);
  const goToPreviousPage = () => setCurrentPage(currentPage - 1);

  return (
    <div className="contacts">
      <div className="tiles2">
        {pages[currentPage].map((tile, index) => (
          <div className="tile2" key={index}>
            <ul>
              {tile.map((contact, index) => (
                <li className='pkt' key={index}><p className="name_contact">{contact.name}</p>
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
    </div>
  );
};

export default Contacts;
