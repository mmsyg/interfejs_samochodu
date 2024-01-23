import React from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import '../index.css';
import '../css/Indicators.css';



import nowyswiat from "../assets/rnswiat.jpeg";

import engine_temperature from "../assets/obrazki_do_indicators/1_engine_temperature_warning_light.svg"
import car_tire_pressure from "../assets/obrazki_do_indicators/2_car_tire_pressure.svg"
import oil_pressure from "../assets/obrazki_do_indicators/3_oil_pressure_warning.svg"
import traction_control from "../assets/obrazki_do_indicators/4_traction_control.svg"
import engine_warning from "../assets/obrazki_do_indicators/5_engine_warning.svg"
import Anti_lock from "../assets/obrazki_do_indicators/6_Anti_lock_brake_warning.svg"
import rear_window from "../assets/obrazki_do_indicators/7_rear_window_defrost_light.svg"
import battery from "../assets/obrazki_do_indicators/8_battery_alert.svg"
import fuel_indicator from "../assets/obrazki_do_indicators/9_fuel_indicator_symbol.svg"
import seatbelt from "../assets/obrazki_do_indicators/10_seatbelt_reminder_light.svg"
import airbag from "../assets/obrazki_do_indicators/11_airbag_indicator.svg"
import fog_lamp from "../assets/obrazki_do_indicators/12_fog_lamp_indicator.svg"
import air_suspension from "../assets/obrazki_do_indicators/13_air_suspension_warning.svg"
import lane from "../assets/obrazki_do_indicators/14_lane_departure_warning.svg"
import washer_fluid from "../assets/obrazki_do_indicators/15_washer_fluid_indicator.svg"
import cruise_control from "../assets/obrazki_do_indicators/16_cruise_control_indicator.svg"
import lamp_out from "../assets/obrazki_do_indicators/17_lamp_out_warning.svg"
import brake_pad from "../assets/obrazki_do_indicators/18_brake_pad_warning.svg"




const Indicators = () => {




    const zmienNapis1 = () => {
        // Pobierz element label o id "napis_na_gorze"
        var labelElement = document.getElementById("napis_na_gorze");
        // Zmień tekst w labelu
        labelElement.innerText = "Sygnalizacja ostrzeżenia przed wysoką temperaturą silnika";
    };
    const zmienNapis2 = () => {
        // Pobierz element label o id "napis_na_gorze"
        var labelElement = document.getElementById("napis_na_gorze");
        // Zmień tekst w labelu
        labelElement.innerText = "Sygnalizator ciśnienia w oponach samochodu";
    };
    const zmienNapis3 = () => {
        // Pobierz element label o id "napis_na_gorze"
        var labelElement = document.getElementById("napis_na_gorze");
        // Zmień tekst w labelu
        labelElement.innerText = "Ostrzeżenie o niskim ciśnieniu oleju";
    };
    const zmienNapis4 = () => {
        // Pobierz element label o id "napis_na_gorze"
        var labelElement = document.getElementById("napis_na_gorze");
        // Zmień tekst w labelu
        labelElement.innerText = "Sygnalizator kontroli trakcji";
    };
    const zmienNapis5 = () => {
        // Pobierz element label o id "napis_na_gorze"
        var labelElement = document.getElementById("napis_na_gorze");
        // Zmień tekst w labelu
        labelElement.innerText = "Ostrzeżenie silnika";
    };



    const zmienNapis6 = () => {
        // Pobierz element label o id "napis_na_gorze"
        var labelElement = document.getElementById("napis_na_gorze");
        // Zmień tekst w labelu
        labelElement.innerText = "Ostrzeżenie przed blokadą układu hamulcowego (ABS)";
    };

    const zmienNapis7 = () => {
        // Pobierz element label o id "napis_na_gorze"
        var labelElement = document.getElementById("napis_na_gorze");
        // Zmień tekst w labelu
        labelElement.innerText = "Sygnalizacja rozmrażania tylnego okna";
    };




    const zmienNapis8 = () => {
        // Pobierz element label o id "napis_na_gorze"
        var labelElement = document.getElementById("napis_na_gorze");
        // Zmień tekst w labelu
        labelElement.innerText = "Ostrzeżenie o stanie naładowania baterii";
    };
    const zmienNapis9 = () => {
        // Pobierz element label o id "napis_na_gorze"
        var labelElement = document.getElementById("napis_na_gorze");
        // Zmień tekst w labelu
        labelElement.innerText = "Sygnalizator poziomu paliwa";
    };
    const zmienNapis10 = () => {
        // Pobierz element label o id "napis_na_gorze"
        var labelElement = document.getElementById("napis_na_gorze");
        // Zmień tekst w labelu
        labelElement.innerText = "Sygnalizator przypominający o zapięciu pasów bezpieczeństwa";
    };
    const zmienNapis11 = () => {
        // Pobierz element label o id "napis_na_gorze"
        var labelElement = document.getElementById("napis_na_gorze");
        // Zmień tekst w labelu
        labelElement.innerText = "Sygnalizator poduszki powietrznej";
    };
    const zmienNapis12 = () => {
        // Pobierz element label o id "napis_na_gorze"
        var labelElement = document.getElementById("napis_na_gorze");
        // Zmień tekst w labelu
        labelElement.innerText = "Sygnalizator lamp przeciwmgielnych";
    };
    const zmienNapis13 = () => {
        // Pobierz element label o id "napis_na_gorze"
        var labelElement = document.getElementById("napis_na_gorze");
        // Zmień tekst w labelu
        labelElement.innerText = "Ostrzeżenie przed uszkodzeniem zawieszenia pneumatycznego";
    };
    const zmienNapis14 = () => {
        // Pobierz element label o id "napis_na_gorze"
        var labelElement = document.getElementById("napis_na_gorze");
        // Zmień tekst w labelu
        labelElement.innerText = "Ostrzeżenie przed opuszczeniem pasa ruchu";
    };
    const zmienNapis15 = () => {
        // Pobierz element label o id "napis_na_gorze"
        var labelElement = document.getElementById("napis_na_gorze");
        // Zmień tekst w labelu
        labelElement.innerText = "Sygnalizator poziomu płynu do spryskiwaczy";
    };
    const zmienNapis16 = () => {
        // Pobierz element label o id "napis_na_gorze"
        var labelElement = document.getElementById("napis_na_gorze");
        // Zmień tekst w labelu
        labelElement.innerText = "Sygnalizator aktywnego tempomatu";
    };
    const zmienNapis17 = () => {
        // Pobierz element label o id "napis_na_gorze"
        var labelElement = document.getElementById("napis_na_gorze");
        // Zmień tekst w labelu
        labelElement.innerText = "Sygnalizator awarii lampy";
    };
    const zmienNapis18 = () => {
        // Pobierz element label o id "napis_na_gorze"
        var labelElement = document.getElementById("napis_na_gorze");
        // Zmień tekst w labelu
        labelElement.innerText = "Sygnalizator zużycia klocków hamulcowych";
    };





    const przywrocPoprzedniNapis = () => {
        var labelElement = document.getElementById("napis_na_gorze");
        labelElement.innerText = "_"; // Przywróć poprzedni napis
        
    };

    return (
        <div className="indicators_site_main" > <Navbar id={2} />
            <Topbar />
            <div className="indicators_site">
           
    
            <div id="kontener">
            <label id="napis_na_gorze"> wskaźnik ostrzeżenia o uszkodzonej lampie </label>
                <div class="rzad_1" id="1" onClick={zmienNapis1} onMouseOut={przywrocPoprzedniNapis}>
                                        
                    <img class="obrazy"
                    src={engine_temperature}
                    />
                    
                </div>

                <div class="rzad_1" id="2" onClick={zmienNapis2} onMouseOut={przywrocPoprzedniNapis}>
                
                    
                    <img class="obrazy"
                    src={car_tire_pressure}
                    />
                    
               
                </div>
                <div class="rzad_1" id="3" onClick={zmienNapis3} onMouseOut={przywrocPoprzedniNapis}>
               
                 
                    <img class="obrazy"
                    src={oil_pressure}
                    />
                </div>
                <div class="rzad_1" id="4" onClick={zmienNapis4} onMouseOut={przywrocPoprzedniNapis}>
               
                 
                    <img class="obrazy"
                    src={traction_control}
                    />
                </div>
                <div class="rzad_1" id="5" onClick={zmienNapis5} onMouseOut={przywrocPoprzedniNapis}>
                
                 
                    <img class="obrazy"
                    src={engine_warning}
                    />
                </div>
                <div class="rzad_1" id="6" onClick={zmienNapis6} onMouseOut={przywrocPoprzedniNapis}>
                
                 
                    <img class="obrazy"
                    src={Anti_lock}
                    />
                </div>

                            <div style = {{clear: "both"}}></div>
                <div class="rzad_2" id="7" onClick={zmienNapis7} onMouseOut={przywrocPoprzedniNapis}>
                   
                 
                    <img class="obrazy"
                    src={rear_window}
                    />
                </div>
                <div class="rzad_2" id="8" onClick={zmienNapis8} onMouseOut={przywrocPoprzedniNapis}>
                
                 
                    <img class="obrazy"
                    src={battery}
                    />
                </div>
                <div class="rzad_2" id="9" onClick={zmienNapis9} onMouseOut={przywrocPoprzedniNapis}>
               
                 
                    <img class="obrazy"
                    src={fuel_indicator}
                    />
                </div>
                
                <div class="rzad_2" style={{ backgroundColor: 'rgb(228, 83, 21)' }}  id="10" onMouseOver={zmienNapis10} onMouseOut={przywrocPoprzedniNapis}>
                    <img class="obrazy" src={seatbelt} />
                    </div>
                <div class="rzad_2" id="11" onClick={zmienNapis11} onMouseOut={przywrocPoprzedniNapis}>
                
                 
                    <img class="obrazy"
                    src={airbag}
                    />
                </div>
                <div class="rzad_2" id="12" onClick={zmienNapis12} onMouseOut={przywrocPoprzedniNapis}>
                
                 
                    <img class="obrazy"
                    src={fog_lamp}
                    />
                </div>

                            <div style = {{clear: "both"}}></div>
                <div class="rzad_3" id="13" onClick={zmienNapis13} onMouseOut={przywrocPoprzedniNapis}>
               
                 
                    <img class="obrazy"
                    src={air_suspension}
                    />
                </div>
                <div class="rzad_3" id="14" onClick={zmienNapis14} onMouseOut={przywrocPoprzedniNapis}>
                
                 
                    <img class="obrazy"
                    src={lane}
                    />
                </div>
                <div class="rzad_3" id="15" onClick={zmienNapis15} onMouseOut={przywrocPoprzedniNapis}>
                
                 
                    <img class="obrazy"
                    src={washer_fluid}
                    />
                </div>
                <div class="rzad_3" id="16" onClick={zmienNapis16} onMouseOut={przywrocPoprzedniNapis}>
               
                 
                    <img class="obrazy"
                    src={cruise_control}
                    />
                </div>
                <div class="rzad_3" id="17" onClick={zmienNapis17} onMouseOut={przywrocPoprzedniNapis}>
                
                 
                    <img class="obrazy"
                    src={lamp_out}
                    />
                </div>
                
                <div class="rzad_3" id="18" onClick={zmienNapis18} onMouseOut={przywrocPoprzedniNapis}>
                
                 
                    <img class="obrazy"
                    src={brake_pad}
                    />
                </div>



            </div></div>
        </div>
    );
}

export default Indicators;