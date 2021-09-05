import React, { Component } from 'react'
import './Academic.css'

export default class Academic extends Component {
    render() {
        return (

            <div className="Academic" id="Academic">
                  <div className="subHeadingSet">
                        <h1 className="subHeadText">Academic</h1>
                    </div>

                <div className="frame"> 
                    <div className="main">
                        <i class="fas fa-user-graduate"></i>
                        <h3 className="center">Northeastern University, Seattle, WA <br/> Master of Science in Information Systems</h3>
                        <h4 className="right">January 2021 - Expected December 2022</h4>   
                    </div>
                </div>

                <div className="frame"> 
                    <div className="main">
                        <i class="fas fa-university"></i>
                        <h3 className="center">Gujarat Technological University, Surat, India <br/> Bachelor's in Computer Engineering</h3>
                        <h4 className="right">August 2015 - May 2018</h4>   
                    </div>
                </div>

                <div className="frame"> 
                    <div className="main">
                        <i class="fas fa-book-reader"></i>
                        <h3 className="center">Laurentian University, Sudbury, Canada <br/> International Experience Program</h3>
                        <h4 className="right">June 2017 - July 2017</h4>   
                    </div>
                </div>

                <div className="frame"> 
                    <div className="main">
                        <i class="fas fa-school"></i>
                        <h3 className="center">Gujarat Technological University Surat, India <br/> Diploma in Computer Engineering</h3>
                        <h4 className="right">August 2012 - May 2015</h4>   
                    </div>
                </div>
            </div>

        )
    }
}
