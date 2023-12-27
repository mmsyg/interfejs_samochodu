import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import { ReactComponent as Arrow } from '../assets/Arrow.svg';
import '../index.css'; // Zaimportuj plik CSS dla komponentu HomeScreen

const Radio = () => {
    return ( <div className="radio_screen">
 <Navbar id={3}/>
      <Topbar />
        
    </div> );
}
 
export default Radio;