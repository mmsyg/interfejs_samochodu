import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import { ReactComponent as Arrow } from '../assets/Arrow.svg';
import '../index.css'; // Zaimportuj plik CSS dla komponentu HomeScreen

const Phone = () => {
 

  return (
    <div className="phone_screen">
      <Navbar id={5}/>
      <Topbar />
     
    </div>
  );
};

export default Phone;
