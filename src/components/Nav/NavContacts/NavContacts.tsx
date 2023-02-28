import React from 'react';
import s from './NavContacts.module.scss';
import { useAppSelector } from '../../../hooks/reduxHooks';
import NavAuthButtons from './NavAuthButtons/NavAuthButtons';
import NavAuthInfo from './NavAuthInfo/NavAuthInfo';

const NavContacts = () => {
  const { auth, user } = useAppSelector(s => s.user);
  return (
    <ul className={s.contact}>
      <li className={s.contact__item} key={1}>
        <a
          href="/"
          className={s.contact__link}
          target="_blank"
          rel="noreferrer"
        >
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
          +12 43223354{' '}
        </a>
      </li>
      <div className={s.contact__hr}></div>
      {auth ? (
        <NavAuthInfo avatar={user?.avatar} name={user?.email} />
      ) : (
        <NavAuthButtons />
      )}
    </ul>
  );
};

export default NavContacts;
