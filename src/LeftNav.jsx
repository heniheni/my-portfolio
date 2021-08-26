import React from 'react';
import styled from 'styled-components';
import './LeftNav.css';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
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
        
            <li className="listitems">Home</li>
            <li className="listitems">About Me</li>
            <li className="listitems">Academic</li>
            <li className="listitems">Projects</li>
            <li className="listitems">Resume</li>
            <li className="listitems">Contact Me</li>
        
      
    </Ul>
  )
}

export default LeftNav