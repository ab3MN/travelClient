import React from 'react';
import authContext from '../../../AppBar.contex';
import s from './NavAuthButtons.module.scss';

const NavAuthButtons = () => {
  const { setLogInOpen, setSignUpOpen } = React.useContext(authContext);

  return (
    <>
      <li className={s.item} key={3}>
        <button
          type="button"
          className={`${s.link} ${s.auth}`}
          onClick={() => setLogInOpen(true)}
        >
          Login
        </button>{' '}
      </li>
      <li className={s.item} key={4}>
        <button
          type="button"
          className={`${s.link} ${s.auth}`}
          onClick={() => setSignUpOpen(true)}
        >
          Sign Up
        </button>
      </li>
    </>
  );
};

export default NavAuthButtons;
