import React, { Component } from 'react'
import './ContactMe.css'
import { Link } from 'react-scroll';

export default class ContactMe extends Component {
    render() {
        return (
            <div className="ContactMe" id="ContactMe">
                <div className="subHeadingSet">
                <h1 className="subHeadText">Contact Me</h1>
                </div>

                <div className="mainContact">
                    <div>
                    <h1 className="statement">You Can Connect With Me Via Any Options Below</h1>
                    </div>
                    
                    <div className="email">
                        <div className="oneLine">
                            <i class="fas fa-envelope"></i>
                            <h2>bhungalia.h@northeastern.edu</h2>
                        </div>

                        <div className="oneLine">
                            <i class="fas fa-phone-alt"></i>
                            <h2>(206)- 484- 7164</h2>
                        </div>

                        <div className="oneLine">
                            <i class="fab fa-linkedin"></i>
                            <h2><a href="https://www.linkedin.com/in/heni-bhungalia/">Linkedin</a></h2>
                    </div>

                        <div className="oneLine">
                            <i class="fab fa-github"></i>
                            <h2><a href="https://github.com/heniheni">Github</a></h2>
                        </div>
                    </div>
                   
                    
                   
                </div>
                
            
            </div>
        )
    }
}
