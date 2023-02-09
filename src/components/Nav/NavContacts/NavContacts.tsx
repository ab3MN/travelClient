import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavContacts.scss';

const navAuth = [
  { to: '/login', name: 'Log In', id: 3 },
  { to: '/signup', name: 'Sign Up', id: 4 },
];

const NavContacts = () => {
  return (
    <ul className='nav__contact'>
      {' '}
      <li className='nav__contact--item' key={1}>
        <a
          href='/'
          className='nav__contact--link'
          target='_blank'
          rel='noreferrer'>
          {' '}
          contact@travelerwp.com{' '}
        </a>
      </li>
      <li className='nav__contact--item' key={2}>
        <a
          href='/'
          className='nav__contact--link nav__phone'
          target='_blank'
          rel='noreferrer'>
          {' '}
          +12 43223354{' '}
        </a>
      </li>
      <div className='nav__contact--hr'></div>
      {navAuth.map((el) => (
        <li key={el.id} className='nav__contact--item'>
          <NavLink to={el.to} className='nav__contact--link nav__auth'>
            {el.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavContacts;
