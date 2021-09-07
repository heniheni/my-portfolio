import React, { Component } from 'react'
import './Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <div className="Projects" id="Projects">
                <div className="subHeadingSet">
                <h1 className="subHeadText1">Projects</h1>
                </div>
                

                <div className="timeline">
                    <div className="container left">
                        <div className="content">
                            <h4 className="styleYear">August 2021- August 2021</h4>
                            <a href="https://youtu.be/AVnCnDNPDiM"><p className="styleProjectTitles">Viral Simulation Using Genetic Algorithm</p></a>
                            <ul>
                                <li>Performed simulation of virus generations. Evolution shows infected, recovered, vaccinated, died, delta variant and generations in Java</li>
                                <li>Using JavaFX showed graph for infected, recovered, vaccinated, died individuals, generations and delta variant</li>
                            </ul>
                            {/* <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, 
                                vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, 
                                habeo iusto primis ea eam.</p> */}
                        </div>
                    </div>
                    <div className="container right">
                        <div className="content">
                            <h4 className="styleYear">March 2021- April 2021</h4>
                            <a href="https://youtu.be/jwJUQb3-c4Q"><p className="styleProjectTitles">Cricket League Website</p></a>
                            <ul>
                                <li>Built user flow, wireframes and completed website using HTML, CSS, Javascript & React</li>
                                <li>Created a website with a focus on user accessibility, website is used to see latest news, team details which is fetched from JSON response, user can see points table, read news, view team details</li>
                            </ul>
                            {/* <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, 
                                vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, 
                                habeo iusto primis ea eam.</p> */}
                        </div>
                    </div>
                    <div className="container left">
                        <div className="content">
                            <h4 className="styleYear">August 2017- May 2018</h4>
                            <a href="https://youtu.be/yHgq97-0gXk"><p className="styleProjectTitles">Hand Gesture Based Digital Display</p></a>
                            <ul>
                                <li>Led project, completed using various platforms Unity3D, Raspberry Pi, and Asp.net</li>
                                <li>Configured Digital Display, User can access by I-card authentication and perform various tasks by hand gestures and voice commands</li>
                            </ul>
                            {/* <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, 
                                vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, 
                                habeo iusto primis ea eam.</p> */}
                        </div>
                    </div>
                    <div className="container right">
                        <div className="content">
                            <h4 className="styleYear">January 2016- July 2017</h4>
                            <a href="https://youtu.be/-wBlUBqwyAk"><p className="styleProjectTitles">Voice Based Email System</p></a>
                            <ul>
                                <li>Developed mobile application in Android Studio, utilized SMTP service to send a real-time email</li>
                                <li>Application takes user input as a voice command and send email to receipent  </li>
                            </ul>
                            {/* <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, 
                                vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, 
                                habeo iusto primis ea eam.</p> */}
                        </div>
                    </div>
                    <div className="container left">
                        <div className="content">
                            <h4 className="styleYear">August 2014- May 2015</h4>
                            <p className="styleProjectTitles">Restaurant Table Order management System</p>
                            <ul>
                                <li>Developed mobile application useful for any restaurant/ cafe</li>
                                <li>Application takes pre-order before customer visits and reserves table</li>
                            </ul>
                            {/* <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, 
                                vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, 
                                habeo iusto primis ea eam.</p> */}
                        </div>
                    </div>
                    {/* <div class="container right">
                        <div class="content">
                            <h2>2007</h2>
                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                        </div>
                    </div> */}
                </div>
            </div>


        )
    }
}
