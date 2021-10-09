import React, { Component } from 'react'
import './AboutMe.css'
import vs from './vs.png'
import sublime from './sublime.png'
import wire from './wire.png'
import prototype from './prototype.png'
import code from './code.png'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import Emoji from 'a11y-react-emoji'

export default class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe" id="AboutMe">
                <Fade bottom>
                    <div className="subHeadingSet">
                        <h1 className="about_subHeadText">About Me</h1>
                    </div>
                </Fade>

                <div >
                    <div className="contentContainer">
                        <div className="intro_about">
                            <h2 className="contentAbout"><Emoji symbol="👋" label="Waving Hand" />Hi Again, </h2> <h3 style={{ color: "#e9765b", fontSize: "24px" }}>UI-UX Web Developer</h3><h4 className="subcontent">Northeastern University</h4>
                        </div>

                        <p className="typeWriter">
                        I am Heni Bhungalia, promising future developer residing at Seattle,WA.Born and brought up in India.
                        Graduate student of Northeastern University. Excellent with Time management and Leadership.<br/><br/>
                        I love designing and developing application which catch user attention, 
                        currently enhancing my knowledge by learning more about React and diving deep into 
                        how to make website accessible and user friendly.<br/><br/> 
                        I am excited to join a company where I can refine my skills.
                        </p>

                        <h1 className="setHobby">I Love, </h1>
                        <div className="favContainer">

                            <div >
                                <a className="loveStyle" href="https://heni947644.invisionapp.com/freehand/INFO6150ProjectWireframe-6b6TbEPwa" target="_blank">
                                <figure>
                                    <img className="fav1" src={wire} alt="wireframePhoto" />
                                    <figcaption className="fav1_cap">Wireframing</figcaption>
                                </figure>
                                </a>
                                
                            </div>

                            <div>
                                <a className="loveStyle" href="https://www.figma.com/file/OfVddtmzzGcsge03vkORNu/Untitled?node-id=33%3A7" target="_blank">
                                <figure>
                                    <img className="fav2" src={prototype} alt="prototypePhoto" />
                                    <figcaption className="fav2_cap">Prototyping</figcaption>
                                </figure>
                                </a>
                                
                                
                                
                            </div>

                            <div>
                                <a className="loveStyle" href="https://github.com/heniheni?tab=repositories" target="_blank">
                                <figure>
                                    <img className="fav3" src={code} alt="codePhoto" />
                                    <figcaption className="fav3_cap">Developing</figcaption>
                                </figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sets">
                    <ul className="list">
                        {/* <li style={{ color: "#e9765b", fontStyle: "italic" }} className="items">Skill Sets</li>
                        <li className="items"><i class="fab fa-html5 fa-lg"> HTML</i></li>
                        <li className="items"><i class="fab fa-css3-alt fa-lg"> CSS</i></li>
                        <li className="items"><i class="fab fa-js fa-lg"> JavaScript</i></li>
                        <li className="items"><i class="fab fa-react fa-lg"> React</i></li>
                        <li className="items"><i class="fab fa-node-js fa-lg"> Node.Js</i></li>
                        <li className="items"><i class="fab fa-java fa-lg"> Java</i></li>
                        <li className="items1"><i class="fas fa-database fa-lg heni" > MySql</i></li> */}

                        <li style={{ color: "#e9765b", fontStyle: "italic", fontWeight:"bold" }} className="items">Skill Sets</li>
                        <li className="items"> HTML</li>
                        <li className="items">CSS</li>
                        <li className="items"> JavaScript</li>
                        <li className="items"> React</li>
                        <li className="items"> Node.Js</li>
                        <li className="items"> Java</li>
                        <li className="items"> MySql</li>
                        <li className="items"> User Interface(UI) Designing</li>
                        <li className="items"> User Experience(UX) Developing</li>

                    </ul>

                    <ul className="list">
                        {/* <li style={{ color: "#e9765b", fontStyle: "italic" }} className="items">Tool Sets</li>
                        <li className="items"><i class="fab fa-invision fa-lg"> inVision</i></li>
                        <li className="items"><i class="fab fa-windows fa-lg"> Windows</i></li>
                        <li className="items"><i class="fab fa-github fa-lg"> Github</i></li>
                        <li className="items"><i class="fab fa-figma fa-lg"> Figma</i></li>
                        <li className="items items1"><i class="fas fa-code fa-lg heni"> IntelliJ</i></li>
                        <li style={{ fontSize: "25px" }} className="items"><img className="setVS" src={vs} alt="languagelogo" /> Visual Studio Code</li>
                        <li style={{ fontSize: "25px" }} className="items"><img className="setVS" src={sublime} alt="languagelogo" /> Sublime Text</li> */}
                        <li style={{ color: "#e9765b", fontStyle: "italic", fontWeight:"bold" }} className="items">Tool Sets</li>
                        <li className="items"> inVision</li>
                        <li className="items"> Windows</li>
                        <li className="items"> Github</li>
                        <li className="items"> Figma</li>
                        <li className="items "> IntelliJ</li>
                        <li className="items"> Visual Studio Code</li>
                        <li className="items"> Sublime text</li>
                        

                    </ul>
                </div>
            </div>
        )
    }
}
