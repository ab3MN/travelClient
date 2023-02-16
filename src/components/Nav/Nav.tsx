import React from 'react';
import NavList from './NavList/NavList';
import NavLogo from './NavLogo/NavLogo';
import NavContacts from './NavContacts/NavContacts';

import s from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.nav__box}>
        <NavLogo />
        <NavList />
        <NavContacts />
      </div>
    </nav>
  );
};

export default Nav;
