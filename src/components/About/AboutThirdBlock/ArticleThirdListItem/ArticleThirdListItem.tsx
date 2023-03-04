import React, { FC } from 'react';
import s from './ArticleThirdListItem.module.scss';

interface IProps {
  name: string;
  job: string;
  country: string;
  img: string;
}

const ArticleThirdListItem: FC<IProps> = ({ name, job, country, img }) => (
  <article className={s.item}>
    <div>
      <img src={img} alt="employe" className={s.img} />
    </div>
    <p className={s.name}>{name}</p>
    <p className={s.job}>{job}</p>
    <p className={s.country}>
      <span>From</span> {country}
    </p>
  </article>
);

export default ArticleThirdListItem;
