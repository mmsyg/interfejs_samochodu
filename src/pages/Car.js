import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import { ReactComponent as Arrow } from '../assets/Arrow.svg';
import '../index.css'; // Zaimportuj plik CSS dla komponentu 
import '../css/Car.css';



import battery from "../assets/obrazki_do_car/battery.svg"
import leaf from "../assets/obrazki_do_car/leaf.svg"
import plug_charging from "../assets/obrazki_do_car/plug_charging.svg"
import signal from "../assets/obrazki_do_car/signal.svg"
import kwadrat from "../assets/obrazki_do_car/kwadrat1.png"


const Car = () => {


  
    return ( <div className="car_screen_main"> <Navbar id={1}/>
      <Topbar />
    <div className="car_screen">


      <div id="kontener">




        <div id="kwadrat_1">
          <label id="napis_na_gorze" class="napisy_dla_kwadrat_1"> Otwarta maska samochodu </label>
            <div  id="0" >
                  <img class="wielki_obraz"
                  src={kwadrat}
                  />
              </div>
        </div>


        <div id="kwadrat_2">
            <div class="ikona" id="1" >
                <img class="obrazy"
                src={battery}
                />
                
              <label class="napisy_dla_kwadrat_2"> 24% </label>
            </div>



            <div class="ikona" id="2" >
                <img class="obrazy"
                src={leaf}
                />
              <label class="napisy_dla_kwadrat_2"> 12 kWh/100 km </label>

            </div>

            <div style = {{clear: "both"}}></div>

            <div class="ikona" id="3" >
                <img class="obrazy"
                src={signal}
                />
                <label class="napisy_dla_kwadrat_2"><br /> 5G Play </label>

            </div>
            <div class="ikona" id="4" >
                <img class="obrazy"
                src={plug_charging}
                />
                <label class="napisy_dla_kwadrat_2"> <br />262 km </label>

            </div>



        </div>

      </div>

</div> 
    </div> );
}
 
export default Car;