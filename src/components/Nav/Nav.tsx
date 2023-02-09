import React from 'react';
import NavList from './NavList/NavList';
import NavLogo from './NavLogo/NavLogo';
import NavContacts from './NavContacts/NavContacts';

import './Nav.scss';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav__box'>
        <NavLogo />
        <NavList />
        <NavContacts />
      </div>
    </nav>
  );
};

export default Nav;
