import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavList.scss';

const navPath = [
  { to: '/', name: 'home', id: 1 },
  { to: '/destination', name: 'destination', id: 2 },
  { to: '/listing', name: 'listing', id: 3 },
  { to: '/pages', name: 'pages', id: 4 },
  { to: '/contact', name: 'contact', id: 5 },
];

const NavList = () => {
  return (
    <ul className="nav__list">
      {navPath.map(el => (
        <li key={el.id} className="nav__list--item">
          <NavLink
            to={el.to}
            className={({ isActive }) =>
              isActive ? 'nav__list--link nav__active' : 'nav__list--link'
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
