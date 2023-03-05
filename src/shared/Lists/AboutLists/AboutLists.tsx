import React from 'react';
import s from './AboutLists.module.scss';
const aboutList = [
  {
    img: './img/HomePage/about/about__phone.png',
    text: 'BOOKING WITH SPREAD PAYMENTS',
    id: 1,
  },
  {
    img: './img/HomePage/about/about__notebook.png',
    text: 'SLEEP & TRAVEL IN COMFORT',
    id: 2,
  },
  {
    img: './img/HomePage/about/about__bed.png',
    text: 'FULLY LICENSED TOUR OPERATOR',
    id: 3,
  },
];

const AboutLists = () => (
  <div>
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
  </div>
);

export default React.memo(AboutLists, () => true);
