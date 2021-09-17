import React, { Component } from 'react'
import './ContactMe.css'
import Fade from 'react-reveal/Fade';


export default class ContactMe extends Component {
    render() {
        return (
            <div className="ContactMe" id="ContactMe">
                <Fade bottom>
                <div className="subHeadingSetContactMe">
                    <h1 className="contact_subHeadText">Contact Me</h1>
                </div>
                </Fade>
                

                <div className="mainContact">
                    <div>
                        <h1 className="statement">You Can Connect With Me Via</h1>
                    </div>

                    <div className="email">
                        <div className="oneLine">
                            <i class="fas fa-envelope fa-2x"></i>
                            <h2 className="subContent">bhungalia.h@northeastern.edu</h2>
                        </div>

                        <div className="oneLine">
                            <i class="fas fa-phone-alt fa-2x"></i>
                            <h2 className="subContent">(206)- 484- 7164</h2>
                        </div>

                        <div className="oneLine">
                            <i class="fab fa-linkedin fa-2x"></i>
                            <h2 className="subContent"><a href="https://www.linkedin.com/in/heni-bhungalia/">Linkedin</a></h2>
                        </div>

                        <div className="oneLine">
                            <i class="fab fa-github fa-2x"></i>
                            <h2 className="subContent"><a href="https://github.com/heniheni">Github</a></h2>
                        </div>
                    </div>



                </div>


            </div>
        )
    }
}
