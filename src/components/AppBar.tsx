import React from 'react';
import Nav from './Nav/Nav';
import s from './AppBar.module.scss';

const AppBar = () => {
  return (
    <header className={s.header}>
      <Nav />
    </header>
  );
};

export default AppBar;
