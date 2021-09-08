import React, { Component } from 'react'
import './AboutMe.css'
import vs from './vs.png'
import sublime from './sublime.png'
import wireframe from './wireframe.png'


import Emoji from 'a11y-react-emoji'

export default class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe" id="AboutMe">
                <div className="subHeadingSet">
                    <h1 className="about_subHeadText">About Me</h1>
                </div>

                <div >
                    <div className="contentContainer">
                        <div className="intro_about">
                            <h2 className="contentAbout"><Emoji symbol="👋" label="Waving Hand" />Hi Again, </h2> <h3 style={{ color: "#e9765b", fontSize: "24px" }}>UI-UX Web Developer</h3><h4 className="subcontent">Northeastern University</h4>
                        </div>

                        <p className="detailedText">
                            Creative Front-End Web Developer with experience building a responsive website,
                            utilizing semantic HTML. Passoniate about learning usability, accessibility,
                            and learning new technology. Creative Front-End Web Developer with experience building a responsive website,
                            utilizing semantic HTML. Passoniate about learning usability, accessibility,
                            and learning new technology.Creative Front-End Web Developer with experience building a responsive website,
                            utilizing semantic HTML. Passoniate about learning usability, accessibility,
                            and learning new technology.
                        </p>
                        <h1 className="setHobby">I Love, </h1>
                        <div className="favContainer">
                           
                            <div>
                                <figure>
                                    <img className="fav1" src={wireframe} alt="userprofileimage" />
                                    <figcaption className="fav1_cap">Wireframing</figcaption>
                                </figure>
                            </div>

                            <div>
                                <figure>
                                    <img className="fav2" src={wireframe} alt="userprofileimage" />
                                    <figcaption className="fav2_cap">Wireframing</figcaption>
                                </figure>
                            </div>

                            <div>
                                <figure>
                                    <img className="fav3" src={wireframe} alt="userprofileimage" />
                                    <figcaption className="fav3_cap">Wireframing</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sets">
                    <ul className="list">
                        <li style={{ color: "#e9765b", fontStyle:"italic" }} className="items">Skill Sets</li>
                        <li className="items"><i class="fab fa-html5 fa-lg"> HTML</i></li>
                        <li className="items"><i class="fab fa-css3-alt fa-lg"> CSS</i></li>
                        <li className="items"><i class="fab fa-js fa-lg"> JavaScript</i></li>
                        <li className="items"><i class="fab fa-react fa-lg"> React</i></li>
                        <li className="items"><i class="fab fa-node-js fa-lg"> Node.Js</i></li>
                        <li className="items"><i class="fab fa-java fa-lg"> Java</i></li>
                        <li className="items1"><i class="fas fa-database fa-lg" > MySql</i></li>
                        
                    </ul>

                    <ul className="list">
                        <li style={{ color: "#e9765b",fontStyle:"italic"}} className="items">Tool Sets</li>
                        <li className="items"><i class="fab fa-invision fa-lg"> inVision</i></li>
                        <li className="items"><i class="fab fa-windows fa-lg"> Windows</i></li>
                        <li className="items"><i class="fab fa-github fa-lg"> Github</i></li>
                        <li className="items"><i class="fab fa-figma fa-lg"> Figma</i></li>
                        <li className="items items1"><i class="fas fa-code fa-lg"> IntelliJ</i></li>
                        <li style={{ fontSize:"25px"}}className="items"><img className="setVS" src={vs} alt="languagelogo"/> Visual Studio Code</li>
                        <li style={{ fontSize:"25px"}}className="items"><img className="setVS" src={sublime} alt="languagelogo"/> Sublime Text</li>
                        
                    </ul>
                </div>
            </div>
        )
    }
}
