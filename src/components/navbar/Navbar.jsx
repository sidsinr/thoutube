import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

import SearchBar from '../searchbar/SearchBar';
import  logo  from '../../logo.png';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Navbar = ({ isDark, setIsDark, setSelectedCategory}) => {
  return (
    <div className='navbar'>
      <Link to='/'>
        <div className='navbar-logo' onClick={()=> setSelectedCategory('Home')}>
          <img src={logo} alt="logo" className="navbar-logo-img" />
          <h1 className='navbar-logo-title'>ThouTube</h1>
        </div>
      </Link>
      <SearchBar />
      <div className='navbar-theme-icon' onClick={()=>(setIsDark(!isDark))}>
        {isDark ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
      </div>
    </div>
  )
}

export default Navbar;