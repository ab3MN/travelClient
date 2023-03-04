import React from 'react';
import ViewButton from '../../../../shared/Buttons/ViewButton/ViewButton';
import AboutLists from '../../../../shared/Lists/AboutLists/AboutLists';
import s from './AboutRight.module.scss';

const AboutRight = () => {
  return (
    <div className={s.right}>
      <p className={s.description}>
        Since 2014, we’ve helped more than 500,000 people of all ages enjoy the
        best outdoor experience of their lives. Whether it’s for one day or a
        two-week vacation, close to home or a foreign land and something like
        that.
      </p>
      <h3 className={s.title}>Why Choose US</h3>
      <AboutLists />
      <ViewButton text="MORE ABOUT US" />
    </div>
  );
};

export default AboutRight;
