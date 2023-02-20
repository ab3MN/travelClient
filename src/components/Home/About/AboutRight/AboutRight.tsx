import React from 'react';
import ViewButton from '../../../../shared/Buttons/ViewButton/ViewButton';
import s from './AboutRight.module.scss';

const aboutList = [
  {
    img: './img/about/about__phone.png',
    text: 'BOOKING WITH SPREAD PAYMENTS',
    id: 1,
  },
  {
    img: './img/about/about__notebook.png',
    text: 'SLEEP & TRAVEL IN COMFORT',
    id: 2,
  },
  {
    img: './img/about/about__bed.png',
    text: 'FULLY LICENSED TOUR OPERATOR',
    id: 3,
  },
];

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
      <>
        {aboutList.map(({ img, text, id }) => (
          <div className={s.description__box} key={id}>
            <div className={s.description__img_box}>
              <img src={img} className={s.description__img} alt="phone" />
            </div>
            <div className={s.description__text_box}>
              <span className={s.description__text}>{text} </span>
            </div>
          </div>
        ))}
      </>
      <ViewButton text="MORE ABOUT US" />
    </div>
  );
};

export default AboutRight;
