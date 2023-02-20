import React, { FC } from 'react';
import s from './CommentsLeft.module.scss';

interface IProps {
  text: string;
  author: string;
  description: string;
  stars: number;
}

const CommentsLeft: FC<IProps> = ({ text, author }) => {
  return (
    <div className={s.left}>
      <p className={s.text}>{text}</p>
      <div className={s.author}>
        <div className={s.meta}>
          <span className={s.name}>{author}</span>
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
