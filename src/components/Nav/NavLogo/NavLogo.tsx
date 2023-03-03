import React from 'react';
import { Link } from 'react-router-dom';
import s from './NavLogo.module.scss';

const NavLogo = () => {
  return (
    <Link to="/" className={s.logo}>
      <img
        src="./img/NavPage/logo/Solo.png"
        alt="logo"
        className={s.logo__img}
      />
    </Link>
  );
};

export default NavLogo;
