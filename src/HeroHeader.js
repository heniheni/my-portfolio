import React from 'react'
import userImage from './Heni_Bhungalia.jpeg'
import './HeroHeader.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

export default function HeroHeader() {
    return (
        <div className="main">
            
        
        <div className="flexContainer">
        
        <div className="flexItem1">
             <h2>Hi,<br/>I am Heni Bhungalia</h2> <h3 style={{color: "#e9765b"}}>UI-UX Web Developer</h3><h4>Northeastern University</h4>
            <p className="heroContent">
                Creative Front-End Web Developer with experience building a responsive website, 
                utilizing semantic HTML. Passoniate about learning usability, accessibility, 
                and learning new technology. 
            </p>

            <button className="btnReadMore">Read More</button>
        </div>
         <br/>
        

         <div className="flexItem2"> <img className="setImage" src={userImage}/></div>
       </div>
       </div>
    );
}
