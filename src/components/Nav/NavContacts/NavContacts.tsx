import React from 'react';
import authContext from '../../AppBar.contex';
import s from './NavContacts.module.scss';

const NavContacts = () => {
  const { setLogInOpen, setSignUpOpen } = React.useContext(authContext);
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
      <li className={s.contact__item} key={3}>
        <button
          type="button"
          className={`${s.contact__link} ${s.auth}`}
          onClick={() => setLogInOpen(true)}
        >
          Login
        </button>{' '}
      </li>
      <li className={s.contact__item} key={4}>
        <button
          type="button"
          className={`${s.contact__link} ${s.auth}`}
          onClick={() => setSignUpOpen(true)}
        >
          Sign Up
        </button>
      </li>
    </ul>
  );
};

export default NavContacts;
