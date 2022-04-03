import React from 'react';
import { Nav } from './NavbarStyle';

function Navbar() {
  return (
    <>
    <Nav>
        <h1>MyWeather</h1>
        <img src={require('../../images/medium-sun.png')} alt="logo"/>
    </Nav>
    </>
  )
}
export default Navbar