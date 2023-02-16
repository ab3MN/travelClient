import React from 'react';
import { Link } from 'react-router-dom';
import s from './LocationItem.module.scss';

const LocationItem = ({ img = '' }) => {
  return (
    <article className={s.item}>
      <Link className={s.link} to="/">
        <div className={s.img__box}>
          <img src={img} alt="item__photo" className={s.img} />
        </div>
      </Link>
    </article>
  );
};

export default LocationItem;
