import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import { ReactComponent as Arrow } from '../assets/Arrow.svg';
import '../index.css'; // Zaimportuj plik CSS dla komponentu HomeScreen

const Indicators = () => {
    return ( <div className="indicators_site"> <Navbar id={2}/>
    <Topbar /></div> );
}
 
export default Indicators;