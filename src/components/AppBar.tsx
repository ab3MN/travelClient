import React from 'react';
import Nav from './Nav/Nav';
import './AppBar.scss';
import PressButton from '../shared/Buttons/PressButton/PressButton';

const AppBar = () => {
  return (
    <header className='header'>
      <Nav />
      <article className='header__container'>
        {' '}
        <h3 className='header__container--title'>
          Greate Trip
          <br />
          for Solo Travellers
        </h3>
        <p className='header__container--text'>
          Since 2014, we’ve helped more than 500,000 people of all ages enjoy
          the best outdoor experience.
        </p>
        <PressButton name='explore tours' />
      </article>
    </header>
  );
};

export default AppBar;
