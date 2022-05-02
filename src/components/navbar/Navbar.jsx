import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import {LogoBlack} from '../../assets';
import './navbar.css';



const Menu = () => {
  return (
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#about-us">About Us</a></p>
      <p><a href="#contact-us">Contact Us</a></p>
      <p><a href="#live-stream">Live Stream</a></p>
      <p><a href="#give">Give</a></p>
      <p><a href="#more">More</a></p>
    </>
  )
}


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='me__navbar'>
      <div className='me__navbar-links'>
        <div className='me__navbar-links_logo'>
          <img src={LogoBlack} alt='logo' />
        </div>
        <div className='me__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='me__navbar-sign'>
          <button type='button'>Sign in</button>
      </div>
      <div className='me__navbar-menu'>
        {
          toggleMenu ? 
            <RiCloseLine
              className='me__navbar-menu-icon'  
            onClick={() => setToggleMenu(false)}
            /> : 
            <RiMenu3Line 
            className='me__navbar-menu-icon' 
            onClick={() => setToggleMenu(true)}
             />
        }
        {
          toggleMenu && (
            <div className='me__navbar-menu_container scale-up-center'>
              <div className='me__navbar-menu_container-links'>
                <Menu />
                <div className='me__navbar-menu_container-links-sign'>
                    <button type='button'>Sign in</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar