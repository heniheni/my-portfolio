import React from 'react'
import userImage from './Heni_Bhungalia.jpeg'
import './HeroHeader.css'
import TypeWriter from './TypeWriter';
import { Link } from 'react-scroll';
import Emoji from 'a11y-react-emoji';


export default function HeroHeader() {

    return (
        <div className="HeroHeader" id="HeroHeader">

            <div className="flexContainer">
                <div className="flexItem1">
                    <div className="intro">
                        <h2>Hi <Emoji symbol="👋" label="wave hand"/>,<br /><TypeWriter /></h2>   <h3 style={{ color: "#f08e80" }}>UI-UX Web Developer</h3><h4>Northeastern University</h4>
                    </div>

                   
                    <p className="heroContent">
                    Creative Front End Web Developer with experience building a responsive website, utilizing semantic HTML. 
                    <br/><br/>Passionate about learning usability, accessibility, and learning new technology. 
                    Hardworking and team player, proficient in HTML, CSS, designing wireframes, and developing prototypes.
                    </p>
                    <div className="wrap">
                    <Link to="AboutMe"><button className="button">Read More</button></Link>
                    </div>
                    
                </div>
                <br />
               
                <div className="flexItem2" >
                    <img className="setImage" src={userImage} alt="userprofileimage" />
                </div>
               
                
            </div>
        </div>
    );
}
