import React from 'react';
import s from './Title.module.scss';
import PressButton from '../../../shared/Buttons/PressButton/PressButton';
const Title = () => {
  return (
    <section className={s.section}>
      <article className={s.container}>
        <h3 className={s.title}>
          Greate Trip
          <br />
          for Solo Travellers
        </h3>
        <p className={s.text}>
          Since 2014, we’ve helped more than 500,000 people of all ages enjoy
          the best outdoor experience.
        </p>
        <PressButton name="explore tours" />
      </article>
    </section>
  );
};

export default Title;
