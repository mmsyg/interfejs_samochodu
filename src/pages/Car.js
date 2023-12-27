import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import { ReactComponent as Arrow } from '../assets/Arrow.svg';
import '../index.css'; // Zaimportuj plik CSS dla komponentu 


const Car = () => {


  
    return ( <div className="car_screen">
 <Navbar id={1}/>
      <Topbar />

    </div> );
}
 
export default Car;