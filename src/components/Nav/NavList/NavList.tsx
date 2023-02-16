import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavList.module.scss';

const navPath = [
  { to: '/', name: 'home', id: 1 },
  { to: '/destination', name: 'destination', id: 2 },
  { to: '/listing', name: 'listing', id: 3 },
  { to: '/pages', name: 'pages', id: 4 },
  { to: '/contact', name: 'contact', id: 5 },
];

const NavList = () => {
  return (
    <ul className={s.list}>
      {navPath.map(el => (
        <li key={el.id} className={s.list__item}>
          <NavLink
            to={el.to}
            className={({ isActive }) =>
              isActive ? `${s.list__link} ${s.active} ` : `${s.list__link}`
            }
          >
            {el.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
