import React from 'react';
import s from './CommentsLeft.module.scss';

const CommentsLeft = () => {
  return (
    <div className={s.left}>
      <p className={s.text}>
        Since 2014, we've helped more than 500,000 people of all ages enjoy the
        best outdoor experience of their lives. Whether it's for one day or a
        two-week vacation.
      </p>
      <div className={s.author}>
        <div className={s.meta}>
          <span className={s.name}>Minh Chau</span>
          <div className={s.icon__box}>
            <i className={`${'fa fa-star'} ${s.icon}`}></i>
            <i className={`${'fa fa-star'} ${s.icon}`}></i>
            <i className={`${'fa fa-star'} ${s.icon}`}></i>
            <i className={`${'fa fa-star'} ${s.icon}`}></i>
            <i className={`${'fa fa-star'} ${s.icon}`}></i>
          </div>
          <span className={s.description}>Rated by travellers on facebook</span>
        </div>
      </div>
    </div>
  );
};

export default CommentsLeft;
