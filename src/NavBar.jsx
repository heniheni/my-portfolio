import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';


const Nav = styled.nav`
  // background-color: #192a56;
  // background-color:#487eb0;
  //background: #acb6e5;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #b9d4db, #e9765b);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(90deg , #b9d4db, #e9765b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
// background-color:#e9765b;
background-color:#F08E80;
z-index:9;
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