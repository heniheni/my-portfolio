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

        
            <li className="listitems"><Link activeClass="active" to="HeroHeader" spy={true} smooth={true} offset={0} duration={500}>Home</Link></li>
            <li className="listitems"><Link activeClass="active" to="AboutMe" spy={true} smooth={true} offset={0} duration={500}>About Me</Link></li>
            <li className="listitems"><Link activeClass="active" to="Academic" spy={true} smooth={true} offset={0} duration={500}>Academic</Link></li>
            <li className="listitems"><Link activeClass="active" to="Projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link></li>
            <li className="listitems"><Link activeClass="active" to="Resume" spy={true} smooth={true} offset={0} duration={500}>Resume</Link></li>
            <li className="listitems"><Link activeClass="active" to="ContactMe" spy={true} smooth={true} offset={0} duration={500}>Contact Me</Link></li>
        
      
    </Ul>
  )
}

export default LeftNav