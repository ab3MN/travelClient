import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavContacts.module.scss';

const navAuth = [
  { to: '/login', name: 'Log In', id: 3 },
  { to: '/signup', name: 'Sign Up', id: 4 },
];

const NavContacts = () => {
  return (
    <ul className={s.contact}>
      {' '}
      <li className={s.contact__item} key={1}>
        <a
          href="/"
          className={s.contact__link}
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          contact@travelerwp.com{' '}
        </a>
      </li>
      <li className={s.contact__item} key={2}>
        <a
          href="/"
          className={`${s.contact__link} ${s.phone}`}
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          +12 43223354{' '}
        </a>
      </li>
      <div className={s.contact__hr}></div>
      {navAuth.map(el => (
        <li key={el.id} className={s.contact__item}>
          <NavLink to={el.to} className={`${s.contact__link} ${s.auth}`}>
            {el.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavContacts;
