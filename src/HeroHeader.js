import React from 'react'
import userImage from './Heni_Bhungalia.jpeg'
import './HeroHeader.css'

import { Link } from 'react-scroll';


export default function HeroHeader() {

    return (
        <div className="HeroHeader" id="HeroHeader">

            <div className="flexContainer">
                <div className="flexItem1">
                    <div className="intro">
                        <h2>Hi,<br />I am Heni Bhungalia</h2> <h3 style={{ color: "#f08e80" }}>UI-UX Web Developer</h3><h4>Northeastern University</h4>
                    </div>

                    <p className="heroContent">
                        Creative Front-End Web Developer with experience building a responsive website,
                        utilizing semantic HTML. Passoniate about learning usability, accessibility,
                        and learning new technology.
                    </p>
                    <Link to="AboutMe"><button className="btnReadMore">Read More</button></Link>
                </div>
                <br />
                <div className="flexItem2">
                    <img className="setImage" src={userImage} alt="userprofileimage" />
                </div>
            </div>
        </div>
    );
}
