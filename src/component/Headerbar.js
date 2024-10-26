import React,{useState} from "react";
import "./Headerbar.css";
import headLogo from "../images/chef.png";

const Headerbar=()=>{
    
const [menuBar,setMenuBar]=useState('');
// let menuBar=false;
const toggleMenu=()=>{
        setMenuBar((menuBar)=>!menuBar);


}
  return (
    <div className="headBar">
      <img className="food-logo" src={headLogo} alt="Logo"></img>
      <h2 className="Brand-name">Cook-it </h2>
      {}
      <ul className={menuBar? "tools menuOn" : "tools menuOff"}>
      {/* <ul className={`tools ${menuBar? 'menuOn'  : "tools menuOff"}`}> */}

        <li><a href="#" >Home</a></li>
        <li><a href="#"> Menu</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>

      <span onClick={toggleMenu} class="material-symbols-outlined">menu</span>
    </div>
  );
};

export default Headerbar;
