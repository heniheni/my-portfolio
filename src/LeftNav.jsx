import React from 'react';
import styled from 'styled-components';
import './LeftNav.css';
import {Link} from 'react-scroll';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #e9765b;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: -24px;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

 
const LeftNav = ({ open }) => {
  return (
    <Ul className="styleUL" open={open}>
        
            <li className="listitems"><Link activeClass="active" to="home" spy={true} smooth={true}></Link>Home</li>
            <li className="listitems"><Link to="aboutme" spy={true} smooth={true}></Link>About Me</li>
            <li className="listitems"><Link to="academic" spy={true} smooth={true}></Link>Academic</li>
            <li className="listitems"><Link to="projects" spy={true} smooth={true}></Link>Projects</li>
            <li className="listitems"><Link to="resume" spy={true} smooth={true}></Link>Resume</li>
            <li className="listitems"><Link to="contactme" spy={true} smooth={true}></Link>Contact Me</li>
        
      
    </Ul>
  )
}

export default LeftNav