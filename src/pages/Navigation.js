import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import { ReactComponent as Arrow } from '../assets/Arrow.svg';
import '../index.css'; // Zaimportuj plik CSS dla komponentu HomeScreen

const Navigation = () => {
    return ( <div className="Navigation_screen">

<Navbar id={4}/>
      <Topbar />
    </div> );
}
 
export default Navigation;