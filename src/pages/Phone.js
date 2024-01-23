import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { ReactComponent as Arrow } from "../assets/Arrow.svg";
import "../index.css";
import "../css/Phone.css";
import Keyboard from "./phone/Keyboard"
import Call from "./phone/Call"
import Contacts from "./phone/Contacts"
import Latest from "./phone/Latest"

const Phone = () => {
  const [activeComponent, setActiveComponent] = useState("component2");
  const [isCalling, setIsCalling] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("")
  
  const handleLiClick = (component) => {
    setActiveComponent(component);
  }; 

  useEffect(() => {
    if(isCalling===false)
    handleLiClick('component1');
  else{
    handleLiClick('component0');
  }


  },[isCalling])
  const Component0 = () => (
  <Call phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} isCalling={isCalling} setIsCalling={setIsCalling}/>

  );


const Component1 = () => (
   <Keyboard phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} isCalling={isCalling} setIsCalling={setIsCalling} />
  );

  const Component2 = () => (
    <Latest setPhoneNumber={setPhoneNumber} setActiveComponent={setActiveComponent} />
  );
  const Component3 = () => (
    <Contacts setPhoneNumber={setPhoneNumber} setActiveComponent={setActiveComponent} />
  );
  return (
    <div className="phone_screen">
      <Navbar id={5} />
      <Topbar />
     
      
      {activeComponent === "component0" && <Component0 />}
      {activeComponent === "component1" && <Component1 />}
      {activeComponent === "component2" && <Component2 />}
      {activeComponent === "component3" && <Component3 />}

      
      

      <div className="choose_bar">
      <div onClick={() => {handleLiClick("component1");}}
           className={`choose_bar_button ${activeComponent === "component1" ? "active" : ""}`}>
        <p>KLAWIATURA</p>
      </div>
      <div onClick={() => {handleLiClick("component2");}}
           className={`choose_bar_button ${activeComponent === "component2" ? "active" : ""}`}>
        <p>OSTATNIE</p>
      </div>
      <div onClick={() => {handleLiClick("component3");}}
           className={`choose_bar_button ${activeComponent === "component3" ? "active" : ""}`}>
        <p>KONTAKTY</p>
      </div>
    </div>
    </div>
  );
};

export default Phone;
