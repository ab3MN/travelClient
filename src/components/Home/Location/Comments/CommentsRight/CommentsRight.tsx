import React, { FC } from 'react';
import s from './CommentsRight.module.scss';

interface IProps {
  img: string;
  alt: string;
}

const CommentsRight: FC<IProps> = ({ img, alt }) => {
  return (
    <div className={s.img__box}>
      <img src={img} alt={alt} className={s.img} />
    </div>
  );
};

export default CommentsRight;
