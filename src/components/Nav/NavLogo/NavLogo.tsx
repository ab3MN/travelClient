import React from 'react';
import { Link } from 'react-router-dom';
import './NavLogo.scss';

const NavLogo = () => {
  return (
    <Link to='/' className='nav__logo'>
      <img src='./img/logo/Solo.png' alt='logo' className='nav__logo--img' />
    </Link>
  );
};

export default NavLogo;
