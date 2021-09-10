import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import abstract from './abstract.jpg';

const Nav = styled.nav`

  background-color:#e7edee;
  z-index:9;
  font-size:24px;
  color: white;
  position:fixed;
  top:0;
  left:0;
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: center;
  align-items:center;
  .logo {
    padding: 15px 0;
  }
`
const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar