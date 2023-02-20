import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './NewsListItem.module.scss';
import { getRandomLightColor } from '../../../../helpers/getRandomLightColor';

interface IProps {
  img: string;
  location: string;
  date: string;
  title: string;
  description: string;
}

const NewsListItem: FC<IProps> = ({
  img,
  location,
  date,
  title,
  description,
}) => {
  return (
    <div>
      <Link className={s.link} to="/">
        <img src={img} className={s.img} alt="news__photo" />
      </Link>
      <ul className={s.list}>
        <li className={s.text} style={{ color: getRandomLightColor() }}>
          {location}
        </li>
        <li className={s.date}>{date} </li>
      </ul>
      <h3 className={s.title}>
        <Link to="/"> {title}</Link>
      </h3>
      <p className={s.description}>{description}</p>
    </div>
  );
};

export default NewsListItem;
