import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  background-color: #E7717D;
  font-size:24px;
  color: white;
position:fixed;
top:0;
left:0;
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
//    padding: 0 20px;
  display: flex;
  justify-content: flex-start;
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